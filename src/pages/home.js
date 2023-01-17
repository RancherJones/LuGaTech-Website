import React, { useState, useEffect } from 'react';
import { directus } from "../services/directus";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../App.css";

  
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
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 fluid rounded"
          src={url + daten.Bild_Slide_2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 fluid rounded"
          src={url + daten.Bild_Slide_3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
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
          //console.log(document.getElementById("Text1234"))
          //document.getElementById("Text1234").innerHTML=daten.Text1
          //daten.Text1
          //.replace('"', "")
          }
      </Col>
    </Row>
  </Container>
    
  </div>


/*  
    <div>
      <div>
      <h1>LuGa-Tech</h1>
      <h2>Gas- und Drucklufttechnik</h2>
      <img
      src = {url + daten.data[0].Bild}
      alt = "Logo"/>


      <div>
        <h1>News</h1>

        <h2>{daten.data[0].News_Titel}</h2>

        <p>{daten.data[0].News}</p>
      </div>
      </div>
  </div>

  <div style={{
      boxShadow: '1px 2px 9px #888888',
      marginLeft: '15%',
      marginRight: '15%',
      
      }}>
  */
)
}
return (
  <div>
      <h1>Nothing Here</h1>
  </div>
)
}
  
export default Home