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
         Break it to understand it. Understand it to secure it.
        </p>
      </div>

      <div className="about-container">
        {/* Left Side */}

        <div className="about-content">
          <h2>Hello, I'm Tejashwin 👋</h2>

          <p>
           I explore cybersecurity from both sides of the battlefield: finding weaknesses and understanding how to defend them. My interests include Offensive Security, SOC Operations, Network Security, Web Security, Linux, and Security Engineering. From CTFs and vulnerability labs to building my own security-focused projects, I’m constantly experimenting with something new.
          </p>

          <p>
            For me, <strong>cybersecurity isn’t just about running a tool and getting a result</strong>. It’s about asking what happened, why it happened, and how to stop it from happening again.
          </p>

          <p>
           My goal is simple: keep breaking things, keep building things, and become the kind of security engineer who can find the weakness before someone else does.
          </p>
        </div>

        {/* Right Side */}

        <div className="about-info">
          <div className="info-card">
            <FaUserGraduate className="info-icon" />

            <div>
              <h4>Education</h4>
                            <p>BCA</p>

              <p>MSc Cybersecurity</p>
            </div>
          </div>

          <div className="info-card">
            <FaShieldAlt className="info-icon" />

            <div>
              <h4>Specialization</h4>
              <p>Networking • SOC • AI in Security</p>
            </div>
          </div>

          <div className="info-card">
            <FaLaptopCode className="info-icon" />

            <div>
              <h4>Skills</h4>
              <p>Linux • React • Networking </p>
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
<span>JavaScript</span>
<span>Git</span>
<span>Networking</span>
<span>TCP/IP</span>
<span>DNS</span>

<span>Burp Suite</span>
<span>OWASP Top 10</span>
<span>Nmap</span>
<span>Wireshark</span>
<span>Metasploit</span>
<span>Hydra</span>
<span>John the Ripper</span>
<span>Nikto</span>
<span>OWASP ZAP</span>
<span>CyberChef</span>

<span>SOC Operations</span>
<span>SIEM</span>
<span>ELK Stack</span>
<span>Splunk</span>
<span>Threat Hunting</span>
<span>MITRE ATT&CK</span>

<span>React</span>
<span>Node.js</span>
<span>Express.js</span>
<span>MongoDB</span>
<span>REST APIs</span>
<span>JWT</span>

<span>Web Application Security</span>
<span>Vulnerability Assessment</span>
<span>CTF</span>
<span>Security Labs</span>
        </div>
      </div>
    </section>
  );
}

export default About;