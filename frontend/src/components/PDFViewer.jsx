import React, { useState } from "react";

function PDFViewer({ pdfUrl, title }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Convert Google Drive links to embeddable format
  const convertGoogleDriveLink = (link) => {
    if (link && link.includes('drive.google.com')) {
      const fileId = link.match(/\/d\/([a-zA-Z0-9-_]+)/);
      if (fileId) {
        return `https://drive.google.com/file/d/${fileId[1]}/preview`;
      }
    }
    return link;
  };

  const handleFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <>
      {/* PDF Preview */}
      <div style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        marginTop: "15px",
        backgroundColor: "#f8f9fa"
      }}>
        <div style={{
          padding: "10px 15px",
          backgroundColor: "#003366",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "14px"
        }}>
          <span>📄 {title}</span>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={handleFullscreen}
              style={{
                backgroundColor: "transparent",
                border: "1px solid white",
                color: "white",
                padding: "5px 10px",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "12px"
              }}
            >
              🔍 View Full
            </button>
            <a
              href={convertGoogleDriveLink(pdfUrl)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "transparent",
                border: "1px solid white",
                color: "white",
                padding: "5px 10px",
                borderRadius: "4px",
                textDecoration: "none",
                fontSize: "12px"
              }}
            >
              🔗 Open
            </a>
          </div>
        </div>
        <iframe
          src={convertGoogleDriveLink(pdfUrl)}
          width="100%"
          height="400px"
          title={title}
          style={{ border: "none" }}
        />
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.9)",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column"
        }}>
          <div style={{
            padding: "15px",
            backgroundColor: "#003366",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <h3 style={{ margin: 0 }}>📄 {title}</h3>
            <button
              onClick={closeFullscreen}
              style={{
                backgroundColor: "#dc3545",
                border: "none",
                color: "white",
                padding: "8px 15px",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px"
              }}
            >
              ✕ Close
            </button>
          </div>
          <iframe
            src={convertGoogleDriveLink(pdfUrl)}
            width="100%"
            height="100%"
            title={title}
            style={{ border: "none", flex: 1 }}
          />
        </div>
      )}
    </>
  );
}

export default PDFViewer;
