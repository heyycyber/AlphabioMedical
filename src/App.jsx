import "./App.css";
import Carousel from "react-bootstrap/Carousel";
import carousel1 from "./Images/carousel1.jpg";
import carousel2 from "./Images/carousel2.jpg";
import carousel3 from "./Images/carousel3.png";
import fakeImg from "./Images/fakeImg.jpg";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import SvgIcon from "@mui/material/SvgIcon";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import NavBar from "./Components/navbar";
import FooTer from "./Components/footer";
import EmailContactForm from"./Components/EmailForm.jsx"
import NewProducts from"./Components/NewProducts.jsx"
import emailjs from '@emailjs/browser';
import { useEffect } from "react";
// import dnaBg from "./Video/dnaBg.mp4";
// import Home from './Components/home';
// import { positions } from "@mui/system";

function App() {
  useEffect(() => emailjs.init("stdMHKtmUzsc-CAo4"), []);
  return (
    <>
      <NavBar />

      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block w-100" alt="First slide" src={carousel1} />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel2} alt="Second slide" />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel3} alt="Third slide" />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container fluid className="cardContainer">
        <Row>
          <Col lg={9}>
            {" "}
            <Row xs={1} md={3}>
              <Col>
                <Card className="_card">
                  <Card.Body>
                    <div className="d-flex">
                      <span className="cardVerticalLine"></span>
                      <span>
                        <Card.Title>
                          <span className="cardS_no googleFont">01</span>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Evolution
                        </Card.Subtitle>
                      </span>
                    </div>
                    <Card.Text>
                      <p className="cardText googleFont">
                        A branded and quality service, we stand to provide
                        relief with very drop of a liquid formulation our
                        factory deliver satisfaction to every patient who is
                        prescribed our brands.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="_card">
                  <Card.Body>
                    <div className="d-flex">
                      <span className="cardVerticalLine"></span>
                      <span>
                        <Card.Title>
                          <span className="cardS_no googleFont">02</span>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Governance
                        </Card.Subtitle>
                      </span>
                    </div>
                    <Card.Text>
                      <p className="cardText googleFont">
                        We operate at high ethical standards and are committed
                        towards building the organization on our core values.Our
                        approach is built upon a set of strong principles for
                        our management
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="_card">
                  <Card.Body>
                    <div className="d-flex">
                      <span className="cardVerticalLine"></span>
                      <span>
                        <Card.Title>
                          <span className="cardS_no googleFont">03</span>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Quality
                        </Card.Subtitle>
                      </span>
                    </div>
                    <Card.Text>
                      <p className="cardText googleFont">
                        Our quality is the reason that keeps the production
                        lines busy with manufacturing-outsourcing and handling
                        new proposals from many pharma companies
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row xs={1} md={3}>
              <Col>
                <Card className="_card">
                  <Card.Body>
                    <div className="d-flex">
                      <span className="cardVerticalLine"></span>
                      <span>
                        <Card.Title>
                          <span className="cardS_no googleFont">04</span>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Strategic Priority
                        </Card.Subtitle>
                      </span>
                    </div>
                    <Card.Text>
                      <p className="cardText googleFont">
                        Alphabio plans to scale up its domestic operations
                        through expansion of product portfolio as well as field
                        force. The front new introductions are already planned.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="_card">
                  {" "}
                  <Card.Body>
                    <div className="d-flex">
                      <span className="cardVerticalLine"></span>
                      <span>
                        <Card.Title>
                          <span className="cardS_no googleFont">05</span>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Our Community
                        </Card.Subtitle>
                      </span>
                    </div>
                    <Card.Text>
                      <p className="cardText googleFont">
                        A strong pan-India presence carrying ALPHABIO brands to
                        multiple clinicians spread across the specialties.We
                        plan to expand and carry our brands to a huge number of
                        doctors.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="_card">
                  {" "}
                  <Card.Body>
                    <div className="d-flex">
                      <span className="cardVerticalLine"></span>
                      <span>
                        <Card.Title>
                          <span className="cardS_no googleFont">06</span>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Our Contribution
                        </Card.Subtitle>
                      </span>
                    </div>
                    <Card.Text>
                      <p className="cardText googleFont">
                        We serve as a manufacturing facility for select
                        companies & institutions who are equally committed to
                        the philosophy of offering quality products to the
                        mankind.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col lg={3}>
            <p className="newProductLaunchTitle googleFont">
              <span>
                <SvgIcon
                  component={FiberNewIcon}
                  className="newProductGif"
                  fontSize="large"
                  inheritViewBox
                />{" "}
              </span>
              New Launch Products
            </p>

            <NewProducts/>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        {/* <div style={{ position: "relative" }}>
          <video
            src={dnaBg}
            autoPlay
            loop
            muted
            preload
            className="dnaVid bordor"
          />
          <div className="dnaText">
            <Row>
              <Col sm={6}>
                <Card className="_card">
                  {" "}
                  <Card.Body>
                    <div className="d-flex">
                      <span className="cardVerticalLine"></span>
                      <span>
                        <Card.Title>
                          <span className="cardS_no googleFont">
                            Numbers Doesn't Lie
                          </span>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          What Makes us Special
                        </Card.Subtitle>
                      </span>
                    </div>
                    <Card.Text>
                      <p className="cardText googleFont">
                        We serve as a manufacturing facility for select
                        companies & institutions who are equally committed to
                        the philosophy of offering quality products to the
                        mankind.
                      </p>
                    </Card.Text>
                    <button className="_button"> Read More</button>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6}>
                <img
                  className="d-block w-90"
                  alt="First slide"
                  src={fakeImg}
                  viewBox="0 0 24 24"
                />
              </Col>
            </Row>
          </div>
        </div> */}
        <Card className="__card">
          {" "}
          <Card.Body>
            <div className="d-flex">
              <span className="cardVerticalLine"></span>
              <span>
                <Card.Title>
                  <span className="cardS_no googleFont">
                    We would love to help you!
                  </span>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Contact Us
                </Card.Subtitle>
              </span>
            </div>
            <Card.Text>
             
              <EmailContactForm/>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <FooTer />
    </>
  );
}

export default App;
