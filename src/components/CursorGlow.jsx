import { useEffect, useRef } from "react";
import "./CursorGlow.css";

function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const enlarge = () => {
      glow.classList.add("cursor-hover");
    };

    const shrink = () => {
      glow.classList.remove("cursor-hover");
    };

    document.querySelectorAll("a,button").forEach((item) => {
      item.addEventListener("mouseenter", enlarge);
      item.addEventListener("mouseleave", shrink);
    });

    window.addEventListener("mousemove", move);

    const animate = () => {
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;

      glow.style.transform = `translate(${currentX}px, ${currentY}px)`;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow"></div>;
}

export default CursorGlow;