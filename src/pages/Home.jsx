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

      <div className="hero-left">

        <span className="hero-tag">
          CYBERSECURITY ENGINEER
        </span>

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

          <Link to="/projects" className="primary-btn">
            View Projects
            <FaArrowRight />
          </Link>

          <Link to="/about" className="secondary-btn">
            About Me
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
            href="https://linkedin.com"
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

      <div className="hero-right">

        <div className="terminal">

          <div className="terminal-header">

            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>

          </div>

          <div className="terminal-body">

            <p>$ whoami</p>
            <span>Tejashwin</span>

            <p>$ role</p>
            <span>Cybersecurity Engineer</span>

            <p>$ skills</p>
            <span>Linux</span>
            <span>Networking</span>
            <span>Python</span>
            <span>Burp Suite</span>
            <span>SOC Operations</span>

            <p>$ status</p>
            <span className="online">
              ONLINE_
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;