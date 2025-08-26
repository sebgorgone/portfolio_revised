import { useState, useEffect } from 'react'
import useViewport from './components/useViewport.js';
import useViewportHeight from './components/useViewportHeight.js';
import NameCard from './components/NameCard.jsx';


function App() {

  const vpW = useViewport()

  const vpH = useViewportHeight()

  console.log(vpH)


  const [colorMode, setColorMode] = useState(true);

  //style

  const headerDiv = {
    display: "flex",
    justifyContent: "space-between",
    margin: "0",
    padding: "0",
    height: (vpW < 900 ? "3em" : "4.5em"),
  }

  const contactMeDiv = {
    background: (colorMode ? "#282f44" : "#86bbd8"),
    border: "none",
    borderBottom: `.25em solid ${(colorMode ? "#6d3b47" : "#2f4858")}`,
    borderRight: `.25em solid ${(colorMode ? "#6d3b47" : "#2f4858")}`,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontFamily: "main",
    borderBottomRightRadius: "1em",
  }
  
  const contactMe = {
    fontSize: "calc(.5em + 1vw)",
    color: "white"
  }

  const menuButton = {
    background: "none",
    border: "none",
  }

  //useEffect


  return (
      <>
      <div style={{position: "fixed", zIndex: "-2", minWidth: "100%", minHeight: "100%", backgroundColor: (colorMode ? "#21263b" : "#487b9e")}}></div>

      {/* MENU BAR */}
      <div style={{position: "fixed",display: "flex", flexDirection: "column", justifyContent: "space-between", zIndex: "2", width: "50px", height: '250px',background: (colorMode ? "#6d3b47" : "#21263b"), marginTop: (vpH > 800 ? "20em" : "10em"), borderTopRightRadius: "1em", borderBottomRightRadius: "1em", padding: ".5em"}}>

        <button style={menuButton} title='Edits'><img style={{aspectRatio: "1/1", width: "2em"}} src='src/assets/video-camera-svgrepo-com.svg' /></button>
        <button style={menuButton} title='code'><img style={{aspectRatio: "1/1", width: "2.4em"}} src='src/assets/code-svgrepo-com.svg'/></button>
        <button style={menuButton} title='Graphic Design'><img style={{aspectRatio: "1/1", width: "2em"}} src='src/assets/pencil-svgrepo-com.svg'/></button>
        <button style={menuButton} title='Home'><img style={{aspectRatio: "1/1", width: "2.6em"}} src='src/assets/home-svgrepo-com.svg'/></button>

        
      </div>



      {/* top bar */}
      <div style={headerDiv}>
        {/* top left corner div el */}
        <div style={contactMeDiv} className="contactMe">
          <h1 style={contactMe} >Contact Me</h1>

          <button><img title='LinkedIn' style={{aspectRatio: "1/1", width: "2em"}} src='src/assets/linkedin-rounded-svgrepo-com.svg'/></button>
          <button><img title='GitHub' style={{aspectRatio: "1/1", width: "2.4em"}} src='src/assets/github-svgrepo-com.svg'/></button>
          <button><img title='Instagram' style={{aspectRatio: "1/1", width: "2.7em"}} src='src/assets/instagram-svgrepo-com.svg'/></button>
          <button><img title='Email Me' style={{aspectRatio: "1/1", width: "2.4em"}} src='src/assets/email-svgrepo-com.svg'/></button>

        </div>


        {/* color mode */}
        <label class="switch">
          <input type="checkbox" onChange={() => {setColorMode(!colorMode)}}/>
          <span class="slider round"></span>
        </label>

      </div>


      <div style={{marginLeft: (vpW > 500 ? "0em" : "2em")}}><NameCard colorMode={colorMode} /></div>


        
      
      </>
  )
}

export default App
