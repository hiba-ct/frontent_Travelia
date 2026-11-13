import { Link } from "react-router-dom";
import "../../assets/styles/arrow-button.css";

// Reusable "yellow pill + round arrow" button.
// Usage: <ArrowButton to="/destinations">All Destinations</ArrowButton>
export default function ArrowButton({ to, children, className = "" }) {
  return (
    <Link to={to} className={`arrow-btn ${className}`}>
      <span className="arrow-btn__label">
        <span className="arrow-btn__text">{children}</span>
      </span>
      <span className="arrow-btn__icon" aria-hidden="true">
        <i className="bi bi-arrow-up-right" />
      </span>
    </Link>
  );
}