import "./Projects.css";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import { FaGithub } from "react-icons/fa";
import { DoodleUnderline } from "../components/sketches/Sketches";
import {
  SketchAIProcessor,
  SketchBrowserAudit,
  SketchBugAudit,
  SketchLaptopTerminal,
} from "../components/sketches/CyberSketches";

const projects = [
  {
    id: "trident-redops-academy",
    title: "Trident RedOps Academy",
    problem:
      "Making cybersecurity education approachable through a modern web platform.",
    description:
      "Modern cybersecurity academy website built using React and Vite.",
    stack: ["React", "Vite", "CSS"],
    note: "an education platform, built from the ground up",
    art: SketchBrowserAudit,
    featured: true,
  },
  {
    id: "hermes-ai-agent",
    title: "Hermes AI Agent",
    problem:
      "Keeping a personal AI assistant local, private and wired into everyday tools.",
    description:
      "Local AI Agent integrated with Ollama, Telegram Bot and custom LLM.",
    stack: ["Python", "Ollama", "AI"],
    note: "local AI, personal tool",
    art: SketchAIProcessor,
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    problem:
      "Presenting my work and credentials in one clear, readable place.",
    description: "Personal portfolio built with React and modern UI design.",
    stack: ["React", "Vite", "CSS"],
    note: "the page you are reading",
    art: SketchLaptopTerminal,
  },
  {
    id: "dvwa-lab-notes",
    title: "DVWA Lab Notes",
    problem:
      "Practising OWASP-style web flaws in a safe, deliberately vulnerable lab.",
    description:
      "Hands-on vulnerable web application testing and exploitation.",
    stack: ["Security", "OWASP", "Testing"],
    note: "a safe place to break things",
    art: SketchBugAudit,
  },
];

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <Reveal className="sec-head projects-head">
          <div className="sec-top">
            <span className="sec-mark">04 / case files</span>
            <span className="sec-rule" aria-hidden="true" />
          </div>
          <h2 className="sec-title reveal--focus">
            Things <span className="accent">I've Built</span>
          </h2>
          <DoodleUnderline className="title-scribble" />
          <p className="sec-lede">
            A collection of cybersecurity, AI and web development projects.
          </p>
        </Reveal>

        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              index={String(index + 1).padStart(2, "0")}
              id={project.id}
              title={project.title}
              problem={project.problem}
              description={project.description}
              stack={project.stack}
              note={project.note}
              links={project.links}
              art={project.art}
              featured={project.featured}
              delay={index === 0 ? 0 : 40}
            />
          ))}
        </div>

        <Reveal className="projects-more">
          <span className="hand">{"more in the drawer \u2014"}</span>
          <a
            className="hand-link"
            href="https://github.com/TejuCodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/TejuCodes <FaGithub aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default Projects;
