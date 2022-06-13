import React from "react";
import "../App.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Button, Carousel, Container, Badge } from "react-bootstrap";

const UpDown = () => {
  return (
    <div>
      <Link to="UP" spy={true} smooth={true}>
        <Button className="goToup" variant="outline-light" size="sm">
          <FontAwesomeIcon icon={faArrowUp} />
        </Button>
      </Link>
      <Link to="DOWN" spy={true} smooth={true}>
        <Button className="goTodown" variant="outline-light" size="sm">
          <FontAwesomeIcon icon={faArrowDown} />
        </Button>
      </Link>
    </div>
  );
};

export default UpDown;
