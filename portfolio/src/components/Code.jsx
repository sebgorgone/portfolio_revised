import { useState } from "react";
import APIPage from "./Api-Page";

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
   api: false
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
            <button style={router.cloudlog ? selection : routerButton} onClick={e => {e.preventDefault(); setRouter({cloudlog: true, TM: false, blockblast: false, cubes: false, api: false})}}>Cloudlog</button>
            <button style={router.TM ? selection : routerButton} onClick={e => {e.preventDefault(); setRouter({cloudlog: false, TM: true, blockblast: false, cubes: false, api: false})}}>Tassk Management</button>
            <button style={router.blockblast ? selection : routerButton} onClick={e => {e.preventDefault(); setRouter({cloudlog: false, TM: false, blockblast: true, cubes: false, api: false})}}>JS blockblast</button>
            <button style={router.cubes ? selection : routerButton} onClick={e => {e.preventDefault(); setRouter({cloudlog: false, TM: false, blockblast: false, cubes: true, api: false})}}>Turning Cubes</button>
            <button style={router.api ? selection : routerButton} onClick={e => {e.preventDefault(); setRouter({cloudlog: false, TM: false, blockblast: false, cubes: false, api: true})}}>messing with APIs</button>
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
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>I would label this as my first real javascript project. I made this after using p5 to learn javascript, and turned it in for a visual programming final project.</p>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>Theres alot going on in this project and some interactivity mainly serving as debug methods for myself. They do give alot of good insight on how the algorithm is running.</p>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>This project was insipired by a 3blue1brown video on solving puzzles using higher order dimensional reperesentations of them. More info on that in the design process below the frame</p>
               <a style={{fontFamily: "subMain", color: "white", cursor: "pointer"}} href='https://www.youtube.com/watch?v=piJkuavhV50&list=WL&index=3' target='none'>3b1b video</a>
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

            <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", marginLeft: "5em", marginRight: "5em",marginBottom: "2em", flexWrap: "wrap", backgroundColor: (colorMode ? "#373547" : "#33658a"), borderRadius: "1.5vw", padding: "1em", flexDirection: 'column', boxShadow: `3px 3px 6px rgba(0, 0, 0, 0.15), 10px 10px 20px rgba(0, 0, 0, 0.1), 15px 15px 30px rgba(0, 0, 0, 0.05)`}}>
               <img style={{width: "70vw", }} src='https://res.cloudinary.com/djuul0yr0/image/upload/v1756580832/Screenshot_2025-08-30_at_3.06.19_PM_s9epkv.png' />
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>This code base is 1 javascript document and an html index that sources it. Over the course of about 2 and a half months I made this with the goal of turning it in as a digital art project. In turn the code has alot of conditional logic to test different variations of how it is working. Wich is where the mode variable came from.</p>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>clicking on the page above lets you use the keybinds</p>

               <h4 style={{fontFamily: "main", color: "white"}}>b : debug HUD</h4>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>Overlays the Mode, displays when conditional filtering is on, shows when rhombi polarities are fliped to make a tranformation, shows a stress meter for debugging what my scale limit was, displays how many valid cubes are on screen as well as the polarities of the cube it is iterating over. --I go more in depth on the polaraties of the rhombi in the design process below, but they were the biggest hurdle for making this program work as well as integral for some of the conditional logic i would implent after I had achieved a working design. The lines in the debug overlay reperesent polarity, and the dots are valid cubes. The last thing is conditional slip wich works globally to halt conditional filtering periodically.</p>

               <h4 style={{fontFamily: "main", color: "white"}}>v : conditional filtering</h4>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>Conditional filtering was some extra logic I started to mess with later on in the project to try and nudge the algorithm to build 'bigger' cubes. It works by checking if the polarities are all aligned either toward the center or away from the center and only turns thoes cubes. The result is the grid starts to arrange itself into big shelfs and walls, but as this goes on less and less valid cubes exist and in turn the animation slows down. Thats where the conditional slip comes in. Conditional slips allows the algorithm to break this rule periodically often triggering a cascade effect of transformations and helps further push the algorythm to morph the grid. The debug view realy helps to visualize how the polarities affect this outcome, because youll see that the cubes with common polarities will cascade towards a single corner.</p>

               <h4 style={{fontFamily: "main", color: "white"}}>0(zero) : random tile flipping</h4>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>Begins from the start of initialized rhombus array, and checks for valid cubes to turn. Increments by 1 The same algorith as mode 1</p>

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

            <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", marginLeft: "5em", marginRight: "5em",marginBottom: "2em", flexWrap: "wrap", backgroundColor: (colorMode ? "#373547" : "#33658a"), borderRadius: "1.5vw", padding: "1em", flexDirection: 'column', boxShadow: `3px 3px 6px rgba(0, 0, 0, 0.15), 10px 10px 20px rgba(0, 0, 0, 0.1), 15px 15px 30px rgba(0, 0, 0, 0.05)`}}>
               <img style={{width: "70vw", }} src='https://res.cloudinary.com/djuul0yr0/image/upload/v1756586637/Screenshot_2025-04-28_at_12.31.23_PM_ysk0x3.png' />
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>In january of 2025 I was given a due date to hand in a final project proposal for some kind of digital art piece in a class where we were working with javascript (the p5.js library). Coincidentaly I had come across this 3blue 1brown video where he has this animation of rhombus tiles that spin and morph into a 3d like structure. </p>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>His video is super interesting and goes into way more that just how and why this geometric pattern works, but I was instantly grabbed by this mesmorizing animation and thought I could absolutely acheive a generative version of this.</p>

               <h4 style={{fontFamily: "main", color: "white"}}>Starting from zero</h4>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}> I had thought starting out that the easiest way to get to where I was going was to come up with a way to iteratively create these cubes with the corect angles. Wich definetly took alot of trial, error, and math.</p>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>I decided it was easiest  build the cubes one rhombus at a time as they were meant to be able to move around the screen as they flipped. So it started with three rhombi being drawn from a central point all offset 120 degrees from eachother to form the cube.</p>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>From there I got the grid to fill by iteratively placing offset rhombi on the adjacent ends of the initial rhombi from the first cube. This is where the animated initializing period was born from. Its not a bug its a feature!</p>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>Creating the rhombus in this polarity based way where all of the cordinates stem from a common center created alot of challenges for me when trying to get the animation to flip cubes that would form based on previous cube flips. This got me to a point where i could turn the cubes but i could only flip them right back after.</p>

               <h4 style={{fontFamily: "main", color: "white"}}>Geometry and Polarity</h4>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>The Rhombi themselves had an x and y coordinate responsible for their position. they also had an angle (theta) to determine thier orientation. In order to create a rhombille grid that "Tile the plane" as 3Blue1Brown puts it. There need to be 3 rhombi that all consist of 2 sets of both 60 and 120 degree inner angles. If three of these ideal rhombi align at a common point at their 120 degree angles, they can be flipped 180 degrees to fit neatly in the grid while shifting their orientations relative to the surrounding grid. This tranformation effectively shifts the perspective of the three rhombi, and is the basis for the visuals in this project.</p>
               <img style={{width: "30vw", }} src='https://res.cloudinary.com/djuul0yr0/image/upload/v1756588127/Screenshot_2025-04-28_at_12.11.59_PM_dgi3qp.png' />
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>An X and Y would sit at a 120 degree angle of any given rhombus. The rest of the rhmbus is built by setting a point at constant distance or radius from that first point in the direction preset for that given rhombus. Then the last two points are places 60 degrees offset left and right of the last point at the same distance from the initial- creating the two 60 degree angles. I did it this way because of how nicely this fits on a unit circle and i couldnt think of another way how.</p>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>At first i 'spawned' three rhombi or one cube, and tried to do the math to make a properly offset gred for them to be iterated over. However, that approach wasnt working out and I ended up getting frustrated at the math. I then had the idea to just build new rhombi off of the inital 3 in a itterative way. With the exit conditions being the viewport edges plus one rhombus 'radius'. This is what lives in the code now. I also made an alternative 'setupMode', where it would build one big cube from the initial. This was a cool concept because it was apart of 3blue1browns puzzle where he would take the grid from that single cube state to a grid state in the shortest amount of transformations. The animation that followed did not necesscarily get moving fast enough having only one valid cube to start with. I would need a different selection algorithm. I didnt end up incorperating a way to interactively change this unfortunately as it requires a restart of the animation and I didnt think it added enough to my original goal.</p>
               
               <h4 style={{fontFamily: "main", color: "white"}}>Algorithm</h4>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>I struggled here. Once I had gotten the grid geometry down my first instict was to just randomly flip these cubes by adding pi to their rhombi's theta angles. This would give the effect of shifting gemoterys and perspective, but it was limited. The flips would only move the cube once, but any new cubes that formed would never be touched. The result being the same cubes just flipping back and forth and at best making zigzag patterns out of the rhombi. Not close to the big shelves and walls I was looking for in a truley generative design.</p>
               <img style={{width: "50vw", }} src='https://res.cloudinary.com/djuul0yr0/image/upload/v1756604980/Screenshot_2025-04-28_at_12.10.48_PM_rlj0nd.png' />
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>You can see how in this example the random cube flipping does change the grid but over time will keep its stairstep and zigzag like structure. The main reason again was the polarity. It was simple to rotate the cubes around the axis they were built on. But when you had a cube that formed with diferent x and y cordinates- trying to come up with a way to systematically translate thoes rhombi to their new correct location became difficult. So I dumped the idea of going based on the cubes with common center points because that was doomed to fail.</p>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>Then i did it the hard way. Instead of making an array of the cubes that get formed with common center points (initial 120 degree angles), and iterating over it to flip cubes, I iterated over every rhombus. The process goes like this- The algorithm checks every rhombus for valid cubes to flip. It does this by checking if 3 rhombi sit together to make a cube. Then a random rhombus from that subset of valid cubes is chosen to be evaluated. The algorith checks the other rhombi on the grid for shared x and y cordinates with the given rhombus. It does this for both 120 degree angle verticies. If during this process and either one of the angles its checking finds two other matches it then proceeds with the flip process. This starts with checking the polarity of each rhombus compared to the inital one. if they all line up already, then they rotate. If they dont, the algorithm flips the rhombi that arent flipped to be pointing outward from the center so that they all share a common x,y. Then the flip happens. And the algorithm repeats checking the board for valid cubes once again as this state is volitle across transformation.</p>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>This ened up being what I stuck with. Its clunky and slow, and worst of all, I have to limit how many cubes it wants to throw on screen. But its what I wanted and how I wanted it. It achieves the generative part, solves the polarity problem, and allows for some cool conditional things to happen based on how thoes cubes are positioned.</p>
               <img style={{width: "50vw", }} src='https://res.cloudinary.com/djuul0yr0/image/upload/v1756606604/Screenshot_2025-04-28_at_12.03.57_PM_ze5nfo.png' />
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>The debug view really shows off how the conditions affect the outcome of the grid. you can clearly see in this example the break in the pattern from the previous and it is buiding bigger blocks.</p>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>I would encourage cloning the repo and messing with the different parameters for the program</p>

               

            </div>


         </div>}

         {router.api && <div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "5em", marginRight: "5em", flexDirection: "column"}}>
               <p style={{textAlign: "center", color: "white", fontFamily: "subMain"}}>This page is mainly for me to just play with a selection of public APIs</p>
            </div>       

            <APIPage colorMode={colorMode} />

         </div>}

      </div>
   )
}

export default Code;