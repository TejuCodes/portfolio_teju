import "./Home.css";
import Reveal from "../components/Reveal";
import useParallax from "../hooks/useParallax";
import {
  SketchMonitor,
  SketchPortrait,
  DoodleArrowDown,
  DoodleCircle,
  DoodleCross,
  DoodleStar,
  DoodleUnderline,
} from "../components/sketches/Sketches";

function Home() {
  const monitorRef = useParallax({ strength: 0.05, max: 12 });

  return (
    <section className="section hero" id="home">
      <div className="container hero-wrap">
        <div className="hero-margin" aria-hidden="true">
          <DoodleStar className="hero-doodle hero-doodle--star" />
          <DoodleCross className="hero-doodle hero-doodle--cross" />
        </div>

        <div className="hero-portrait" aria-hidden="true">
          <SketchPortrait />
        </div>

        <p className="mono-label hero-eyebrow">
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

        <div className="hero-monitor parallax" ref={monitorRef} aria-hidden="true">
          <SketchMonitor />
        </div>
      </div>
    </section>
  );
}

export default Home;
