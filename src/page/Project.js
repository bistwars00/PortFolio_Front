import React from "react";
import "react-multi-carousel/lib/styles.css";

import { Container, Row, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Carousels from "../component/Carousels";

const Project = () => {
  return (
    <div>
      <div className="About-BG">
        <Container>
          <div className="About-Box">
            <Row>
              <Table borderless={true}>
                <thead>
                  <tr>
                    <th className="About2-Me" id="Project">
                      <FontAwesomeIcon
                        id="Project-bt"
                        style={{
                          color: "grey",
                        }}
                        icon={faLink}
                        className="Chain2"
                      />
                      PROJECT
                    </th>
                  </tr>
                </thead>
              </Table>
            </Row>

            <Row>
              <Container>
                <div className="About2-Box">
                  <Container>
                    <Carousels />
                  </Container>
                </div>
              </Container>
            </Row>
            <div className="About-Box-Under"></div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Project;
