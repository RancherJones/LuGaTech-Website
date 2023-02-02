import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => (
  <Container fluid className="bg-blue text-white py-4">
    <Row>
      <Col xs={12} md={4} className="mx-auto text-center">
        <h5 className='pt-5'>Ihr Partner für Druckluft</h5>
      </Col>
      <Col xs={12} md={4} className="mx-auto text-center">
        <h5 className='pt-5'>Kontakt</h5>
        <ul className="list-unstyled">
          <li><a href="tel:+423 370 1212" className="footer-link">Telefon: +423 370 1212</a></li>
          <li><a href="mailto:office@lugatech.at" className="footer-link">Email: office@lugatech.at</a></li>
        </ul>
      </Col>
      <Col xs={12} md={4} className="mx-auto text-center">
        <h5 className='pt-5'>Anfrage senden</h5>
        <ul className="list-unstyled">
          <li><a href="/anfrage/produkt" className="footer-link">Produkte</a></li>
          <li><a href="/karriere" className="footer-link">Stellenangebote</a></li>
          <li><a href="/anfrage/allgemein" className="footer-link">Allgemein</a></li>
        </ul>
      </Col>
    </Row>
    <Row>
    <Col xs={12} md={6} className="mx-auto text-center">
      <a href="/impressum" className='pt-5 footer-link'>Copyright © 2013 LuGa-Tech. All Rights Reserved.</a>
      </Col>
    </Row>
  </Container>

  
);

export default Footer;
