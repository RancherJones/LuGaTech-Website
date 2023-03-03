import React, { useState, useEffect } from 'react';
import { directus } from "../services/directus";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

  
function Karriere(){
  const url_id = 'https://lugatech.directus.app/items/KARRIERE'
  const [daten, setdaten] = useState(null)
  //const url = 'https://lugatech.directus.app/assets/'


  useEffect(() => {
    directus.items("KARRIERE").readByQuery({})
    .then(response => {
      console.log(response);
      setdaten(response.data)
    })
  
  }, [url_id])


if(daten){
  return (

    <div className='mainDiv mb-2 px-1 py-4 rounded'>
    <Container fluid>
      <Row>
        <Col className='px-4' id="karriere_body" >
        {
          setTimeout(()=>{document.getElementById("karriere_body").innerHTML=daten.Text_Karriere}, 0)
        }
        </Col>
      </Row>
  </Container>

  <div className='Divkarriere mb-2 px-1 py-4 rounded'>
    <a href="/karriere/bewerbung" className="footer-link">Bewerbungsanfrage senden</a>
  </div>
  </div>
)
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
}
  
export default Karriere