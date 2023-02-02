import React, { useState, useEffect, useRef } from 'react';
import { directus } from "../../services/directus";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import emailjs from '@emailjs/browser';

  
function AnfrageFormProdukt(){
  const url_id = 'https://gop4n9bn.directus.app/items/anfrage_allgemein'
  const [daten, setdaten] = useState(null)
  //const url = 'https://gop4n9bn.directus.app/assets/'
  const form = useRef();


  useEffect(() => {
    directus.items("anfrage_allgemein").readByQuery({})
    .then(response => {
      console.log(response);
      setdaten(response.data)
    })
  
  }, [url_id])

  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [spinner, setSpinner] = useState(null);
  const [submitbuttonLabel, setsubmitbuttonLabel] =useState("Submit form and send Email");
  const target = useRef(null); //Tooltip
  const [emailSuccess, setEmailSuccess] = useState(null);
  const [emailFail, setEmailFail] = useState(null);

  const handleClick = () => {
    setEmailSuccess(null);
    setEmailFail(null);
  };

  const handleSubmit = (event) => {
/*
    //Da werden die Daten aus dem Bootstrap Form aus dem DOM Element
    //genommen und in einem HTML Form umgewandelt
    var formData = new FormData(event.target);
    //DAMIT KANN MAN SICH DIE FROM ELEMENTE IN DIE CONSOLE AUSGEBEN LASSEN
    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
  
    console.log(Object.fromEntries(formData));
  //Ab da isch schluss
*/
    //Wichtig zu merken!!!!!!!
    //Bei <Form.Control> muss ein name="" definiert sein damit man darauf
    //zugreifen kann, und so wird es auch in die API EmailJS dargestellt
    const form = event.target;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      event.preventDefault();
    }
    else {
      setIsLoading(true);
      setSpinner(
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"/>);
      setsubmitbuttonLabel("  Sending...")
      event.preventDefault();
      emailjs
        .sendForm(
          "service_98196cf",
          "template_y2bug3o",
          form,
          "EdfYATFi5sjnfaQvy"
        )
        .then(
          //Success
          (result) => {
            console.log(result.text);
            setIsLoading(false);
            setSpinner(null);
            setsubmitbuttonLabel("Submit form and send Email");
            setEmailSuccess(
            <Overlay target={target.current} show placement="right">
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
                Email has been sent! &#10003;
              </Tooltip>
            )}
          </Overlay>);
          },
          //Error
          (error) => {
            console.log(error.text);
            setIsLoading(false);
            setSpinner(null);
            setsubmitbuttonLabel("Submit form and send Email");
            setEmailFail(
            <Overlay target={target.current} show placement="right">
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
                Email FAILED being sent! &#10007; Please Contact the Owner &#9888;
              </Tooltip>
            )}
          </Overlay>);
          },
        );
    }
    setValidated(true);
  };
  


if(daten){
  return (
    <div className='mainDiv mb-2 px-1 py-4 rounded'>


    <Container fluid>
          {/* Ab da fangt der Body an */}
    <Row>
      <Col id="anfrage_allgemein_body_text" >
          {
            setTimeout(()=>{document.getElementById("anfrage_allgemein_body_text").innerHTML=daten.Text_Allgemeinanfrage}, 0)
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
            placeholder="First name"
            name="first_name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>


        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            name="last_name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className='mb-3'>
      <Form.Group as={Col} controlId="validationCustom03">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" name="email" required/>
        <Form.Control.Feedback type="invalid">
            Please provide a valid Email address.
        </Form.Control.Feedback>
      </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="validationCustom04">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel" placeholder="+43 664 12345678" name="tel" required/>
        <Form.Control.Feedback type="invalid">
            Please provide a valid Phone number.
        </Form.Control.Feedback>
      </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="validationCustom05">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="Subject" name="subject" required/>
        <Form.Control.Feedback type="invalid">
            A Subject is required.
        </Form.Control.Feedback>
      </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="validationCustom06">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" as="textarea" placeholder="Your Message to Us" rows={5} name="message" required/>
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
      <Button ref={target} type="submit" disabled={isLoading} onClick={handleClick}>
        {spinner}{/*  Spinner */}
        {submitbuttonLabel}{/*  Button Label */}
        {emailSuccess}{/*  Success Tooltip */}
        {emailFail}{/*  Failed Tooltip */}
      </Button>
    </Form>
      </Col>
    </Row>
  </Container>
    
  </div>
    
)
}
return (
<div className='mainDiv mb-2 px-1 py-4 rounded'>
<div class="loader">Loading...</div>
    <img
      src="../FFFFFF.png"
      alt="Loading..."
    />
</div>
)
}
  
export default AnfrageFormProdukt