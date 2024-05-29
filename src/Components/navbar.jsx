import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary googleFont" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#" className="navbarBrand">
          <img src={logo} className="AppLogo" alt="logo" /><b>AlphaBio Medical Pvt.Ltd</b>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Nav
              className="me-auto my-2 my-lg-0 navItems"
              style={{ maxHeight: "240px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link to="/" className="LinkBorder">
                  Home
                </Link>
              </Nav.Link>

              <Dropdown>
                <Dropdown.Toggle variant="" id="">
                  <Link to="/our-products" className="LinkBorder dropDown">
                    Our Products
                  </Link>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/our-products/pedia-products">Pediatrics</Dropdown.Item>
                  <Dropdown.Item href="/our-products/derma-products">Dermatology</Dropdown.Item>
                  <Dropdown.Item href="/our-products/ent-products">ENT</Dropdown.Item>
                  <Dropdown.Item href="/our-products/general-products">Genaral</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Nav.Link>
                <Link to="/company-presence" className="LinkBorder">
                  Company Presence
                </Link>
              </Nav.Link>

              <Nav.Link>
                {" "}
                <Link to="/about-us" className="LinkBorder">
                  About Us
                </Link>
              </Nav.Link>

              <Nav.Link>
                {" "}
                <Link to="/contact-us" className="LinkBorder">
                  Contact Us
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
