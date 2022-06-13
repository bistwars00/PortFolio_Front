import React from "react";
import "../App.css";
import { Carousel, Container, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
import About from "./About";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="BG">
      <Container>
        <Carousel className="Carousel-Opacity">
          <Carousel.Item interval={2300}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1530374260450-4bd19102f63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&w=1000&q=80"
              alt="First slide"
            />
            <Carousel.Caption className="carousel-caption">
              <h3>Thanks For Visiting</h3>
              <p className="sys">See You Soon</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2300}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt="Second slide"
            />
            <Carousel.Caption className="carousel-caption">
              <h3 className="second-slide-F">Please Find The Details Below</h3>

              <Link to="Project" spy={true} smooth={true}>
                <Badge bg="secondary" className="second-slide-C">
                  Click Here
                </Badge>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1617529520608-42a0fe601be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&w=1000&q=80"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Contact Information</h3>

              <Link to="Contact" spy={true} smooth={true}>
                <Badge bg="danger" className="second-slide-C">
                  Click Here
                </Badge>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <br />
      <About />
      <br />
      <Skill />
      <br />
      <Project />
      <br />
      <Contact />
      <br />
    </div>
  );
};

export default Home;
