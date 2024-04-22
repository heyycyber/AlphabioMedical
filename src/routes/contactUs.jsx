import { React,useState } from "react";
import NavBar from "../Components/navbar.jsx";
import FooTer from "../Components/footer.jsx";
import {Card,Form,Col,Row,Button, Container } from "react-bootstrap";
import {SvgIcon,Box} from "@mui/material";
import { useNavigate } from 'react-router-dom';

import {
  LanguageTwoTone,
  MailOutlineTwoTone,
  PhoneTwoTone,
  AccessTimeTwoTone,
  ApartmentTwoTone,
} from "@mui/icons-material";
import { ParallaxProvider } from "react-scroll-parallax";
import { ContactParallex } from "../pallarex/contactParallex.tsx";
import ContactusWordLetterCounter from "../Components/ContactusWordLetterCounter.jsx";

const ContactUs = () => {
  const [validated, setValidated] = useState(false);
  const history = useNavigate();
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      history('/submitted');
    }

    setValidated(true);
  };
  return (
    <div>
      <NavBar />
      {/* <div><ContactUsPallarex/></div> */}
      <ParallaxProvider>
        <ContactParallex />
        <div className="centerParallex  fullParallex "></div>
        <Container>
          <Row>
            <Col lg={12}>
              {" "}
              <Row xs={1} md={2}>
                <Col>
                  <Card
                    className="contactUsCard"
                    style={{ overflow: "hidden", height: "470px" }}
                  >
                    <Card.Body>
                      <div className="d-flex">
                        <span className="">
                          <SvgIcon
                            component={LanguageTwoTone}
                            className="contactUsIcons"
                            fontSize=""
                            inheritViewBox
                          />
                        </span>
                        <span>
                          <Card.Title>
                            <span className=" googleFont"> Get In Touch</span>
                          </Card.Title>
                        </span>
                      </div>

                      <Card.Text className="googleFont contactUsDetails">
                        <Card.Subtitle className="mb-2 text-muted">
                          Our Details
                        </Card.Subtitle>
                        <p className="">
                          <span>
                            <SvgIcon
                              component={ApartmentTwoTone}
                              className="contactUsIcons"
                              fontSize=""
                              inheritViewBox
                            />
                          </span>{" "}
                          this location this location this location, india
                        </p>
                        <p className="">
                          <span>
                            <SvgIcon
                              component={PhoneTwoTone}
                              className="contactUsIcons"
                              fontSize=""
                              inheritViewBox
                            />
                          </span>
                          +91 9876541987
                        </p>
                        <p className="">
                          <span>
                            <SvgIcon
                              component={AccessTimeTwoTone}
                              className="contactUsIcons"
                              fontSize=""
                              inheritViewBox
                            />
                          </span>{" "}
                          09:00 – 18:00 weekdays
                        </p>
                        <p className="">
                          <span>
                            <SvgIcon
                              component={MailOutlineTwoTone}
                              className="contactUsIcons"
                              fontSize=""
                              inheritViewBox
                            />
                          </span>{" "}
                          alphabiomedicalpvtltd@gmail.com
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card
                    className="contactUsCard "
                    style={{ overflow: "auto", height: "470px" }}
                  >
                    <Card.Body>
                      <div className="d-flex">
                        <span className="">
                          <SvgIcon
                            component={MailOutlineTwoTone}
                            className="contactUsIcons"
                            fontSize=""
                            inheritViewBox
                          />
                        </span>
                        <span>
                          <Card.Title>
                            <span className="googleFont">
                              {" "}
                              We Would Love to Help You !!
                            </span>
                          </Card.Title>
                        </span>
                      </div>
                      <Card.Text>
                        <Form
                          noValidate
                          validated={validated}
                          onSubmit={handleSubmit}
                        >
                          <Box className="contactUsForm">
                            <Card.Subtitle className="mb-2 text-muted googleFont">
                              Contact Us
                            </Card.Subtitle>
                            <span></span>

                            <Row xs={1} md={2}>
                              <Form.Group
                                as={Col}
                                className="mb-2"
                                controlId="validationCustom01"
                              >
                                <Form.Label>First name:</Form.Label>
                                <Form.Control
                                  required
                                  type="text"
                                  placeholder="First name"
                                  id="firsrName"
                                />
                                <Form.Control.Feedback>
                                  Looks good!
                                </Form.Control.Feedback>
                              </Form.Group>
                              <Form.Group
                                as={Col}
                                controlId="validationCustom02"
                              >
                                <Form.Label>Last name:</Form.Label>
                                <Form.Control
                                  required
                                  type="text"
                                  placeholder="Last name"
                                  id="lastName"
                                />
                                <Form.Control.Feedback>
                                  Looks good!
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Row>
                            <Row xs={1} md={2}>
                              <Form.Group
                                as={Col}
                                className="mb-2"
                                controlId="validationCustom01"
                              >
                                <Form.Label>Phone no:</Form.Label>
                                <Form.Control
                                  required
                                  type="number"
                                  placeholder="Phone Number"
                                  id="phoneNo"
                                />
                                <Form.Control.Feedback>
                                  Looks good!
                                </Form.Control.Feedback>
                              </Form.Group>
                              <Form.Group
                                as={Col}
                                controlId="validationCustom02"
                              >
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                  required
                                  type="email"
                                  placeholder="Email ID"
                                  id="emailId"
                                />
                                <Form.Control.Feedback>
                                  Looks good!
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Row>
                            <Row xs={1} md={2}>
                              <Form.Group
                                as={Col}
                                className="mb-2"
                                controlId="validationCustom01"
                              >
                                <Form.Label>Subject:</Form.Label>
                                <Form.Control
                                  required
                                  type="text"
                                  placeholder="Subject"
                                  id="subject"
                              
                                />
                                <Form.Control.Feedback>
                                  Looks good!
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Row>
                            <Row xs={1} md={1}>
                             
                              <ContactusWordLetterCounter/>

                            </Row>

                            <Row xs={3} md={4}>
                              <Button
                                type="submit"
                                className="_button googleFont"
                              >
                                Submit!!
                              </Button>
                            </Row>
                            {/* <ContactusWordLetterCounter /> */}
                          </Box>
                        </Form>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </ParallaxProvider>

      <FooTer />
    </div>
    // <SubmittedPage/>
  );
};

export default ContactUs;
