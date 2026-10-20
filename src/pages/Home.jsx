import "./Home.css";
import Reveal from "../components/Reveal";
import useParallax from "../hooks/useParallax";
import {
  DoodleCircle,
  DoodleCross,
  DoodleStar,
  DoodleUnderline,
} from "../components/sketches/Sketches";
import { SketchWorkspace } from "../components/sketches/CyberSketches";

function Home() {
  const illustrationRef = useParallax({ strength: 0.035, max: 9 });

  return (
    <section className="section hero" id="home">
      <div className="container hero-wrap">
        <div className="hero-margin" aria-hidden="true">
          <DoodleStar className="hero-doodle hero-doodle--star" />
          <DoodleCross className="hero-doodle hero-doodle--cross" />
        </div>

        <p className="mono-label hero-eyebrow">
          01 / field notes
        </p>

        <Reveal as="article" className="hero-sheet">

          <h1 className="hero-name">
            Tejashwin{" "}
            <span className="hero-initial">
              S.
              <DoodleCircle className="hero-circle" />
            </span>
          </h1>

          <DoodleUnderline className="hero-underline" />

          <p className="hero-role">
            Cybersecurity student <span>/</span> aspiring security engineer
          </p>
          <p className="hero-lede">
            I explore cybersecurity from both sides: finding weaknesses and
            learning how to defend them.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="ink-link hero-action">
              Explore My Work <span aria-hidden="true">↘</span>
            </a>
            <a href="#contact" className="ink-link hero-action">
              Get in Touch <span aria-hidden="true">↗</span>
            </a>
          </div>

          <p className="hand hero-mark">
            still breaking things, carefully <span aria-hidden="true">✎</span>
          </p>
        </Reveal>

        <div className="hero-monitor hero-workspace parallax" ref={illustrationRef} aria-hidden="true">
          <SketchWorkspace />
        </div>
      </div>
    </section>
  );
}

export default Home;
