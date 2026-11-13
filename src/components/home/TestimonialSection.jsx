import { useCallback, useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { testimonials } from "../../data/testimonials.js";
import palm from "../../assets/images/testimonials/palm.png";
import "../../assets/styles/testimonials.css";

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [seen, setSeen] = useState(false); // true once the section has appeared on screen
  const sectionRef = useRef(null);
  const total = testimonials.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);

  // Auto-play every 7 seconds. It pauses while the mouse is over the section,
  // and restarts its timer after a manual click.
  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [paused, next, index]);

  // Watch the section. When it scrolls into view (or is already in view after a refresh),
  // set "seen" to true. That starts the palm tree's entrance animation, once.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !("IntersectionObserver" in window)) {
      setSeen(true); // very old browsers: just show the palm
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 } // 25% of the section must be visible
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const item = testimonials[index];

  return (
    <section
      ref={sectionRef}
      className={`testimonials ${seen ? "is-visible" : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Invisible SVG that defines the 4-piece clover shape used by the photo */}
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="clover-clip" clipPathUnits="objectBoundingBox">
            <path d="M.08,0 H.408 Q.488,0 .488,.08 V.4108 A.09,.09 0 0 0 .4108,.488 H.08 Q0,.488 0,.408 V.08 Q0,0 .08,0 Z" />
            <path d="M.92,0 H.592 Q.512,0 .512,.08 V.4108 A.09,.09 0 0 1 .5892,.488 H.92 Q1,.488 1,.408 V.08 Q1,0 .92,0 Z" />
            <path d="M.08,1 H.408 Q.488,1 .488,.92 V.5892 A.09,.09 0 0 1 .4108,.512 H.08 Q0,.512 0,.592 V.92 Q0,1 .08,1 Z" />
            <path d="M.92,1 H.592 Q.512,1 .512,.92 V.5892 A.09,.09 0 0 0 .5892,.512 H.92 Q1,.512 1,.592 V.92 Q1,1 .92,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="t-clouds" aria-hidden="true" />
      <img className="t-palm" src={palm} alt="" aria-hidden="true" />

      <Container className="t-container">
        <div className="t-heading text-center">
          <p className="t-eyebrow">Our Testimonials</p>
          <h2>What’s Our Customers Say About Us!</h2>
        </div>

        <div className="t-slider">
          {/* "key" makes React replay the slide animation for every new customer */}
          <div className="t-slide" key={item.id} aria-live="polite">
            <Row className="align-items-center g-4">
              <Col md="auto">
                <img className="t-photo" src={item.image} alt={item.name} />
              </Col>
              <Col>
                <div className="t-stars" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((n) => (
                    <i key={n} className="bi bi-star" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="t-quote">“{item.quote}”</blockquote>
                <p className="t-name">{item.name}</p>
                <p className="t-role">{item.role}</p>
              </Col>
            </Row>
          </div>

          <div className="t-nav">
            <button type="button" onClick={prev} aria-label="Previous testimonial">
              <i className="bi bi-chevron-left" aria-hidden="true" />
            </button>
            <button type="button" onClick={next} aria-label="Next testimonial">
              <i className="bi bi-chevron-right" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>

      <span className="t-triangle" aria-hidden="true" />
    </section>
  );
}