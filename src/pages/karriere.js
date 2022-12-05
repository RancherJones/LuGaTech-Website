import React, { useState, useEffect } from 'react';
import { directus } from "../services/directus";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

  
function Karriere(){
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
      
    </div>

)
}
return (
  <div>
      <h1>Nothing Here</h1>
  </div>
)
}
  
export default Karriere