
// import Button from "@mui/material/Button";

// const Certifications = () => {
//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-4 text-center">
//         <div className="flex justify-center space-x-12 mb-12">
//           <img
//             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mabOI2SLyLrUqyhBzZexOM3bSgedwv.png"
//             alt="AWS Certified"
//             className="h-20"
//           />
//           <img
//             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mabOI2SLyLrUqyhBzZexOM3bSgedwv.png"
//             alt="CCNA"
//             className="h-20"
//           />
//           <img
//             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mabOI2SLyLrUqyhBzZexOM3bSgedwv.png"
//             alt="ISO"
//             className="h-20"
//           />
//         </div>
//         <h2 className="text-3xl font-bold mb-4">Start building high performing website & grow your business fast.</h2>
//         <div className="flex justify-center items-center space-x-2 mb-6">
//           {"★★★★★".split("").map((star, i) => (
//             <span key={i} className="text-yellow-400">
//               {star}
//             </span>
//           ))}
//           <span className="text-sm text-gray-600">4.5 (from 200+ reviews)</span>
//         </div>
//         <Button variant="contained" color="primary" size="large">
//           Connect Sales →
//         </Button>
//       </div>
//     </section>
//   )
// }

// export default Certifications

// import React from "react";
// import Button from "@mui/material/Button";
// import "../styles/Certifications.module.scss";  // Import the CSS file

// const Certifications = () => {
//   return (
//     <section className="py-16 bg-white">
//       <div className="container">
//         <div className="flex justify-center space-x-12 mb-12">
//           <img
//             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mabOI2SLyLrUqyhBzZexOM3bSgedwv.png"
//             alt="AWS Certified"
//             className="h-20"
//           />
//           <img
//             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mabOI2SLyLrUqyhBzZexOM3bSgedwv.png"
//             alt="CCNA"
//             className="h-20"
//           />
//           <img
//             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mabOI2SLyLrUqyhBzZexOM3bSgedwv.png"
//             alt="ISO"
//             className="h-20"
//           />
//         </div>
//         <h2 className="text-3xl font-bold mb-4">Start building high performing website & grow your business fast.</h2>
//         <div className="flex justify-center items-center space-x-2 mb-6">
//           {"★★★★★".split("").map((star, i) => (
//             <span key={i} className="text-yellow-400">
//               {star}
//             </span>
//           ))}
//           <span className="text-sm text-gray-600">4.5 (from 200+ reviews)</span>
//         </div>
//         <Button variant="contained" color="primary" size="large">
//           Connect Sales →
//         </Button>
//       </div>
//     </section>
//   );
// };

// export default Certifications;
// import type React from "react"
// import "./Certifications.scss"

// const Certifications: React.FC = () => {
//   return (
//     <section className="certifications">
//       <div className="certifications__container">
//         <div className="certifications__logos">
//           <div className="certifications__logo">
//           <img src="Frame 1618873112.png"/>
//           </div>
//           <div className="certifications__logo">
//           <img src="image 63.png"/>
//           <p>CCNA</p>
//           </div>
//           <div className="certifications__logo">
         
//             <img src="ISO.png"/>
//             <p>  ISO9001CERTIFIED(COMINGSOON)</p>
              
//           </div>
//         </div>

//         <h2>Start building high performing website & grow your business fast.</h2>

//         <div className="certifications__stats">
//           <div className="certifications__companies">
//             <div className="certifications__avatars">
//              <img src="Avatar group (2).png"/>
//             </div>
//             <p>45+ Companies joined to make their business success!</p>
//           </div>

//           <div className="certifications__rating">
//             <div className="certifications__stars">
//               {[1, 2, 3, 4, 5].map((i) => (
//                 <span key={i} className="certifications__star">
//                   ★
//                 </span>
//               ))}
//             </div>
//             <p>4.5 (from 200+ reviews)</p>
//           </div>
//         </div>

//         <button className="certifications__cta"  style={{ 
//     backgroundColor: "blue", 
//     color: "white",  // Make the text white so it stands out on the blue background
//     border: "none", 
//     padding: "10px 20px", 
//     fontSize: "16px", 
//     borderRadius: "4px",  // Optional: adds rounded corners to the button
//     cursor: "pointer" 
//   }}>Connect Sales →</button>
//       </div>
//     </section>
//   )
// }

// export default Certifications
import type React from "react";

const Certifications: React.FC = () => {
  return (
    <section
      style={{
        padding: "80px 0",
        textAlign: "center",
        backgroundColor: "#f9f9f9", // Example background color
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "48px",
            marginBottom: "48px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <img
              src="Frame 1618873112.png"
              alt="Certification"
              style={{ width: "100px", height: "auto" }}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              src="image 63.png"
              alt="CCNA Certification"
              style={{ width: "100px", height: "auto" }}
            />
            <p style={{ fontSize: "16px", marginTop: "8px" }}>CCNA</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              src="ISO.png"
              alt="ISO Certification"
              style={{ width: "100px", height: "auto" }}
            />
            <p style={{ fontSize: "16px", marginTop: "8px" }}>
              ISO9001CERTIFIED (COMING SOON)
            </p>
          </div>
        </div>

        <h2
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "32px",
          }}
        >
          Start building high performing websites & grow your business fast.
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "48px",
            marginBottom: "32px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              textAlign: "left",
            }}
          >
            <img
              src="Avatar group (2).png"
              alt="Companies"
              style={{ width: "100px", height: "auto" }}
            />
            <p>45+ Companies joined to make their business success!</p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div style={{ display: "flex" }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <span
                  key={i}
                  style={{
                    fontSize: "20px",
                    color: "gold",
                  }}
                >
                  ★
                </span>
              ))}
            </div>
            <p style={{ marginLeft: "8px" }}>4.5 (from 200+ reviews)</p>
          </div>
        </div>

        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            border: "none",
            padding: "12px 32px",
            fontSize: "18px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Connect Sales →
        </button>
      </div>
    </section>
  );
};

export default Certifications;

