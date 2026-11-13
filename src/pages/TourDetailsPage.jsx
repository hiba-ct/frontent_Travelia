import { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Accordion, Form, Button } from "react-bootstrap";

import { toursData } from "../data/travelData";
import Header from "../components/Header";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";



export default function TourDetailsPage() {
  const { slug } = useParams();
  const tour = toursData.find((t) => t.slug === slug) || toursData[0];
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div>
      {/* DYNAMIC HERO */}<Header/>
      <PageHero title={tour.title} breadcrumb={tour.title} />

      <Container className="py-5">
        {/* GALLERY GRID */}
        <Row className="g-3 mb-5">
          <Col lg={6}>
            <img
              src={tour.mainImage}
              alt={tour.title}
              className="w-100 rounded-4"
              style={{ height: "380px", objectFit: "cover" }}
            />
          </Col>
          <Col lg={6}>
            <Row className="g-3">
              {tour.gallery.slice(0, 4).map((img, i) => (
                <Col xs={6} key={i}>
                  <img
                    src={img}
                    alt=""
                    className="w-100 rounded-4"
                    style={{ height: "182px", objectFit: "cover" }}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* MAIN CONTENT & BOOKING SIDEBAR */}
        <Row className="g-5">
          <Col lg={8}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="fw-bold mb-0">{tour.title}</h2>
              <span className="badge bg-warning text-dark fs-6 px-3 py-2">{tour.duration}</span>
            </div>

            {/* SPECS ICON GRID */}
            <Row className="g-3 mb-4 pb-4 border-bottom">
              {Object.entries(tour.specs).slice(0, 8).map(([key, value]) => (
                <Col sm={6} md={3} key={key}>
                  <small className="text-muted text-capitalize d-block">
                    {key.replace(/([A-Z])/g, " $1")}
                  </small>
                  <strong className="small">{value}</strong>
                </Col>
              ))}
            </Row>

            {/* SECTION TABS */}
            <div className="d-flex gap-4 border-bottom pb-2 mb-4">
              {["overview", "itinerary", "faqs"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`btn btn-link text-decoration-none text-capitalize fw-bold px-0 ${
                    activeTab === tab ? "text-warning border-bottom border-warning border-2" : "text-dark"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* OVERVIEW */}
            <div className="mb-5">
              <h4 className="fw-bold mb-3">Overview</h4>
              <p className="text-muted">{tour.overview}</p>
              <h5 className="fw-bold mt-4 mb-3">Trip Highlights</h5>
              <ul className="list-unstyled">
                {tour.highlights.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    <span className="text-warning me-2">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* ITINERARY ACCORDION */}
            <div className="mb-5">
              <h4 className="fw-bold mb-3">Itinerary</h4>
              <Accordion defaultActiveKey="0">
                {tour.itinerary.map((item, idx) => (
                  <Accordion.Item eventKey={String(idx)} key={idx} className="mb-2 border rounded">
                    <Accordion.Header>{item.day}</Accordion.Header>
                    <Accordion.Body className="text-muted">{item.desc}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>

            {/* ENQUIRY FORM */}
            <div className="p-4 bg-light rounded-4">
              <h4 className="fw-bold mb-3">Send Us an Enquiry</h4>
              <Form>
                <Row className="g-3">
                  <Col md={6}><Form.Control placeholder="Your Name *" /></Col>
                  <Col md={6}><Form.Control type="email" placeholder="Your Email *" /></Col>
                  <Col md={6}><Form.Control placeholder="No. of Adults *" /></Col>
                  <Col md={6}><Form.Control placeholder="No. of Children" /></Col>
                  <Col xs={12}><Form.Control as="textarea" rows={3} placeholder="Your Message *" /></Col>
                  <Col xs={12}>
                    <Button variant="warning" className="fw-bold px-4 py-2">Submit Enquiry</Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>

          {/* STICKY RIGHT PRICING SIDEBAR */}
          <Col lg={4}>
            <div className="p-4 border rounded-4 shadow-sm sticky-top" style={{ top: "100px" }}>
              <small className="text-muted">From</small>
              <div className="d-flex align-items-baseline gap-2 mb-3">
                <h2 className="fw-bold mb-0">${tour.price}</h2>
                <span className="text-muted">/ Adult</span>
              </div>
              <Button variant="warning" className="w-100 fw-bold py-3 mb-3">
                CHECK AVAILABILITY
              </Button>
              <hr />
              <ul className="list-unstyled small mb-0">
                <li className="mb-2"><strong>Accommodation:</strong> {tour.specs.accommodation}</li>
                <li className="mb-2"><strong>Arrival City:</strong> {tour.specs.arrivalCity}</li>
                <li className="mb-2"><strong>Departure City:</strong> {tour.specs.departureCity}</li>
                <li><strong>Best Season:</strong> {tour.specs.bestSeason}</li>
              </ul>
            </div>
          </Col>
        </Row>
 
      </Container>
             <Footer/>
    </div>
  );
}