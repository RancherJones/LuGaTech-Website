import React, { useState, useEffect } from 'react';
import { directus } from "../services/directus";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

  
const Produkte = () => {

  const url_id_palette = 'https://gop4n9bn.directus.app/items/PRODUKTPALETTE'
  const [datenPalette, setdatenPalette] = useState(null)
  const url_id = 'https://gop4n9bn.directus.app/items/PRODUKTE'
  const [daten, setdaten] = useState(null)
  const url = 'https://gop4n9bn.directus.app/assets/'


  useEffect(() => {
    directus.items("PRODUKTPALETTE").readByQuery({})
    .then(response => {setdatenPalette(response.data)})
  
  }, [url_id_palette])

  useEffect(() => {
    directus.items("PRODUKTE").readByQuery({})
    .then(response => {setdaten(response.data)})
  
  }, [url_id])

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <button
        type="button"
        style={{ backgroundColor: 'pink' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

const datenProdukte = (element) => {
  return (
  <Col xs={12} md={4} className="pt-5">
    {/* <Card 
    style={{width: '18rem',
    height: '35rem',}}>
    <Card.Img variant="top" src={url + element.Bild} />
    <Card.Body>
      <Card.Title>{element.Produktname}</Card.Title>
      <Card.Text>
        {element.Beschreibung}
      </Card.Text>
      <Button variant="primary">Mehr Details</Button>
    </Card.Body>
    </Card> 
        <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="1">
        <Accordion.Header src={url + element.Bild}>{element.Produktname}</Accordion.Header>
        <Accordion.Body>
        {element.Beschreibung}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    */}
        <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
        <Card.Img variant="top" src={url + element.Bild} />
        <Card.Title>{element.Produktname}</Card.Title>
        <CustomToggle eventKey="0">Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
          <Card.Text>{element.Beschreibung}</Card.Text>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </Col>)
}

  if(daten){
  return (
    <div className='mainDiv mb-2 px-1 py-4 rounded'>
    <Container fluid>
      <Row>
        <Col id="produkte_body_beschreibung" >
          {
            setTimeout(()=>{document.getElementById("produkte_body_beschreibung").innerHTML=datenPalette.Produktpalette}, 0)
          }
        </Col>
    </Row>
    <Row>
      {daten.map(datenProdukte)}
    </Row>
  </Container>
  </div>
  );
}
return (
  <div>
      <h1>Nothing Here</h1>
  </div>
)
};
  
export default Produkte;