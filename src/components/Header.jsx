// src/components/Header.jsx
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../assets/images/hero/logo.svg";

export default function Header() {
  return (
    <Navbar bg="dark" expand="lg" className="py-3 shadow-sm sticky-top">
      <Container>
         <Navbar.Brand as={Link} to="/">
                <img src={logo} alt="Travlia" height="34" />
              </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="mx-auto gap-3 fw-medium ">
            <Nav.Link style={{ color:"white" }}  as={Link} to="/">Home</Nav.Link>
            <Nav.Link style={{ color:"white" }} as={Link} to="/tour/velouria-monte-sienna">Tours</Nav.Link>
            <Nav.Link style={{ color:"white" }} as={Link} to="/destination/italy">Destinations</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center gap-3">
            <div  className="d-none d-xl-block text-end small">
              <span style={{ color:"white" }}  className="d-block color-white">Let's Talk!</span>
              <strong style={{ color:"white" }}>info@company.com</strong>
            </div>
            <Link to="/destination/italy" className="btn btn-dark px-4 py-2 fw-semibold">
              EXPLORE TRIP
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}