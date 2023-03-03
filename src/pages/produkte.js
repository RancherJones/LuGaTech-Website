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

  const url_id_palette_erzeugung = 'https://lugatech.directus.app/items/Produktpalette_Erzeugung'
  const [datenPaletteErz, setdatenPaletteErz] = useState(null)
  const url_id_erzeugung = 'https://lugatech.directus.app/items/PRODUKTE_ERZEUGUNG'
  const [datenErz, setdatenErz] = useState(null)

  const url_id_palette_aufbereitung = 'https://lugatech.directus.app/items/Produktpalette_Aufbereitung'
  const [datenPaletteAuf, setdatenPaletteAuf] = useState(null)
  const url_id_aufbereitung = 'https://lugatech.directus.app/items/PRODUKTE_AUFBEREITUNG'
  const [datenAuf, setdatenAuf] = useState(null)
  const url = 'https://lugatech.directus.app/assets/'


  useEffect(() => {
    directus.items("Produktpalette_Erzeugung").readByQuery({})
    .then(response => {setdatenPaletteErz(response.data)})
  
  }, [url_id_palette_erzeugung])

  useEffect(() => {
    directus.items("PRODUKTE_ERZEUGUNG").readByQuery({})
    .then(response => {setdatenErz(response.data)})
  
  }, [url_id_erzeugung])

  useEffect(() => {
    directus.items("Produktpalette_Aufbereitung").readByQuery({})
    .then(response => {setdatenPaletteAuf(response.data)})
  
  }, [url_id_palette_aufbereitung])

  useEffect(() => {
    directus.items("PRODUKTE_AUFBEREITUNG").readByQuery({})
    .then(response => {setdatenAuf(response.data)})
  
  }, [url_id_aufbereitung])

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

const datenProdukteErz = (element) => {
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

  const datenProdukteAuf = (element) => {
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

  if(datenErz && datenAuf){
  return (
    <div className='mainDiv mb-2 px-1 py-4 rounded'>
    <Container fluid>
      <Row>
        <Col id="produkte_erzeugung_body_beschreibung" >
          {
            setTimeout(()=>{document.getElementById("produkte_erzeugung_body_beschreibung").innerHTML=datenPaletteErz.Produktpalette_Erzeugung}, 0)
          }
        </Col>
    </Row>
    <Row>
      {datenErz.map(datenProdukteErz)}
    </Row>
    <Row>
        <Col id="produkte_aufbereitung_body_beschreibung" >
          {
            setTimeout(()=>{document.getElementById("produkte_aufbereitung_body_beschreibung").innerHTML=datenPaletteAuf.Produktpalette_Aufbereitung}, 0)
          }
        </Col>
    </Row>
    <Row>
      {datenAuf.map(datenProdukteAuf)}
    </Row>
  </Container>
  </div>
  );
}
return (
<div className='mainDiv mb-2 px-1 py-4 rounded'>
<div className="loader">Loading...</div>
    <img
      src="FFFFFF.png"
      alt="Loading..."
    />
</div>
)
};
  
export default Produkte;