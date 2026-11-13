import { useEffect, useState } from "react";
import "../../assets/styles/scroll-top.css";

// Yellow "TOP" triangle, fixed in the bottom-right corner.
// It appears after you scroll down a little and scrolls smoothly back to the top.
export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`scroll-top ${visible ? "is-visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      TOP
    </button>
  );
}