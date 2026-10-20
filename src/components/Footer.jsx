import { useEffect, useRef, useState } from "react";
import { FaArrowUp, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  DoodleDivider,
  DoodleUnderline,
} from "./sketches/Sketches";
import "./Footer.css";

function Footer() {
  const [noteOpen, setNoteOpen] = useState(false);
  const noteTriggerRef = useRef(null);

  useEffect(() => {
    if (!noteOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setNoteOpen(false);
        noteTriggerRef.current?.focus();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [noteOpen]);

  const scrollTop = () => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-identity">
            <p className="footer-name">
              Tejashwin <span>S.</span>
            </p>
            <DoodleUnderline className="footer-ink" />
            <p className="footer-role">
              Cybersecurity Student · Aspiring Security Engineer
            </p>
          </div>

          <ul className="footer-social">
            <li>
              <a
                href="https://github.com/TejuCodes"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                GitHub <FaGithub aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/faceofteju/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn <FaLinkedin aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/faceofteju"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                Instagram <FaInstagram aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <DoodleDivider className="footer-rule" />

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Tejashwin S. — The Dark Archive,
            kept by hand. Built with React.
          </p>

          <button
            className="footer-top-btn"
            onClick={scrollTop}
            aria-label="Back to top"
          >
            back to top <FaArrowUp aria-hidden="true" />
          </button>
        </div>

        <div className="footer-last-page">
          <button
            className="footer-note-trigger"
            type="button"
            ref={noteTriggerRef}
            aria-expanded={noteOpen}
            aria-controls="footer-final-note"
            onClick={() => setNoteOpen((open) => !open)}
          >
            <svg className="footer-note-mark" viewBox="0 0 28 28" aria-hidden="true">
              <path d="M14 2.5L16.4 10.6L24.7 13.1L16.4 15.5L14 24L11.4 15.5L3 13.1L11.4 10.6Z" />
              <path d="M20 19L24 23M22 18L26 22" />
            </svg>
            <span>one last note</span>
          </button>

          <aside
            className="footer-final-note"
            id="footer-final-note"
            role="note"
            aria-live="polite"
            hidden={!noteOpen}
          >
            <p className="footer-note-meta">written in the margin</p>
            <p className="footer-note-copy">
              Keep breaking things. Keep building things. Keep asking why.
            </p>
            <div className="footer-note-actions">
              <a href="https://github.com/TejuCodes" target="_blank" rel="noreferrer">
                browse the projects <span aria-hidden="true">↗</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setNoteOpen(false);
                  noteTriggerRef.current?.focus();
                }}
              >
                close
              </button>
            </div>
          </aside>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
