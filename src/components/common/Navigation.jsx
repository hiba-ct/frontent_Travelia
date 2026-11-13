import { NavLink } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";

// One place to edit the menu. Items with "children" become dropdowns.
const menu = [
  {
    label: "Home",
    children: [
      { label: "Home One", to: "/" },
      { label: "Home Two", to: "/home-2" },
      { label: "Home Three", to: "/home-3" },
    ],
  },
  { label: "About", to: "/about" },
  {
    label: "Toures",
    children: [
      { label: "Toure Style 01", to: "/tours" },
      { label: "Toure Style 02", to: "/tours-2" },
      { label: "Toure Details", to: "/tours/details" },
    ],
  },
  {
    label: "Pages",
    children: [
      { label: "Destination", to: "/destinations" },
      { label: "Pricing Table", to: "/pricing" },
      { label: "Gallery", to: "/gallery" },
    ],
  },
  {
    label: "Blog",
    children: [
      { label: "Blog Grid", to: "/blog-grid" },
      { label: "Blog Classic", to: "/blog" },
      { label: "Blog Details", to: "/blog/details" },
    ],
  },
  { label: "Contact", to: "/contact" },
];

export default function Navigation() {
  return (
    <Nav className="mx-auto align-items-lg-center">
      {menu.map((item) =>
        item.children ? (
          <NavDropdown key={item.label} title={item.label} id={`nav-${item.label}`}>
            {item.children.map((child) => (
              <NavDropdown.Item as={NavLink} to={child.to} key={child.label}>
                {child.label}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        ) : (
          <Nav.Link as={NavLink} to={item.to} key={item.label}>
            {item.label}
          </Nav.Link>
        )
      )}
    </Nav>
  );
}