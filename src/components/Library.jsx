import React, { useState } from "react";

const initialItems = [
  {
    id: 1,
    title: "Fundamentals of Management Accounting",
    author: "Prof. Ajay Kumar Raja",
    type: "Book",
    year: "2023",
    description: "Comprehensive guide covering principles and practices of management accounting for commerce students.",
    link: "#",
  },
  {
    id: 2,
    title: "Financial Management in Modern Business",
    author: "Prof. Ajay Kumar Raja",
    type: "Book",
    year: "2022",
    description: "Essential concepts of financial management with practical applications and case studies.",
    link: "#",
  },
  {
    id: 3,
    title: "Commerce Education in Digital Era",
    author: "Prof. Ajay Kumar Raja",
    type: "Book",
    year: "2021",
    description: "Exploring the transformation of commerce education through digital technologies.",
    link: "#",
  },
  {
    id: 4,
    title: "Strategic Approach to Business Studies",
    author: "Prof. Ajay Kumar Raja",
    type: "Book",
    year: "2020",
    description: "Strategic frameworks and methodologies for understanding modern business dynamics.",
    link: "#",
  },
  {
    id: 5,
    title: "Impact of Digital Transformation on Commerce Education",
    author: "Prof. Ajay Kumar Raja, Dr. [Co-author]",
    type: "Research Paper",
    year: "2023",
    description: "Published in International Journal of Commerce Education - examining how digital tools reshape learning.",
    link: "#",
  },
  {
    id: 6,
    title: "Student Performance Analysis in Management Accounting",
    author: "Prof. Ajay Kumar Raja",
    type: "Research Paper",
    year: "2023",
    description: "Published in National Journal of Management Studies - analyzing factors affecting student performance.",
    link: "#",
  },
  {
    id: 7,
    title: "Innovative Teaching Methods in Commerce Education",
    author: "Prof. Ajay Kumar Raja, Dr. [Co-author]",
    type: "Research Paper",
    year: "2022",
    description: "Published in Journal of Educational Innovation - exploring modern pedagogical approaches.",
    link: "#",
  },
  {
    id: 8,
    title: "Financial Literacy Among Undergraduate Students",
    author: "Prof. Ajay Kumar Raja",
    type: "Research Paper",
    year: "2022",
    description: "Published in Indian Journal of Finance - studying financial awareness levels among students.",
    link: "#",
  },
  {
    id: 9,
    title: "Role of NSS in Character Building of Students",
    author: "Prof. Ajay Kumar Raja",
    type: "Research Paper",
    year: "2021",
    description: "Published in Journal of Social Service - examining NSS impact on student development.",
    link: "#",
  },
  {
    id: 10,
    title: "Challenges in Rural Commerce Education",
    author: "Prof. Ajay Kumar Raja, Dr. [Co-author]",
    type: "Research Paper",
    year: "2021",
    description: "Published in Rural Education Quarterly - addressing educational challenges in rural areas.",
    link: "#",
  },
];

