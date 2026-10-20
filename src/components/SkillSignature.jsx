import { useState } from "react";
import Reveal from "./Reveal";
import { SketchSkillObject } from "./sketches/CyberSketches";
import "./SkillSignature.css";

const skills = [
  {
    id: "web-testing",
    label: "Web testing",
    kind: "browser",
    note: "The DVWA Lab Notes project documents hands-on vulnerable web application testing and exploitation.",
    links: [{ label: "DVWA Lab Notes", href: "#dvwa-lab-notes" }],
  },
  {
    id: "soc",
    label: "SOC & logs",
    kind: "monitor",
    note: "SOC operations is one of my focus areas, alongside Cisco's SOC Foundations certificate.",
    links: [
      {
        label: "Cisco SOC Foundations",
        href: "https://www.coursera.org/account/accomplishments/verify/S71YBPGLEHOK",
        external: true,
      },
    ],
  },
  {
    id: "linux",
    label: "Linux & shell",
    kind: "terminal",
    note: "Linux is listed among my technical skills; TryHackMe Pre Security is the related foundation record in my archive.",
    links: [
      {
        label: "TryHackMe Pre Security",
        href: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-TLMGRGT22G.pdf",
        external: true,
      },
    ],
  },
  {
    id: "fundamentals",
    label: "Security basics",
    kind: "shield",
    note: "My certifications include Google's Cybersecurity Professional Certificate and IBM's cybersecurity tools course.",
    links: [
      {
        label: "Google certificate",
        href: "https://www.coursera.org/account/accomplishments/specialization/R5YZTO68RV2D",
        external: true,
      },
      {
        label: "IBM course",
        href: "https://www.coursera.org/account/accomplishments/verify/4V4WG9L1G6K4",
        external: true,
      },
    ],
  },
  {
    id: "ai",
    label: "Local AI",
    kind: "processor",
    note: "Hermes AI Agent brings together Ollama, a Telegram bot, and a custom LLM in a local assistant project.",
    links: [{ label: "Hermes AI Agent", href: "#hermes-ai-agent" }],
  },
  {
    id: "development",
    label: "Web builds",
    kind: "laptop",
    note: "I built this portfolio and the Trident RedOps Academy site with React, Vite, and CSS.",
    links: [{ label: "Trident RedOps Academy", href: "#trident-redops-academy" }],
  },
];

export default function SkillSignature() {
  const [selectedId, setSelectedId] = useState(skills[0].id);
  const selected = skills.find((skill) => skill.id === selectedId) || skills[0];

  return (
    <Reveal className="skill-signature" aria-label="Illustrated skill notes">
      <div className="skill-object-list" role="group" aria-label="Choose a skill note">
        {skills.map((skill, index) => (
          <button
            className={`skill-object-button ${selectedId === skill.id ? "is-selected" : ""}`}
            key={skill.id}
            type="button"
            aria-pressed={selectedId === skill.id}
            aria-controls="skill-note"
            onClick={() => setSelectedId(skill.id)}
          >
            <span className="skill-object-art">
              <SketchSkillObject kind={skill.kind} />
              {selectedId === skill.id ? (
                <svg className="skill-object-underline" viewBox="0 0 80 8" aria-hidden="true">
                  <path d="M2 5C22 1 49 7 78 3" />
                </svg>
              ) : null}
            </span>
            <span className="skill-object-label">{skill.label}</span>
            <span className="skill-object-index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      <aside className="skill-note" id="skill-note" aria-live="polite" aria-atomic="true">
        <p className="skill-note-meta">margin note / {String(skills.indexOf(selected) + 1).padStart(2, "0")}</p>
        <h3>{selected.label}</h3>
        <p className="skill-note-copy">{selected.note}</p>
        <div className="skill-note-links">
          {selected.links.map((link) => (
            <a
              className="skill-note-link"
              href={link.href}
              key={link.label}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              {link.label}
              {link.external ? <span aria-hidden="true"> ↗</span> : null}
            </a>
          ))}
        </div>
      </aside>
    </Reveal>
  );
}
