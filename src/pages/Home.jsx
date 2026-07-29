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

      <p>$ hostname</p>
      <span>secureboot-v3</span>

      <p>$ cat role.txt</p>
      <span>Cybersecurity Student</span>

      <p>$ ls skills/</p>
      <span>Linux</span>
      <span>Networking</span>
      <span>Python</span>
      <span>React.js</span>
      <span>Node.js</span>
      <span>Burp Suite</span>
      <span>OWASP</span>

      <p>$ current_project</p>
      <span>Hermes Agent</span>
      <span> WVLE</span>

      <p>$ status</p>
      <span className="online">● ONLINE</span>

    </div>

  </div>

</div>

    </section>
  );
}

export default Home;