import React, { useState, useEffect } from 'react';
import { directus } from "../services/directus";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from'react-bootstrap/Container';

  
const Impressum = () => {

  const url_id = 'https://lugatech.directus.app/items/IMPRESSUM'
  //const url = 'https://lugatech.directus.app/assets/'
  const [daten, setdaten] = useState(null)


  useEffect(() => {
    directus.items("IMPRESSUM").readByQuery({})
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
        <Col id="impressum_body_text" >
          {
            setTimeout(()=>{document.getElementById("impressum_body_text").innerHTML=daten.Text_Impressum}, 0)
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
  
export default Impressum