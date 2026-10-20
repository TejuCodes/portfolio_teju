import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Certificates from "./pages/Certificates";
import Projects from "./pages/Projects";
import Publication from "./pages/Publication";
import Contact from "./pages/Contact";

function App() {
  useEffect(() => {
    const root = document.documentElement;
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const syncMotionPreference = () => {
      root.classList.toggle("motion-ready", !motionPreference.matches);
    };
    let deepLinkFrame = null;

    syncMotionPreference();
    motionPreference.addEventListener("change", syncMotionPreference);

    if (window.location.hash) {
      const target = document.getElementById(
        decodeURIComponent(window.location.hash.slice(1))
      );
      if (target) {
        deepLinkFrame = requestAnimationFrame(() =>
          target.scrollIntoView({ behavior: "instant", block: "start" })
        );
      }
    }

    return () => {
      motionPreference.removeEventListener("change", syncMotionPreference);
      if (deepLinkFrame !== null) cancelAnimationFrame(deepLinkFrame);
      root.classList.remove("motion-ready");
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Home />
        <About />
        <Certificates />
        <Projects />
        <Experience />
        <Publication />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
