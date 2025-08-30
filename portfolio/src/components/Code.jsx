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
   cloudlog: false,
   TM: false,
   blockblast: false,
   cubes: true,
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
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>After messing around with the JS libray 'p5.js' I decided id make one of my favorite wastes of time</p>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>This game is ran with the p5 event loop and the highsciore is saved to local cache</p>

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

            <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "5em", marginRight: "5em", flexDirection: "column"}}>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>I would label this as my first real javascript project. I made this after using p5 to learn javascript, and turne it in for a visual programming final project.</p>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>Theres alot going on in this project and some interactivity mainly serving as debug methods for myself. They do give alot of good insight on how the algorithm is running.</p>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>This project was insipired by a 3blue1brown video on solving puzzles using higher order dimensional reperesentations of them. More info on that in the design process below the frame</p>
               <h3 style={{fontFamily: "main", color: "white"}}>⬇️ click to use controls ⬇️</h3>

            </div>

            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
               <iframe 
                  src='https://sebgorgone.github.io/3d-cube-visual-p5js/' 
                  style={{width: "75%", height: "50vw", border: `solid .25em ${(colorMode ? "#6d3b47" : "#2f4858")}`, boxShadow: `3px 3px 6px rgba(0, 0, 0, 0.15), 10px 10px 20px rgba(0, 0, 0, 0.1), 15px 15px 30px rgba(0, 0, 0, 0.05)`, borderRadius: ".5em"}}
               />
            </div>

            <div style={{display: "flex", justifyContent: "space-between", marginLeft: "5em", marginRight: "5em", color: "white", fontFamily: "subMain", fontSize: '1.8vw', }}>
               <p>for modes press: 0-4</p>
               <p>b: debug view</p>
               <p>v: Conditional filtering</p>
            </div>

            <div style={{display: "flex", flexDirection: "column",margin: "1em", marginLeft: "5em", marginRight: "5em"}}>
               <a style={{fontFamily: "subMain", color: "white", cursor: "pointer"}} href='https://github.com/sebgorgone/3d-cube-visual-p5js' target='none'>Turning Cubes Repo</a>
               <a style={{fontFamily: "subMain", color: "white", cursor: "pointer"}} href='https://sebgorgone.github.io/3d-cube-visual-p5js/' title="cloudlog repo" target='none'>Turning Cubes</a>
            </div>

            <h1 style={{ textAlignLast: "center", fontFamily: "main", color: (colorMode ? "#6d3b47" : "#21263b"), fontSize: "5vw"}}>Interaction</h1>

            <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", marginLeft: "5em", marginRight: "5em",marginBottom: "2em", flexWrap: "wrap", backgroundColor: (colorMode ? "#373547" : "#33658a"), borderRadius: "1.5vw", padding: "1em", flexDirection: 'column'}}>
               <img style={{width: "70vw", }} src='https://res.cloudinary.com/djuul0yr0/image/upload/v1756580832/Screenshot_2025-08-30_at_3.06.19_PM_s9epkv.png' />
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>This code base is 1 javascript document and an html index that sources it. Over the course of about 2 and a half months I made this with the goal of turning it in as a digital art project. In turn the code has alot of conditional logic to test different variations of how it is working. Wich is where the mode variable came from.</p>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>clicking on the page above lets you use the keybinds</p>

               <h4 style={{fontFamily: "main", color: "white"}}>b : debug HUD</h4>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>Overlays the Mode, displays when conditional filtering is on, shows when rhombi polarities are fliped to make a tranformation, shows a stress meter for debugging what my scale limit was, displays how many valid cubes are on screen as well as the polarities of the cube it is iterating over. --I go more in depth on the polaraties of the rhombi in the design process below, but they were the biggest hurdle for making this program work as well as integral for some of the conditional logic i would implent after I had achieved a working design. The lines in the debug overlay reperesent polarity, and the dots are valid cubes. The last thing is conditional slip wich works globally to halt conditional filtering periodically.</p>

               <h4 style={{fontFamily: "main", color: "white"}}>v : conditional filtering</h4>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>Conditional filtering was some extra logic I started to mess with later on in the project to try and nudge the algorithm to build 'bigger' cubes. It works by checking if the polarities are all aligned either toward the center or away from the center and only turns thoes cubes. The result is the grid starts to arrange itself into big shelfs and walls, but as this goes on less and less valid cubes exist and in turn the animation slows down. Thats where the conditional slip comes in. Conditional slips allows the algorithm to break this rule periodically often triggering a cascade effect of mutations and helps further push the algorythm to morph the grid. The debug view realy helps to visualize how the polarities affect this outcome, because youll see that the cubes with common polarities will cascade towards a single corner.</p>

               <h4 style={{fontFamily: "main", color: "white"}}>0(zero) : random tile flipping</h4>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>Begins from the start of initialized rhombus array, and checks for valid cubes to turn. Increments by 1- The same algorith as mode 1</p>

               <h4 style={{fontFamily: "main", color: "white"}}>1 : sequential flipping decrementing by 4</h4>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>using the array of all of the indivudual rhombi on screen. This mode iterates in the negative directions by decrements of 4. If the selected rhombus can be flipped (builds a cube) it is flipped. The array is ordered based on the order the rhombi are initialized in.</p>

               <h4 style={{fontFamily: "main", color: "white"}}>2 : sequential flipping incrementing by 1</h4>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>Begins from the start of initialized rhombus array, and checks for valid cubes to turn. Increments by 1- The same algorith as mode 1</p>

               <h4 style={{fontFamily: "main", color: "white"}}>3 : periodically toggles conditional flipping</h4>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>This is Mode 2 with 30 seconds of conditional flipping and 30 seconds of normal flipping.</p>
               <h4 style={{fontFamily: "main", color: "white"}}>4 : click the cubes yourself!</h4>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>Making this one felt like cheating - no algorithm, no iteration, no fun. It is relaxing though</p>


            </div>

            <h1 style={{ textAlignLast: "center", fontFamily: "main", color: (colorMode ? "#6d3b47" : "#21263b"), fontSize: "5vw"}}>Design Process</h1>

            <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", marginLeft: "5em", marginRight: "5em",marginBottom: "2em", flexWrap: "wrap", backgroundColor: (colorMode ? "#373547" : "#33658a"), borderRadius: "1.5vw", padding: "1em", flexDirection: 'column'}}>
               <img style={{width: "70vw", }} src='https://res.cloudinary.com/djuul0yr0/image/upload/v1756586637/Screenshot_2025-04-28_at_12.31.23_PM_ysk0x3.png' />
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>In janurary of 2025 I was given a due date to hand in a final project proposal for some kind of digital art piece in a class where we were working with javascript (the p5.js library). Coincidentaly I had come across this 3blue 1brown video where he has this animation of rhombus tiles that spin and morph into a 3d like structure. </p>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>His video is super interesting and goes into way more that just how and why this geometric pattern works, but I was instantly grabbed by this mesmorizing animation and thought I could absolutely acheive a generative version of this.</p>

               <h4 style={{fontFamily: "main", color: "white"}}>Starting from zero</h4>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}> I had thought starting out that the easiest way to get to where I was going was to come up with a way to iteratively create these cubes with the corect angles. Wich definetly took alot of trial, error, and math.</p>
               <img style={{width: "30vw", }} src='https://res.cloudinary.com/djuul0yr0/image/upload/v1756588127/Screenshot_2025-04-28_at_12.11.59_PM_dgi3qp.png' />
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>I decided it was easiest build the cubes one rhombus at a time as they were meant to be able to move around the screen as they flipped. So it started with three rhombi being drawn from a central point all offset 120 degrees from eachother to form the cube.</p>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>From there I got the grid to fill by iteratively placing offset rhombi on the adjacent ends of the initial rhombi from the first cube. This is where the animated initializing period was born from. Its not a bug its a feature!</p>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>Creating the rhombus in this polarity based way where all of the cordinates stem from a common center created alot of challenges for me when trying to get the animation to flip cubes that would form based on previous cube flips. This got me to a point where i could turn the cubes but i could only flip them right back after.</p>


            </div>


         </div>}

      </div>
   )
}

export default Code;