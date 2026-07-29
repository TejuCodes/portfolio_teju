import "./Home.css";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

function Home() {
  return (
    <section className="hero">

      <div className="hero-left"><br></br>
        <h1>
          Building
          <br />
          <span>Secure Digital Experiences.</span>
        </h1>

        <p>
          I'm <strong>Tejashwin</strong>, an MSc Cybersecurity student passionate
          about Offensive Security, SOC Operations, AI Security, and building
          secure applications. I enjoy solving real-world security challenges
          while continuously learning modern technologies.
        </p>

        <div className="hero-buttons">

          <Link to="/about" className="primary-btn">
             About Me
            <FaArrowRight />
          </Link>

          <Link to="/projects" className="secondary-btn">
            View Projects
          </Link>

        </div>

        <div className="social-icons">

          <a
            href="https://github.com/TejuCodes"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/tejashwin2004/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:tejashwin.cybersec@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Home;