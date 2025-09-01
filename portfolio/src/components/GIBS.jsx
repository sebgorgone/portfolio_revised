
function GIBS (props) {
   const colorMode = props.colorMode;

   return (
      <>
      <div style={{display: "flex", flexDirection: "column",margin: "1em", marginLeft: "5em", marginRight: "5em"}}>
            <a style={{fontFamily: "subMain", color: "white", cursor: "pointer"}} href='https://nasa-gibs.github.io/gibs-api-docs/' target='none'>GIBS api docs</a>
      </div>


      <div style={{display: "flex", justifyContent: "center"}}>
         <img 
            style={{border: `.2em solid ${(colorMode ? "#6d3b47" : "#2f4858")}`, boxShadow: `3px 3px 6px rgba(0, 0, 0, 0.15), 10px 10px 20px rgba(0, 0, 0, 0.1), 15px 15px 30px rgba(0, 0, 0, 0.05)`}}
            src='https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/2012-07-09/250m/6/13/36.jpg'
         />
      </div>

      
      </>
   )
}

export default GIBS;