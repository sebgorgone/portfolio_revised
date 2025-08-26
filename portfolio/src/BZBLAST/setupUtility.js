let deathmessagetimestamped = false;
let del_message1;
let del_message2;

// window setup variables
let gridUnit;
let gridbound;
let layoutbound;
let traybound;
let tray = 0;

function windowResized(){ resizeCanvas(windowWidth, windowHeight)}

// grid+tray setup
let score = 0;
let gridpoints;
let grid = [];

let block = [];

let Rst_button;

function blockDisplay(){
   for (let b of block) {
      if (b.isresting) {
         b.show();        
      }
   }
   for (let b of block) {
      if (!b.isresting) {
         if (b !== draggedBlock && !followerList.includes(b)){
            b.followIcon();
            b.showIcon();
         }

      }
   }
      for (let b of block) {
         if (dragging && b === draggedBlock) {
            b.x = mouseX;
            b.y = mouseY;
            b.updatePos();
            b.show();
         } else if (b.isFollower && !b.isresting && followerList.includes(b)) {
            b.follow();
            b.show();
         }

      }
 
   
}

function getHighscore(){
   highscore = getItem('highscore');
}

function landscapeSetup(){
   let units = windowHeight / 16
   gridUnit = units;
   gridbound = ({
      x1: (windowWidth / 2) - (4 * units),
      x2: (windowWidth / 2) + (4 * units),
      y1: (0 + (units * 3)),
      y2: windowHeight - (5 * units),
   })
   layoutbound = ({
      x1: (windowWidth / 2) - (6 * units),
      x2: (windowWidth / 2) + (6 * units),
      y1: 0,
      y2: windowHeight,
   })
   traybound = ({
      x1: (layoutbound.x1) + (units),
      x2: (layoutbound.x2) - (units),
      y1: gridbound.y2 + units,
      y2: windowHeight - units
   })
}

function portraitSetup(){
   let units = windowHeight / 16
   gridUnit = units;
   gridbound = ({
      x1: (windowWidth / 2) - (4 * units),
      x2: (windowWidth / 2) + (4 * units),
      y1: ((windowHeight / 2) - (units * 6)),
      y2: (windowHeight / 2) + (2 * units),
   })
   layoutbound = ({
      x1: 0,
      x2: windowWidth,
      y1: 0,
      y2: windowHeight,
   })
   traybound = ({
      x1: (layoutbound.x1) + (units / 2),
      x2: (layoutbound.x2) - (units / 2),
      y1: gridbound.y2 + (units / 2),
      y2: windowHeight - (units / 2)
   })
}
function getGridpoints(){
   gridpoints = ({
      x1: gridbound.x1 + (gridUnit),
      x2: gridbound.x1 + (gridUnit * 2),
      x3: gridbound.x1 + (gridUnit * 3),
      x4: gridbound.x1 + (gridUnit * 4),
      x5: gridbound.x1 + (gridUnit * 5),
      x6: gridbound.x1 + (gridUnit * 6),
      x7: gridbound.x1 + (gridUnit * 7),
      x8: gridbound.x1 + (gridUnit * 8),
      y1: gridbound.y1 + (gridUnit),
      y2: gridbound.y1 + (gridUnit * 2),
      y3: gridbound.y1 + (gridUnit * 3),
      y4: gridbound.y1 + (gridUnit * 4),
      y5: gridbound.y1 + (gridUnit * 5),
      y6: gridbound.y1 + (gridUnit * 6),
      y7: gridbound.y1 + (gridUnit * 7),
      y8: gridbound.y1 + (gridUnit * 8),
   })

   grid = [];

   for (let i = 1; i <= 8; i++) {
      let col = [];
      for (let j = 1; j <= 8; j++) {
         let cell = {
            x: gridpoints["x" + i],
            y: gridpoints["y" + j],
            full: false,
            occupant: null
         };
         col.push(cell);
      }
      grid.push(col);
   }
}

function gridDebug() {
   if (debuginfo) {
      console.log("========== GRID ==========");
   for (let i = 0; i < grid.length; i++){
      console.log('column: ' + (i + 1));
      for(let j = 0; j < grid[i].length; j++){
         console.log("=====" + 'colIndex-' + i + ' rowIndex-' + j + " =====");
         console.log('x: ' + grid[i][j].x);
         console.log('y: ' + grid[i][j].y);
         console.log('occupant: ' + grid[i][j].occupant);
         if (grid[i][j].full){
            console.log('full');
         }else{
            console.log('empty');
           }

        } 
     }
  }

}

