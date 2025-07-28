import React from "react";

function Bio() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        backgroundSize: "400% 400%",
        animation: "gradient 15s ease infinite",
        padding: "80px 20px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          padding: "40px",
          borderRadius: "20px",
          maxWidth: "900px",
          color: "#f0f0f0",
          fontFamily: "'Segoe UI', sans-serif",
          boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.02)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "#ffd700",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          📚 Research Publications & Books by <span style={{ color: "#ffffff" }}>Mr. Ajay Kumar Raja</span>
        </h1>

        <p style={{ fontSize: "17px", lineHeight: "1.9", textAlign: "justify" }}>
          Mr. <strong>Ajay Kumar Raja</strong>, Head of the Department of Commerce at
          Government Mahaprabhu Vallabhacharya PG College, Mahasamund, has made significant contributions to 
          academic literature with <strong>4 published books</strong> and numerous research papers published in 
          <em>prestigious national and international journals</em>.
        </p>

        <br />

        <p style={{ fontSize: "17px", lineHeight: "1.9", textAlign: "justify" }}>
          His research work spans across <strong>Commerce, Finance, and Management</strong> domains, 
          contributing valuable insights to the academic community. His publications have been 
          <span style={{ color: "#90ee90" }}>widely cited</span> and serve as reference materials 
          for students and researchers in the field of Commerce education.
        </p>

        <br />

        <p style={{ fontSize: "17px", lineHeight: "1.9", textAlign: "justify" }}>
          The published works include comprehensive studies on 
          <span style={{ color: "#00c3ff" }}>Management Accounting</span>, 
          <strong> Financial Management</strong>, and <strong>Commerce Education</strong>. 
          His research papers have appeared in <em>UGC-approved journals</em> and have 
          contributed significantly to the advancement of knowledge in his field of expertise.
        </p>

        <br />

        {/* Books Section */}
        <div style={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          padding: "20px",
          borderRadius: "15px",
          marginBottom: "20px",
          border: "1px solid rgba(255, 255, 255, 0.1)"
        }}>
          <h2 style={{ 
            fontSize: "24px", 
            color: "#ffd700", 
            marginBottom: "15px",
            textAlign: "center"
          }}>
            📖 Published Books
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8", textAlign: "center", color: "#e0e0e0" }}>
            <strong>4 comprehensive academic books</strong> covering various aspects of Commerce and Management, 
            serving as essential resources for undergraduate and postgraduate students.
          </p>
        </div>

        {/* Research Papers Section */}
        <div style={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          padding: "20px",
          borderRadius: "15px",
          marginBottom: "20px",
          border: "1px solid rgba(255, 255, 255, 0.1)"
        }}>
          <h2 style={{ 
            fontSize: "24px", 
            color: "#00c3ff", 
            marginBottom: "15px",
            textAlign: "center"
          }}>
            🔬 Research Papers
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8", textAlign: "center", color: "#e0e0e0" }}>
            Multiple research papers published in <strong>national and international journals</strong>, 
            contributing to the academic discourse in Commerce, Finance, and Management studies.
          </p>
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: "center",
          marginTop: "30px"
        }}>
          <div style={{
            display: "inline-flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
            <button style={{
              backgroundColor: "#ffd700",
              color: "#000",
              padding: "12px 24px",
              borderRadius: "25px",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontSize: "16px"
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#ffed4e";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#ffd700";
              e.target.style.transform = "translateY(0)";
            }}>
              📚 View Books
            </button>
            <button style={{
              backgroundColor: "transparent",
              color: "#00c3ff",
              padding: "12px 24px",
              borderRadius: "25px",
              border: "2px solid #00c3ff",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontSize: "16px"
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#00c3ff";
              e.target.style.color = "#000";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#00c3ff";
              e.target.style.transform = "translateY(0)";
            }}>
              📄 Research Papers
            </button>
          </div>
        </div>
      </div>

      {/* Add keyframes directly in the app or via external CSS */}
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </section>
  );
}

export default Bio;

