
function NameCard(props) {

   const colorMode = props.colorMode

   const titleCardDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overFlowY: "clip",
    marginTop: "5em",
    marginLeft: "1.5em"
  }

  const p5Background= {
    border: "none",
    borderRadius: "4em",
    aspectRatio: "2 / 1",
    width: "80%",
    minHeight: "100px",
    boxShadow: `3px 3px 6px rgba(0, 0, 0, 0.15), 10px 10px 20px rgba(0, 0, 0, 0.1), 15px 15px 30px rgba(0, 0, 0, 0.05)`
  }

  const title = {
    fontFamily: "main",
    color: "white",
    fontSize: "4.9vw",
    WebkitTextStroke: (colorMode ? "" : ""),
  }

  const titleCardButton = {
    backgroundColor: (colorMode ? "#282f44" : "#719fb8"),
    border: `.2em solid ${(colorMode ? "#6d3b47" : "#2f4858")}`,
    fontFamily: "subMain",
    color: "white",
    fontSize: "2vw",
    padding: ".2em",
    paddingLeft: ".5em",
    paddingRight: ".5em"
  }

   return (
      <div style={titleCardDiv}>
        <iframe style={p5Background}src="src/WALL PAPER/index.html" />
        
        <div style={{position: "absolute", display: "flex", flexDirection: "column", justifyContent: "space-between", overflow: "clip"}}>
          <h1 style={title}>{`Sebastian Gorgone`}</h1>
          

          <div style={{display: "flex", justifyContent: "space-between", width: "75%", alignSelf: "center"}}>

            <button style={titleCardButton} title='Video Editing'>Edits</button>
            <button style={titleCardButton} title='Programming'>Code</button>
            <button style={titleCardButton} title='Graphic Design'>Design</button>
          </div>
        </div>


      </div>
   )
}

export default NameCard;