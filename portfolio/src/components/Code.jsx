
function Code (props) {
   const colorMode = props.colorMode;

   const p5Background= {
    border: "none",
    aspectRatio: "2 / 1",
    width: "100%",
    minHeight: "100px",
    boxShadow: `3px 3px 6px rgba(0, 0, 0, 0.15), 10px 10px 20px rgba(0, 0, 0, 0.1), 15px 15px 30px rgba(0, 0, 0, 0.05)`
  }

  const router = {
   cloudlog: false,
   TM: false,
   blockblast: false,
   cubes: false,

  }

   return(
      <div style={{marginTop: "3em"}}>
         
         <div style={{display: "flex", height: "calc(20vw)", width: "100vw", justifyContent: "center"}}>
            <iframe style={p5Background}src="src/WALL PAPER/index.html" />
            <h1 style={{position: "absolute", fontFamily: "main", fontSize: "10vw", color: "white", alignSelf: "center"}}>Programming</h1>
         </div>

         <h1 style={{ textAlignLast: "center", fontFamily: "main", color: (colorMode ? "#6d3b47" : "#21263b"), fontSize: "10vw"}}>Projects</h1>

         <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <iframe src='https://sebgorgone.github.io/cloudlog-local/#/login' />
         </div>
      </div>
   )
}

export default Code;