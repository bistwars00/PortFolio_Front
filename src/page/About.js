import React from "react";
import "../App.css";
import { Container, Row, Col, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faBuilding,
  faComputer,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="About-BG Yidx">
      <Container>
        <div className="About-Box">
          <Container>
            <Row>
              <Table borderless={true}>
                <thead>
                  <tr>
                    <th className="About-Me " id="About-bt">
                      <FontAwesomeIcon
                        style={{
                          color: "grey",
                        }}
                        icon={faLink}
                        className="Chain"
                        lg={4}
                        xs={6}
                      />
                      <span lg={4} xs={6}>
                        ABOUT
                      </span>
                      <span lg={4} md={12} xs={12} className="Me">
                        &nbsp;ME
                      </span>
                    </th>
                  </tr>
                </thead>
              </Table>
            </Row>
          </Container>

          <Row>
            <Col lg={6} md={12} xs={12}>
              <div className="Picture-BG">
                <div className="About-center-box01 profile">
                  <div className="Pinfo-boxes1">
                    <img
                      alt="PROFILE"
                      width={360}
                      className="picture"
                      src={`assets/profile.jpg`}
                    />

                    <div>
                      <h5>이&nbsp;종&nbsp;찬</h5>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col className="Practice-Box2">
              <div className="Pinfo-boxes2">
                <Container>
                  <br />
                  <section className="Ptext">
                    <h5>안녕하세요.</h5>
                    <br />
                    <h4>프론트엔드 개발자 이종찬입니다.</h4>
                    <br />
                    저는 웹개발 업무에 흥미를 갖게 되어, 6개월간의 JAVA
                    국비과정을 수료하였고, 인터넷 강의와 여러 도서를 통해서
                    html, css, javascript, react 등 프론트엔드 업무에 필요한
                    과정까지 추가로 학습하였습니다.
                    <br />
                    <br />
                    현재는 더욱 관심이 가는 프론트엔드 분야를 목표로
                    구직중입니다.
                    <br />
                    신입의 입장에서, 항상 배우는 자세로 임하여, 빠르게 실무에
                    적응할 수 있도록 노력하겠습니다.
                    <br />
                  </section>
                </Container>
              </div>
            </Col>
          </Row>
          <br />

          <Container>
            <Row>
              <div className="Pinfo-boxes3">
                <Container className="Ptable">
                  <div className="IIcon">
                    <div>
                      <div>
                        <img
                          width={29}
                          src="https://cdg-portfolio.com/images/about-me/person-fill.svg"
                        />
                      </div>
                      <div>
                        <div className="IIcon2">이름</div>
                        <div className="IIcon3">이종찬</div>
                      </div>
                    </div>
                  </div>
                  <div className="IIcon">
                    <div>
                      <div>
                        <img
                          width={19}
                          src="https://cdg-portfolio.com/images/about-me/calendar-fill.svg"
                        />
                      </div>
                      <div>
                        <div className="IIcon2 IIcon2-pos">생년월일</div>
                        <div className="IIcon3 IIcon2-pos2">1992.06.05</div>
                      </div>
                    </div>
                  </div>
                  <div className="IIcon">
                    <div>
                      <div>
                        <img
                          width={22}
                          src="https://cdg-portfolio.com/images/about-me/geo-alt-fill.svg"
                        />
                      </div>
                      <div>
                        <div className="IIcon2-pos">거주지</div>
                        <div className="IIcon3-pos">서울시 광진구</div>
                      </div>
                    </div>
                  </div>
                  <div className="IIcon">
                    <div>
                      <div>
                        <img
                          width={20}
                          src="https://cdg-portfolio.com/images/about-me/pencil-fill.svg"
                        />
                      </div>
                      <div>
                        <div className="IIcon2">전공</div>
                        <div className="IIcon3">영어영문</div>
                      </div>
                    </div>
                  </div>
                  <div className="IIcon">
                    <div>
                      <div>
                        <FontAwesomeIcon width={26} icon={faBuilding} />
                      </div>
                      <div>
                        <div className="IIcon2">경력</div>
                        <div className="IIcon3-pos">신입</div>
                      </div>
                    </div>
                  </div>
                  <div className="IIcon">
                    <div>
                      <div>
                        <FontAwesomeIcon width={50} icon={faComputer} />
                      </div>
                      <div>
                        <div className="IIcon2">지원분야</div>
                        <div className="IIcon3">프론트엔드</div>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default About;
