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
         I'm <strong style={{ color: "red" }}>Tejashwin</strong> a cybersecurity learner who believes the best way to understand security is to get hands-on. I explore everything from offensive security and vulnerability research to SOC operations and network security, while building projects and experimenting with real-world security tools. I break things to understand how they work, build things to make them better, and keep learning along the way.
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
            href="https://www.linkedin.com/in/faceofteju/"
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