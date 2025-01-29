import type React from "react"
import { Star } from "lucide-react"

export default function Partnerss() {
  const containerStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }

  const breadcrumbStyle: React.CSSProperties = {
    fontSize: "14px",
    color: "#666",
    marginBottom: "40px",
  }

  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto",
  }

  const titleStyle: React.CSSProperties = {
    fontSize: "72px",
    fontWeight: "Inter",
    marginBottom: "20px",
    lineHeight: "1.2",
    
  }
  const titledfd: React.CSSProperties = {
    fontSize: "72px",
    fontWeight: "Inter",
    marginBottom: "20px",
    lineHeight: "1.2",
    
  }

  const highlightStyle: React.CSSProperties = {
    backgroundColor: "#C4F032",
    padding: "0 8px",
    borderRadius: "4px",
  }
  const image: React.CSSProperties =  {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
  }
  const imageContainer: React.CSSProperties =  {
    position: "relative" as const,
    width: "80%",
    height: "200px",
    borderRadius: "16px",
    overflow: "hidden",
    margin: "1.5rem auto",
  }

  const descriptionStyle: React.CSSProperties = {
    fontSize: "clamp(16px, 3vw, 18px)",
    color: "#666",
    marginBottom: "24px",
    lineHeight: "1.6",
  }

  const ratingStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
    marginBottom: "32px",
    flexWrap: "wrap",
  }

  const buttonContainerStyle: React.CSSProperties = {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    flexWrap: "wrap",
  }

  const buttonBaseStyle: React.CSSProperties = {
    padding: "12px 24px",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "transform 0.2s ease",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    minWidth: "150px",
    justifyContent: "center",
  }

  const primaryButtonStyle: React.CSSProperties = {
    ...buttonBaseStyle,
    backgroundColor: "#2048ff",
    color: "white",
    border: "none",
  }

  const secondaryButtonStyle: React.CSSProperties = {
    ...buttonBaseStyle,
    backgroundColor: "white",
    color: "#2048ff",
    border: "1px solid #2048ff",
  }

  return (
    <div style={containerStyle}>
      <nav style={breadcrumbStyle}>
        <span>Home / Community / For Partners</span>
      </nav>

      <div style={contentStyle}>
        <h1 style={titleStyle}>
          Join Our <span style={highlightStyle}>Partner</span> Network
        </h1>

        <p style={descriptionStyle}>
          Powerful, self-serve team engagement tools and analytics. Supercharge your managers & keep employees engaged
          from anywhere.
        </p>
        <div style={imageContainer}>
            <img
              src="Circle 8.png"
              alt="Remote team collaboration"
              style={image}
            />
          </div>

        <div style={ratingStyle}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} fill="#FFD700" color="#FFD700" />
          ))}
          <span style={{ marginLeft: "8px", fontSize: "16px" }}>4.5 (from 200+ reviews)</span>
        </div>

        <div style={buttonContainerStyle}>
          <button style={secondaryButtonStyle}>
            Contact Us <span>→</span>
          </button>
          <button style={primaryButtonStyle}>
            Join Us <span>→</span>
          </button>
        </div>
       
      </div>
    </div>
  )
}

