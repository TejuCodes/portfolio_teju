import "./Certificates.css";
import certificates from "../data/certificates";
import { FaExternalLinkAlt } from "react-icons/fa";

function Certificates() {
  return (
    <section className="certificates-page">

      <div className="cert-header">

        <span className="section-tag">
          CERTIFICATES
        </span>

        <h1>
          My <span>Achievements</span>
        </h1>

        <p>
          Certifications and learning milestones collected throughout my
          cybersecurity journey.
        </p>

      </div>

      <div className="certificate-grid">

        {certificates.map((cert) => (

          <div className="certificate-card" key={cert.id}>

            <img
              src={cert.image}
              alt={cert.title}
            />

            <div className="certificate-content">

              <h3>{cert.title}</h3>

              <p>{cert.issuer}</p>

              <small>{cert.date}</small>

              <a
                href={cert.verify}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
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