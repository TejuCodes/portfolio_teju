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

        <div className="contact-form">

          <h2>Send a Message</h2>

          <form>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              <FaPaperPlane />
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;