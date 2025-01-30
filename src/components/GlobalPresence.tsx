// import React from "react"

// const GlobalPresence = () => {
//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-3xl font-bold mb-6">Unleash the full power of data</h2>
//             <p className="text-gray-600 mb-6">
//               We guide global businesses through the challenges of developing purposeful technology that addresses their
//               needs and advances their growth. We have established offices in India, the UAE, and the USA.
//             </p>
//             <div className="grid grid-cols-3 gap-8 mb-8">
//               <div>
//                 <h3 className="text-3xl font-bold text-blue-600 mb-2">40+</h3>
//                 <p className="text-sm text-gray-600">Integrations</p>
//               </div>
//               <div>
//                 <h3 className="text-3xl font-bold text-blue-600 mb-2">600%</h3>
//                 <p className="text-sm text-gray-600">Return on investment</p>
//               </div>
//               <div>
//                 <h3 className="text-3xl font-bold text-blue-600 mb-2">4k+</h3>
//                 <p className="text-sm text-gray-600">Global customers</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <span className="text-sm text-gray-600">Featured in</span>
//               {/* Add featured company logos here */}
//             </div>
//           </div>
//           <div className="relative">
//             <img
//               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aX25RQ1DuLiO1NecgJmv6IQoYbk2Ps.png"
//               alt="Global Presence"
//               className="rounded-lg w-full"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default GlobalPresence


// import "../styles/GlobalPresence.scss"; // Import the SCSS file

// const GlobalPresence = () => {
//   return (
//     <section className="global-presence">
//       <div className="container">
//         <div className="grid">
//           <div className="left-section">
//             <h2>Recognized by a multitude of companies internationally.</h2>
//             <p>
//             At Hubnex Labs, we pride ourselves on being a trusted partner for global enterprises across various industries. Our innovative technology solutions empower businesses to thrive in an increasingly competitive landscape. With established offices in India, the UAE, and the USA, we are committed to delivering tailored services that drive growth and operational excellence. Join the ranks of satisfied clients who rely on us for their IT consulting needs and experience the Hubnex difference.
//             </p>
//             <div className="stats">
//               <div>
//                 <h3>40+</h3>
//                 <p>Integrations</p>
//               </div>
//               <div>
//                 <h3>600%</h3>
//                 <p>Return on investment</p>
//               </div>
//               <div>
//                 <h3>4k+</h3>
//                 <p>Global customers</p>
//               </div>
//             </div>
//             <div className="featured">
//               <span>Featured in</span>
//           <img src="image 34.png"/>
//            <img src="image 36.png"/>
//            <img src="image 37 (1).png"/>
          
//             </div>
//           </div>
//           <div className="right-section">
//             <img
//               src="image 5.png"
//               alt="Global Presence"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GlobalPresence;

import React from "react"

