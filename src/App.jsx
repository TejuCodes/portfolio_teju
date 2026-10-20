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
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduce) return;

    const root = document.documentElement;
    root.classList.add("motion-ready");

    return () => root.classList.remove("motion-ready");
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
        <Experience />
        <Certificates />
        <Projects />
        <Publication />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
