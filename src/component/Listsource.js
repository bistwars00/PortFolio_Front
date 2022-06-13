import React from "react";
import { Col, Container } from "react-bootstrap";
import "../App.css";

const Listsource = ({ item }) => {
  return (
    <div>
      <div
        className="imgcard"
        style={{
          backgroundImage: "url(" + `${item.pro_img}` + ")",
        }}
      >
        <div className="overlay List-Title">
          <Container>
            <div className="Title_P">{item.title}</div>

            <div className="Title_P">
              <a href={item.go_git}>
                <img
                  className="List-Icons"
                  width={40}
                  src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
                />
              </a>

              <a href={item.go_url}>
                <img
                  className="List-Icons"
                  width={40}
                  src="https://cdn-icons-png.flaticon.com/512/320/320152.png"
                />
              </a>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Listsource;
