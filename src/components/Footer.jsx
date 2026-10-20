import "./Footer.css";
import { FaArrowUp, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  DoodleDivider,
  DoodleUnderline,
} from "./sketches/Sketches";

function Footer() {
  const scrollTop = () => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-identity">
            <p className="footer-name">
              Tejashwin <span>S.</span>
            </p>
            <DoodleUnderline className="footer-ink" />
            <p className="footer-role">
              Cybersecurity Student · Aspiring Security Engineer
            </p>
          </div>

          <ul className="footer-social">
            <li>
              <a
                href="https://github.com/TejuCodes"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                GitHub <FaGithub aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/faceofteju/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn <FaLinkedin aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/faceofteju"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                Instagram <FaInstagram aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <DoodleDivider className="footer-rule" />

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Tejashwin S. — The Dark Archive,
            kept by hand. Built with React.
          </p>

          <button
            className="footer-top-btn"
            onClick={scrollTop}
            aria-label="Back to top"
          >
            back to top <FaArrowUp aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
