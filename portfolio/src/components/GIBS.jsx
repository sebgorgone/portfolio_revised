import { useState, useEffect } from "react";

function GIBS (props) {
   const colorMode = props.colorMode;

   const [layer, setLayer] = useState(true);

   const [x, setX] = useState(0);

   const [y, setY] = useState(0);

   const [z, setZ] = useState(0);

   const [t, setT] = useState('2021-10-08')

   const [upperBoundX, setUpperBoundX] = useState(0);

   const [upperBoundY, setUpperBoundY] = useState(0);

   useEffect(() => {
      setUpperBoundX(Math.pow(2, z) - 1);
      setUpperBoundY(Math.pow(2, z) - 1);
      console.log(Math.pow(2, z) - 1);

      if (x > (Math.pow(2, z) - 1)) {
         setX(0);
      };
      if (y > (Math.pow(2, z) - 1)) {
         setY(0);
      };
   }, [z]);

   const routerButton = {
   border: `.2em solid ${(colorMode ? "#6d3b47" : "#2f4858")}`,
   background: (colorMode ? "#282f44" : "#86bbd8"),
   fontFamily: "subMain",
   color: "white",
   margin: ".5em",
   width: "2em",
   height: "fit-content"
  }

   const tileUrl = `${"https://gibs.earthdata.nasa.gov/wmts/epsg3857/best"}/${layer ? "MODIS_Terra_CorrectedReflectance_TrueColor" : "MODIS_Aqua_CorrectedReflectance_TrueColor"}/default/${t}/${"GoogleMapsCompatible_Level9"}/${z}/${y}/${x}.jpg`;

   return (
      <>
      <div style={{display: "flex", flexDirection: "column",margin: "1em", marginLeft: "5em", marginRight: "5em"}}>
            <a style={{fontFamily: "subMain", color: "white", cursor: "pointer"}} href='https://nasa-gibs.github.io/gibs-api-docs/' target='none'>GIBS api docs</a>
      </div>


      <div style={{display: "flex", justifyContent: "center"}}>
         <img 
            style={{border: `.2em solid ${(colorMode ? "#6d3b47" : "#2f4858")}`, boxShadow: `3px 3px 6px rgba(0, 0, 0, 0.15), 10px 10px 20px rgba(0, 0, 0, 0.1), 15px 15px 30px rgba(0, 0, 0, 0.05)`, width: "40%"}}
            src={tileUrl}
         />
      </div>

      <div style={{display: "flex", color: "white", fontFamily: "subMain", fontSize: '1.8vw', paddingLeft: "25vw", paddingRight: "25vw", marginLeft: "0"}}>
         <button style={routerButton} onClick={e => {e.preventDefault(); if (z > 0) {setZ(prev => prev - 1)}}}>-</button>
         <button style={routerButton} onClick={e => {e.preventDefault(); if (z < 9) {setZ(prev => prev + 1)}}}>+</button>      
         <p style={{color: "white", fontFamily: "subMain"}}>{`Zoom Level: ${z}`}</p>

      </div>

      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
         <button type='button' style={{display: (y > 0 ? "block" : "none"),background: "none", border: "none", fontSize: "4vw"}} onClick={() => setY(prev => prev - 1)}>⬆️</button>
         <div style={{display: "flex", justifyContent: "center"}}>
            <button type='button' style={{display: (x > 0 ? "block" : "none"),background: "none", border: "none", fontSize: "4vw"}} onClick={() => setX(prev => prev - 1)}>⬅️</button>
            <button type='button' style={{display: (x < upperBoundX ? "block" : "none"),background: "none", border: "none", fontSize: "4vw"}} onClick={() => setX(prev => prev + 1)}>➡️</button>
         </div>
         <button type='button' style={{display: (y < upperBoundY ? "block" : "none"),background: "none", border: "none", fontSize: "4vw"}} onClick={() => setY(prev => prev + 1)}>⬇️</button>
      </div>


      </>
   )
}

export default GIBS;