import "./About.css";
import Reveal from "../components/Reveal";
import {
  DoodleArrow,
  DoodleCircle,
  DoodleUnderline,
} from "../components/sketches/Sketches";

const interests = [
  "Penetration Testing",
  "SOC Operations",
  "Web Application Security",
  "Linux",
  "Network Security",
  "AI Security",
];

const skillGroups = [
  {
    label: "Security & Testing",
    items: [
      "Burp Suite",
      "OWASP Top 10",
      "Nmap",
      "Hydra",
      "John the Ripper",
      "OWASP ZAP",
      "CyberChef",
      "Web Application Security",
      "Vulnerability Assessment",
      "CTF",
      "Security Labs",
    ],
  },
  {
    label: "Networking & Systems",
    items: ["Linux", "Networking", "TCP/IP", "DNS", "Wireshark"],
  },
  {
    label: "Programming & Development",
    items: [
      "JavaScript",
      "Git",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],
  },
  {
    label: "Security Operations",
    items: [
      "SOC Operations",
      "SIEM",
      "Splunk",
      "Threat Hunting",
    ],
  },
];

function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <Reveal className="sec-head about-head">
          <div className="sec-top">
            <span className="sec-mark">02 / about me</span>
            <span className="sec-rule" aria-hidden="true" />
          </div>
          <h2 className="sec-title reveal--focus">
            Break It <span className="accent">to Understand It</span>
          </h2>
          <DoodleUnderline className="title-scribble" />
        </Reveal>

        <div className="about-composition">
          <div className="about-bio">
            <Reveal as="p">
              I explore cybersecurity from{" "}
              <span className="about-circle">
                both sides
                <DoodleCircle className="about-circle-mark" />
              </span>{" "}
              of the battlefield: finding weaknesses and understanding how to
              defend them. My interests include Offensive Security, SOC
              Operations, Network Security, Web Security, Linux, and Security
              Engineering. From CTFs and vulnerability labs to building my own
              security-focused projects, I'm constantly experimenting with
              something new.
            </Reveal>

            <Reveal as="p" delay={80}>
              For me,{" "}
              <strong>
                cybersecurity isn't just about running a tool and getting a
                result
              </strong>
              . It's about asking what happened, why it happened, and how to
              stop it from happening again.
            </Reveal>

            <Reveal as="p" delay={140}>
              My goal is simple: keep breaking things, keep building things,
              and become the kind of security engineer who can find the
              weakness before someone else does.
            </Reveal>

            <Reveal className="about-annotation" delay={200}>
              <DoodleArrow className="about-arrow" />
              <span className="hand">two sides, one habit</span>
            </Reveal>
          </div>

          <div className="about-side">
            <Reveal
              as="aside"
              className="about-facts"
              delay={120}
              aria-label="Education and focus"
            >
              <p className="hand about-facts-title">the short version</p>

              <dl className="about-fact-list">
                <div className="about-fact">
                  <dt>education</dt>
                  <dd>MSc Cybersecurity · BCA</dd>
                </div>
                <div className="about-fact">
                  <dt>focus</dt>
                  <dd>Pentesting · SOC · Web · AI Security</dd>
                </div>
                <div className="about-fact">
                  <dt>based in</dt>
                  <dd>Coimbatore, India</dd>
                </div>
                <div className="about-fact">
                  <dt>languages</dt>
                  <dd>English · Tamil · Kannada</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>

        <Reveal className="about-block about-interests">
          <p className="hand about-block-title">interests</p>
          <ul className="interest-list">
            {interests.map((item, idx) => (
              <li key={item} className="interest-item">
                <span className="interest-num" aria-hidden="true">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="interest-text">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="about-block about-skills">
          <p className="hand about-block-title">technical skills</p>

          <div className="skill-groups">
            {skillGroups.map((group) => (
              <section className="skill-group" key={group.label}>
                <h3>
                  {group.label}
                  <span className="skill-rule" aria-hidden="true" />
                </h3>
                <ul className="skill-list">
                  {group.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <p className="hand about-skills-note">all of it, still in progress</p>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
