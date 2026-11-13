import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./../../assets/styles/TravelPlanningSection.css";

import planning1 from "../../assets/images/planning/planning-1.jpg";
import planning2 from "../../assets/images/planning/planning-2.jpg";
import planning3 from "../../assets/images/planning/planning-3.jpg";

// Import your illustration webp images
import ft1 from "../../assets/images/planning/ft1.webp";
import ft2 from "../../assets/images/planning/ft2.webp";
import ft3 from "../../assets/images/planning/ft3.webp";

const features = [
  {
    id: 1,
    title: "Lot of Choices",
    description:
      "With countless choices at your fingertips, find the perfect experience.",
    className: "choice-card",
    illustration: ft1,
  },
  {
    id: 2,
    title: "Professional Guide",
    description:
      "Enjoy unbeatable deals and exclusive discounts on flights, hotels and tours.",
    className: "guide-card",
    illustration: ft2,
  },
  {
    id: 3,
    title: "Exclusive Trip",
    description:
      "Experience an exclusive trip tailored just for you with premium services.",
    className: "trip-card",
    illustration: ft3,
  },
];

const travelImages = [planning1, planning2, planning3];

function TravelPlanningSection() {
  const [activeImage, setActiveImage] = useState(0);

  // Automatically change travel images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % travelImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="travel-planning-section">
      <Container>
        <Row className="align-items-center g-4">

          {/* LEFT CONTENT */}
          <Col lg={8} md={12}>
            <div className="planning-content">

              <span className="planning-subtitle">
                Travel Better
              </span>

              <h2 className="planning-title">
                Seamless Travel
                <br />
                Planning <span>Made Easy.</span>
              </h2>

              <div className="planning-features">

                {features.map((feature) => (
                  <Card
                    className={`planning-feature-card ${feature.className}`}
                    key={feature.id}
                  >
                    <Card.Body>
                      <h5>{feature.title}</h5>

                      <p>{feature.description}</p>

                      <div className="feature-illustration">
                        <img
                          src={feature.illustration}
                          alt={feature.title}
                          className="feature-img"
                        />
                      </div>
                    </Card.Body>
                  </Card>
                ))}

              </div>
            </div>
          </Col>

          {/* RIGHT IMAGE SLIDER */}
          <Col lg={4} md={12}>
            <div className="planning-image-wrapper">

              <div className="planning-dotted-line">
                <span>✈</span>
              </div>

              <div className="planning-image-card">
                {travelImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Travel destination ${index + 1}`}
                    className={`planning-slide ${
                      activeImage === index ? "active" : ""
                    }`}
                  />
                ))}
              </div>

              <div className="planning-image-dots">
                {travelImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Show travel image ${index + 1}`}
                    className={activeImage === index ? "active" : ""}
                    onClick={() => setActiveImage(index)}
                  />
                ))}
              </div>

            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default TravelPlanningSection;