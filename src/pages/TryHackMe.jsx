import "./TryHackMe.css";
import {
  FaExternalLinkAlt,
  FaTrophy,
  FaAward,
  FaDoorOpen,
  FaFire,
} from "react-icons/fa";

function TryHackMe() {
  return (
    <section className="thm-page">

      <div className="thm-header">

        <p className="section-tag">
          CYBERSECURITY JOURNEY
        </p>

        <h1>
          My <span>TryHackMe</span> Profile
        </h1>

        <p>
          Hands-on learning through real-world labs, Capture The Flag
          challenges, Active Directory, Web Security, SOC investigations,
          Linux, Networking, and more.
        </p>

      </div>

      <div className="profile-card">

        <div className="profile-left">

          <img
            src="/tejashwin.jpg"
            alt="Tejashwin"
          />

          <div>

            <h2>Tejashwin</h2>

            <p>[0xC][GURU]</p>

            <span className="student">
              Student
            </span>

            <a
              href="https://tryhackme.com/p/Tejashwin"
              target="_blank"
              rel="noreferrer"
            >
              Visit Profile
              <FaExternalLinkAlt />
            </a>

          </div>

        </div>

      </div>

      <div className="stats-grid">

        <div className="stat-card">

          <FaTrophy />

          <h3>Rank</h3>

          <h2>35,047</h2>

        </div>

        <div className="stat-card">

          <FaAward />

          <h3>Badges</h3>

          <h2>36</h2>

        </div>

        <div className="stat-card">

          <FaDoorOpen />

          <h3>Rooms</h3>

          <h2>194</h2>

        </div>

        <div className="stat-card">

          <FaFire />

          <h3>Top Ranking</h3>

          <h2>Top 2%</h2>

        </div>

      </div>

      <div className="achievement">

        <h2>Achievements</h2>

        <ul>

          <li>✔ Completed 194+ Rooms</li>

          <li>✔ Earned 36 Badges</li>

          <li>✔ Top 2% Global Ranking</li>

          <li>✔ Active Learning in Offensive Security</li>

          <li>✔ Linux, Web Security & Active Directory</li>

        </ul>

      </div>

      <div className="badge-image">

        <h2>Badge Collection</h2>

        <img
          src="/tryhackme-badges.png"
          alt="TryHackMe Badges"
        />

      </div>

    </section>
  );
}

export default TryHackMe;