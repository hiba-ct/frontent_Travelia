import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ArrowButton from "../common/ArrowButton.jsx";
import SearchBookingCard from "./SearchBookingCard.jsx";
import "../../assets/styles/hero.css";

import heroVideo from "../../assets/images/hero/hero-bg.mp4";
import brushEdge from "../../assets/images/hero/brush-edge.svg";
import paperPlane from "../../assets/images/hero/paper-plane.svg";
import airplane from "../../assets/images/hero/airplane.webp";
import cloud from "../../assets/images/hero/cloud.webp";
import traveller from "../../assets/images/hero/traveller.webp";
import card1 from "../../assets/images/hero/card-1.webp"; // beach pier
import card2 from "../../assets/images/hero/card-2.webp"; // coast and palms
import card3 from "../../assets/images/hero/card-3.webp"; // Colosseum

export default function HeroSection() {
  // The video fades in only after it has loaded, so a broken file never covers the background.
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section className="hero">
      {/* The rock picture is set in CSS. If the video plays, it covers it. */}
      <video
        className={`hero-video ${videoReady ? "is-ready" : ""}`}
        autoPlay
        loop
        muted
        playsInline
        src={heroVideo}
        onLoadedData={() => setVideoReady(true)}
        onError={() => setVideoReady(false)}
      />
      <div className="hero-overlay" />

      <img className="hero-paper-plane" src={paperPlane} alt="" aria-hidden="true" />

      <Container className="hero-content">
        <Row>
          <Col lg={7} className="hero-text">
            <p className="hero-welcome">Welcome to Travlia</p>
            <h1>
              Discover Your Next Great <em>Adventure.</em>
            </h1>
            <p className="hero-lead">
              Discover your next great adventure and uncover unforgettable moments waiting just
              around the corner.
            </p>

            <div className="hero-actions">
              <ArrowButton to="/destinations">All Destinations</ArrowButton>
            </div>

            <SearchBookingCard />
          </Col>
        </Row>

        <div className="hero-visual" aria-hidden="true">
          <img className="hv hv-cloud hv-cloud-1" src={cloud} alt="" style={{ "--d": "0.9s" }} />
          <img className="hv hv-card hv-card-1" src={card1} alt="" style={{ "--d": "0.2s", "--r": "4deg" }} />
          <img className="hv hv-card hv-card-2" src={card2} alt="" style={{ "--d": "0.5s", "--r": "-9deg" }} />
          <img className="hv hv-card hv-card-3" src={card3} alt="" style={{ "--d": "0.7s", "--r": "-5deg" }} />
          <img className="hv hv-traveller" src={traveller} alt="" style={{ "--d": "0.35s" }} />
          <img className="hv hv-cloud hv-cloud-2" src={cloud} alt="" style={{ "--d": "1.1s" }} />
          <img className="hv hv-airplane" src={airplane} alt="" />
        </div>
      </Container>

      <img className="hero-brush" src={brushEdge} alt="" aria-hidden="true" />
    </section>
  );
}