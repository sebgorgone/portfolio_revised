let followerIndecies = [];
let followerdist = [];
let followerList =[];
let returnpoint;

let gameplayed = false;
let highscore;
let previousScore;

let buttonInitialised = false;

function mousePressed() {
  if (!endgame){
    dragging = false;
    draggedBlock = null;
  
    for (let b of block) {
       if (!b.isFollower && !b.isresting && dist(mouseX, mouseY, b.x, b.y) < gridUnit * 2) {
          returnpoint = {x: b.x, y: b.y}
          dragging = true;
          draggedBlock = b; 
          findFollowers(draggedBlock);
          return;
       }
    }

  }
  if (endgame){
    buttonInitialised = true;
  }

}

function findbutton(x,y){
  if (
    x > Rst_button.x1 && x < Rst_button.x2
    && y > Rst_button.y1 && y < Rst_button.y2
  ){
    block = [];
    previousScore = score;
    score = 0;
    tray = 0;
    bonus = 1;
    for (let i = 0; i < grid.length; i++){
      for (let j = 0; j < grid[i].length; j++){
        grid[i][j].full = false;
        grid[i][j].occupant = null;
      }
    }
    if (highscore < previousScore || highscore === null){
      highscore = previousScore;
      storeItem('highscore', highscore);
    }
    endgame = false;
    deathmessagetimestamped = false;
    gameplayed = true;
  }
}

function mouseReleased() {
   dragging = false;
   if (!endgame){
   checkValidDrop();
   }

   if(endgame && buttonInitialised){
    findbutton(mouseX,mouseY);
  }
  draggedBlock = null;
  buttonInitialised = false;
  followerList = [];
}

function findFollowers(anchor) {
  followerList = [];
  for (let i = 0; i < block.length; i++) {
    let b = block[i];
    if (b.isFollower && b.anchor === anchor && !b.isresting) {
      followerList.push(b);
    }
  }
}

function checkValidDrop() {
  followerdist = [];
  let validDrop = false;
  let snapcords;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let pointdist = dist(draggedBlock.x, draggedBlock.y, grid[i][j].x, grid[i][j].y);
      if (pointdist < gridUnit / 3 && !grid[i][j].full) {
        snapcords = { x: i, y: j };
        for (let n = 0; n < followerList.length; n++) {
          let follower = followerList[n];
          let dx = follower.dx;
          let dy = follower.dy;

          if (
            i + dx < grid.length &&
            j + dy < grid[0].length &&
            !grid[i + dx][j + dy].full
          ) {
            let followpointdist = dist(
              follower.x,
              follower.y,
              grid[i + dx][j + dy].x,
              grid[i + dx][j + dy].y
            );

            if (followpointdist < gridUnit / 3) {
              followerdist.push({ dist: followpointdist, index: n, expected: followerList.length });
            }
          }
        }
      }
    }
  }

  if (followerdist.length === followerList.length) {
    validDrop = true;
  }

  if (validDrop) {
    draggedBlock.x = grid[snapcords.x][snapcords.y].x;
    draggedBlock.y = grid[snapcords.x][snapcords.y].y;
    draggedBlock.updatePos();
    draggedBlock.isresting = true;
    grid[snapcords.x][snapcords.y].full = true;
    grid[snapcords.x][snapcords.y].occupant = draggedBlock;
    bonusattempts--;
    if (bonusattempts === 0) {
      bonus = 1;
    }
    for (let i = 0; i < bonus; i++){
      addpoint();
      }

    for (let follower of followerList) {
      let gx = snapcords.x + follower.dx;
      let gy = snapcords.y + follower.dy;
      follower.isresting = true;
      follower.x = grid[gx][gy].x;
      follower.y = grid[gx][gy].y;
      follower.updatePos();
      grid[gx][gy].full = true;
      grid[gx][gy].occupant = follower;
      for (let i = 0; i < bonus; i++){
        addpoint();
        }
    }

    tray -= 1;
    gridDebug();
    draggedBlock = null;
  } else {
    draggedBlock.x = returnpoint.x;
    draggedBlock.y = returnpoint.y;
    draggedBlock.updatePos();
  }

  if (tray > 0) {
    checkGrid();
    checkEndgame();
  }
}
