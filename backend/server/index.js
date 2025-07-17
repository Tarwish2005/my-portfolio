const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5000;

// Enable CORS for specific origins
const allowedOrigins = [
  'http://localhost:3000', // React dev server
  'http://localhost:5173', // Vite dev server
  // 'https://your-deployed-frontend.com', // <-- Replace with your deployed frontend URL
];
app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps, curl, etc.)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: function (req, file, cb) {
    // Use Date.now() for unique file names
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${file.originalname.replace(/\s+/g, '_')}`);
  }
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed!'));
    }
  },
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

const PUBLICATIONS_FILE = path.join(__dirname, 'publications.json');

// Helper to read publications
function readPublications() {
  try {
    const data = fs.readFileSync(PUBLICATIONS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

// Helper to write publications
function writePublications(publications) {
  fs.writeFileSync(PUBLICATIONS_FILE, JSON.stringify(publications, null, 2));
}

app.use(express.json());

// Get all publications
app.get('/publications', (req, res) => {
  const publications = readPublications();
  res.json(publications);
});

// Add a new publication (with or without PDF)
app.post('/publications', upload.single('pdf'), (req, res) => {
  let publications = readPublications();
  const { title, author, type, year, description, link } = req.body;
  let pdfUrl = link;
  if (req.file) {
    pdfUrl = `/uploads/${req.file.filename}`;
  }
  const newItem = {
    id: publications.length > 0 ? publications[0].id + 1 : 1,
    title,
    author,
    type,
    year,
    description,
    link: pdfUrl
  };
  publications = [newItem, ...publications];
  writePublications(publications);
  res.json(newItem);
});

// PDF upload endpoint
app.post('/upload', upload.single('pdf'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  // Return the URL to access the uploaded PDF
  const fileUrl = `/uploads/${req.file.filename}`;
  res.json({ url: fileUrl });
});

// Delete a publication and its PDF
app.delete('/publications/:id', (req, res) => {
  let publications = readPublications();
  const id = parseInt(req.params.id, 10);
  const pubIndex = publications.findIndex(pub => pub.id === id);
  if (pubIndex === -1) {
    return res.status(404).json({ error: 'Publication not found' });
  }
  const [removed] = publications.splice(pubIndex, 1);
  writePublications(publications);
  // Remove PDF file if it exists and is in uploads
  if (removed.link && removed.link.startsWith('/uploads/')) {
    const filePath = path.join(__dirname, removed.link);
    fs.unlink(filePath, err => {
      // Ignore error if file doesn't exist
    });
  }
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 