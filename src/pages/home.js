import React, { useState, useEffect } from 'react';
import { directus } from "../services/directus";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
  
function Home(){
  const url_id = 'https://gop4n9bn.directus.app/items/HOME'
  const [daten, setdaten] = useState(null)
  const url = 'https://gop4n9bn.directus.app/assets/'


  useEffect(() => {
    directus.items("HOME").readByQuery({})
    .then(response => {
      console.log(response);
      setdaten(response.data)
    })
  
  }, [url_id])


if(daten){
  return (
    <div className='mainDiv mb-2 px-1 py-4 rounded'>
    <Container fluid>
      {/* Carousel */}
    <Row>
      <Col>
      <Carousel variant="light">
      <Carousel.Item>
        <img
          className="d-block w-100 fluid rounded"
          src={url + daten.Bild_Slide_1}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* Da kann man eine Beschriftung rein tun */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 fluid rounded"
          src={url + daten.Bild_Slide_2}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* Da kann man eine Beschriftung rein tun */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </Col>
    </Row>
    {/* Ab da fangt der Body an */}
    <Row>
      <Col className='px-4' id="home_body_news" >
          {
            setTimeout(()=>{document.getElementById("home_body_news").innerHTML=daten.Text_Home}, 0)
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
  
export default Home