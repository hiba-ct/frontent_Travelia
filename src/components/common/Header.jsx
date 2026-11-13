import { Container, Navbar, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "./Navigation.jsx";
import logo from "../../assets/images/hero/logo.svg";

export default function Header() {
  return (
    <Navbar expand="lg" variant="dark" className="travlia-header">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Travlia" height="34" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />

        <Navbar.Collapse id="main-nav">
          <Navigation />

          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            <Form className="header-search" onSubmit={(e) => e.preventDefault()}>
              <Form.Control type="search" placeholder="Search..." aria-label="Search" />
              <i className="bi bi-search" aria-hidden="true" />
            </Form>
            <button type="button" className="grid-btn" aria-label="Open side menu">
              <i className="bi bi-grid-3x3-gap-fill" aria-hidden="true" />
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}