import { useState, useEffect } from 'react'
import useViewport from './components/useViewport.js';
import useViewportHeight from './components/useViewportHeight.js';
import NameCard from './components/NameCard.jsx';
import Footer from './components/footer.jsx';
import Edits from './components/Edits.jsx';
import Code from './components/Code.jsx';


function App() {

  const vpW = useViewport();

  const vpH = useViewportHeight();



  const [colorMode, setColorMode] = useState(true);

  const [router, setRouter] = useState({home: false, edits: false, design: false, code: true,});

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
      <div style={{ boxShadow: `3px 3px 6px rgba(0, 0, 0, 0.15), 10px 10px 20px rgba(0, 0, 0, 0.1), 15px 15px 30px rgba(0, 0, 0, 0.05)`, position: "fixed",display: "flex", flexDirection: "column", justifyContent: "space-between", zIndex: "2", width: "50px", height: '250px',background: (colorMode ? "#6d3b47" : "#21263b"), marginTop: (vpH > 800 ? "20em" : "10em"), borderTopRightRadius: "1em", borderBottomRightRadius: "1em", padding: ".5em"}}>

        <button onClick={() => {setRouter({home: false, edits: true, code: false, design: false})}} style={menuButton}  type="button" title='Edits'><img style={{aspectRatio: "1/1", width: "2em"}} src='src/assets/video-camera-svgrepo-com.svg' /></button>
        <button onClick={() => {setRouter({home: false, edits: false, code: true, design: false})}} style={menuButton}  type="button" title='code'><img style={{aspectRatio: "1/1", width: "2.4em"}} src='src/assets/code-svgrepo-com.svg'/></button>
        <button onClick={() => {setRouter({home: false, edits: false, code: false, design: true})}} style={menuButton}  type="button" title='Graphic Design'><img style={{aspectRatio: "1/1", width: "2em"}} src='src/assets/pencil-svgrepo-com.svg'/></button>
        <button onClick={() => {setRouter({home: true, edits: false, code: false, design: false})}} style={menuButton}  type="button" title='Home'><img style={{aspectRatio: "1/1", width: "2.6em"}} src='src/assets/home-svgrepo-com.svg'/></button>

        
      </div>



      {/* top bar */}
      <div style={headerDiv}>
        {/* top left corner div el */}
        <div style={contactMeDiv} className="contactMe">
          <h1 style={contactMe} >Contact Me</h1>

          <button type="button"><img title='LinkedIn' style={{aspectRatio: "1/1", width: "2em"}} src='src/assets/linkedin-rounded-svgrepo-com.svg'/></button>
          <button type="button"><img title='GitHub' style={{aspectRatio: "1/1", width: "2.4em"}} src='src/assets/github-svgrepo-com.svg'/></button>
          <button type="button"><img title='Instagram' style={{aspectRatio: "1/1", width: "2.7em"}} src='src/assets/instagram-svgrepo-com.svg'/></button>
          <button type="button"><img title='Email Me' style={{aspectRatio: "1/1", width: "2.4em"}} src='src/assets/email-svgrepo-com.svg'/></button>

        </div>


        {/* color mode */}
        <label className="switch">
          <input type="checkbox" onChange={() => {setColorMode(!colorMode)}}/>
          <span className="slider round"></span>
        </label>

      </div>

    {/* home */}
      {router.home && <div>
        <div style={{marginLeft: (vpW > 500 ? "0em" : "2em")}}><NameCard colorMode={colorMode} /></div>

          <h1 style={{marginLeft: (vpW > 500 ? ".5em" : "2em"), textAlignLast: "center", fontFamily: "main", color: (colorMode ? "#6d3b47" : "#21263b"), fontSize: "calc(5vw + 2em)"}}>About me</h1>
          <p  style={{margin: "1em", marginLeft: "5em", textAlignLast: "left", fontFamily: "main", color: "white", fontSize: "calc(1vw + 1.2em)"}}>
            My name is Sebastian! I am a Undergraduate Student at the University of Connecticut. I am studying Digital Media and Design, and im interested in UX/UI and web development.
          </p>
          <p  style={{margin: "1em", marginLeft: "5em", textAlignLast: "left", fontFamily: "main", color: "white", fontSize: "calc(1vw + 1.2em)"}}>
             I love skiing and skydiving, and putting together video edits of those things as well.
          </p>

          <div style={{display: "flex", justifyContent: "space-around", marginLeft: (vpW > 500 ? "3.5em" : "2em")}}>
            <img src='https://res.cloudinary.com/djuul0yr0/image/upload/v1756232243/sitfly_fti5vq.jpg' style={{boxShadow: `2px 2px 5px rgba(0, 0, 0, 0.15), 10px 10px 20px rgba(0, 0, 0, 0.1), 15px 15px 30px rgba(0, 0, 0, 0.05)`, borderRadius: (vpW < 600 ? "45px" : "2em"), aspectRatio: "2 / 3", width: "30%", border: `solid .3em ${(colorMode ? "#6d3b47" : "#21263b")}`}} />
            <img style={{boxShadow: `2px 2px 5px rgba(0, 0, 0, 0.15), 10px 10px 20px rgba(0, 0, 0, 0.1), 15px 15px 30px rgba(0, 0, 0, 0.05)`, borderRadius: (vpW < 600 ? "45px" : "2em"), width: "50%", border: `solid .3em ${(colorMode ? "#6d3b47" : "#21263b")}`}} src='https://res.cloudinary.com/djuul0yr0/image/upload/v1756233437/IMG_0366_but2kx.jpg' />

          </div>

          <h1 style={{margin: ".3em",marginLeft: (vpW > 500 ? "1.2em" : "2em"),marginTop: "1.5em", textAlignLast: "center", fontFamily: "main", color: (colorMode ? "#6d3b47" : "#21263b"), fontSize: "calc(5vw + 1.8em)"}}>JS blockblast</h1>

          <p  style={{margin: "1em", marginLeft: "3em", textAlign: "center", fontFamily: "main", color: "white", fontSize: "calc(1vw + 1.2em)"}}>
            I made this using p5.js, and thought it would be a good fit for the landing page. Enjoy!
          </p>
                      {/* MAKE CODE BE A SUDO HYPERLINK */}
          <p  style={{margin: "1em", marginLeft: "3em", textAlign: "center", fontFamily: "main", color: "white", fontSize: "calc(1vw + 1.2em)"}}>
            More programming projects are on the code page.
          </p>

          <div style={{display: "flex", justifyContent: "center", marginLeft: "2em"}}>
            <iframe style={{width: "100%", height: "45vw", border: "none"}} src='src/BZBLAST/index.html' />
          </div>

        </div>}


      {/* router */}

      {router.edits && <div>

        <Edits colorMode={colorMode} />

      </div>}

      {router.code && <div>
        <Code colorMode={colorMode} />  
      </div>}

      {router.design && <div></div>}
      


      <Footer colorMode={colorMode} />  
      
      </>
  )
}

export default App
