import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Footer = () => (
  <div className="Footer-Box" id="DOWN">
    <Container>
      <Link to="UP" spy={true} smooth={true}>
        <FontAwesomeIcon
          icon={faCircleUp}
          className="Footer-Icon-Padding Scroll-Up"
          size="xl"
        />
      </Link>
      <div className="Footer-Padding">Coded by</div>
      <div className="Footer-Padding">JongChan Lee</div>
    </Container>
  </div>
);

export default Footer;
