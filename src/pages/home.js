import React, { useState, useEffect } from 'react';
import { directus } from "../services/directus";
  
function Home(){
  const url_id = 'https://gop4n9bn.directus.app/items/HOME'
  const [daten, setdaten] = useState(null)
  const url = 'https://gop4n9bn.directus.app/assets/'


  useEffect(() => {
    directus.items("HOME").readByQuery({})                //Read Many muss ich noch machen damit alles ausgelesen wird
    .then(response => {setdaten(response)})
  
  }, [url_id])


if(daten){
  return (
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
)
}
return (
  <div>
      <h1>Nothing Here</h1>
  </div>
)
}
  
export default Home