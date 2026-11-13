import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function CountUp({ target, decimals = 0, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  // Trigger counter when the footer enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate numbers smoothly from 0 to target
  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    let animationFrameId;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out effect so it slows down smoothly at the end
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = easedProgress * target;

      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, target, duration]);

  return (
    <span ref={elementRef}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="travlia-footer">
      {/* Top CTA Banner */}
      <div className="footer-cta-strip py-4">
        <Container style={{ maxWidth: "1140px" }}>
          <Row className="align-items-center">
            <Col lg={6}>
              <h4 className="text-white fw-bold mb-0">
                Bookmark in Your Own Way, With Our Travel Agency
              </h4>
            </Col>
            <Col lg={6} className="text-lg-end mt-3 mt-lg-0">
              <Link to="/destination/italy" className="btn btn-warning fw-bold px-4 py-2 me-3">
                EXPLORE TRIP
              </Link>
              <span className="text-white small">Call +1 800 4564 782 or Chat Now.</span>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Dark Footer */}
      <Container className="py-5 text-white" style={{ maxWidth: "1140px" }}>
        <Row className="g-4">
          <Col lg={3} md={6}>
            <h5 className="fw-bold mb-3 fs-6 text-uppercase">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/destinations">All Destinations</Link></li>
              <li><Link to="/destination/italy">Italy Packages</Link></li>
              <li><Link to="/destination/maldives">Maldives Packages</Link></li>
            </ul>
          </Col>

          {/* Animated Stats Box */}
          <Col lg={3} md={6}>
            <div className="footer-stats-box p-4 rounded-3 border border-secondary border-opacity-25 bg-dark">
              <h3 className="fw-bold mb-0 text-warning">
                <CountUp target={11.3} decimals={1} suffix="M+" duration={2000} />
              </h3>
              <small className="text-light d-block mb-3">Happy Travelers</small>

              <h3 className="fw-bold mb-0 text-warning">
                <CountUp target={247} decimals={0} suffix="K" duration={2000} />
              </h3>
              <small className="text-light">Completed Tours</small>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <h5 className="fw-bold mb-3 fs-6 text-uppercase">Support</h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/">Documentation</Link></li>
              <li><Link to="/">FAQs</Link></li>
              <li><Link to="/">Support Policy</Link></li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h5 className="fw-bold mb-3 fs-6 text-uppercase">Newsletter</h5>
            <p className="small text-secondary mb-3">
              Don't miss any updates of our new travel packages and seasonal discounts.
            </p>
          </Col>
        </Row>
      </Container>

      <div className="text-center py-3 border-top border-secondary border-opacity-25 text-secondary small">
        <Container style={{ maxWidth: "1140px" }}>
          © 2026 Travlia | All Rights Reserved
        </Container>
      </div>
    </footer>
  );
}