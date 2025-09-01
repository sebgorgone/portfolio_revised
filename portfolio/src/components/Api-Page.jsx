import { useState } from "react";

function APIPage(props) {

   const colorMode = props.colorMode


   return(<div>
      <img src='https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/2012-07-09/250m/6/13/36.jpg'/>
   </div>)
}

export default APIPage;