const GlobalPresence: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    padding: "2rem 1rem",
  }

  const containerStyle: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
  }

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2rem",
  }

  const leftSectionStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
  }

  const headingStyle: React.CSSProperties = {
    fontSize: "2rem",
    marginBottom: "1rem",
    lineHeight: 1.4,
  }

  const paragraphStyle: React.CSSProperties = {
    fontSize: "1rem",
    lineHeight: 1.6,
    color: "#4B5563",
    marginBottom: "2rem",
  }

  const statsStyle: React.CSSProperties = {
    display: "flex",
    gap: "1rem",
  }

  const statItemStyle: React.CSSProperties = {
    textAlign: "center",
  }

  const statHeadingStyle: React.CSSProperties = {
    fontSize: "1.5rem",
    fontWeight: 600,
  }

  const statTextStyle: React.CSSProperties = {
    fontSize: "1rem",
    color: "#6B7280",
  }

  const featuredStyle: React.CSSProperties = {
    display: "flex",
    gap: "1rem",
    marginTop: "1.5rem",
    alignItems: "center",
  }

  const featuredTextStyle: React.CSSProperties = {
    fontSize: "1.1rem",
    fontWeight: "bold",
  }

  const featuredImageStyle: React.CSSProperties = {
    width: "60px",
    height: "auto",
  }

  const rightSectionStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  const rightImageStyle: React.CSSProperties = {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
  }

  React.useEffect(() => {
    const handleResize = () => {
      const isTablet = window.innerWidth <= 1024
      const isMobile = window.innerWidth <= 640

      const grid = document.querySelector(".grid") as HTMLElement
      const leftSection = document.querySelector(".left-section") as HTMLElement
      const heading = leftSection.querySelector("h2") as HTMLElement
      const paragraph = leftSection.querySelector("p") as HTMLElement
      const stats = leftSection.querySelector(".stats") as HTMLElement
      const statHeadings = stats.querySelectorAll("h3")
      const statTexts = stats.querySelectorAll("p")

      if (isTablet) {
        grid.style.gridTemplateColumns = "1fr"
        grid.style.textAlign = "center"
        heading.style.fontSize = "1.75rem"
        paragraph.style.fontSize = "1rem"
        stats.style.flexDirection = "column"
        stats.style.alignItems = "center"
        statHeadings.forEach((h3) => ((h3 as HTMLElement).style.fontSize = "1.3rem"))
      } else {
        grid.style.gridTemplateColumns = "1fr 1fr"
        grid.style.textAlign = "left"
        heading.style.fontSize = "2rem"
        paragraph.style.fontSize = "1rem"
        stats.style.flexDirection = "row"
        stats.style.alignItems = "flex-start"
        statHeadings.forEach((h3) => ((h3 as HTMLElement).style.fontSize = "1.5rem"))
      }

      if (isMobile) {
        heading.style.fontSize = "1.5rem"
        paragraph.style.fontSize = "0.9rem"
        statHeadings.forEach((h3) => ((h3 as HTMLElement).style.fontSize = "1.2rem"))
        statTexts.forEach((p) => ((p as HTMLElement).style.fontSize = "0.9rem"))
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="global-presence" style={sectionStyle}>
      <div className="container" style={containerStyle}>
        <div className="grid" style={gridStyle}>
          <div className="left-section" style={leftSectionStyle}>
            <h2 style={headingStyle}>Recognized by a multitude of companies internationally.</h2>
            <p style={paragraphStyle}>
              At Hubnex Labs, we pride ourselves on being a trusted partner for global enterprises across various
              industries. Our innovative technology solutions empower businesses to thrive in an increasingly
              competitive landscape. With established offices in India, the UAE, and the USA, we are committed to
              delivering tailored services that drive growth and operational excellence. Join the ranks of satisfied
              clients who rely on us for their IT consulting needs and experience the Hubnex difference.
            </p>
            <div className="stats" style={statsStyle}>
              <div style={statItemStyle}>
                <h3 style={statHeadingStyle}>40+</h3>
                <p style={statTextStyle}>Integrations</p>
              </div>
              <div style={statItemStyle}>
                <h3 style={statHeadingStyle}>600%</h3>
                <p style={statTextStyle}>Return on investment</p>
              </div>
              <div style={statItemStyle}>
                <h3 style={statHeadingStyle}>4k+</h3>
                <p style={statTextStyle}>Global customers</p>
              </div>
            </div>
            <div className="featured" style={featuredStyle}>
              <span style={featuredTextStyle}>Featured in</span>
              <img src="image 34.png" alt="Featured 1" style={featuredImageStyle} />
              <img src="image 36.png" alt="Featured 2" style={featuredImageStyle} />
              <img src="image 37 (1).png" alt="Featured 3" style={featuredImageStyle} />
            </div>
          </div>
          <div className="right-section" style={rightSectionStyle}>
            <img src="image 5.png" alt="Global Presence" style={rightImageStyle} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlobalPresence


