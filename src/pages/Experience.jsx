import "./Experience.css";
import certificates from "../data/certificates";
import Reveal from "../components/Reveal";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  DoodleUnderline,
  SketchSpine,
} from "../components/sketches/Sketches";

const thmCert = certificates.find((cert) => cert.issuer === "TryHackMe");

const entries = [
  {
    org: "AJK Educational Institutions",
    when: "Jul 2026 — Present",
    title: "Club Coordinator",
  },
  {
    org: "Tamil Nadu Police",
    when: "May 2026 — Jun 2026",
    title: "CyberCrime Investigation Intern",
  },
  {
    org: "T4TEQ Software Solutions",
    when: "Jan 2025 — Mar 2025",
    title: "Software Intern",
  },
  {
    org: "Independent",
    when: "Ongoing",
    title: "Capture the Flag & Vulnerability Labs",
  },
];

function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <Reveal className="sec-head experience-head">
          <div className="sec-top">
            <span className="sec-mark">03 / experience</span>
            <span className="sec-rule" aria-hidden="true" />
          </div>
          <h2 className="sec-title reveal--focus">
            Experience
          </h2>
          <DoodleUnderline className="title-scribble" />
          <p className="sec-lede">
            Roles, internships and hands-on training — a working log of the
            practice behind the certifications.
          </p>
        </Reveal>

        <div className="exp-track">
          <div className="exp-spine" aria-hidden="true">
            <SketchSpine />
          </div>

          <ol className="exp-list">
            {entries.map((entry, index) => (
              <Reveal
                as="li"
                key={entry.title}
                className={`exp-item exp-item--${
                  index % 2 === 0 ? "left" : "right"
                }`}
                delay={index * 70}
              >
                <span className="exp-mark" aria-hidden="true" />

                <p className="hand exp-when">{entry.when}</p>
                <p className="mono-label exp-org">{entry.org}</p>
                <h3 className="exp-title">{entry.title}</h3>
                <p className="exp-desc">{entry.desc}</p>

                {entry.link && (
                  <a
                    className="hand-link exp-link"
                    href={entry.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {entry.linkLabel} <FaExternalLinkAlt aria-hidden="true" />
                  </a>
                )}
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal className="exp-tail">
          <span className="hand">the log continues</span>
        </Reveal>
      </div>
    </section>
  );
}

export default Experience;
