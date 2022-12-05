import React, { useState, useEffect } from 'react';
import { directus } from "../services/directus";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
  
const Produkte = () => {

  const url_id_palette = 'https://gop4n9bn.directus.app/items/PRODUKTPALETTE'
  const [datenPalette, setdatenPalette] = useState(null)
  const url_id = 'https://gop4n9bn.directus.app/items/PRODUKTE'
  const [daten, setdaten] = useState(null)
  const url = 'https://gop4n9bn.directus.app/assets/'


  useEffect(() => {
    directus.items("PRODUKTPALETTE").readByQuery({})                //Read Many muss ich noch machen damit alles ausgelesen wird
    .then(response => {setdatenPalette(response.data)})
  
  }, [url_id_palette])

  useEffect(() => {
    directus.items("PRODUKTE").readByQuery({})                //Read Many muss ich noch machen damit alles ausgelesen wird
    .then(response => {setdaten(response.data)})
  
  }, [url_id])

const datenProdukte = (element) => {
  return (
  <Col>
    <Card 
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