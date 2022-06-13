import React from "react";
import "../App.css";
import { Container, Row, Col, Table, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faMobile,
  faEnvelope,
  faFile,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="About-BG">
      <Container>
        <div className="About-Box">
          <Row>
            <Table borderless={true}>
              <thead>
                <tr>
                  <th className="About-Me" id="Contact">
                    <FontAwesomeIcon
                      id="Contact-bt"
                      style={{
                        color: "grey",
                      }}
                      icon={faLink}
                      className="Chain"
                    />
                    CONTACT
                  </th>
                </tr>
              </thead>
            </Table>
          </Row>

          <Row>
            <Container>
              <Col className="Contact-Box Contact-Box-BG ">
                <div className="Contact-List-Box">
                  <ul className="list-unstyled">
                    <li className="pt-1 pb-1">
                      <div className="CM">Contact Me</div>
                    </li>
                    <li className="pt-1 pb-1">
                      <FontAwesomeIcon icon={faMobile} />
                      <br /> <span className="Bold-Text">Tel</span>
                      <br />
                      <Badge bg="dark" text="light">
                        010-4389-2483
                      </Badge>
                    </li>
                    <li className="pt-1 pb-1">
                      <FontAwesomeIcon icon={faEnvelope} />
                      <br /> <span className="Bold-Text">Email</span>
                      <br />
                      <Badge bg="dark" text="light">
                        bistwars00@naver.com
                      </Badge>
                    </li>

                    <li className="pt-1 pb-1 Gh-Padding">
                      <img
                        className="Contact-Icons"
                        width={20}
                        src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
                      />
                      <br />
                      <a href="https://github.com/bistwars00?tab=repositories">
                        <Badge
                          bg="dark"
                          text="light"
                          className="Contact-Cursor"
                        >
                          Git-Hub
                        </Badge>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Container>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
