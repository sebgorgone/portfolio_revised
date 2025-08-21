import { useState } from 'react'


function App() {


  const {colorMode, setColorMode} = useState(true);

  console.log(colorMode);
  //style

  const headerDiv = {
    display: "flex",
    justifyContent: "space-between",
    margin: "0",
    padding: "0"
  }

  const contactMeDiv = {
    background: (colorMode ? "#282f44" : "#86bbd8"),
    minHieght: "100%",
    minWidth: "20%"
  }
  return (
      <>
      <div style={{position: "fixed", zIndex: "-2", minWidth: "100%", minHeight: "100%", color: (colorMode ? "red" : "black")}}/>
      <div style={headerDiv}>

        <div style={contactMeDiv}></div>

        <label class="switch">
          <input type="checkbox" onChange={() => {setColorMode(!colorMode); console.log(colorMode)}}/>
          <span class="slider round"></span>
        </label>

      </div>

        
      
      </>
  )
}

export default App
