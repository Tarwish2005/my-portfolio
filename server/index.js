const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

// Enable CORS for all origins (for development)
app.use(cors());

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

// PDF upload endpoint
app.post('/upload', upload.single('pdf'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  // Return the URL to access the uploaded PDF
  const fileUrl = `/uploads/${req.file.filename}`;
  res.json({ url: fileUrl });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 