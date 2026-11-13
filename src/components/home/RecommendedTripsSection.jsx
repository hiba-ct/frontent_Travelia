
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import ArrowButton from "../common/ArrowButton";

import trip1 from "../../assets/images/recommended-trips/trip-1.jpg";
import trip2 from "../../assets/images/recommended-trips/trip-2.jpg";
import trip3 from "../../assets/images/recommended-trips/trip-3.jpg";
import trip4 from "../../assets/images/recommended-trips/trip-4.jpg";
import trip5 from "../../assets/images/recommended-trips/trip-5.jpg";
import trip6 from "../../assets/images/recommended-trips/trip-6.jpg";

import "../../assets/styles/recommended-trips.css";

const trips = [
  {
    id: 1,
    slug: "santa-cruza",
    name: "Lithaniya – Santa Cruza",
    location: "Roman",
    image: trip1,
    days: 4,
    nights: 4,
    country: "08 Country",
    price: 459,
  },
  {
    id: 2,
    slug: "monte-sienna",
    name: "Velouria – Monte Sienna",
    location: "Bhutan",
    image: trip2,
    days: 6,
    nights: 3,
    country: "08 Country",
    price: 859,
  },
  {
    id: 3,
    slug: "costa-lumia",
    name: "Elvarra – Costa Lumia",
    location: "Morocco",
    image: trip3,
    days: 5,
    nights: 2,
    country: "08 Country",
    price: 789,
  },
  {
    id: 4,
    slug: "porto-luno",
    name: "Seraphina – Porto Luno",
    location: "Venice",
    image: trip4,
    days: 8,
    nights: 7,
    country: "08 Country",
    price: 1299,
  },
  {
    id: 5,
    slug: "isla-verona",
    name: "Calethia – Isla Verona",
    location: "Maldives",
    image: trip5,
    days: 7,
    nights: 3,
    country: "08 Country",
    price: 799,
  },
  {
    id: 6,
    slug: "isla-calethia",
    name: "Verona – Isla Calethia",
    location: "London",
    image: trip6,
    days: 7,
    nights: 3,
    country: "08 Country",
    price: 799,
  },
];

function RecommendedTripCard({ trip }) {
  return (
    <div className="recommended-trip-card">

      {/* Destination Image */}
      <Link
        to={`/tours/${trip.slug}`}
        className="recommended-trip-image-link"
      >
        <div className="recommended-trip-image">
          <img
            src={trip.image}
            alt={trip.name}
            loading="lazy"
          />
        </div>
      </Link>

      {/* Card Content */}
      <div className="recommended-trip-content">

        <Link
          to={`/tours/${trip.slug}`}
          className="recommended-trip-name"
        >
          {trip.name}
        </Link>

        <p className="recommended-trip-location">
          Location: {trip.location}
        </p>

        <div className="recommended-trip-divider" />

        {/* Trip Information */}
        <div className="recommended-trip-info">

          <span>
            <i className="bi bi-calendar3"></i>
            {trip.days} Days
          </span>

          <span>
            <i className="bi bi-moon"></i>
            {trip.nights} Nights
          </span>

          <span>
            <i className="bi bi-globe"></i>
            {trip.country}
          </span>

        </div>

        <div className="recommended-trip-divider" />

        {/* Price and Button */}
        <div className="recommended-trip-footer">

          <div className="recommended-trip-price">
            <small>Starting From</small>
            <strong>${trip.price}</strong>
          </div>

          <Link
            to={`/tours/${trip.slug}`}
            className="recommended-view-btn"
          >
            View Tour
          </Link>

        </div>

      </div>
    </div>
  );
}

export default function RecommendedTripsSection() {
  return (
    <section className="recommended-trips-section">

      {/* Decorative Flight Path */}
      <div className="trips-flight-path">
        <span className="flight-plane flight-plane-one">
          <i className="bi bi-airplane-fill"></i>
        </span>
        <span className="flight-plane flight-plane-two">
          <i className="bi bi-airplane-fill"></i>
        </span>
      </div>

      <Container className="recommended-trips-container">

        {/* Section Heading */}
        <div className="recommended-trips-heading">

          <span className="recommended-trips-subtitle">
            Best Tours
          </span>

          <h2>
            Recommended Trips For Your
          </h2>

        </div>

        {/* Trip Cards */}
        <Row className="recommended-trips-grid">

          {trips.map((trip) => (
            <Col
              lg={4}
              md={6}
              sm={6}
              xs={12}
              key={trip.id}
              className="recommended-trip-column"
            >
              <RecommendedTripCard trip={trip} />
            </Col>
          ))}

        </Row>

        {/* Bottom View Tour Button */}
        <div className="recommended-trips-button">
          <ArrowButton to="/tours">
            View Tour
          </ArrowButton>
        </div>

      </Container>
    </section>
  );
}
