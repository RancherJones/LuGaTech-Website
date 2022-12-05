import React, { useState, useEffect, useRef } from 'react';
import { directus } from "../services/directus";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from'react-bootstrap/Container';
import emailjs from '@emailjs/browser';


  
function Service(){
  const url_id = 'https://gop4n9bn.directus.app/items/SERVICE'
  const [daten, setdaten] = useState(null)
  const url = 'https://gop4n9bn.directus.app/assets/'
  const form = useRef();


  useEffect(() => {
    directus.items("SERVICE").readByQuery({})
    .then(response => {
      console.log(response);
      setdaten(response.data)
    })
  
  }, [url_id])

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      event.preventDefault();
    }
    else {
      event.preventDefault();
      emailjs
        .sendForm(
          "service_98196cf",
          "template_y2bug3o",
          form.current,
          "user_EdfYATFi5sjnfaQvy"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("SUCCESS!");
          },
          (error) => {
            console.log(error.text);
            alert("FAILED...", error);
          }
        );
    }

    setValidated(true);
  };
  


  {/*const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_98196cf",
        "template_y2bug3o",
        form.current,
        "EdfYATFi5sjnfaQvy"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("SUCCESS!");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...", error);
        }
      );
  };
*/}

if(daten){
  return (
    <div className='mainDiv mb-2 px-1 py-4 rounded'>


    <Container fluid>
          {/* Ab da fangt der Body an */}
    <Row>
      <Col id="service_body_text" >
          {
            setTimeout(()=>{document.getElementById("service_body_text").innerHTML=daten.Text_Serviceinformation}, 0)
          }
      </Col>
    </Row>
      {/* Forms */}
    <Row>
      <Col>
      <Form ref={form} noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            id="name"
            placeholder="First name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className='mb-3'>
      <Form.Group as={Col} controlId="validationCustom03">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" name="email" id="email" required/>
        <Form.Control.Feedback type="invalid">
            Please provide a valid Email address.
          </Form.Control.Feedback>
      </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="validationCustom04">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel" placeholder="+43 664 12345678" required/>
        <Form.Control.Feedback type="invalid">
            Please provide a valid Phone number.
          </Form.Control.Feedback>
      </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="validationCustom05">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="Subject" required/>
        <Form.Control.Feedback type="invalid">
            A Subject is required.
          </Form.Control.Feedback>
      </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="validationCustom06">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" as="textarea" name="message" id="email_body" placeholder="Your Message to Us" rows={5} required/>
        <Form.Control.Feedback type="invalid">
            Writing something is required.
          </Form.Control.Feedback>
      </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="I agree that my Form will be stored in a private Database"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form and send Email</Button>
    </Form>
      </Col>
    </Row>
  </Container>
    
  </div>
    
)
}
return (
  <div>
      <h1>Nothing Here</h1>
  </div>
)
}
  
export default Service