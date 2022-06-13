import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-scroll";

const Navs = () => {
  return (
    <div id="UP">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/" className="Nav-Icon">
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="Nav-Menu">
            <Link to="About-bt" spy={true} smooth={true}>
              <Nav.Link href="/about" className="Nav-Menu-Between">
                About
              </Nav.Link>
            </Link>
            <Link to="Skill-bt" spy={true} smooth={true}>
              <Nav.Link href="/skill" className="Nav-Menu-Between">
                Skill
              </Nav.Link>
            </Link>
            <Link to="Project-bt" spy={true} smooth={true}>
              <Nav.Link href="/project" className="Nav-Menu-Between">
                Project
              </Nav.Link>
            </Link>
            <Link to="Contact-bt" spy={true} smooth={true}>
              <Nav.Link href="/contact" className="Nav-Menu-Between">
                Contact
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navs;
