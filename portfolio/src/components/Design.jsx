import useViewport from "./useViewport";
import useViewportHeight from "./useViewportHeight";

function Design(props) {
   const colorMode = props.colorMode;
   const vpW = useViewport();
   const vpH = useViewportHeight();

   return(
      <>
       <h1 style={{margin: ".3em", marginLeft: (vpW > 500 ? "1em" : "2em"),marginTop: "1.5em", textAlignLast: "center", fontFamily: "main", color: (colorMode ? "#6d3b47" : "#21263b"), fontSize: "calc(5vw + 2em)"}}>Graphic Design</h1>

      <p  style={{margin: "1em", marginLeft: "5em", textAlignLast: "left", fontFamily: "main", color: "white", fontSize: "calc(1vw + 1.2em)"}}>
         
      </p>



      </> 
   )
}

export default Design