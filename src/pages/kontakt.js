import React, { useState, useEffect } from 'react';
import { directus } from "../services/directus";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
  
function Kontakt(){
  const url_id = 'https://lugatech.directus.app/items/KONTAKT'
  const [daten, setdaten] = useState(null)
  //const url = 'https://lugatech.directus.app/assets/'


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
<div className='mainDiv mb-2 px-1 py-4 rounded'>
<div className="loader">Loading...</div>
    <img
      src="FFFFFF.png"
      alt="Loading..."
    />
</div>
)
}
  
export default Kontakt