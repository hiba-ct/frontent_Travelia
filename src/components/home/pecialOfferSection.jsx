import { Container, Row, Col } from "react-bootstrap";
import ArrowButton from "../common/ArrowButton.jsx";
import useInView from "../../hooks/useInView.js";

import traveler from "../../assets/images/special-offer/offer-traveler.png";
import offerBackground from "../../assets/images/special-offer/offer-background.jpg";
import tornRight from "../../assets/images/special-offer/torn-right.svg";

import card1 from "../../assets/images/special-offer/offer-card-1.jpg";
import card2 from "../../assets/images/special-offer/offer-card-2.jpg";
import card3 from "../../assets/images/special-offer/offer-card-3.jpg";
import card4 from "../../assets/images/special-offer/offer-card-4.jpg";
import card5 from "../../assets/images/special-offer/offer-card-5.jpg";
import card6 from "../../assets/images/special-offer/offer-card-6.jpg";

import "../../assets/styles/special-offer.css";

// Two tilted columns of photo cards, like the template.
// Each column repeats a card at the end so the column is always tall enough.
const collageColumns = [
  [card1, card3, card4, card1], // left column: pier, sea, yellow van
  [card2, card6, card5, card2], // right column: mountain, adventure, city
];

export default function SpecialOfferSection() {
  const [sectionRef, seen] = useInView(0.25);

  return (
    <section ref={sectionRef} className={`offer ${seen ? "is-visible" : ""}`}>
      {/* LEFT: traveller picture */}
      <div className="offer-left" aria-hidden="true">
        <img className="offer-traveler" src={traveler} alt="" />
      </div>

      {/* CENTER: text, button, 40% OFF */}
      <Container className="offer-container">
        <Row>
          <Col lg={7} md={8}>
            <div className="offer-content">
              <h2>Get Special Offer</h2>
              <p>
                Embark on an unforgettable journey with our exclusive tour special offer seize the
                moment and create lasting memories.
              </p>

              <ArrowButton to="/tours">Booking Now</ArrowButton>

              {/* 40% OFF is live text (no picture needed), so it has a clean transparent background */}
              <div className="offer-badge" role="img" aria-label="40 percent off">
                <span className="offer-badge__num" aria-hidden="true">40</span>
                <span className="offer-badge__side" aria-hidden="true">
                  <span className="offer-badge__pct">%</span>
                  <span className="offer-badge__off">OFF</span>
                </span>
              </div>

              {/* Dotted flight path with a small plane that flies along it */}
              <div className="offer-flight" aria-hidden="true">
                <svg width="300" height="160" viewBox="0 0 300 160">
                  <path d="M10 120 C40 55 115 40 122 92 C128 135 66 140 88 98 C110 56 205 70 285 38" />
                </svg>
                <svg className="offer-flight__plane" width="20" height="16" viewBox="0 0 24 20">
                  <path d="M2 2 L23 10 L2 18 L7 10 Z" />
                </svg>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* RIGHT: photo with torn edge + tilted photo cards */}
      <div className="offer-right">
        <div className="offer-photo" style={{ "--torn": `url(${tornRight})` }}>
          <img src={offerBackground} alt="" />
        </div>
        <span className="offer-sun" aria-hidden="true" />

        <div className="offer-collage" aria-hidden="true">
          {collageColumns.map((column, c) => (
            <div key={c} className={`offer-col offer-col--${c + 1}`}>
              {column.map((src, i) => (
                <div key={i} className="offer-card" style={{ "--n": i + c * 2 }}>
                  <img src={src} alt="" loading="lazy" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}