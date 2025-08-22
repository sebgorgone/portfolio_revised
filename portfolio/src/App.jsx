import { useState, useEffect } from 'react'


function App() {


  const [colorMode, setColorMode] = useState(true);

  //style

  const headerDiv = {
    display: "flex",
    justifyContent: "space-between",
    margin: "0",
    padding: "0",
    height: (window.innerWidth * 2) < window.innerHeight ? "3em" : "2em",
  }

  const contactMeDiv = {
    background: (colorMode ? "#282f44" : "#86bbd8"),
    border: `.1em solid ${(colorMode ? "#6d3b47" : "#2f4858")}`,
    minHieght: ("100%"),
    minWidth: "20%"
  }

  //useEffect

  useEffect(() => {console.log(colorMode)}, [colorMode])

  return (
      <>
      <div style={{position: "fixed", zIndex: "-2", minWidth: "100%", minHeight: "100%", backgroundColor: (colorMode ? "#21263b" : "#487b9e")}}></div>



      {/* top bar */}
      <div style={headerDiv}>
        {/* top left corner div el */}
        <div style={contactMeDiv}></div>
        {/* color mode */}
        <label class="switch">
          <input type="checkbox" onChange={() => {setColorMode(!colorMode); console.log(colorMode)}}/>
          <span class="slider round"></span>
        </label>

      </div>

        
      
      </>
  )
}

export default App
