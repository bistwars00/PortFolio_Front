import React from "react";
import "../App.css";
import { Container, Row, Col, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Skill = () => {
  return (
    <div className="About-BG">
      <Container>
        <div className="About-Box">
          <Row>
            <Table borderless={true} id="Skill-bt">
              <thead>
                <tr>
                  <th className="About2-Me">
                    <FontAwesomeIcon
                      style={{
                        color: "grey",
                      }}
                      icon={faLink}
                      className="Chain2"
                    />
                    SKILLS
                  </th>
                </tr>
              </thead>
            </Table>
          </Row>

          <Row>
            <Container>
              <div className="About2-Box">
                <Container>
                  <div className="About-BG">
                    <Row>
                      <Col lg={4} md={4} xs={12} className="About2-Icon">
                        <img
                          alt="HTML"
                          width={200}
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
                        />
                        <div className="Icon-Discription">HTML</div>
                      </Col>
                      <Col lg={4} md={4} xs={12} className="About2-Icon">
                        <img
                          alt="CSS"
                          width={143}
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                        />
                        <div className="Icon-Discription">CSS</div>
                      </Col>
                      <Col lg={4} md={4} xs={12} className="About2-Icon js">
                        <img
                          alt="JAVASCRIPT"
                          width={210}
                          src="https://t1.daumcdn.net/cfile/tistory/2149683A58CA6BF313"
                        />
                        <div className="Icon-Discription ">JAVASCRIPT</div>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg={4} md={4} xs={12} className="About2-Icon">
                        <img
                          alt="REDUX"
                          width={200}
                          src="https://t1.daumcdn.net/cfile/tistory/99D158415B48106708"
                        />
                        <div className="Icon-Discription">REDUX</div>
                      </Col>
                      <Col lg={4} md={4} xs={12} className="About2-Icon">
                        <img
                          alt="THUNK"
                          width={200}
                          height={200}
                          src="https://images.velog.io/images/katej927/post/570fb9f1-391d-4a3c-8598-19757eb99890/Redux-Thunk.png"
                        />
                        <div className="Icon-Discription">THUNK</div>
                      </Col>
                      <Col lg={4} md={4} xs={12} className="About2-Icon">
                        <img
                          alt="NETLIFY"
                          width={200}
                          height={200}
                          src="https://images.velog.io/images/jinseoit/post/dc0cc871-8fef-4dc2-b05a-7fe88a14199c/Netlify.png"
                        />
                        <div className="Icon-Discription ">NETLIFY</div>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg={4} md={4} xs={12} className="About2-Icon">
                        <img
                          alt="REACT"
                          width={200}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr_nAm3FlaEu_vQECVsqAMWbDTHLzTQiWHdynt4qUyky7oto67-YBNZ732khp3fxrKUAA&usqp=CAU"
                        />
                        <div className="Icon-Discription">REACT</div>
                      </Col>
                      <Col lg={4} md={4} xs={12} className="About2-Icon">
                        <img
                          alt="GITGUN"
                          width={200}
                          src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FQpdA1%2FbtqARXIcLjV%2FWfbkk3dh5nrc3aPd4yg3J1%2Fimg.gif"
                        />
                        <div className="Icon-Discription">GITHUB</div>
                      </Col>
                      <Col lg={4} md={4} xs={12} className="About2-Icon">
                        <img
                          alt="BOOTSTRAP"
                          width={200}
                          src="https://blog.kakaocdn.net/dn/bxKpyX/btrhh6XUeBq/sLUMc9vyF6semdllCQJvlK/img.jpg"
                        />
                        <div className="Icon-Discription">BOOTSTRAP</div>
                      </Col>
                    </Row>
                  </div>
                </Container>
              </div>
            </Container>
          </Row>
          <div className="About-Box-Under"></div>
        </div>
      </Container>
    </div>
  );
};

export default Skill;
