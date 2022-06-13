import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { projectImgList } from "../utill/ProjectImg";
import Listsource from "../component/Listsource";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Carousels = () => {
  return (
    <Container>
      <div className="Carousels_border">
        <Carousel interval={2300} responsive={responsive}>
          {projectImgList.map((item, idx) => (
            <Listsource key={idx} item={item} />
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default Carousels;
