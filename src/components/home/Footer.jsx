import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import footerBg from "../../assets/images/footer/footer1-bg.jpg";
import "../../assets/styles/footer.css";

const footerLinks = [
  [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Destinations", path: "/destinations" },
    { name: "Hotels", path: "/hotels" },
    { name: "Teams", path: "/teams" },
  ],
  [
    { name: "Booking", path: "/booking" },
    { name: "FAQ", path: "/faq" },
    { name: "Login", path: "/login" },
    { name: "Contact Us", path: "/contact" },
  ],
  [
    { name: "Terms & Use", path: "/terms" },
    { name: "Sitemap", path: "/sitemap" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Flights", path: "/flights" },
  ],
];

const socialLinks = [
  { name: "Instagram", url: "https://instagram.com" },
  { name: "Twitter", url: "https://twitter.com" },
  { name: "Tiktok", url: "https://tiktok.com" },
  { name: "Facebook", url: "https://facebook.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "Youtube", url: "https://youtube.com" },
];

const paymentMethods = [
  "AMEX",
  "₿",
  "Apple Pay",
  "DISCOVER",
  "Diners",
  "VISA",
  "JCB",
];

export default function Footer() {
  return (
    <footer className="travlia-footer">

      {/* BACKGROUND IMAGE */}
      <div
        className="footer-background"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="footer-overlay" />

      <Container className="footer-container">

        {/* MAIN FOOTER CONTENT */}
        <Row className="footer-main-row">

          {/* LEFT LINKS */}
          <Col lg={8} md={7} sm={12}>
            <div className="footer-links-section">

              <div className="footer-section-heading">
                <h3>Links</h3>
                <span />
              </div>

              <div className="footer-links-grid">
                {footerLinks.map((column, index) => (
                  <div className="footer-links-column" key={index}>
                    {column.map((link) => (
                      <Link
                        to={link.path}
                        className="footer-link"
                        key={link.name}
                      >
                        <i className="bi bi-chevron-right" />
                        {link.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>

            </div>
          </Col>

          {/* RIGHT SIDE */}
          <Col lg={4} md={5} sm={12}>
            <div className="footer-right-section">

              {/* SOCIAL MEDIA */}
              <div className="footer-social-section">

                <div className="footer-section-heading">
                  <h3>Social Media</h3>
                  <span />
                </div>

                <div className="footer-social-grid">
                  {socialLinks.map((social) => (
                    <a
                      href={social.url}
                      key={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-link"
                    >
                      {social.name}
                      <i className="bi bi-arrow-up-right" />
                    </a>
                  ))}
                </div>

              </div>

              {/* ADDRESS */}
              <div className="footer-address-section">

                <div className="footer-section-heading">
                  <h3>Address</h3>
                  <span />
                </div>

                <p>
                  4517 Washington Ave. Manchester, Ken
                  United States 39495
                </p>

              </div>

            </div>
          </Col>

        </Row>

        {/* LARGE WATERMARK */}
        <div className="footer-watermark">
          Travlia.
        </div>

        {/* BOTTOM FOOTER */}
        <div className="footer-bottom">

          <div className="footer-copyright">
            ©2025, <strong>Travlia Travel Booking Agency.</strong>
            {" "}All Rights Reserved.
          </div>

          {/* PAYMENT METHODS */}
          <div className="footer-payment-methods">
            {paymentMethods.map((method, index) => (
              <div
                className={`payment-card payment-${index + 1}`}
                key={method}
              >
                {method}
              </div>
            ))}
          </div>

        </div>

      </Container>

    </footer>
  );
}