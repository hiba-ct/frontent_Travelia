import { Link } from "react-router-dom";
import ArrowButton from "../common/ArrowButton.jsx";
import useInView from "../../hooks/useInView.js";

import desertTravel from "../../assets/images/trusted-travel/desert-travel.webp";
import traveler from "../../assets/images/trusted-travel/traveler.webp";
import travelCollage from "../../assets/images/trusted-travel/travel-collage.webp";
import iconAgency from "../../assets/images/trusted-travel/icon-agency.webp";
import iconVisa from "../../assets/images/trusted-travel/icon-visa.webp";
import cloud from "../../assets/images/hero/cloud.svg";

import "../../assets/styles/trusted-travel.css";

const services = [
  {
    icon: iconAgency,
    title: "Best Travel Agency",
    text: "Discover unparalleled journeys with the best travel agency.",
  },
  {
    icon: iconVisa,
    title: "Visa Get In 3 Days",
    text: "Secure your visa in just 3 days with our efficient and reliable service.",
  },
];

export default function TrustedTravelSection() {
  const [sectionRef, seen] = useInView(0.2);

  return (
    <section ref={sectionRef} className={`tt ${seen ? "is-visible" : ""}`}>
      {/* Faint line drawings: balloon, map pin, dotted flight path with a plane */}
      <div className="tt-decor" aria-hidden="true">
        <svg className="tt-balloon" viewBox="0 0 90 130" fill="none">
          <path d="M45 4C20 4 6 24 6 46c0 20 16 36 30 46h18c14-10 30-26 30-46C84 24 70 4 45 4Z" />
          <path d="M45 4C34 24 34 70 40 92M45 4c11 20 11 66 5 88" />
          <path d="M36 92l2 8M54 92l-2 8" />
          <rect x="38" y="100" width="14" height="12" rx="2" />
        </svg>

        <svg className="tt-pin" viewBox="0 0 24 32" fill="none">
          <path d="M12 2C6 2 2 6.5 2 12c0 8 10 18 10 18s10-10 10-18C22 6.5 18 2 12 2Z" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>

        <div className="tt-trail">
          <svg width="330" height="110" viewBox="0 0 330 110" fill="none">
            <path d="M0 100C60 100 90 20 180 44S290 40 318 14" />
          </svg>
          <svg className="tt-trail__plane" width="24" height="20" viewBox="0 0 24 20" fill="none">
            <path d="M2 2 23 10 2 18 7 10Z" />
          </svg>
        </div>
      </div>

      <div className="tt-inner">
        {/* HEADING */}
        <div className="tt-heading">
          <p className="tt-eyebrow">About Us Travlia</p>
          <h2>
            Our Trusted Travel Partner for Unforgettable <em>Journeys Worldwide.</em>
          </h2>
        </div>

        {/* LEFT: two tilted photos */}
        <div className="tt-photos">
          <figure className="tt-photo tt-photo--a">
            <img src={desertTravel} alt="Two travellers driving through a red desert" />
          </figure>
          <figure className="tt-photo tt-photo--b">
            <img src={traveler} alt="Traveller sitting next to a pink suitcase" />
          </figure>
        </div>

        {/* MIDDLE: text, two service cards, button */}
        <div className="tt-content">
          <p className="tt-lead">
            Discover breathtaking destinations handpicked for unforgettable experiences. From
            tropical beaches to cultural landmarks, your next..
          </p>

          {services.map((s) => (
            <div key={s.title} className="tt-card">
              <img src={s.icon} alt="" className="tt-card__icon" />
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </div>
          ))}

          <div className="tt-button">
            <ArrowButton to="/about">Know About Us</ArrowButton>
          </div>
        </div>
      </div>

      {/* RIGHT: suitcase, hat and landmarks (one cut-out picture) */}
      <div className="tt-right">
        <img src={travelCollage} alt="Suitcase and straw hat with famous world landmarks" />
      </div>
      <img className="tt-cloud" src={cloud} alt="" aria-hidden="true" />
    </section>
  );
}