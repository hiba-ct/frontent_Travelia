import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import travellersImg from "../assets/images/hero/traveller.webp";
import airplaneImg from "../assets/images/hero/airplane.webp";
import "../assets/styles/layout.css";
import des from "../assets/images/des/des.webp";

export default function PageHero({ title, breadcrumb }) {
  return (
    <section className="page-hero-banner">
      {/* Faint background watermark text */}
      <div className="hero-watermark" aria-hidden="true">TRAVLIA</div>

      <Container className="position-relative z-2">
        <Row className="align-items-center">
          <Col lg={7} md={7} sm={12}>
            <div className="hero-content-box py-4">
              <h1 className="hero-dynamic-title fw-bold mb-3">{title}</h1>
              <div className="hero-breadcrumb-pill">
                <Link to="/" className="text-decoration-none text-dark fw-bold">HOME</Link>
                <span className="mx-2 text-warning">›</span>
                <span className="text-muted fw-semibold">{breadcrumb.toUpperCase()}</span>
              </div>
            </div>
          </Col>
          <Col lg={5} md={5} sm={12} className="text-center text-md-end position-relative">
            {/* Floating Airplane graphic */}
            <img 
              src={airplaneImg} 
              alt="Airplane" 
              className="page-hero-airplane"
            />
            {/* Travellers illustration */}
            <img 
              src={des} 
              alt="Travellers" 
              className="page-hero-illustration img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}