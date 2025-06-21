import React from "react";
import profileImage from "../assets/Profile.jpg";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="profile-image-container">
            <img
              src={profileImage}
              alt="Prof. Ajay Kumar Raja"
              className="contact-image"
            />
          </div>
          
          <div className="hero-text">
            <h1 className="hero-title">Prof. Ajay Kumar Raja</h1>
            <div className="title-underline"></div>
            <h2 className="hero-subtitle">Head, Department of Commerce</h2>
            
            <div className="hero-info-box">
              <div className="info-item">
                <span className="info-emoji">🏫</span>
                <span>Government Mahaprabhu Vallabhacharya PG College, Mahasamund</span>
              </div>
              <div className="info-item">
                <span className="info-emoji">⏰</span>
                <span>21+ years in teaching (UG & PG Commerce)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Achievement Cards */}
        <div className="achievements-grid">
          <div className="achievement-card">
            <span className="card-icon">📚</span>
            <h3 className="card-title">Publications</h3>
            <p className="card-description">
              Author of 4 books and contributor to several research articles and book chapters in reputed national and international journals.
            </p>
          </div>

          <div className="achievement-card">
            <span className="card-icon">🏅</span>
            <h3 className="card-title">Mentorship Excellence</h3>
            <p className="card-description">
              Mentored 28 university merit holders at Pt. Ravishankar Shukla University, including 4 gold medalists.
            </p>
          </div>

          <div className="achievement-card special">
            <span className="card-icon">🎯</span>
            <h3 className="card-title">Recent Achievement</h3>
            <p className="card-description">
              In the past 3 years, his B.Com final-year students topped the university in Management Accounting and received gold medals.
            </p>
          </div>
        </div>

        {/* Student Success Section */}
        <div className="success-section">
          <h3 className="success-title">Student Success Stories</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">18</span>
              <span className="stat-label">UGC-NET Qualified</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">2</span>
              <span className="stat-label">UGC-JRF Qualified</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">15</span>
              <span className="stat-label">SET Cleared</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">4</span>
              <span className="stat-label">Assistant Professors (PSC 2019)</span>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="awards-section">
          <div className="awards-icon">🏆</div>
          <h3 className="awards-title">Recognition & Awards</h3>
          <p className="awards-description">
            Recipient of 2 Governor's Awards and honored as the Best NSS Programme Officer (2022) by the State of Chhattisgarh.
          </p>
        </div>

        {/* Contact Section */}
        <div className="contact-section">
          <div className="contact-header">
            <div className="contact-icon">📬</div>
            <h3 className="contact-title">Get in Touch</h3>
            <p className="contact-subtitle">
              Feel free to reach out for academic collaborations, research, or speaking opportunities
            </p>
          </div>
          <div className="contact-body">
            <a href="mailto:ajayraja@email.com" className="email-button">
              <svg className="email-icon" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              ajayraja@email.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
