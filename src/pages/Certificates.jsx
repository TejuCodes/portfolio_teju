import "./Certificates.css";
import certificates from "../data/certificates";
import Reveal from "../components/Reveal";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  DoodleUnderline,
  DoodleArrow,
  SketchDocs,
  SketchCertificate,
} from "../components/sketches/Sketches";

const featured = certificates.find((cert) => cert.issuer === "TryHackMe");
const rows = certificates.filter((cert) => cert.issuer !== "TryHackMe");

const issuerMarks = {
  Google: "G",
  Cisco: "C",
  IBM: "IBM",
  TryHackMe: "THM",
  Mozilla: "Mz",
  MERN: "ME",
};

const issuerCount = new Set(certificates.map((cert) => cert.issuer)).size;

const recordStats = [
  { label: "credentials", value: String(certificates.length).padStart(2, "0") },
  { label: "issuers", value: String(issuerCount).padStart(2, "0") },
  { label: "year active", value: "2024" },
];

function Certificates() {
  return (
    <section className="section certificates" id="certifications">
      <div className="container">
        <Reveal className="sec-head certs-head">
          <div className="sec-top">
            <span className="sec-mark">04 / certifications</span>
            <span className="sec-rule" aria-hidden="true" />
          </div>
          <h2 className="sec-title reveal--focus">
            Certifications
          </h2>
          <DoodleUnderline className="title-scribble" />
          <p className="sec-lede">
            Industry-recognized certifications earned through continuous
            learning, hands-on cybersecurity labs, and professional
            development.
          </p>
        </Reveal>

        <Reveal className="cert-stats" delay={40} aria-label="Archive summary">
          {recordStats.map((stat) => (
            <div className="cert-stat" key={stat.label}>
              <span className="cert-stat-value">{stat.value}</span>
              <span className="cert-stat-label">{stat.label}</span>
            </div>
          ))}
        </Reveal>

        {/* ---- Certifications ---- */}
        <div className="cert-block">
          <div className="cert-scene">

            <div className="cert-list-wrap">
              <p className="hand cert-list-note">the rest, kept on file</p>

              <ol className="cert-list">
                {rows.map((cert, index) => (
                  <li className="cert-item" key={cert.id}>
                    <Reveal className="cert-row" delay={index * 60}>
                      <span className="cert-mark" aria-hidden="true">
                        {issuerMarks[cert.issuer] || cert.issuer.slice(0, 2)}
                      </span>

                      <div className="cert-main">
                        <h3>{cert.title}</h3>
                        <p className="cert-issuer">{cert.issuer}</p>
                      </div>

                      <span className="cert-date">{cert.date}</span>

                      {cert.verify && (
                        <a
                          className="hand-link cert-link"
                          href={cert.verify}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Credential <FaExternalLinkAlt aria-hidden="true" />
                        </a>
                      )}
                    </Reveal>
                  </li>
                ))}
              </ol>

              <Reveal className="cert-tail" delay={80}>
                <DoodleArrow className="cert-tail-arrow" />
                <span className="hand">the shelf keeps growing</span>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
