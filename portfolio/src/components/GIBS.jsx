import { useState, useEffect } from "react";

function GIBS (props) {
   const colorMode = props.colorMode;

   const today = new Date().toISOString().split("T")[0];

   const [layer, setLayer] = useState(true);

   const [x, setX] = useState(0);

   const [y, setY] = useState(0);

   const [z, setZ] = useState(0);

   const [t, setT] = useState('default')

   const [upperBoundX, setUpperBoundX] = useState(0);

   const [upperBoundY, setUpperBoundY] = useState(0);

   const [newX, setNewX] = useState(0); 

   const [newY, setNewY] = useState(0); 

   const [newT, setNewT] = useState()

   const [customDate, setCustomDate] = useState(false)

   useEffect(() => {
      const bound = Math.pow(2, z) - 1;
      setUpperBoundX(bound);
      setUpperBoundY(bound);
   }, [z]);

   const zoomIn = () => {
      if (z >= 9) return;
      const gridSize = Math.pow(2, z);
      const newZ = z + 1;
      const newSize = Math.pow(2, newZ);
      const normX = (x + 0.5) / gridSize;
      const normY = (y + 0.5) / gridSize;
      const nextX = Math.floor(normX * newSize);
      const nextY = Math.floor(normY * newSize);
      setX(nextX);
      setY(nextY);
      setZ(newZ);
   }; 

   const zoomOut = () => {
      if (z <= 0) return;
      const gridSize = Math.pow(2, z);
      const newZ = z - 1;
      const newSize = Math.pow(2, newZ);
      const normX = (x + 0.5) / gridSize;
      const normY = (y + 0.5) / gridSize;
      const nextX = Math.floor(normX * newSize);
      const nextY = Math.floor(normY * newSize);
      setX(nextX);
      setY(nextY);
      setZ(newZ);
   }; 

   const routerButton = {
   border: `.2em solid ${(colorMode ? "#6d3b47" : "#2f4858")}`,
   background: (colorMode ? "#282f44" : "#86bbd8"),
   fontFamily: "subMain",
   color: "white",
   margin: ".5em",
   width: "2em",
   height: "fit-content"
  }

  const zoomButton = {
   border: `.2em solid ${(colorMode ? "#6d3b47" : "#2f4858")}`,
   background: (colorMode ? "#282f44" : "#86bbd8"),
   fontFamily: "subMain",
   color: "white",
   margin: ".5em",
   width: "2em",
   height: "fit-content",
   borderRadius: "1em",
   padding: ".2em"
  }

  function addDay() {
   const d = new Date(t);
   d.setDate(d.getDate() + 1);
   setT(d.toISOString().split('T')[0])
  }

  function removeDay() {
   const d = new Date(t);
   d.setDate(d.getDate() - 1);
   setT(d.toISOString().split('T')[0])
  }

   const tileUrl = `${"https://gibs.earthdata.nasa.gov/wmts/epsg3857/best"}/${layer ? "MODIS_Terra_CorrectedReflectance_TrueColor" : "MODIS_Aqua_CorrectedReflectance_TrueColor"}/default/${t}/${"GoogleMapsCompatible_Level9"}/${z}/${y}/${x}.jpg`;

   return (
      <>
      <div style={{display: "flex", flexDirection: "column",margin: "1em", marginLeft: "5em", marginRight: "5em"}}>
            <a style={{fontFamily: "subMain", color: "white", cursor: "pointer"}} href='https://nasa-gibs.github.io/gibs-api-docs/' target='none'>GIBS api docs</a>
      </div>


      <div style={{display: "flex", justifyContent: "center"}}>
         <button type='button' style={{display: (y > 0 ? "block" : "none"),background: "none", border: "none", fontSize: "3.5vw", position: "absolute"}} onClick={() => setY(prev => prev - 1)}>⬆️</button>
         <button type='button' style={{display: (x > 0 ? "block" : "none"),background: "none", border: "none", fontSize: "3.5vw", position: "absolute", marginTop: "1.2em", marginRight: "2.4em"}} onClick={() => setX(prev => prev - 1)}>⬅️</button>
         <button type='button' style={{display: (x < upperBoundX ? "block" : "none"),background: "none", border: "none", fontSize: "3.5vw", position: "absolute", marginTop: "1.2em", marginLeft: "2.4em"}} onClick={() => setX(prev => prev + 1)}>➡️</button>
         <button type='button' style={{display: (y < upperBoundY ? "block" : "none"),background: "none", border: "none", fontSize: "3.5vw", position: "absolute", marginTop: "2.4em"}} onClick={() => setY(prev => prev + 1)}>⬇️</button>
         <img 
            style={{border: `.2em solid ${(colorMode ? "#6d3b47" : "#2f4858")}`, boxShadow: `3px 3px 6px rgba(0, 0, 0, 0.15), 10px 10px 20px rgba(0, 0, 0, 0.1), 15px 15px 30px rgba(0, 0, 0, 0.05)`, width: "50%"}}
            src={tileUrl}
         />
      </div>

      <div style={{display: "flex", color: "white", fontFamily: "subMain", fontSize: '1.8vw', paddingLeft: "28vw", paddingRight: "25vw", alignItems: "center"}}>
         <button style={zoomButton} onClick={e => {e.preventDefault(); zoomOut();}}>-</button> 
         <button style={zoomButton} onClick={e => {e.preventDefault(); zoomIn();}}>+</button>
         <p style={{color: "white", fontFamily: "subMain", fontSize: "1.5vw"}}>{`Zoom Level: ${z}`}</p>
         <p style={{marginLeft: "1em", color: "white", fontFamily: "subMain", fontSize: "1.75vw"}}>{`coordinates (x/y): (${x}/${y})`}</p>
      </div>

      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>

         <div style={{display: "flex", justifyContent: "space-between", width: "60%"}}>

            <form onSubmit={e => {e.preventDefault(); if (newX < 0) return; if (newX > upperBoundX) return; if (newY < 0) return; if (newY > upperBoundY) return; setX(newX); setY(newY); setNewX(0); setNewY(0)}} style={{display: "flex", flexDirection: "column", alignItems: "left"}}>
               <p style={{color: "white", fontFamily: "subMain"}}>{`x coordinate: ${x} - max: ${upperBoundX}`}</p>
               <input type='number' value={newX} onChange={e => setNewX(Number(e.target.value))} />
               <p style={{color: "white", fontFamily: "subMain"}}>{`y coordinate: ${y} - max: ${upperBoundY}`}</p>
               <input type='number' value={newY} onChange={e => setNewY(Number(e.target.value))} />
               <button type="submit" style={{display: "none"}}>submit</button>
               <p style={{color: "white", fontFamily: "subMain"}}>Press Enter to apply changes</p>
            </form>

            <div style={{display: "flex", flexDirection: "column", alignItems: "right"}}>
               <p style={{color: "white", fontFamily: "subMain"}}>{`image date: ${t === 'default' ? "today" : t}`}</p>
               <div style={{display: "flex"}}>
                  <input type='checkbox' checked={customDate} onChange={() => {setCustomDate(prev => !prev); customDate ? setT('default') : setT(new Date().toISOString().split("T")[0])}}/><p style={{color: "white", fontFamily: "subMain"}}>custom date</p>
               </div>
               {customDate && <div style={{display: "flex", justifyContent: "right", alignItems: "center"}}>
                  <p style={{color: "white", fontFamily: "subMain", margin: ".2em"}}>change day</p>
                  <button style={{margin: ".3em", border: `.2em solid ${(colorMode ? "#6d3b47" : "#2f4858")}`, background: (colorMode ? "#282f44" : "#86bbd8"), fontFamily: "main", color: "white"}} type='button' onClick={() => {removeDay()}}>previous</button>
                  <button style={{margin: ".3em", border: `.2em solid ${(colorMode ? "#6d3b47" : "#2f4858")}`, background: (colorMode ? "#282f44" : "#86bbd8"), fontFamily: "main", color: "white", display: (new Date(t) < new Date(today) ? "block" : "none")}} type='button' onClick={() => {addDay()}}>next</button>
               </div>}
               {customDate && <form onSubmit={e => {e.preventDefault(); setT(newT)}}>
                  <input type='date' placeholder={newT} onChange={e => setNewT(e.target.value)}/>  
                  <button type="submit" style={{margin: ".3em", border: `.2em solid ${(colorMode ? "#6d3b47" : "#2f4858")}`, background: (colorMode ? "#282f44" : "#86bbd8"), fontFamily: "main", color: "white"}}>change</button>
               </form>}  

            </div>

         </div>
      </div>
      </>
   )
}

export default GIBS;
