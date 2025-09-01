import { useState } from "react";
import GIBS from "./GIBS";

function APIPage(props) {

   const colorMode = props.colorMode

   const [router, setRouter] = useState({gibs: true})

   const routerButton = {
   border: `.2em solid ${(colorMode ? "#6d3b47" : "#2f4858")}`,
   background: (colorMode ? "#282f44" : "#86bbd8"),
   fontFamily: "subMain",
   color: "white",
   minWidth: "8em",
   margin: ".5em"

  }

  const selection = {
   border: `.2em solid ${(colorMode ? "#373547" : "white")}`,
   background: (colorMode ? "#6d3b47" : "#2f4858"),
   fontFamily: "subMain",
   color: "white",
   minWidth: "8em",
   margin: ".5em",
   padding: ".5em",
   transition: "0ms"

  }


   return(<div>

      <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", marginLeft: "5em", marginRight: "5em",marginBottom: "2em", flexWrap: "wrap"}}>
            <button style={router.gibs ? selection : routerButton} onClick={e => {e.preventDefault(); setRouter({gibs: true})}}>GIBS Satellite Images</button>
      </div>

      {router.gibs && <GIBS colorMode={colorMode} />}
   </div>)
}

export default APIPage;