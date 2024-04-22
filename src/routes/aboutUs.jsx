import React from "react";
import NavBar from "../Components/navbar.jsx";
import FooTer from "../Components/footer.jsx";
import { ParallaxProvider } from "react-scroll-parallax";
import { AboutParallex } from "../pallarex/aboutUsParallex.tsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import mission from "../Images/ourMission.png";
import vision from "../Images/ourVision.png";
import story from"../Images/ourStory.jpg";
import fakeImg from"../Images/fakeImg.jpg";

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <ParallaxProvider>
        <AboutParallex />
        <div className="centerParallex  fullParallex "></div>
        <Container fluid>
          <Row>
            <div style={{ margin: "30px 0 15px 0 ", backgroundColor: "#e2e2e2" }}>
              <Col lg={12}>
                <Row xs={1} md={2}>
                  <Col>
                    <div className="aboutUsImgDiv">
                      <img src={mission} alt="" className="aboutUsImg w-100" />
                    </div>
                  </Col>
                  <Col>
                    <div className="aboutUsTextDiv googleFont">
                      <h1>Our Mission</h1>
                      <p className="aboutUsText">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id qui aliquid aperiam ipsum, dolore unde excepturi
                        corrupti doloremque laborum repudiandae ullam
                        voluptatibus ipsam dignissimos. Beatae eius minus,
                        numquam earum perferendis ex consectetur ducimus nobis
                        alias? Aut mollitia, eos ipsum adipisci dolore
                        reiciendis aperiam harum delectus, impedit numquam
                        eligendi quas quae!
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </div>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <div style={{margin:"15px 0 15px 0", backgroundColor: "#e2e2e2" }}>
              <Col lg={12}>
                <Row xs={1} md={2}>
                  <Col>
                    <div className="aboutUsTextDiv googleFont">
                      <h1>Our Vision</h1>
                      <p className="aboutUsText">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id qui aliquid aperiam ipsum, dolore unde excepturi
                        corrupti doloremque laborum repudiandae ullam
                        voluptatibus ipsam dignissimos. Beatae eius minus,
                        numquam earum perferendis ex consectetur ducimus nobis
                        alias? Aut mollitia, eos ipsum adipisci dolore
                        reiciendis aperiam harum delectus, impedit numquam
                        eligendi quas quae!
                      </p>
                    </div>
                  </Col>
                  <Col>
                    <div className="aboutUsImgDiv">
                      <img src={vision} alt="" className="w-100 aboutUsImg" />
                    </div>
                  </Col>
                </Row>
              </Col>
            </div>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <div style={{ margin: "15px 0 30px 0 ", backgroundColor: "#e2e2e2" }}>
              <Col lg={12}>
                <Row xs={1} md={2}>
                  <Col>
                    <div className="aboutUsImgDiv">
                      <img src={story} alt="" className="w-100 aboutUsImg" />
                    </div>
                  </Col>
                  <Col>
                    <div className="aboutUsTextDiv googleFont">
                      <h1>Foundation Story</h1>
                      <p className="aboutUsText">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id qui aliquid aperiam ipsum, dolore unde excepturi
                        corrupti doloremque laborum repudiandae ullam
                        voluptatibus ipsam dignissimos. Beatae eius minus,
                        numquam earum perferendis ex consectetur ducimus nobis
                        alias? Aut mollitia, eos ipsum adipisci dolore
                        reiciendis aperiam harum delectus, impedit numquam
                        eligendi quas quae!
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </div>
          </Row>
        </Container>
        <Container>
          <div className="googleFont">
            <div>
              <Row>
                <div className="cardContainer">
                  <Col lg={12}>
                    {" "}
                    <Row xs={1} md={1}>
                      <Col>
                        <div className="ourTeamCardBanner">
                          <span>
                            Our Team
                          </span>
                          <p>
                            Who's behind the scene ?
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </div>
              </Row>
              <Row>
                <div className="cardContainer">
                  <Col lg={12}>
                    
                    <Row xs={2} md={4}>
                      <Col>
                        <Card style={{ width: "auto" }}  className="aboutOurTeamCard">
                          <Card.Img variant="top" src={fakeImg} className="teamImg" />
                          <Card.Body>
                            <Card.Title>Bashir Ahmad Bhat</Card.Title>
                            <Card.Text style={{opacity:".7"}}>
                              Managing Director
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                      <Card style={{ width: "auto" }} className="aboutOurTeamCard">
                          <Card.Img variant="top" src={fakeImg} className="teamImg" />
                          <Card.Body>
                            <Card.Title>Munawar Sultan</Card.Title>
                            <Card.Text style={{opacity:".7"}}>
                              Managing Director
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                      <Card style={{ width: "auto" }}  className="aboutOurTeamCard">
                          <Card.Img variant="top" src={fakeImg} className="teamImg" />
                          <Card.Body>
                            <Card.Title>Parvaiz Ahmad Bhat</Card.Title>
                            <Card.Text style={{opacity:".7"}}>
                              Managing Director
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                      <Card style={{ width: "auto" }}  className="aboutOurTeamCard">
                          <Card.Img variant="top" src={fakeImg} className="teamImg" />
                          <Card.Body>
                            <Card.Title>Arshad Ahmad </Card.Title>
                            <Card.Text style={{opacity:".7"}}>
                              Managing Director
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </div>
              </Row>
             
            </div>
          </div>
        </Container>
      </ParallaxProvider>

      <FooTer />
    </>
  );
};

export default AboutUs;
