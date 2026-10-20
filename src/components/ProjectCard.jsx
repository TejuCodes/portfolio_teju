import Reveal from "./Reveal";
import { DoodleUnderline } from "./sketches/Sketches";
import "./ProjectCard.css";

/**
 * One project = one case file.
 * Every project uses this exact component: same paper treatment, heading
 * typography, content order, badge row, annotation and illustration slot.
 * Only the copy, technologies and artwork differ.
 */
export default function ProjectCard({
  index,
  title,
  problem,
  description,
  stack = [],
  note,
  art: Art,
  featured = false,
  rotation = "-0.5deg",
  delay = 0,
}) {
  return (
    <Reveal
      as="article"
      className={`project ${featured ? "project--featured" : ""}`}
      delay={delay}
      style={{ "--r": rotation }}
    >
      <div className="project__head">
        <span className="project__index" aria-hidden="true">
          {index}
        </span>
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

          <p className="project__problem">
            <span className="hand project__key">problem —</span>
            {problem}
          </p>

          <p className="project__desc">{description}</p>

          <ul className="tech" aria-label={`Technologies used in ${title}`}>
            {stack.map((tech) => (
              <li className="badge" key={tech}>
                {tech}
              </li>
            ))}
          </ul>

          <p className="hand project__note">{note}</p>
        </div>

        <div className="project__art" aria-hidden="true">
          <Art />
        </div>
      </div>
    </Reveal>
  );
}
