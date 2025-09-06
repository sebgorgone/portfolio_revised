import { useState, useEffect } from "react";

function Apod (props) {

   const colorMode = props.colorMode

   const [apod, setApod] = useState();

   console.log(apod)

   const fetchApod = async () => {
      try {
        console.log('fetching apod data')
        const res = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`
        );
        if (!res.ok) {
          throw new Error(`HTTP 404`);
        }
        const data = await res.json();
        console.log(data)
        setApod(data);
      } catch (err) {
        return
      }
    };

   useEffect(() => {fetchApod()}, [])

   return (

      <div>


      </div>
   );
}

export default Apod;