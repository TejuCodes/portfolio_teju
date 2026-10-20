import "./Contact.css";
import certificates from "../data/certificates";
import Reveal from "../components/Reveal";
import { DoodleUnderline, SketchLock } from "../components/sketches/Sketches";

const thmCert = certificates.find((cert) => cert.issuer === "TryHackMe");

const contactRows = [
  {
    label: "Phone",
    value: "+91 77955 00636",
    href: "tel:+917795500636",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/faceofteju",
    href: "https://www.linkedin.com/in/faceofteju/",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/TejuCodes",
    href: "https://github.com/TejuCodes",
    external: true,
  },
  {
    label: "TryHackMe",
    value: "Pre Security certificate",
    href: thmCert ? thmCert.verify : null,
    external: true,
  },
  {
    label: "Résumé",
    value: "Tejashwin-SResume.pdf",
    href: "/Tejashwin-SResume.pdf",
    external: true,
  },
];

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-scene">
          <div className="contact-main">
            <Reveal className="sec-head contact-head">
              <div className="sec-top">
                <span className="sec-mark">06 / correspondence</span>
                <span className="sec-rule" aria-hidden="true" />
              </div>
              <p className="hand contact-hand">the last page —</p>
              <h2 className="sec-title reveal--focus">
                Get in <span className="accent">touch.</span>
              </h2>
              <DoodleUnderline className="title-scribble" />
            </Reveal>

            <Reveal as="p" className="contact-lede" delay={60}>
              Have a project, collaboration, or cybersecurity discussion in
              mind? Feel free to reach out. I'm always happy to connect with
              fellow learners, professionals, and recruiters.
            </Reveal>

            <Reveal delay={100}>
              <a
                className="contact-mail"
                href="mailto:tejashwin.cybersec@gmail.com"
              >
                <span className="contact-mail-text">
                  tejashwin.cybersec@gmail.com
                </span>
                <span className="contact-mail-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </Reveal>

            <ul className="contact-links">
              {contactRows.map((row, index) => (
                <Reveal
                  as="li"
                  className="contact-item"
                  key={row.label}
                  delay={index * 55}
                >
                  <span className="contact-num" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <a
                    className="contact-link"
                    href={row.href}
                    target={row.external ? "_blank" : undefined}
                    rel={row.external ? "noopener noreferrer" : undefined}
                  >
                    <span className="contact-label-text">{row.label}</span>
                    <span className="contact-value">{row.value}</span>
                    <span className="contact-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </Reveal>
              ))}
            </ul>

            <Reveal as="p" className="hand contact-filed" delay={80}>
              filed from Coimbatore, Tamil Nadu, India
            </Reveal>

            <div className="contact-sign">
              <p className="contact-signature">
                Tejashwin <span>S.</span>
              </p>
              <DoodleUnderline className="contact-sig-ink" />
            </div>
          </div>

          <aside className="contact-side">
            <Reveal className="contact-notes" delay={90}>
              <p className="hand contact-note">
                available for opportunities
              </p>
              <p className="hand contact-note contact-note--dim">
                currently: MSc Cybersecurity
              </p>
              <p className="hand contact-note contact-note--dim">
                into: SOC · pentesting · web security
              </p>
            </Reveal>

            <Reveal as="blockquote" className="contact-quote" delay={150}>
              <p>
                “Security isn't just about finding vulnerabilities — it's
                about building trust.
              </p>
            </Reveal>

            <div className="contact-lock" aria-hidden="true">
              <SketchLock />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Contact;
