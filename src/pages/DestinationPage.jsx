import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import PageHero from "../components/PageHero.jsx";

import { destinationsData } from "../data/travelData.js";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

export default function DestinationPage() {
  const { slug } = useParams();
  
  // Find destination matching URL slug, fallback to first item if not found
  const destination =
    destinationsData.find((item) => item.slug === slug) || destinationsData[0];

  const [maxPrice, setMaxPrice] = useState(2000);

  const filteredPackages = destination.packages.filter(
    (pkg) => pkg.price <= maxPrice
  );

  return (
    <>
     <Header/>
      <main>
        {/* Dynamic Hero Banner */}
        <PageHero
          title={`Destinations: ${destination.name}`}
          breadcrumb={destination.name}
        />

        <Container className="py-5">
          <h2 className="fw-bold mb-4">Explore Packages in {destination.name}</h2>
          <Row className="g-4">
            {/* Filter Sidebar */}
            <Col lg={3}>
              <div className="p-4 border rounded-4 shadow-sm bg-white">
                <div className="d-flex justify-content-between mb-3">
                  <strong>Filter By</strong>
                  <button
                    type="button"
                    onClick={() => setMaxPrice(2000)}
                    className="btn btn-link p-0 small text-decoration-none"
                  >
                    Clear all
                  </button>
                </div>

                <div className="mb-4">
                  <label className="fw-semibold small mb-2">Destination</label>
                  <Form.Check type="checkbox" label={destination.name} checked readOnly />
                </div>

                <div className="mb-4">
                  <label className="fw-semibold small mb-2">
                    Max Price: <strong>${maxPrice}</strong>
                  </label>
                  <Form.Range
                    min={300}
                    max={2000}
                    step={50}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                  />
                </div>
              </div>
            </Col>

            {/* Package Cards List */}
            <Col lg={9}>
              {filteredPackages.length > 0 ? (
                filteredPackages.map((pkg) => (
                  <div key={pkg.id} className="p-3 mb-4 border rounded-4 shadow-sm bg-white">
                    <Row className="align-items-center g-3">
                      <Col md={4}>
                        <img
                          src={pkg.image}
                          alt={pkg.title}
                          className="w-100 rounded-3"
                          style={{ height: "190px", objectFit: "cover" }}
                        />
                      </Col>
                      <Col md={5}>
                        <span className="badge bg-danger mb-2">{pkg.discount}</span>
                        <h5 className="fw-bold">{pkg.title}</h5>
                        <p className="text-muted small mb-2">{pkg.includes}</p>
                        <small className="fw-semibold">📍 {pkg.location}</small>
                      </Col>
                      <Col md={3} className="text-md-end border-start">
                        <small className="text-muted d-block">Duration</small>
                        <strong className="d-block mb-2">{pkg.duration}</strong>
                        <small className="text-decoration-line-through text-muted me-1">
                          ${pkg.originalPrice}
                        </small>
                        <h4 className="fw-bold text-dark d-inline">${pkg.price}</h4>
                        <Link
                          to="/tour/velouria-monte-sienna"
                          className="btn btn-warning w-100 fw-bold mt-3"
                        >
                          View Details
                        </Link>
                      </Col>
                    </Row>
                  </div>
                ))
              ) : (
                <div className="text-center py-5 border rounded-4 bg-light">
                  <p className="text-muted mb-0">No packages found under ${maxPrice} for {destination.name}.</p>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}