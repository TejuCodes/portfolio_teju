import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Overlay */}
      {menuOpen && (
        <div
          className="nav-overlay"
          onClick={closeMenu}
        />
      )}

      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

        <NavLink to="/" className="logo" onClick={closeMenu}>
          TEJU<span>.</span>
        </NavLink>

        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>

          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </li>
<li>
  <NavLink to="/certificates" onClick={closeMenu}>
    Certificates
  </NavLink>
</li>
          <li>
            <NavLink to="/projects" onClick={closeMenu}>
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink to="/tryhackme" onClick={closeMenu}>
              TryHackMe
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>

          <li className="mobile-only">
            <a href="/resume.pdf">Resume</a>
          </li>

        </ul>

        <a
          href="/resume.pdf"
          className="resume-btn desktop-only"
        >
          Resume
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </nav>
    </>
  );
}

export default Navbar;