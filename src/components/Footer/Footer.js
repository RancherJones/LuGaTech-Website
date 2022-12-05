import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyle";
  
const Footer = () => {

  return (
    <Box>
      <h1 style={{ color: "black", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Luga-Tech: Gas- und Drucklufttechnik
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Downloads</Heading>
            <FooterLink href="#">Download1</FooterLink>
            <FooterLink href="#">Download2</FooterLink>
            <FooterLink href="#">Download3</FooterLink>
          </Column>
          <Column>
            <Heading>AG</Heading>
            <FooterLink href="https://www.google.at/maps/place/Wirtschaftspark+31,+9492+Eschen,+Liechtenstein/@47.2075551,9.5324264,17z/data=!3m1!4b1!4m5!3m4!1s0x479b309da3fa652b:0x5a7984e939dbf82a!8m2!3d47.2075515!4d9.5346151?hl=de" target="top">
              Wirtschaftspark 31 9492 Eschen</FooterLink>
            <FooterLink href="tel:+423 370 1212">T: +423 (0) 370 1212</FooterLink>
          </Column>
          <Column>
            <Heading>GmbH</Heading>
            <FooterLink href="https://www.google.at/maps/place/Stra%C3%9Fenh%C3%A4user+41c,+6842+Koblach/@47.3154138,9.6191451,17z/data=!3m1!4b1!4m5!3m4!1s0x479b3e8933f90289:0x76bd0a4f41a18cbe!8m2!3d47.3154102!4d9.6213338?hl=de" target="top">
              Straßenhäuser 41c 6842 Koblach</FooterLink>
            <FooterLink href="tel:+43 5523 51668">T: +43 (0) 5523 51668</FooterLink>
            <FooterLink href="tel:+43 5523 51668 35">F: +43 (0) 5523 51668-35</FooterLink>
            <FooterLink href="mailto:office@lugatech.at">E-Mail: office@lugatech.at</FooterLink>
          </Column>
          <Column>
            <Heading>Links</Heading>
            <FooterLink href="https://www.finicompressors.com/" target="top">
              <i className="fab fa-finicompressors">
                <span style={{ marginLeft: "10px" }}>
                Finicompressors
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.fstweb.de/" target="top">
              <i className="fab fa-fstweb">
                <span style={{ marginLeft: "10px" }}>
                Fstweb
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.compair.com/" target="top">
              <i className="fab fa-compair">
                <span style={{ marginLeft: "10px" }}>
                Compair
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.parker.com/" target="top">
              <i className="fab fa-packer">
                <span style={{ marginLeft: "10px" }}>
                Parker
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <p style={{ color: "#fff",}}>
        Copyright © 2013 LuGa-Tech. All Rights Reserved.
      </p>
    </Box>
  );
};
export default Footer;