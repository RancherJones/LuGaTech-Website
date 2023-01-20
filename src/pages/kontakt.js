import React, { useState, useEffect } from 'react';
import { directus } from "../services/directus";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
  
function Kontakt(){
  const url_id = 'https://gop4n9bn.directus.app/items/KONTAKT'
  const [daten, setdaten] = useState(null)
  //const url = 'https://gop4n9bn.directus.app/assets/'


  useEffect(() => {
    directus.items("KONTAKT").readByQuery({})
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
          <Col className='px-4' id="konakt_body" >
          {
            setTimeout(()=>{document.getElementById("konakt_body").innerHTML=daten.Text_Kontaktdaten}, 0)
          }
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
  
export default Kontakt