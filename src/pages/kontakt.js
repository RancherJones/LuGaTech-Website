import React, { useState, useEffect } from 'react';
import { directus } from "../services/directus";
  
function Kontakt(){
  const url = 'https://gop4n9bn.directus.app/items/PRODUKTE'
  const [produkt, setProdukt] = useState(null)

  useEffect(() => {
    directus.items("PRODUKTE").readByQuery({})                 //Read Many muss ich noch machen damit alles ausgelesen wird
    .then(response => {setProdukt(response)})
  
  }, [url])



if(produkt){
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Left',
        alignItems: 'Left',
        height: '100vh'
      }}
    >
      <p>{produkt.data[0].id}</p>
      <p>{produkt.data[0].name}</p>
      <p>{produkt.data[0].description}</p>
      
    </div>
    )
}
return (
  <div>
      <h1>Nothing Here</h1>
  </div>
)
}
  
export default Kontakt