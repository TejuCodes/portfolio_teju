import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  };

  return (

    <footer className="footer">

      <div className="footer-top">

        <div>

          <h2>
            TEJU<span>.</span>
          </h2>

          <p>
            Cybersecurity Engineer • SOC • Offensive Security • AI Security
          </p>

        </div>

        <div className="footer-social">

          <a href="https://github.com/TejuCodes" target="_blank" rel="noreferrer">
            <FaGithub/>
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin/>
          </a>

          <a href="https://instagram.com/faceofteju" target="_blank" rel="noreferrer">
            <FaInstagram/>
          </a>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Tejashwin. Built with React & ❤️.
        </p>

        <button onClick={scrollTop}>
          <FaArrowUp/>
        </button>

      </div>

    </footer>

  );

}

export default Footer;