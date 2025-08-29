
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
   cloudlog: true,
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
         <div>

            <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "5em", marginRight: "5em", flexDirection: "column"}}>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>Cloudlog is my CRUD project app that I made over the summer of 2025. I built it with the intention of learning the react framework, and in turn built the react frontend. I also built the backend in node.js with express.js as my API layer. I used MYSQL for the database and did my best to incorperate as much relational data queries as possible. I implemented my own auth using JSON web tokens for session validation.</p>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>This rendition of the app is meant to work with the local storage in the browser for display. The original app was hosted fully on AWS. I used AWS Amplify for the frontend, lambda functions for the backend, and an ec2 instance for the mysql database.</p>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>check out the frontend published with github pages, or the original fullstack project repo! (links underneath)</p>


            </div>

            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
               <iframe 
                  src='https://sebgorgone.github.io/cloudlog-local/#/login' 
                  style={{width: "75%", height: "50vw", border: `solid .25em ${(colorMode ? "#6d3b47" : "#2f4858")}`, boxShadow: `3px 3px 6px rgba(0, 0, 0, 0.15), 10px 10px 20px rgba(0, 0, 0, 0.1), 15px 15px 30px rgba(0, 0, 0, 0.05)`, borderRadius: ".5em"}}
               />
            </div>
         </div>

      </div>
   )
}

export default Code;