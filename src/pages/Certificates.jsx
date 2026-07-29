import "./Certificates.css";
import certificates from "../data/certificates";
import { FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import badges from "../data/badges";
function Certificates() {
  return (
    <section className="certificates-page">

      {/* Header */}

      <div className="cert-header">

        <span className="section-tag">
          CERTIFICATES
        </span>

        <h1>
          My <span>Achievements</span>
        </h1>

        <p>
          Industry-recognized certifications earned through continuous learning,
          hands-on cybersecurity labs, and professional development.
        </p>

      </div>

      {/* Grid */}
{/* ================= BADGES ================= */}

<div className="badge-section">

  <div className="badge-title">
    <h2>🏅 TryHackMe Badges</h2>

    <span className="badge-count">
      {badges.length} Earned +
    </span>
  </div>

  <div className="badge-marquee">

    <div className="badge-track">

      {[...badges, ...badges].map((badge, index) => (

        <div className="badge-item" key={index}>

          <img
            src={badge.image}
            alt={badge.name}
          />

        </div>

      ))}

    </div>

  </div>

</div>
      <div className="certificate-grid">

        {certificates.map((cert) => (

          <div
            className="certificate-card"
            key={cert.id}
          >

            {/* Top */}

            <div className="cert-top">

              <div className={`cert-icon ${cert.issuer.toLowerCase()}`}>
                {cert.issuer.charAt(0)}
              </div>

              <div>

                <h3>{cert.title}</h3>

                <p>
                  {cert.issuer}
                </p>

                <small>
                  {cert.date}
                </small>

              </div>

            </div>

            {/* Bottom */}

            <div className="cert-bottom">

              <span className="verified">

                <FaCheckCircle />

                Verified Credential

              </span>

              <a
                href={cert.verify}
                target="_blank"
                rel="noopener noreferrer"
              >

                View Credential

                <FaExternalLinkAlt />

              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certificates;