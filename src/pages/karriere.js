import React, { useState, useEffect } from 'react';
import { directus } from "../services/directus";

  
function Karriere(){
  const url_id = 'https://gop4n9bn.directus.app/items/KARRIERE'
  const [daten, setdaten] = useState(null)
  //const url = 'https://gop4n9bn.directus.app/assets/'


  useEffect(() => {
    directus.items("KARRIERE").readByQuery({})
    .then(response => {
      console.log(response);
      setdaten(response.data)
    })
  
  }, [url_id])


if(daten){
  return (
    <div className='mainDiv mb-2 px-1 py-4 rounded'>
      <li><a href="/karriere/bewerbung" className="footer-link">Stellenangebote</a></li>

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