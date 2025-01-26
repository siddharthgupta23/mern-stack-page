// import { Link } from "react-router-dom";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import "../styles/Footer.module.scss"; // Import the SCSS file

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="grid">
//           <div className="section">
//             <h3>About Hubnex Labs</h3>
//             <p>
//               We are a team of consultancy with expertise in solving complex
//               technology challenges. Our client-centric approach enables us to
//               design tailored solutions that keep businesses ahead in the race.
//             </p>
//           </div>
//           <div className="section">
//             <h4>Company</h4>
//             <ul>
//               <li>
//                 <Link to="/about">About</Link>
//               </li>
//               <li>
//                 <Link to="/contact">Contact Us</Link>
//               </li>
//               <li>
//                 <Link to="/partners">For Partners</Link>
//               </li>
//             </ul>
//           </div>
//           <div className="section">
//             <h4>Help</h4>
//             <ul>
//               <li>
//                 <Link to="/grievance">Grievance Redressal Policy</Link>
//               </li>
//               <li>
//                 <Link to="/terms">Terms & Conditions</Link>
//               </li>
//               <li>
//                 <Link to="/privacy">Privacy Policy</Link>
//               </li>
//             </ul>
//           </div>
//           <div className="section">
//             <h4>Resources</h4>
//             <ul>
//               <li>
//                 <Link to="/blog">Blogs</Link>
//               </li>
//               <li>
//                 <Link to="/case-studies">Case Studies</Link>
//               </li>
//               <li>
//                 <Link to="/insights">Insights</Link>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <p className="copyright">© 2023, All Rights Reserved</p>
//           <div className="social-icons">
//             <a href="#" aria-label="Twitter">
//               <TwitterIcon />
//             </a>
//             <a href="#" aria-label="Facebook">
//               <FacebookIcon />
//             </a>
//             <a href="#" aria-label="Instagram">
//               <InstagramIcon />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#ffffff",
        paddingTop: "3rem",
        paddingBottom: "3rem",
        borderTop: "1px solid #e5e7eb",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          {/* Adjust for larger screens */}
          <style>
            {`
            @media (min-width: 768px) {
              .grid {
                grid-template-columns: repeat(4, 1fr);
              }
            }
            `}
          </style>

          {/* About Section */}
          <div>
            <h3 style={{ fontWeight: "600", marginBottom: "1rem" }}>
              About Hubnex Labs
            </h3>
            <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>
              We are a team of consultancy with expertise in solving complex
              technology challenges. Our client-centric approach enables us to
              design tailored solutions that keep businesses ahead in the race.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{ fontWeight: "600", marginBottom: "1rem" }}>Company</h4>
            <ul style={{ paddingLeft: "1.25rem", fontSize: "0.875rem", color: "#4b5563" }}>
              <li style={{ marginBottom: "0.5rem" }}>
                <Link to="/about" style={{ color: "#1f2937", textDecoration: "none", transition: "color 0.2s" }}>About</Link>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <Link to="/contact" style={{ color: "#1f2937", textDecoration: "none", transition: "color 0.2s" }}>Contact Us</Link>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <Link to="/partners" style={{ color: "#1f2937", textDecoration: "none", transition: "color 0.2s" }}>For Partners</Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 style={{ fontWeight: "600", marginBottom: "1rem" }}>Help</h4>
            <ul style={{ paddingLeft: "1.25rem", fontSize: "0.875rem", color: "#4b5563" }}>
              <li style={{ marginBottom: "0.5rem" }}>
                <Link to="/grievance" style={{ color: "#1f2937", textDecoration: "none", transition: "color 0.2s" }}>Grievance Redressal Policy</Link>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <Link to="/terms" style={{ color: "#1f2937", textDecoration: "none", transition: "color 0.2s" }}>Terms & Conditions</Link>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <Link to="/privacy" style={{ color: "#1f2937", textDecoration: "none", transition: "color 0.2s" }}>Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 style={{ fontWeight: "600", marginBottom: "1rem" }}>Resources</h4>
            <ul style={{ paddingLeft: "1.25rem", fontSize: "0.875rem", color: "#4b5563" }}>
              <li style={{ marginBottom: "0.5rem" }}>
                <Link to="/blog" style={{ color: "#1f2937", textDecoration: "none", transition: "color 0.2s" }}>Blogs</Link>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <Link to="/case-studies" style={{ color: "#1f2937", textDecoration: "none", transition: "color 0.2s" }}>Case Studies</Link>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <Link to="/insights" style={{ color: "#1f2937", textDecoration: "none", transition: "color 0.2s" }}>Insights</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "2rem",
            borderTop: "1px solid #e5e7eb",
          }}
        >
          <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>
            © 2023, All Rights Reserved
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a
              href="#"
              aria-label="Twitter"
              style={{
                color: "#1f2937",
                fontSize: "1.25rem",
                transition: "color 0.2s",
              }}
            >
              <TwitterIcon />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              style={{
                color: "#1f2937",
                fontSize: "1.25rem",
                transition: "color 0.2s",
              }}
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              style={{
                color: "#1f2937",
                fontSize: "1.25rem",
                transition: "color 0.2s",
              }}
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
