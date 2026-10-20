import "./Publication.css";
import Reveal from "../components/Reveal";
import { DoodleUnderline } from "../components/sketches/Sketches";

const publications = [
  {
    type: "Research paper",
    title:
      "A Risk-Aware Readiness Framework for LLM-Based Defensive Cybersecurity Agents",
    authors: "Tejashwin S.",
  },
];

function Publication() {
  return (
    <section className="section publication" id="publication">
      <div className="container">
        <Reveal className="sec-head publication-head">
          <div className="sec-top">
            <span className="sec-mark">research note</span>
            <span className="sec-rule" aria-hidden="true" />
          </div>
          <h2 className="sec-title reveal--focus">Publication</h2>
          <DoodleUnderline className="title-scribble" />
          <p className="sec-lede">
            Writing and research worth keeping on the record.
          </p>
        </Reveal>

        <ol className="pub-list">
          {publications.map((pub, index) => (
            <Reveal
              as="li"
              className="pub-entry"
              key={pub.title}
              delay={index * 70}
            >
              <p className="mono-label pub-type">{pub.type}</p>
              <h3 className="pub-title">{pub.title}</h3>
              <p className="pub-authors">{pub.authors}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="pub-tail">
          <span className="hand">more to come</span>
        </Reveal>
      </div>
    </section>
  );
}

export default Publication;
