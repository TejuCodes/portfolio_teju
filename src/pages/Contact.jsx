import "./Contact.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-page">

      <div className="contact-header">

        <p className="section-tag">GET IN TOUCH</p>

        <h1>
          Let's <span>Connect</span>
        </h1>

        <p>
          Have a project, collaboration, or cybersecurity discussion in mind?
          Feel free to reach out. I'm always happy to connect with fellow
          learners, professionals, and recruiters.
        </p>

      </div>

      <div className="contact-container">

        {/* Contact Info */}

        <div className="contact-info">

          <div className="info-card">
            <FaEnvelope className="icon" />
            <div>
              <h3>Email</h3>
              <p>tejashwin.cybersec@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaGithub className="icon" />
            <div>
              <h3>GitHub</h3>
              <a
                href="https://github.com/TejuCodes"
                target="_blank"
                rel="noreferrer"
              >
                github.com/TejuCodes
              </a>
            </div>
          </div>

          <div className="info-card">
            <FaLinkedin className="icon" />
            <div>
              <h3>LinkedIn</h3>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                View Profile
              </a>
            </div>
          </div>

          <div className="info-card">
            <FaInstagram className="icon" />
            <div>
              <h3>Instagram</h3>
              <a
                href="https://instagram.com/faceofteju"
                target="_blank"
                rel="noreferrer"
              >
                @faceofteju
              </a>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h3>Location</h3>
              <p>Coimbatore, Tamil Nadu, India</p>
            </div>
          </div>

        </div>

        {/* Contact Form */}

       {/* Connect Hub */}

<div className="connect-card">

  <div className="connect-top">
    <h2>Ready to Collaborate?</h2>

    <p>
      Whether it's cybersecurity, web development, open-source projects,
      internships, or research, I'm always interested in connecting with
      professionals and fellow learners.
    </p>
  </div>

  <div className="availability">

    <div className="status">
      <span className="status-dot"></span>
      Available for Opportunities
    </div>

    <div className="status">
      🎓 MSc Cybersecurity Student
    </div>

    <div className="status">
      🔐 Interested in SOC • Pentesting • Web Security
    </div>

  </div>

  <div className="quick-links">

    <a
      href="mailto:tejashwin.cybersec@gmail.com"
      className="action-btn"
    >
      <FaEnvelope />
      Email Me
    </a>

    <a
      href="https://github.com/TejuCodes"
      target="_blank"
      rel="noreferrer"
      className="action-btn"
    >
      <FaGithub />
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/tejashwin2004/"
      target="_blank"
      rel="noreferrer"
      className="action-btn"
    >
      <FaLinkedin />
      LinkedIn
    </a>

  </div>

  <div className="quote-box">
    <p>
      "Security isn't just about finding vulnerabilities —
      it's about building trust."
    </p>
  </div>

</div>
      </div>

    </section>
  );
}

export default Contact;