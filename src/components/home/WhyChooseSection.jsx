import { useEffect, useState } from "react";
import useInView from "../../hooks/useInView.js";

import bg from "../../assets/images/why-choose/bg.webp";
import edge from "../../assets/images/why-choose/edge.svg";
import womanLeft from "../../assets/images/why-choose/woman-left.webp";
import landmarksRight from "../../assets/images/why-choose/landmarks-right.webp";

import "../../assets/styles/why-choose.css";

/* ---------- Yellow line icons (drawn as SVG, so no picture files are needed) ---------- */
const iconProps = {
  width: 48, height: 48, viewBox: "0 0 48 48", fill: "none",
  stroke: "#ffd60a", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round",
};

const AgentIcon = () => (
  <svg {...iconProps} aria-hidden="true">
    <circle cx="24" cy="17" r="7" />
    <path d="M13 14h22M17 10c0-5 14-5 14 0" />
    <path d="M9 43c0-9 6-14 15-14s15 5 15 14Z" />
    <path d="M20 35l4 4 4-4" />
  </svg>
);
const ShieldIcon = () => (
  <svg {...iconProps} aria-hidden="true">
    <path d="M24 4 40 10v14c0 10-7 17-16 21C15 41 8 34 8 24V10Z" />
    <path d="m16 24 6 6 11-12" />
  </svg>
);
const MoneyIcon = () => (
  <svg {...iconProps} aria-hidden="true">
    <path d="M18 6h12l-4 8h-4Z" />
    <path d="M22 14C9 22 7 41 24 43c17-2 15-21 2-29" />
    <path d="M24 22v18M29 26c0-3-10-3-10 1s10 2 10 6-10 4-10 0" />
  </svg>
);
const SupportIcon = () => (
  <svg {...iconProps} aria-hidden="true">
    <circle cx="24" cy="25" r="14" />
    <path d="M8 25a16 16 0 0 1 32 0M8 25v6l5 2M40 25v6" />
    <text x="24" y="30" textAnchor="middle" fontSize="13" fontWeight="700" fill="#ffd60a" stroke="none">24</text>
  </svg>
);

const features = [
  { Icon: AgentIcon, title: "Best Travel Agents", text: "We begin by understanding your vision, goals, and market to craft a tailored strategy." },
  { Icon: ShieldIcon, title: "Safety First Always", text: "User-centric design and interactive prototypes bring your product idea to life." },
  { Icon: MoneyIcon, title: "Best Price Guarantee", text: "Agile development ensures a scalable, secure product with continuous testing for quality." },
  { Icon: SupportIcon, title: "24/7 Customer Support", text: "We deploy, optimize, and support your startup as it grows and scales in the market." },
];

/* Counts from 0 up to "target" once "start" becomes true */
function useCountUp(target, start, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return undefined;
    }
    let raf;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3)))); // slows down near the end
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return value;
}

export default function WhyChooseSection() {
  const [sectionRef, seen] = useInView(0.25);
  const years = useCountUp(30, seen);

  return (
    <section ref={sectionRef} className={`wc ${seen ? "is-visible" : ""}`}>
      <div className="wc-bg" style={{ backgroundImage: `url(${bg})` }} aria-hidden="true" />
      <img className="wc-edge wc-edge--top" src={edge} alt="" aria-hidden="true" />

      {/* Faint dashed circles (left) */}
      <svg className="wc-circles" viewBox="0 0 400 400" aria-hidden="true">
        <circle cx="200" cy="200" r="190" />
        <circle cx="200" cy="200" r="140" />
      </svg>

      {/* Dotted trail with a little plane flying along it (top right) */}
      <div className="wc-trail" aria-hidden="true">
        <svg width="360" height="120" viewBox="0 0 360 120">
          <path d="M5 100 C60 20 120 120 180 62 S300 8 352 36" />
        </svg>
        <svg className="wc-trail__plane" width="22" height="18" viewBox="0 0 24 20">
          <path d="M2 2 L23 10 L2 18 L7 10 Z" />
        </svg>
      </div>

      <div className="wc-left">
        <img src={womanLeft} alt="Traveller with a yellow suitcase and a camera" />
      </div>
      <div className="wc-right">
        <img src={landmarksRight} alt="Woman taking a selfie with famous world landmarks" />
      </div>

      <div className="wc-inner">
        <div className="wc-heading">
          <p className="wc-eyebrow">Why Choose Travlia</p>
          <h2>
            Why Travelers Trust Travlia for Seamless <em>Travel Experiences</em>
          </h2>
        </div>

        <div className="wc-grid-wrap">
          <div className="wc-badge">
            <svg className="wc-badge__tag" width="46" height="54" viewBox="0 0 46 54" aria-hidden="true">
              <g transform="rotate(-22 23 28)">
                <path d="M24 10V2" stroke="#ffd60a" strokeWidth="2" />
                <rect x="12" y="10" width="24" height="38" rx="4" fill="#ffd60a" />
                <circle cx="24" cy="17" r="3" fill="#1b1d1f" />
                <path d="M17 27h14M17 33h14M17 39h14" stroke="#1b1d1f" strokeWidth="2.5" strokeDasharray="3 3" />
              </g>
            </svg>
            <p className="wc-badge__num">
              {years}
              <sup>+</sup>
            </p>
            <p className="wc-badge__label">
              Years of
              <br />
              experience
            </p>
          </div>

          <div className="wc-grid">
            {features.map(({ Icon, title, text }, i) => (
              <div key={title} className="wc-item" style={{ "--i": i }}>
                <span className="wc-icon">
                  <Icon />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <img className="wc-edge wc-edge--bottom" src={edge} alt="" aria-hidden="true" />
    </section>
  );
}