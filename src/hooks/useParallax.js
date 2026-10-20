import { useEffect, useRef } from "react";

export default function useParallax({ strength = 0.045, max = 14 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const small = window.matchMedia("(max-width: 860px)").matches;

    if (reduce || small) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const node = ref.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < -120 || rect.top > vh + 120) return;

      const drift = (rect.top + rect.height / 2 - vh / 2) * strength;
      const y = Math.max(-max, Math.min(max, -drift));
      node.style.setProperty("--py", `${y.toFixed(2)}px`);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [strength, max]);

  return ref;
}
