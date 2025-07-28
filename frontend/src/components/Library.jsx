import React, { useState } from "react";

function Library() {
  // Helper function to convert Google Drive links to embeddable format
  const convertGoogleDriveLink = (link) => {
    if (link && link.includes('drive.google.com')) {
      const fileId = link.match(/\/d\/([a-zA-Z0-9-_]+)/);
      if (fileId) {
        return `https://drive.google.com/file/d/${fileId[1]}/preview`;
      }
    }
    return link;
  };

  // Static data for publications - you can add your PDFs here
  const [items] = useState([
    // Research Papers
    {
      id: 1,
      title: "Ai in business",
      author: "Mr. Ajay Kumar Raja",
      type: "Research Paper",
      year: "2024",
      description: "This research explores the impact of digital transformation on modern commerce education, examining how technology integration enhances learning outcomes and student engagement.",
      link: "https://drive.google.com/file/d/1BsSvdkWptdQvikJuYiZTisU3Hnx47LCE/view?usp=sharing"
    },
    {
      id: 2,
      title: "Blockchain in Commerce",
      author: "Mr. Ajay Kumar Raja",
      type: "Research Paper",
      year: "2024",
      description: "An in-depth analysis of blockchain technology and its transformative impact on commerce, including case studies and future trends.",
      link: "https://drive.google.com/file/d/1xS7e-bCjkauPksnt4JjHeSlSnbcgTVlC/view?usp=sharing"
    },
    {
      id: 3,
      title: "Celebrity Endorsement",
      author: "Mr. Ajay Kumar Raja",
      type: "Research Paper",
      year: "2023",
      description: "A comprehensive study analyzing current e-commerce trends and their influence on consumer behavior patterns in the digital marketplace.",
      link: "https://drive.google.com/file/d/1NVmkC6LPjqKdPssPVFGyV-02W10thQiJ/view?usp=sharing"
    },
    {
      id: 4,
      title: "Child labour",
      author: "Mr. Ajay Kumar Raja",
      type: "Research Paper",
      year: "2023",
      description: "Research focusing on the revolutionary impact of financial technology on traditional banking systems and emerging innovation patterns.",
      link: "https://drive.google.com/file/d/1ZBEt6TmJySpUfYB_bQo_9OIE9NCweIgN/view?usp=sharing"
    },
    
    // Books
    {
      id: 5,
      title: "Customer Expectancy",
      author: "Mr. Ajay Kumar Raja",
      type: "Research Paper",
      year: "2024",
      description: "A comprehensive textbook covering the fundamental principles of modern commerce, including digital business models, international trade, and contemporary market dynamics.",
      link: "https://drive.google.com/file/d/17uQXNYKvM5tld1_l2eCre4zjlxsP0Qg9/view?usp=sharing"
    },
    {
      id: 6,
      title: "Detection in social network",
      author: "Mr. Ajay Kumar Raja",
      type: "Research Paper",
      year: "2023",
      description: "An essential guide to strategic management practices adapted for the digital age, covering digital transformation strategies and competitive advantage.",
      link: "https://drive.google.com/file/d/1pe4VWsjGrC2--nY9raozckNF72qpUosV/view?usp=sharing"
    },
    {
      id: 7,
      title: "Forensic Accounting",
      author: "Mr. Ajay Kumar Raja",
      type: "Research Paper",
      year: "2023",
      description: "A detailed exploration of forensic accounting techniques and their application in detecting financial fraud.",
      link: "https://drive.google.com/file/d/1i8t19619PgvcDQPN3XK0j_1T8poYWDjW/view?usp=sharing"
    },
    {
      id: 8,
      title: "GST",
      author: "Mr. Ajay Kumar Raja",
      type: "Research Paper",
      year: "2022",
      description: "Comprehensive coverage of international business operations, global market entry strategies, and cross-cultural management practices.",
      link: "https://drive.google.com/file/d/1WpdpUTPkUHSZVqb_87zEKW0tURxv7LTZ/view?usp=sharing"
    },
    {
      id: 9,
      title: "Human Communication",
      author: "Mr. Ajay Kumar Raja",
      type: "Research",
      year: "2022",
      description: "A practical guide to entrepreneurship covering innovation management, startup strategies, and business model development in modern markets.",
      link: "/pdfs/books/entrepreneurship-innovation.pdf"
    },

    // Additional Research Papers
    {
      id: 10,
      title: "The impact of AI",
      author: "Mr. Ajay Kumar Raja",
      type: "Research Paper",
      year: "2024",
      description: "Investigation into the role of artificial intelligence in enhancing business decision-making processes and operational efficiency.",
      link: "https://drive.google.com/file/d/1Ln3r2EB763srv5g_hJjU1rE1AEcHbQcj/view?usp=sharing"
    },
    {
      id: 11,
      title: "The importance of advertising",
      author: "Mr. Ajay Kumar Raja",
      type: "Research Paper",
      year: "2023",
      description: "Analysis of supply chain adaptations and innovations developed in response to global pandemic challenges and their long-term implications.",
      link: "https://drive.google.com/file/d/1VxXCe0kSewsT0yMdGmxjnBrV5gpQ5FUx/view?usp=sharing"
    },
    {
      id: 12,
      title: "मानसिक तनाव",
      author: "Mr. Ajay Kumar Raja",
      type: "Research Paper",
      year: "2022",
      description: "Comprehensive research on blockchain implementation in financial services, exploring benefits, challenges, and future prospects.",
      link: "https://drive.google.com/file/d/1sUiZ8z6MlJeY8ajOuJkTVUX1JunWhqhi/view?usp=sharing"
    }
    
    // Add more publications here following the same structure
    // To add a new publication:
    // 1. For Google Drive PDFs: Share the file publicly and use the sharing link
    // 2. For local PDFs: Place your PDF file in /public/pdfs/research/ or /public/pdfs/books/
    // 3. Add a new object to this array following the same structure
  ]);

  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  const books = items.filter(item => item.type === "Book");
  const papers = items.filter(item => item.type === "Research Paper");

  const handleAdminLogin = () => {
    if (adminPassword === "Ajay123") {
      setIsAdmin(true);
      setShowAdminLogin(false);
      setAdminPassword("");
    } else {
      alert("Incorrect password!");
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
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
            <p style={{ margin: "0 0 15px", color: "#666", fontSize: "14px" }}>
              Note: In this version, you need to manually add PDFs to the public/pdfs folder and update the component.
            </p>
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

      {/* Main Library Content */}
      <section id="library" style={{ padding: "50px 20px", background: "#f0f4f8" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ 
            fontSize: "42px", 
            textAlign: "center", 
            color: "#003366", 
            marginBottom: "25px",
            fontWeight: "700",
            textShadow: "2px 2px 4px rgba(0,51,102,0.1)"
          }}>
            Mr. Ajay Kumar Raja - Publications Library
          </h2>
          
          <p style={{ 
            textAlign: "center", 
            color: "#666", 
            fontSize: "20px", 
            marginBottom: "30px",
            maxWidth: "700px",
            margin: "0 auto 30px auto",
            lineHeight: "1.6"
          }}>
            Comprehensive collection of published books and research papers contributing to Commerce and Management education
          </p>

          {/* Statistics */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            marginBottom: "50px",
            flexWrap: "wrap"
          }}>
            <div style={{
              textAlign: "center",
              padding: "20px",
              backgroundColor: "#003366",
              color: "white",
              borderRadius: "12px",
              minWidth: "150px",
              boxShadow: "0 4px 12px rgba(0,51,102,0.2)"
            }}>
              <div style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "5px" }}>
                {books.length}
              </div>
              <div style={{ fontSize: "16px", opacity: "0.9" }}>Published Books</div>
            </div>
            <div style={{
              textAlign: "center",
              padding: "20px",
              backgroundColor: "#28a745",
              color: "white",
              borderRadius: "12px",
              minWidth: "150px",
              boxShadow: "0 4px 12px rgba(40,167,69,0.2)"
            }}>
              <div style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "5px" }}>
                {papers.length}
              </div>
              <div style={{ fontSize: "16px", opacity: "0.9" }}>Research Papers</div>
            </div>
            <div style={{
              textAlign: "center",
              padding: "20px",
              backgroundColor: "#6c757d",
              color: "white",
              borderRadius: "12px",
              minWidth: "150px",
              boxShadow: "0 4px 12px rgba(108,117,125,0.2)"
            }}>
              <div style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "5px" }}>
                {items.length}
              </div>
              <div style={{ fontSize: "16px", opacity: "0.9" }}>Total Publications</div>
            </div>
          </div>

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
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "30px"
            }}>
              {books.map((item, index) => (
                <div key={item.id} style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                  padding: "30px",
                  borderRadius: "15px",
                  boxShadow: "0 6px 20px rgba(0,51,102,0.1)",
                  transition: "all 0.3s ease",
                  border: "1px solid #e8ecf4",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,51,102,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,51,102,0.1)";
                }}>
                  
                  {/* Book Number Badge */}
                  <div style={{
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                    backgroundColor: "#003366",
                    color: "white",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    fontWeight: "bold"
                  }}>
                    {index + 1}
                  </div>

                  {/* Book Icon */}
                  <div style={{
                    fontSize: "48px",
                    textAlign: "center",
                    marginBottom: "20px",
                    opacity: "0.8"
                  }}>
                    📚
                  </div>
                  
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "15px", marginBottom: "20px" }}>
                    <div style={{ 
                      backgroundColor: "#003366", 
                      color: "white", 
                      padding: "10px 15px", 
                      borderRadius: "8px", 
                      fontSize: "14px", 
                      fontWeight: "bold",
                      minWidth: "60px",
                      textAlign: "center",
                      boxShadow: "0 2px 8px rgba(0,51,102,0.3)"
                    }}>
                      {item.year}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ 
                        margin: "0 0 10px", 
                        color: "#003366", 
                        fontSize: "20px",
                        lineHeight: "1.3",
                        fontWeight: "600"
                      }}>
                        {item.title}
                      </h4>
                      <p style={{ 
                        margin: "0", 
                        color: "#666", 
                        fontSize: "15px",
                        fontStyle: "italic",
                        fontWeight: "500"
                      }}>
                        by {item.author}
                      </p>
                    </div>
                  </div>
                  
                  <p style={{ 
                    color: "#555", 
                    lineHeight: "1.7", 
                    marginBottom: "25px",
                    fontSize: "15px",
                    textAlign: "justify"
                  }}>
                    {item.description}
                  </p>
                  
                  {item.link && item.link !== "#" && (
                    <a
                      href={convertGoogleDriveLink(item.link)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "#fff",
                        background: "linear-gradient(135deg, #003366 0%, #004080 100%)",
                        padding: "12px 24px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        fontSize: "15px",
                        fontWeight: "600",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 12px rgba(0,51,102,0.3)",
                        width: "100%",
                        justifyContent: "center"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = "linear-gradient(135deg, #004080 0%, #0056b3 100%)";
                        e.target.style.transform = "scale(1.02)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "linear-gradient(135deg, #003366 0%, #004080 100%)";
                        e.target.style.transform = "scale(1)";
                      }}
                    >
                      📖 View Book PDF
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
              gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
              gap: "30px"
            }}>
              {papers.map((item, index) => (
                <div key={item.id} style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #f0f8f5 100%)",
                  padding: "30px",
                  borderRadius: "15px",
                  boxShadow: "0 6px 20px rgba(40,167,69,0.1)",
                  transition: "all 0.3s ease",
                  border: "1px solid #e8f5e8",
                  borderLeft: "5px solid #28a745",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 12px 30px rgba(40,167,69,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(40,167,69,0.1)";
                }}>
                  
                  {/* Research Paper Number Badge */}
                  <div style={{
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                    backgroundColor: "#28a745",
                    color: "white",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    fontWeight: "bold"
                  }}>
                    {index + 1}
                  </div>

                  {/* Research Icon */}
                  <div style={{
                    fontSize: "48px",
                    textAlign: "center",
                    marginBottom: "20px",
                    opacity: "0.8"
                  }}>
                    🔬
                  </div>
                  
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "15px", marginBottom: "20px" }}>
                    <div style={{ 
                      backgroundColor: "#28a745", 
                      color: "white", 
                      padding: "10px 15px", 
                      borderRadius: "8px", 
                      fontSize: "14px", 
                      fontWeight: "bold",
                      minWidth: "60px",
                      textAlign: "center",
                      boxShadow: "0 2px 8px rgba(40,167,69,0.3)"
                    }}>
                      {item.year}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ 
                        margin: "0 0 10px", 
                        color: "#003366", 
                        fontSize: "19px",
                        lineHeight: "1.3",
                        fontWeight: "600"
                      }}>
                        {item.title}
                      </h4>
                      <p style={{ 
                        margin: "0", 
                        color: "#666", 
                        fontSize: "15px",
                        fontStyle: "italic",
                        fontWeight: "500"
                      }}>
                        by {item.author}
                      </p>
                    </div>
                  </div>
                  
                  <p style={{ 
                    color: "#555", 
                    lineHeight: "1.7", 
                    marginBottom: "25px",
                    fontSize: "15px",
                    textAlign: "justify"
                  }}>
                    {item.description}
                  </p>
                  
                  {item.link && item.link !== "#" && (
                    <a href={convertGoogleDriveLink(item.link)} target="_blank" rel="noopener noreferrer" style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#fff",
                      background: "linear-gradient(135deg, #28a745 0%, #34ce57 100%)",
                      padding: "12px 24px",
                      borderRadius: "8px",
                      textDecoration: "none",
                      fontSize: "15px",
                      fontWeight: "600",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 12px rgba(40,167,69,0.3)",
                      width: "100%",
                      justifyContent: "center"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "linear-gradient(135deg, #218838 0%, #28a745 100%)";
                      e.target.style.transform = "scale(1.02)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "linear-gradient(135deg, #28a745 0%, #34ce57 100%)";
                      e.target.style.transform = "scale(1)";
                    }}>
                      📄 Read Research Paper
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