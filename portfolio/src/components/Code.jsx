import { useState } from "react";

function Code (props) {
   const colorMode = props.colorMode;

   const p5Background= {
    border: "none",
    aspectRatio: "2 / 1",
    width: "100%",
    minHeight: "100px",
    boxShadow: `3px 3px 6px rgba(0, 0, 0, 0.15), 10px 10px 20px rgba(0, 0, 0, 0.1), 15px 15px 30px rgba(0, 0, 0, 0.05)`
  }

  const [router, setRouter] = useState({
   cloudlog: true,
   TM: false,
   blockblast: false,
   cubes: false,
  });

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

   return(
      <div style={{marginTop: "3em"}}>
         
         <div style={{display: "flex", height: "calc(20vw)", width: "100vw", justifyContent: "center"}}>
            <iframe style={p5Background}src="src/WALL PAPER/index.html" />
            <h1 style={{position: "absolute", fontFamily: "main", fontSize: "10vw", color: "white", alignSelf: "center"}}>Programming</h1>
         </div>

         <h1 style={{ textAlignLast: "center", fontFamily: "main", color: (colorMode ? "#6d3b47" : "#21263b"), fontSize: "10vw"}}>Projects</h1>

         <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", marginLeft: "5em", marginRight: "5em",marginBottom: "2em", flexWrap: "wrap"}}>
            <button style={router.cloudlog ? selection : routerButton} onClick={e => {e.preventDefault(); setRouter({cloudlog: true, TM: false, blockblast: false, cubes: false})}}>Cloudlog</button>
            <button style={router.TM ? selection : routerButton} onClick={e => {e.preventDefault(); setRouter({cloudlog: false, TM: true, blockblast: false, cubes: false})}}>Tassk Management</button>
            <button style={router.blockblast ? selection : routerButton} onClick={e => {e.preventDefault(); setRouter({cloudlog: false, TM: false, blockblast: true, cubes: false})}}>JS blockblast</button>
            <button style={router.cubes ? selection : routerButton} onClick={e => {e.preventDefault(); setRouter({cloudlog: false, TM: false, blockblast: false, cubes: true})}}>Turning Cubes</button>
         </div>



         {router.cloudlog && <div>

            <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "5em", marginRight: "5em", flexDirection: "column"}}>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>This is CloudLog! A skydiving logbook app aimed to deliver stats and retrospectives to skydivers. Cloudlog is my CRUD project app that I made over the summer of 2025. I built it with the intention of learning the react framework, and in turn built out the frontend in react. I built the backend in node.js with express.js as my API layer. I used MYSQL for the database and did my best to incorperate as much relational data queries as possible. I implemented my own auth using JSON web tokens for session validation.</p>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>This rendition of the app is meant to work with the local storage in the browser for display. The original app was hosted fully on AWS. I used AWS Amplify for the frontend, lambda functions for the backend, and an ec2 instance for the mysql database. Im still in the process of converting the api endpoints to store data in local caches.</p>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>check out the frontend published with github pages, or the original fullstack project repo! (links underneath)</p>


            </div>

            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
               <iframe 
                  src='https://sebgorgone.github.io/cloudlog-local/#/login' 
                  style={{width: "75%", height: "50vw", border: `solid .25em ${(colorMode ? "#6d3b47" : "#2f4858")}`, boxShadow: `3px 3px 6px rgba(0, 0, 0, 0.15), 10px 10px 20px rgba(0, 0, 0, 0.1), 15px 15px 30px rgba(0, 0, 0, 0.05)`, borderRadius: ".5em"}}
               />
            </div>

            <div style={{display: "flex", flexDirection: "column",margin: "1em", marginLeft: "5em", marginRight: "5em"}}>
               <a style={{fontFamily: "subMain", color: "white", cursor: "pointer"}} href='https://github.com/sebgorgone/Cloud-Log' target='none'>Cloudlog repo</a>
               <a style={{fontFamily: "subMain", color: "white", cursor: "pointer"}} href='https://sebgorgone.github.io/cloudlog-local/#/login' title="cloudlog repo" target='none'>Cloudlog UI display</a>
            </div>


         </div>}

         {router.TM && <div>

            <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "5em", marginRight: "5em", flexDirection: "column"}}>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>The infamous 'Todo App'. Ive made a few but this one remains my favorite. I still go and work on it from time to time just because I love it. Built in react and pushed to GitHub pages, I made this to actually use. </p>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>The little monkey 'mascot' guy's name is molasses, 'ass' for short. Hence the name that I still am so proud of.</p>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>All the data is stored in a single object downloaded and uploaded to browser storage.</p>

            </div>

            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
               <iframe 
                  src='https://sebgorgone.github.io/Tassk-Management/' 
                  style={{width: "75%", height: "50vw", border: `solid .25em ${(colorMode ? "#6d3b47" : "#2f4858")}`, boxShadow: `3px 3px 6px rgba(0, 0, 0, 0.15), 10px 10px 20px rgba(0, 0, 0, 0.1), 15px 15px 30px rgba(0, 0, 0, 0.05)`, borderRadius: ".5em"}}
               />
            </div>

            <div style={{display: "flex", flexDirection: "column",margin: "1em", marginLeft: "5em", marginRight: "5em"}}>
               <a style={{fontFamily: "subMain", color: "white", cursor: "pointer"}} href='https://github.com/sebgorgone/Tassk-Management' target='none'>Tassk Management Repo</a>
               <a style={{fontFamily: "subMain", color: "white", cursor: "pointer"}} href='https://sebgorgone.github.io/Tassk-Management/' title="cloudlog repo" target='none'>Tassk Management</a>
            </div>


         </div>}


         {router.blockblast && <div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "5em", marginRight: "5em", flexDirection: "column"}}>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>The infamous 'Todo App'. Ive made a few but this one remains my favorite. I still go and work on it from time to time just because I love it. Built in react and pushed to GitHub pages, I made this to actually use. </p>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>The little monkey 'mascot' guy's name is molasses, 'ass' for short. Hence the name that I still am so proud of.</p>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>All the data is stored in a single object downloaded and uploaded to browser storage.</p>

            </div>

            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
               <iframe 
                  src='https://sebgorgone.github.io/js-blockblast/' 
                  style={{width: "75%", height: "50vw", border: `solid .25em ${(colorMode ? "#6d3b47" : "#2f4858")}`, boxShadow: `3px 3px 6px rgba(0, 0, 0, 0.15), 10px 10px 20px rgba(0, 0, 0, 0.1), 15px 15px 30px rgba(0, 0, 0, 0.05)`, borderRadius: ".5em"}}
               />
            </div>

            <div style={{display: "flex", flexDirection: "column",margin: "1em", marginLeft: "5em", marginRight: "5em"}}>
               <a style={{fontFamily: "subMain", color: "white", cursor: "pointer"}} href='https://github.com/sebgorgone/js-blockblast' target='none'>JS blockblast Repo</a>
               <a style={{fontFamily: "subMain", color: "white", cursor: "pointer"}} href='https://sebgorgone.github.io/js-blockblast/' title="cloudlog repo" target='none'>JS blockblast</a>
            </div>
         </div>}


         {router.cubes && <div>
         </div>}

      </div>
   )
}

export default Code;