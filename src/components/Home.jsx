import React, { useEffect, useState } from "react";
import profile from "../assets/profile.jpg";
import Bio from "./Bio";

function Home() {
  const [titleText, setTitleText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const fullTitle = "Oceanography Research Assistant";

  useEffect(() => {
    // Trigger fade-in animation
    setIsVisible(true);
    
    // Typing animation with slight delay
    const startTyping = setTimeout(() => {
      let index = 0;
      const typing = setInterval(() => {
        setTitleText((prev) => prev + fullTitle[index]);
        index++;
        if (index === fullTitle.length) clearInterval(typing);
      }, 80);
      return () => clearInterval(typing);
    }, 800);

    return () => clearTimeout(startTyping);
  }, []);

  return (
    <>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 60px",
          gap: "80px",
          background: "linear-gradient(135deg, #e8f4fd 0%, #f8fbff 50%, #ffffff 100%)",
          fontFamily: "'Poppins', sans-serif",
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Floating background elements */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: "120px",
            height: "120px",
            background: "rgba(0, 47, 108, 0.03)",
            borderRadius: "50%",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "60%",
            right: "8%",
            width: "80px",
            height: "80px",
            background: "rgba(59, 130, 246, 0.05)",
            borderRadius: "50%",
            animation: "float 4s ease-in-out infinite reverse",
          }}
        />

        {/* Left: Profile */}
        <div
          style={{
            position: "relative",
            transform: isVisible ? "translateX(0) scale(1)" : "translateX(-100px) scale(0.9)",
            opacity: isVisible ? 1 : 0,
            transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDelay: "0.2s",
          }}
        >
          <div
            style={{
              background: "linear-gradient(145deg, #ffffff, #f8fafc)",
              borderRadius: "20px",
              padding: "25px",
              boxShadow: "0 25px 50px rgba(0, 47, 108, 0.15), 0 0 0 1px rgba(0, 47, 108, 0.05)",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 35px 70px rgba(0, 47, 108, 0.2), 0 0 0 1px rgba(0, 47, 108, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 25px 50px rgba(0, 47, 108, 0.15), 0 0 0 1px rgba(0, 47, 108, 0.05)";
            }}
          >
            {/* Decorative gradient border */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "6px",
                background: "linear-gradient(90deg, #002F6C, #1e40af, #3b82f6, #002F6C)",
                borderRadius: "20px 20px 0 0",
              }}
            />
            
            <img
              src={profile}
              alt="Profile"
              style={{
                width: "380px",
                height: "auto",
                objectFit: "cover",
                borderRadius: "12px",
                transition: "transform 0.3s ease",
              }}
            />
          </div>
        </div>

        {/* Right: Text */}
        <div
          style={{
            maxWidth: "500px",
            transform: isVisible ? "translateX(0)" : "translateX(100px)",
            opacity: isVisible ? 1 : 0,
            transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDelay: "0.4s",
          }}
        >
          <div
            style={{
              marginBottom: "20px",
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              opacity: isVisible ? 1 : 0,
              transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDelay: "0.6s",
            }}
          >
            <h1
              style={{
                fontSize: "56px",
                color: "#002F6C",
                fontWeight: "900",
                fontFamily: "'Poppins', sans-serif",
                margin: "0 0 10px 0",
                lineHeight: "1.1",
                background: "linear-gradient(135deg, #002F6C 0%, #1e40af 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Ajay Raja
            </h1>
          </div>

          {/* Typing animation container */}
          <div
            style={{
              marginBottom: "30px",
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              opacity: isVisible ? 1 : 0,
              transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDelay: "0.8s",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                margin: "0",
                color: "#1e293b",
                fontWeight: "600",
                whiteSpace: "pre-wrap",
                borderRight: titleText.length < fullTitle.length ? "3px solid #002F6C" : "none",
                paddingRight: "5px",
                overflow: "hidden",
                minHeight: "32px",
                animation: titleText.length < fullTitle.length ? "blink 1s infinite" : "none",
              }}
            >
              {titleText}
            </h3>
          </div>

          {/* Contact Information */}
          <div
            style={{
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              opacity: isVisible ? 1 : 0,
              transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDelay: "1s",
            }}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(10px)",
                borderRadius: "16px",
                padding: "30px",
                border: "1px solid rgba(0, 47, 108, 0.1)",
                boxShadow: "0 8px 32px rgba(0, 47, 108, 0.1)",
              }}
            >
              {[
                "Blue Cove University, Department of Earth & Environmental Sciences",
                "500 Terry Francine Street, San Francisco, CA 94158",
                "Phone: 123-456-7890",
                "Email: info@mysite.com"
              ].map((text, index) => (
                <p
                  key={index}
                  style={{
                    fontSize: "16px",
                    marginBottom: index === 3 ? "0" : "12px",
                    color: "#475569",
                    lineHeight: "1.6",
                    fontWeight: "500",
                    transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                    opacity: isVisible ? 1 : 0,
                    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDelay: `${1.2 + index * 0.1}s`,
                  }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Down Arrow */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "28px",
            color: "#002F6C",
            animation: "bounceSmooth 2s infinite",
            cursor: "pointer",
            padding: "10px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.8)",
            boxShadow: "0 4px 20px rgba(0, 47, 108, 0.15)",
            transition: "all 0.3s ease",
            opacity: isVisible ? 1 : 0,
            transitionDelay: "2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(0, 47, 108, 0.1)";
            e.currentTarget.style.transform = "translateX(-50%) scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.8)";
            e.currentTarget.style.transform = "translateX(-50%) scale(1)";
          }}
        >
          ↓
        </div>

        {/* Enhanced CSS Animations */}
        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(180deg); }
            }

            @keyframes bounceSmooth {
              0%, 100% { transform: translateX(-50%) translateY(0); }
              50% { transform: translateX(-50%) translateY(-12px); }
            }

            @keyframes blink {
              0%, 50% { border-color: #002F6C; }
              51%, 100% { border-color: transparent; }
            }

            /* Responsive design */
            @media (max-width: 768px) {
              section {
                flex-direction: column !important;
                padding: 40px 20px !important;
                gap: 40px !important;
              }
              
              h1 {
                font-size: 40px !important;
              }
              
              .profile-container {
                width: 100% !important;
                max-width: 300px !important;
              }
            }
          `}
        </style>
      </section>

      {/* Bio Section */}
      <Bio />
    </>
  );
}

export default Home;