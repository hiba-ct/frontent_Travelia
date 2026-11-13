import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Header from "../components/common/Header.jsx";

import PageHero from "../components/PageHero.jsx";

import Footer from "../components/home/Footer.jsx";
import { destinationsData } from "../data/travelData.js";



export default function AllDestinationsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero title="All Destinations" breadcrumb="Destinations" />

        <Container className="py-5">
          <div className="text-center mb-5">
            <span className="text-warning fst-italic">Explore The World</span>
            <h2 className="fw-bold">Choose Your Dream Destination</h2>
          </div>

          <Row className="g-4">
            {destinationsData.map((dest) => (
              <Col lg={4} md={6} key={dest.slug}>
                <Link to={`/destination/${dest.slug}`} className="text-decoration-none">
                  <div className="destination-card position-relative rounded-4 overflow-hidden shadow-sm">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-100"
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                    <div className="destination-pill">
                      <span>{dest.name}</span>
                      <span>›</span>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}