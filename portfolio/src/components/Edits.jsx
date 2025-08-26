import useViewport from "./useViewport";
import useViewportHeight from "./useViewportHeight";
import EditWidget from "./EditWidget";

function Edits(props) {
   const colorMode = props.colorMode;
   const vpW = useViewport();
   const vpH = useViewportHeight();

   return(
      <>
       <h1 style={{margin: ".3em", marginLeft: (vpW > 500 ? "1em" : "2em"),marginTop: "1.5em", textAlignLast: "center", fontFamily: "main", color: (colorMode ? "#6d3b47" : "#21263b"), fontSize: "calc(5vw + 2em)"}}>Video Editing</h1>

      <p  style={{margin: "1em", marginLeft: "5em", textAlignLast: "left", fontFamily: "main", color: "white", fontSize: "calc(1vw + 1.2em)"}}>
         Since Ive had access to a computer, I have always put together video parts of everthing. Video games, skiing, skating, and then later on skydiving. It really didnt matter. If i had media it was meant to be put into a Non-Linear-Editor.
      </p>

       <p  style={{margin: "1em", marginLeft: "5em", textAlignLast: "left", fontFamily: "main", color: "white", fontSize: "calc(1vw + 1.2em)"}}>
         I make these for fun to post on my instagram
      </p>

      <EditWidget colorMode={colorMode} src={'https://res.cloudinary.com/djuul0yr0/video/upload/v1756240355/Collegiates2024EditCOMPR_skypfr.mov'} videoStyle={{width: "100%", border: "none", height: "calc(.5 * 100vw"}} textContent="This is an edit I made after the 2024 skydiving collegiates nationals"/>

      </> 
   )
}

export default Edits