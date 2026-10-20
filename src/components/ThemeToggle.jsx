import { useEffect, useState } from "react";
import "./ThemeToggle.css";

function ThemeGlyph({ daylight }) {
  return (
    <svg
      className="theme-toggle-glyph"
      viewBox="0 0 44 44"
      fill="none"
      aria-hidden="true"
    >
      {daylight ? (
        <path
          d="M29.7 8.8C28 12.5 28.4 18.5 32.5 22.3C36.1 25.6 38.9 25.7 41.4 25.1C39.9 32.4 33.8 37.5 26.1 37.5C17.6 37.5 11.1 31 11.1 22.8C11.1 15.3 17.1 9.1 24.8 8.3C26.5 8.2 28.2 8.3 29.7 8.8Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <>
          <circle cx="22" cy="22" r="7.2" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="M22 4.5V9M22 35V39.5M4.5 22H9M35 22H39.5M9.6 9.6L12.8 12.8M31.2 31.2L34.4 34.4M34.4 9.6L31.2 12.8M12.8 31.2L9.6 34.4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path d="M16 20.5C17.9 18.7 19.3 18.2 22 18.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.dataset.theme === "daylight" ? "daylight" : "nightfall"
  );
  const daylight = theme === "daylight";

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;

    try {
      window.localStorage.setItem("teju-theme", theme);
    } catch {
      // Theme selection still works for this visit when storage is unavailable.
    }

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", daylight ? "#E9DFC7" : "#292722");
  }, [daylight, theme]);

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Switch to ${daylight ? "Nightfall" : "Daylight"} theme`}
      aria-pressed={daylight}
      onClick={() => setTheme(daylight ? "nightfall" : "daylight")}
    >
      <ThemeGlyph daylight={daylight} />
      <span className="theme-toggle-label">
        {daylight ? "nightfall" : "daylight"}
      </span>
    </button>
  );
}
