import React from "react";

const items = [
  {
    title: "Fundamentals of Management Accounting",
    author: "Prof. Ajay Kumar Raja",
    type: "Book",
    year: "2023",
    description: "Comprehensive guide covering principles and practices of management accounting for commerce students.",
    link: "#",
  },
  {
    title: "Financial Management in Modern Business",
    author: "Prof. Ajay Kumar Raja",
    type: "Book",
    year: "2022",
    description: "Essential concepts of financial management with practical applications and case studies.",
    link: "#",
  },
  {
    title: "Commerce Education in Digital Era",
    author: "Prof. Ajay Kumar Raja",
    type: "Book",
    year: "2021",
    description: "Exploring the transformation of commerce education through digital technologies.",
    link: "#",
  },
  {
    title: "Strategic Approach to Business Studies",
    author: "Prof. Ajay Kumar Raja",
    type: "Book",
    year: "2020",
    description: "Strategic frameworks and methodologies for understanding modern business dynamics.",
    link: "#",
  },
  {
    title: "Impact of Digital Transformation on Commerce Education",
    author: "Prof. Ajay Kumar Raja, Dr. [Co-author]",
    type: "Research Paper",
    year: "2023",
    description: "Published in International Journal of Commerce Education - examining how digital tools reshape learning.",
    link: "#",
  },
  {
    title: "Student Performance Analysis in Management Accounting",
    author: "Prof. Ajay Kumar Raja",
    type: "Research Paper",
    year: "2023",
    description: "Published in National Journal of Management Studies - analyzing factors affecting student performance.",
    link: "#",
  },
  {
    title: "Innovative Teaching Methods in Commerce Education",
    author: "Prof. Ajay Kumar Raja, Dr. [Co-author]",
    type: "Research Paper",
    year: "2022",
    description: "Published in Journal of Educational Innovation - exploring modern pedagogical approaches.",
    link: "#",
  },
  {
    title: "Financial Literacy Among Undergraduate Students",
    author: "Prof. Ajay Kumar Raja",
    type: "Research Paper",
    year: "2022",
    description: "Published in Indian Journal of Finance - studying financial awareness levels among students.",
    link: "#",
  },
  {
    title: "Role of NSS in Character Building of Students",
    author: "Prof. Ajay Kumar Raja",
    type: "Research Paper",
    year: "2021",
    description: "Published in Journal of Social Service - examining NSS impact on student development.",
    link: "#",
  },
  {
    title: "Challenges in Rural Commerce Education",
    author: "Prof. Ajay Kumar Raja, Dr. [Co-author]",
    type: "Research Paper",
    year: "2021",
    description: "Published in Rural Education Quarterly - addressing educational challenges in rural areas.",
    link: "#",
  },
];

function Library() {
  const books = items.filter(item => item.type === "Book");
  const papers = items.filter(item => item.type === "Research Paper");

  return (
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
            {books.map((item, index) => (
              <div key={index} style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                border: "1px solid #e0e6ed"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
              }}>
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
                
                <a href={item.link} target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-block",
                  color: "#fff",
                  backgroundColor: "#003366",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "500",
                  transition: "background-color 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#004080";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#003366";
                }}>
                  📖 View Book Details
                </a>
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
            {papers.map((item, index) => (
              <div key={index} style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                border: "1px solid #e0e6ed",
                borderLeft: "4px solid #28a745"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
              }}>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Library;