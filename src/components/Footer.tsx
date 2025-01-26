import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../styles/Footer.module.scss"; // Import the SCSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          <div className="section">
            <h3>About Hubnex Labs</h3>
            <p>
              We are a team of consultancy with expertise in solving complex
              technology challenges. Our client-centric approach enables us to
              design tailored solutions that keep businesses ahead in the race.
            </p>
          </div>
          <div className="section">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/partners">For Partners</Link>
              </li>
            </ul>
          </div>
          <div className="section">
            <h4>Help</h4>
            <ul>
              <li>
                <Link to="/grievance">Grievance Redressal Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="section">
            <h4>Resources</h4>
            <ul>
              <li>
                <Link to="/blog">Blogs</Link>
              </li>
              <li>
                <Link to="/case-studies">Case Studies</Link>
              </li>
              <li>
                <Link to="/insights">Insights</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2023, All Rights Reserved</p>
          <div className="social-icons">
            <a href="#" aria-label="Twitter">
              <TwitterIcon />
            </a>
            <a href="#" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

