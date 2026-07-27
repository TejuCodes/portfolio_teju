import "./About.css";
import {
  FaUserGraduate,
  FaShieldAlt,
  FaLaptopCode,
  FaMapMarkerAlt,
} from "react-icons/fa";

function About() {
  return (
    <section className="about-page">
      <div className="about-header">
        <span className="section-tag">ABOUT ME</span>

        <h1>
          Who <span>Am I?</span>
        </h1>

        <p>
          Passionate about cybersecurity, continuous learning, and building
          secure digital solutions through hands-on practice and real-world
          projects.
        </p>
      </div>

      <div className="about-container">
        {/* Left Side */}

        <div className="about-content">
          <h2>Hello, I'm Tejashwin 👋</h2>

          <p>
            I am currently pursuing my <strong>MSc in Cybersecurity</strong> and
            have a strong interest in Offensive Security, Security Operations
            (SOC), AI Security, and Secure Software Development.
          </p>

          <p>
            I enjoy solving Capture The Flag (CTF) challenges, working with
            Linux systems, exploring Active Directory, analyzing malware,
            securing web applications, and automating security tasks.
          </p>

          <p>
            My goal is to become a Security Engineer who can design, defend,
            and automate secure infrastructures while continuously learning new
            technologies and attack techniques.
          </p>
        </div>

        {/* Right Side */}

        <div className="about-info">
          <div className="info-card">
            <FaUserGraduate className="info-icon" />

            <div>
              <h4>Education</h4>
              <p>MSc Cybersecurity</p>
            </div>
          </div>

          <div className="info-card">
            <FaShieldAlt className="info-icon" />

            <div>
              <h4>Specialization</h4>
              <p>Red Team • SOC • AI Security</p>
            </div>
          </div>

          <div className="info-card">
            <FaLaptopCode className="info-icon" />

            <div>
              <h4>Skills</h4>
              <p>Linux • Python • Networking</p>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />

            <div>
              <h4>Location</h4>
              <p>Coimbatore, Tamil Nadu, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}

      <div className="skills-section">
        <h2>Technical Skills</h2>

        <div className="skills-grid">
          <span>Linux</span>
          <span>Python</span>
          <span>Networking</span>
          <span>Burp Suite</span>
          <span>OWASP Top 10</span>
          <span>Nmap</span>
          <span>Wireshark</span>
          <span>Metasploit</span>
          <span>Active Directory</span>
          <span>SIEM</span>
          <span>Splunk</span>
          <span>React</span>
        </div>
      </div>
    </section>
  );
}

export default About;