import React, { useState, useEffect } from 'react';
import { directus } from "../services/directus";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from'react-bootstrap/Container';

  
const Unternehmen = () => {

  const url_id = 'https://lugatech.directus.app/items/UNTERNEHMEN'
  const [daten, setdaten] = useState(null)
  //const url = 'https://lugatech.directus.app/assets/'


  useEffect(() => {
    directus.items("UNTERNEHMEN").readByQuery({})
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
        <Col id="unternehmen_body_text" >
          {
            setTimeout(()=>{document.getElementById("unternehmen_body_text").innerHTML=daten.Text_Geschichte_Entwicklung}, 0)
          }
        </Col>
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
  
export default Unternehmen