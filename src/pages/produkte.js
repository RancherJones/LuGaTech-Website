import React, { useState, useEffect } from 'react';
import { directus } from "../services/directus";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
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
    const decoratedOnClick = useAccordionButton(eventKey);
  
    return (
      <Button variant='outline-info'
        onClick={decoratedOnClick}
      >
        {children}
      </Button>
    );
  }

const datenProdukte = (element) => {
    return (
      <Col xs={12} sm={12} md={6} lg={6} xl={4} className="mt-3">
            <Accordion defaultActiveKey="1">
          <Card>
            <Card.Header>
            <Card.Img variant="top" src={url + element.Bild}/>
            <Card.Title>{element.Produktname}</Card.Title>
            <CustomToggle eventKey="0">Learn More</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
              <Card.Text>{element.Beschreibung}</Card.Text>
              <Button variant='secondary' href='/anfrage/produkt'>Anfrage Senden &#128231;</Button>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Col>)
  }

  if(daten){
  return (
    <div className='mainDiv mb-2 px-1 py-4 rounded' id="bliblup">
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
<div className='mainDiv mb-2 px-1 py-4 rounded'>
<div class="loader">Loading...</div>
    <img
      src="FFFFFF.png"
      alt="Loading..."
    />
</div>
)
};
  
export default Produkte;