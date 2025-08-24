import { useState, useEffect } from 'react'
import useViewport from './components/useViewport';


function App() {

  const vp = useViewport()

  console.log('window width: ' + vp)


  const [colorMode, setColorMode] = useState(true);

  //style

  const headerDiv = {
    display: "flex",
    justifyContent: "space-between",
    margin: "0",
    padding: "0",
    height: (vp < 900 ? "3em" : "4.5em"),
  }

  const contactMeDiv = {
    background: (colorMode ? "#282f44" : "#86bbd8"),
    border: "none",
    borderBottom: `.25em solid ${(colorMode ? "#6d3b47" : "#2f4858")}`,
    borderRight: `.25em solid ${(colorMode ? "#6d3b47" : "#2f4858")}`,
    height: '100%',
    width: (vp < 900 ? "20%": "30%"),
  }

  const titleCardDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overFlowY: "clip",
    marginTop: "5em"
  }

  const p5Background= {
    border: "none",
    borderRadius: "4em",
    aspectRatio: "2 / 1",
    width: "70%",
    minHeight: "100px"
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
  
  const contactMe = {
    fontSize: "1em"
  }

  //useEffect

  useEffect(() => {console.log(colorMode)}, [colorMode])

  return (
      <>
      <div style={{position: "fixed", zIndex: "-2", minWidth: "100%", minHeight: "100%", backgroundColor: (colorMode ? "#21263b" : "#487b9e")}}></div>



      {/* top bar */}
      <div style={headerDiv}>
        {/* top left corner div el */}
        <div style={contactMeDiv} className="contactMe">
          <h1 style={contactMe}>Contact Me</h1>
        </div>
        {/* color mode */}
        <label class="switch">
          <input type="checkbox" onChange={() => {setColorMode(!colorMode); console.log(colorMode)}}/>
          <span class="slider round"></span>
        </label>

      </div>
      {/* title card div */}

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

        
      
      </>
  )
}

export default App
