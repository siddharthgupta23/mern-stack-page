// import type React from "react"

// export default function PreferredPartners() {
//   const sectionStyle: React.CSSProperties = {
//     padding: "60px 20px",
//     maxWidth: "1200px",
//     margin: "0 auto",
//   }

//   const containerStyle: React.CSSProperties = {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//     gap: "40px",
//     alignItems: "center",
//   }

//   const imageStyle: React.CSSProperties = {
//     width: "100%",
//     height: "auto",
//     maxHeight: "400px",
//     objectFit: "cover",
//     borderRadius: "12px",
//   }

//   const contentStyle: React.CSSProperties = {
//     display: "flex",
//     flexDirection: "column",
//     gap: "20px",
//   }

//   const titleStyle: React.CSSProperties = {
//     fontSize: "clamp(28px, 4vw, 32px)",
//     fontWeight: "bold",
//     lineHeight: "1.2",
//   }

//   const descriptionStyle: React.CSSProperties = {
//     color: "#666",
//     fontSize: "16px",
//     lineHeight: "1.6",
//   }

//   const buttonStyle: React.CSSProperties = {
//     backgroundColor: "#2048ff",
//     color: "white",
//     padding: "12px 24px",
//     borderRadius: "8px",
//     border: "none",
//     cursor: "pointer",
//     fontSize: "16px",
//     width: "fit-content",
//     display: "flex",
//     alignItems: "center",
//     gap: "8px",
//     transition: "transform 0.2s ease",
//   }

//   return (
//     <section style={sectionStyle}>
//       <div style={containerStyle}>
//         <img
//           src="image 32.png"
//           alt="Business partnership handshake"
//           style={imageStyle}
//         />
//         <div style={contentStyle}>
//           <h2 style={titleStyle}>Join our Preferred Partners Programme</h2>
//           <p style={descriptionStyle}>
//             We proudly offer exclusive benefits to our partners who have consistently shown trust in our platform and
//             delivered outstanding work. These privileges are designed to ensure business stability and promise up to 3x
//             returns to our partners.
//           </p>
//           <button style={buttonStyle}>
//             Connect Sales <span>→</span>
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

import type React from "react"

export default function PreferredPartners() {
  const sectionStyle: React.CSSProperties = {
    padding: "80px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
  }

  const containerStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "60px",
    alignItems: "center",
  }

  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "auto",
    maxHeight: "400px",
    objectFit: "cover",
    borderRadius: "12px",
  }

  const contentStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  }

  const titleStyle: React.CSSProperties = {
    fontSize: "42px",
    fontWeight: "700",
    lineHeight: "1.2",
    color: "#000",
    margin: "0",
  }

  const descriptionStyle: React.CSSProperties = {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#666",
    margin: "0",
    maxWidth: "540px",
  }

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#2048ff",
    color: "white",
    padding: "12px 24px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "8px",
  }

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <img
          src="image 32.png"
          alt="Business partnership handshake"
          style={imageStyle}
        />
        <div style={contentStyle}>
          <h2 style={titleStyle}>
            Join our Preferred
            <br />
            Partners
            <br />
            Programme
          </h2>
          <p style={descriptionStyle}>
            We proudly offer exclusive benefits to our partners who have consistently shown trust in our platform and
            delivered outstanding work. These privileges are designed to ensure business stability and promise up to 3x
            returns to our partners.
          </p>
          <button style={buttonStyle}>
            Contact Us <span>→</span>
          </button>
        </div>
      </div>
    </section>
  )
}


