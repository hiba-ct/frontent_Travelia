import { useEffect, useState } from "react";
import "../../assets/styles/preloader.css";

const LETTERS = "TRAVLIA".split("");

// White loading screen. It plays once on page load, then slides up and disappears.
export default function Preloader() {
  const [phase, setPhase] = useState("loading"); // loading -> leaving -> gone

  useEffect(() => {
    document.body.style.overflow = "hidden"; // no scrolling while loading
    const leave = setTimeout(() => setPhase("leaving"), 2600);
    const gone = setTimeout(() => {
      setPhase("gone");
      document.body.style.overflow = "";
    }, 3300);
    return () => {
      clearTimeout(leave);
      clearTimeout(gone);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div className={`preloader ${phase === "leaving" ? "is-leaving" : ""}`} role="status" aria-label="Loading">
      <div className="preloader__word" aria-hidden="true">
        {LETTERS.map((letter, i) => (
          <span key={i} style={{ "--i": i }}>
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}