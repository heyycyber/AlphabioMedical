import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";

function ContactusWordLetterCounter() {
  const [text, setText] = useState("");
  //   const wordCount = text.split(/\s+/).filter(Boolean).length;
  const maxletterCount = 600;
  const letterCount = maxletterCount - text.length;

  const handleTextChange = (e) => {
    setText(e.target.value.slice(0, maxletterCount));
  };

  return (
    <>
      <Form.Group as={Col} className="mb-2" controlId="validationCustom01">
        <Form.Label>Message:</Form.Label>
        <Form.Control
          required
          onChange={handleTextChange}
          enabled={!text.slice(maxletterCount - 1)}
          as="textarea"
          type="text"
          placeholder="Message..."
          id="message"
          name="message"
        />
        
      </Form.Group>

      {/* <p className="WordCounter"> 
            Enter Your Message in Less Than 60 Words: 
                {wordCount} 
            </p>  */}
      <p className="LetterCounter">
        Enter Your Message in {letterCount} Letters.
      </p>
    </>
  );
}

export default ContactusWordLetterCounter;
