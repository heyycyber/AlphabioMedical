import { React,useState,useRef } from "react";
import emailjs from "@emailjs/browser";
import {Card,Form,Col,Row,Button} from "react-bootstrap";
import {SvgIcon,Box} from "@mui/material";
import WordLetterCounter from "./HomeWordLetterCounter.jsx";
import { useNavigate } from 'react-router-dom';

const EmailContactForm = () => {
  const form = useRef();

//   const sendEmail = () => {
//     e.preventDefault(); // prevents the page from reloading when you hit “Send”

    
//   };
  const [validated, setValidated] = useState(false);
  const history = useNavigate();
  const sendEmail = (event) => {
    const formm = event.currentTarget;
    if (formm.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
        emailjs
      .sendForm(
        "service_1atncw9",
        "template_rlkmy2d",
        form.current,
        "stdMHKtmUzsc-CAo4"
      )
      .then(
        (result) => {
          // show the user a success message
        },
        (error) => {
          // show the user an error
        }
      );
      history('/submitted');
    }

    setValidated(true);
  };

  return (
    <>
     <Form
    noValidate
    validated={validated}
    onSubmit={sendEmail}
    ref={form}
  >
    <Box className="contactUsForm">
     

      <Row xs={1} md={2}>
        <Form.Group
          as={Col}
          className="mb-2"
          controlId="validationCustom01"
        >
          <Form.Label>Name:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
            name="user_name"
          />
          <Form.Control.Feedback>
            Looks good!
          </Form.Control.Feedback>
        </Form.Group>
        
      </Row>
      <Row xs={1} md={2}>
        
        <Form.Group
          as={Col}
          controlId="validationCustom02"
        >
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Email ID"
            name="user_email"
          />
          <Form.Control.Feedback>
            Looks good!
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      
      <Row xs={1} md={1}>
       
        <WordLetterCounter/>

      </Row>

      <Row xs={4} md={6}>
        <Button
          type="submit"
          className="_button googleFont"
        >
          Submit!!
        </Button>
      </Row>
      {/* <ContactusWordLetterCounter /> */}
    </Box>
  </Form></>
  );
};

export default EmailContactForm;
