import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const navLinks = [
  { href: "#home", no: "01", label: "Home" },
  { href: "#about", no: "02", label: "About Me" },
  { href: "#experience", no: "03", label: "Experience" },
  { href: "#certifications", no: "04", label: "Certifications" },
  { href: "#projects", no: "05", label: "Projects" },
  { href: "#publication", no: "06", label: "Publication" },
  { href: "#contact", no: "07", label: "Contact" },
];

const mobileSocials = [
  {
    label: "GitHub",
    href: "https://github.com/TejuCodes",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/faceofteju/",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/faceofteju",
  },
  {
    label: "Email",
    href: "mailto:tejashwin.cybersec@gmail.com",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    navLinks.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {menuOpen && (
        <div className="nav-overlay" onClick={closeMenu} aria-hidden="true" />
      )}

      <nav className="navbar" aria-label="Main navigation">
        <div className="nav-inner container">
          <a href="#home" className="nav-logo" onClick={closeMenu}>
            <span className="nav-logo-mark">
              TS<span>.</span>
            </span>
            <span className="nav-logo-tag">field notes</span>
          </a>

          <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
            <li className="nav-menu-head" aria-hidden="true">
              <span className="hand nav-menu-kicker">the field notes</span>
              <span className="nav-menu-line" />
            </li>

            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className={isActive ? "active" : undefined}
                    aria-current={isActive ? "location" : undefined}
                  >
                    <span className="nav-no" aria-hidden="true">
                      {link.no}
                    </span>
                    {link.label}
                  </a>
                </li>
              );
            })}

            <li className="nav-quick" aria-hidden="true">
              <p className="nav-quick-title">at a glance</p>
              <p className="nav-quick-row">
                <span>focus</span> offensive · SOC · web
              </p>
              <p className="nav-quick-row">
                <span>study</span> MSc Cybersecurity
              </p>
              <p className="nav-quick-row">
                <span>based</span> Coimbatore, IN
              </p>
            </li>

            <li className="mobile-only">
              <a
                className="nav-resume"
                href="/Tejashwin-SResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Résumé ↗
              </a>
            </li>

            <li className="nav-social" aria-label="Social links">
              {mobileSocials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={
                    social.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    social.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  onClick={closeMenu}
                >
                  {social.label}
                </a>
              ))}
            </li>
          </ul>

          <a
            className="nav-resume desktop-only"
            href="/Tejashwin-SResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            résumé <span aria-hidden="true">↗</span>
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