function Library() {
  const [items, setItems] = useState(initialItems);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    author: "Prof. Ajay Kumar Raja",
    type: "Book",
    year: new Date().getFullYear().toString(),
    description: "",
    link: "",
    pdf: null // Add pdf field
  });

  const books = items.filter(item => item.type === "Book");
  const papers = items.filter(item => item.type === "Research Paper");

  const handleAdminLogin = () => {
    if (adminPassword === "Ajay123") { // Simple password - in real app, use proper authentication
      setIsAdmin(true);
      setShowAdminLogin(false);
      setAdminPassword("");
    } else {
      alert("Incorrect password!");
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setShowUploadForm(false);
  };

  const handleFormSubmit = () => {
    if (!formData.title || !formData.author || !formData.description) {
      alert("Please fill in all required fields!");
      return;
    }
    let pdfUrl = formData.pdf ? URL.createObjectURL(formData.pdf) : formData.link;
    const newItem = {
      ...formData,
      id: items.length + 1,
      link: pdfUrl,
      pdf: undefined // Don't store the file object in state
    };
    setItems([newItem, ...items]);
    setFormData({
      title: "",
      author: "Prof. Ajay Kumar Raja",
      type: "Book",
      year: new Date().getFullYear().toString(),
      description: "",
      link: "",
      pdf: null
    });
    setShowUploadForm(false);
    alert("Publication added successfully!");
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this publication?")) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  return (
    <div>
      {/* Admin Controls */}
      <div style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 1000,
        display: "flex",
        gap: "10px"
      }}>
        {!isAdmin ? (
          <button
            onClick={() => setShowAdminLogin(true)}
            style={{
              padding: "10px 15px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "14px"
            }}
          >
            🔐 Admin Login
          </button>
        ) : (
          <>
            <button
              onClick={() => setShowUploadForm(true)}
              style={{
                padding: "10px 15px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "14px"
              }}
            >
              ➕ Add Publication
            </button>
            <button
              onClick={handleLogout}
              style={{
                padding: "10px 15px",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "14px"
              }}
            >
              🚪 Logout
            </button>
          </>
        )}
      </div>

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2000
        }}>
          <div style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "10px",
            minWidth: "300px"
          }}>
            <h3 style={{ margin: "0 0 20px", color: "#003366" }}>Admin Login</h3>
            <input
              type="password"
              placeholder="Enter admin password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "14px"
              }}
              onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
            />
            <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
              <button
                onClick={() => setShowAdminLogin(false)}
                style={{
                  padding: "8px 15px",
                  backgroundColor: "#6c757d",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleAdminLogin}
                style={{
                  padding: "8px 15px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upload Form Modal */}
      {showUploadForm && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2000,
          overflow: "auto"
        }}>
          <div style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "10px",
            minWidth: "500px",
            maxHeight: "80vh",
            overflow: "auto",
            margin: "20px"
          }}>
            <h3 style={{ margin: "0 0 20px", color: "#003366" }}>Add New Publication</h3>
            <div>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Title *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    fontSize: "14px"
                  }}
                />
              </div>

              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Author *</label>
                <input
                  type="text"
                  required
                  value={formData.author}
                  onChange={(e) => setFormData({...formData, author: e.target.value})}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    fontSize: "14px"
                  }}
                />
              </div>

              <div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Type *</label>
                  <select
                    required
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                      fontSize: "14px"
                    }}
                  >
                    <option value="Book">Book</option>
                    <option value="Research Paper">Research Paper</option>
                  </select>
                </div>

                <div style={{ flex: 1 }}>
                  <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Year *</label>
                  <input
                    type="number"
                    required
                    min="1900"
                    max="2030"
                    value={formData.year}
                    onChange={(e) => setFormData({...formData, year: e.target.value})}
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                      fontSize: "14px"
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Description *</label>
                <textarea
                  required
                  rows="4"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    fontSize: "14px",
                    resize: "vertical"
                  }}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Link (optional)</label>
                <input
                  type="url"
                  value={formData.link}
                  onChange={(e) => setFormData({...formData, link: e.target.value, pdf: null})}
                  placeholder="https://example.com"
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    fontSize: "14px"
                  }}
                  disabled={formData.pdf !== null}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Upload PDF (Book or Research Paper)</label>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={e => {
                    const file = e.target.files[0];
                    setFormData({
                      ...formData,
                      pdf: file || null,
                      link: file ? "" : formData.link
                    });
                  }}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    fontSize: "14px"
                  }}
                />
                {formData.pdf && (
                  <div style={{ marginTop: "5px", color: "#28a745" }}>
                    Selected: {formData.pdf.name}
                  </div>
                )}
              </div>

              <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
                <button
                  type="button"
                  onClick={() => setShowUploadForm(false)}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#6c757d",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                  }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleFormSubmit}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#28a745",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                  }}
                >
                  Add Publication
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Library Content */}
      <section id="library" style={{ padding: "50px 20px", background: "#f0f4f8" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ 
            fontSize: "36px", 
            textAlign: "center", 
            color: "#003366", 
            marginBottom: "20px" 
          }}>
            Prof. Ajay Kumar Raja - Publications Library
          </h2>
          
          <p style={{ 
            textAlign: "center", 
            color: "#666", 
            fontSize: "18px", 
            marginBottom: "40px",
            maxWidth: "600px",
            margin: "0 auto 40px auto"
          }}>
            Comprehensive collection of published books and research papers contributing to Commerce and Management education
          </p>

          {/* Books Section */}
          <div style={{ marginBottom: "50px" }}>
            <h3 style={{ 
              fontSize: "28px", 
              color: "#003366", 
              marginBottom: "30px",
              borderBottom: "3px solid #003366",
              paddingBottom: "10px"
            }}>
              📚 Published Books ({books.length})
            </h3>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "25px"
            }}>
              {books.map((item) => (
                <div key={item.id} style={{
                  background: "#fff",
                  padding: "25px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  border: "1px solid #e0e6ed",
                  position: "relative"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                }}>
                  {isAdmin && (
                    <button
                      onClick={() => handleDelete(item.id)}
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        background: "#dc3545",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: "30px",
                        height: "30px",
                        cursor: "pointer",
                        fontSize: "14px"
                      }}
                      title="Delete"
                    >
                      ×
                    </button>
                  )}
                  
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "15px", marginBottom: "15px" }}>
                    <div style={{ 
                      backgroundColor: "#003366", 
                      color: "white", 
                      padding: "8px 12px", 
                      borderRadius: "6px", 
                      fontSize: "12px", 
                      fontWeight: "bold",
                      minWidth: "50px",
                      textAlign: "center"
                    }}>
                      {item.year}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ 
                        margin: "0 0 8px", 
                        color: "#003366", 
                        fontSize: "18px",
                        lineHeight: "1.4"
                      }}>
                        {item.title}
                      </h4>
                      <p style={{ 
                        margin: "0", 
                        color: "#666", 
                        fontSize: "14px",
                        fontStyle: "italic"
                      }}>
                        by {item.author}
                      </p>
                    </div>
                  </div>
                  
                  <p style={{ 
                    color: "#555", 
                    lineHeight: "1.6", 
                    marginBottom: "20px",
                    fontSize: "14px"
                  }}>
                    {item.description}
                  </p>
                  
                  {item.link && item.link !== "#" && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" style={{
                      display: "inline-block",
                      color: "#fff",
                      backgroundColor: item.type === "Book" ? "#003366" : "#28a745",
                      padding: "10px 20px",
                      borderRadius: "6px",
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: "500",
                      transition: "background-color 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = item.type === "Book" ? "#004080" : "#218838";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = item.type === "Book" ? "#003366" : "#28a745";
                    }}>
                      {item.link.endsWith('.pdf') || item.link.startsWith('blob:') ? (item.type === "Book" ? "📖 View PDF" : "📄 Read PDF") : (item.type === "Book" ? "📖 View Book Details" : "📄 Read Paper")}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Research Papers Section */}
          <div>
            <h3 style={{ 
              fontSize: "28px", 
              color: "#003366", 
              marginBottom: "30px",
              borderBottom: "3px solid #003366",
              paddingBottom: "10px"
            }}>
              🔬 Research Papers ({papers.length})
            </h3>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "25px"
            }}>
              {papers.map((item) => (
                <div key={item.id} style={{
                  background: "#fff",
                  padding: "25px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  border: "1px solid #e0e6ed",
                  borderLeft: "4px solid #28a745",
                  position: "relative"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                }}>
                  {isAdmin && (
                    <button
                      onClick={() => handleDelete(item.id)}
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        background: "#dc3545",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: "30px",
                        height: "30px",
                        cursor: "pointer",
                        fontSize: "14px"
                      }}
                      title="Delete"
                    >
                      ×
                    </button>
                  )}
                  
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "15px", marginBottom: "15px" }}>
                    <div style={{ 
                      backgroundColor: "#28a745", 
                      color: "white", 
                      padding: "8px 12px", 
                      borderRadius: "6px", 
                      fontSize: "12px", 
                      fontWeight: "bold",
                      minWidth: "50px",
                      textAlign: "center"
                    }}>
                      {item.year}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ 
                        margin: "0 0 8px", 
                        color: "#003366", 
                        fontSize: "17px",
                        lineHeight: "1.4"
                      }}>
                        {item.title}
                      </h4>
                      <p style={{ 
                        margin: "0", 
                        color: "#666", 
                        fontSize: "14px",
                        fontStyle: "italic"
                      }}>
                        by {item.author}
                      </p>
                    </div>
                  </div>
                  
                  <p style={{ 
                    color: "#555", 
                    lineHeight: "1.6", 
                    marginBottom: "20px",
                    fontSize: "14px"
                  }}>
                    {item.description}
                  </p>
                  
                  {item.link && item.link !== "#" && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" style={{
                      display: "inline-block",
                      color: "#fff",
                      backgroundColor: "#28a745",
                      padding: "10px 20px",
                      borderRadius: "6px",
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: "500",
                      transition: "background-color 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#218838";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#28a745";
                    }}>
                      📄 Read Paper
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Library;