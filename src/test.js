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
  <Carousel.Item>
    <img
      className="d-block w-100 fluid rounded"
      src={url + daten.Bild_Slide_3}
      alt="Third slide"
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