function getGrabpoints(){
   let l = layoutbound.x2 - layoutbound.x1;
   let incr = l / 6
    grabpoints = ({
      x1: layoutbound.x1 + 1.5 * incr,
      x2: layoutbound.x1 + (incr * 3),
      x3: layoutbound.x1 + (incr * 4.5),
      y1: (traybound.y1 + traybound.y2) / 2,
      y2: (traybound.y1 + traybound.y2) / 2,  
      y3: (traybound.y1 + traybound.y2) / 2,


   })
}
function build_restartbutton() {
   if(endgame && frameCount > del_message2 + 30) {
      Rst_button = {
         x1: gridpoints.x2 + (gridUnit * .5),
         x2: gridpoints.x5 + (gridUnit * .5),
         y1: gridpoints.y1,
         y2: gridpoints.y2 + (gridUnit * .5),
      }

      push();
      fill(189,61,63);
      noStroke();
      quad(Rst_button.x1,Rst_button.y1,Rst_button.x1,Rst_button.y2,
         Rst_button.x2, Rst_button.y2, Rst_button.x2, Rst_button.y1
      )
      pop();
      push();
      fill(59,72,77);
      noStroke();
      quad(Rst_button.x1 + (gridUnit / 5),Rst_button.y1 + (gridUnit / 5),Rst_button.x1 + (gridUnit / 5),Rst_button.y2 - (gridUnit / 5),
         Rst_button.x2 - (gridUnit / 5), Rst_button.y2 - (gridUnit / 5), Rst_button.x2 - (gridUnit / 5), Rst_button.y1 + (gridUnit / 5)
      )
      pop();
      push();
      fill(189,61,63);
      textAlign(CENTER, CENTER);
      textFont('Impact');
      textSize(gridUnit / 2);
      text('RESTART', (Rst_button.x1 + Rst_button.x2) / 2, (Rst_button.y1 + Rst_button.y2) / 2)
      pop();

   }

}

function drawlayout(){
   push();
   strokeWeight(((1.5 * windowWidth + windowHeight) / 2) / 100)
   stroke(109, 59, 71);
   fill(91, 130, 152);
   rect(layoutbound.x1,layoutbound.y1, (layoutbound.x2-layoutbound.x1), windowHeight, 30)
   // quad(layoutbound.x1,layoutbound.y1,
   //    layoutbound.x1,layoutbound.y2,
   //    layoutbound.x2,layoutbound.y2,
   //    layoutbound.x2, layoutbound.y1);
   pop();

   push();
   strokeWeight(2)
   stroke(109, 59, 71);
   if (endgame){
      fill(255,0,0);
   }else {
      fill(47, 72, 88);
   }
   quad(gridbound.x1,gridbound.y1,
      gridbound.x1,gridbound.y2,
      gridbound.x2,gridbound.y2,
      gridbound.x2, gridbound.y1);
   pop();

   push();
   textAlign(CENTER,CENTER);
   textSize(gridUnit * 1.3);
   fill(109, 59, 71);
   textFont('Impact');
   text(score, (gridbound.x1 + gridbound.x2) / 2, gridbound.y1 - gridUnit);
   pop();

   push();
   noStroke();
   fill(109, 59, 71);
   quad(traybound.x1,traybound.y1,
      traybound.x1,traybound.y2,
      traybound.x2,traybound.y2,
      traybound.x2, traybound.y1);
   pop();

   push();
   stroke(109, 59, 71);
   strokeWeight(1);
   line(gridpoints.x1, gridbound.y1, gridpoints.x1, gridbound.y2);
   line(gridpoints.x2, gridbound.y1, gridpoints.x2, gridbound.y2);
   line(gridpoints.x3, gridbound.y1, gridpoints.x3, gridbound.y2);
   line(gridpoints.x4, gridbound.y1, gridpoints.x4, gridbound.y2);
   line(gridpoints.x5, gridbound.y1, gridpoints.x5, gridbound.y2);
   line(gridpoints.x6, gridbound.y1, gridpoints.x6, gridbound.y2);
   line(gridpoints.x7, gridbound.y1, gridpoints.x7, gridbound.y2);
   line(gridbound.x1, gridpoints.y1, gridbound.x2, gridpoints.y1);   
   line(gridbound.x1, gridpoints.y2, gridbound.x2, gridpoints.y2);
   line(gridbound.x1, gridpoints.y3, gridbound.x2, gridpoints.y3);
   line(gridbound.x1, gridpoints.y4, gridbound.x2, gridpoints.y4);
   line(gridbound.x1, gridpoints.y5, gridbound.x2, gridpoints.y5);
   line(gridbound.x1, gridpoints.y6, gridbound.x2, gridpoints.y6);
   line(gridbound.x1, gridpoints.y7, gridbound.x2, gridpoints.y7);
   pop();

}

function initialize(){
   if (tray === 0){
         populateTray();

   }
  }
  
  function populateTray(){
     pickblock(floor(random(0, blocklength)),grabpoints.x1, grabpoints.y1);
     pickblock(floor(random(0, blocklength)),grabpoints.x2, grabpoints.y2);
     pickblock(floor(random(0, blocklength)),grabpoints.x3, grabpoints.y3);
  
     tray += 3;
     checkEndgame();
  }

  function deathMessage(){
   if (endgame){
      if (!deathmessagetimestamped){
         del_message1 = frameCount + (30 * 1.5);
         del_message2 = frameCount + (30 * 3);
         deathmessagetimestamped = true;
      }

      if (frameCount > del_message1){
         push();
         fill(90);
         textSize(gridUnit * 2);
         textFont('Impact');
         textAlign(CENTER,CENTER);
         text('GAME OVER', (gridbound.x1 + gridbound.x2) / 2, (gridbound.y1 + gridbound.y2) / 2);
         pop();
      }
      if (frameCount > del_message2){
         push();
         fill(90);
         textSize(gridUnit * 2);
         textFont('Arial');
         textAlign(CENTER,CENTER);
         text('bozo', (gridbound.x1 + gridbound.x2) / 2, ((gridbound.y1 + gridbound.y2) / 2) + (gridUnit * 2));
         pop();

      }
   }
  }
  
  
  
