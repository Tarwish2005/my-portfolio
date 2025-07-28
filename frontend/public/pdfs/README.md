# PDF Storage Instructions

This folder contains PDF files for the research papers and books displayed on the website.

## Folder Structure
- `research/` - Contains research paper PDFs
- `books/` - Contains book PDFs

## How to Add a New PDF

1. **Place your PDF file** in the appropriate folder:
   - For research papers: `public/pdfs/research/your-paper.pdf`
   - For books: `public/pdfs/books/your-book.pdf`

2. **Update the Library.jsx component** by adding a new entry to the `items` array:

```javascript
{
  id: 3, // Use the next available ID
  title: "Your Publication Title",
  author: "Mr. Ajay Kumar Raja",
  type: "Research Paper", // or "Book"
  year: "2024",
  description: "Detailed description of your publication...",
  link: "/pdfs/research/your-paper.pdf" // or "/pdfs/books/your-book.pdf"
}
```

3. **File naming conventions:**
   - Use lowercase letters
   - Replace spaces with hyphens (-)
   - Use descriptive names
   - Example: `advanced-commerce-strategies-2024.pdf`

## Current Files
- No PDFs uploaded yet. Add your PDFs following the instructions above.

## Notes
- PDF files are served directly from the public folder
- No backend server is required
- Files should be under 10MB for optimal loading
- Supported format: PDF only

