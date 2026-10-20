import Reveal from "./Reveal";
import { DoodleUnderline } from "./sketches/Sketches";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./ProjectCard.css";

/** One reusable, content-first case file for every project. */
export default function ProjectCard({
  id,
  index,
  title,
  problem,
  description,
  stack = [],
  note,
  links = [],
  art: Art,
  featured = false,
  delay = 0,
}) {
  return (
    <Reveal
      as="article"
      id={id}
      className={`project ${featured ? "project--featured" : ""}`}
      delay={delay}
    >
      <div className="project__head">
        <span className="project__index" aria-hidden="true">{index}</span>
        <p className="mono-label project__label">
          case file
          {featured ? <span className="project__flag">featured</span> : null}
        </p>
        <span className="project__rule" aria-hidden="true" />
      </div>

      <div className="project__body">
        <div className="project__copy">
          <h3 className="project__title">
            {title}
            <DoodleUnderline className="project__ink" />
          </h3>

          <p className="project__desc">{description}</p>

          {problem ? (
            <p className="project__problem">
              <span className="hand project__key">{"problem \u2014"}</span>
              {problem}
            </p>
          ) : null}

          <ul className="tech" aria-label={`Technologies used in ${title}`}>
            {stack.map((tech) => (
              <li className="badge" key={tech}>{tech}</li>
            ))}
          </ul>

          {note ? <p className="hand project__note">{note}</p> : null}

          {links.length > 0 ? (
            <ul className="project__links" aria-label={`Links for ${title}`}>
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    className="project__link"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                    {link.icon === "github" ? (
                      <FaGithub aria-hidden="true" />
                    ) : (
                      <FaExternalLinkAlt aria-hidden="true" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="project__art" aria-hidden="true">
          <Art />
        </div>
      </div>
    </Reveal>
  );
}
