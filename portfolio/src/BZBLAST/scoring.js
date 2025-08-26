let checkfollowers = [];
let bonus = 1;
let bonusattempts;


function addpoint(){
   score++;
}

function checkGrid() {
  let blocksToRemove = new Set(); // Use a Set to avoid duplicate blocks
  let rowsToClear = new Set();
  let colsToClear = new Set();
  let linescore = 0;

  // Identify full columns
  for (let i = 0; i < grid.length; i++) {
    let colfull = true;

    for (let j = 0; j < grid[i].length; j++) {
      if (!grid[i][j].full) {
        colfull = false;
        break; // No need to check further if the column is not full
      }
    }

    if (colfull) {
      colsToClear.add(i);
      linescore++; // Mark the column for clearing
    }
  }

  // Identify full rows
  for (let j = 0; j < grid[0].length; j++) {
    let rowfull = true;

    for (let i = 0; i < grid.length; i++) {
      if (!grid[i][j].full) {
        rowfull = false;
        break; // No need to check further if the row is not full
      }
    }

    if (rowfull) {
      rowsToClear.add(j);
      linescore++; // Mark the row for clearing
    }
  }

  // Collect blocks to remove from identified rows and columns
  for (let i of colsToClear) {
    for (let j = 0; j < grid[i].length; j++) {
      let occupant = grid[i][j].occupant;
      if (occupant) {
        blocksToRemove.add(occupant);
      }

      // Clear the grid cell
      grid[i][j].full = false;
      grid[i][j].occupant = null;
    }
  }

  for (let j of rowsToClear) {
    for (let i = 0; i < grid.length; i++) {
      let occupant = grid[i][j].occupant;
      if (occupant) {
        blocksToRemove.add(occupant);
      }

      // Clear the grid cell
      grid[i][j].full = false;
      grid[i][j].occupant = null;
    }
  }

  for (let i = 0; i < bonus; i++){
    for (let n = 0; n < linescore; n++){
    for (let j = 0; j < 10; j++){
      addpoint();

    }
  }
}

  // Remove blocks from the global block array
  for (let blockToRemove of blocksToRemove) {
    let index = block.indexOf(blockToRemove);
    if (index !== -1) {
      block.splice(index, 1);
    }
  }
  
  if (linescore > 0) {
    bonusSet();

  }
}

function bonusSet() {
  bonus++;
  bonusattempts = 3;
}

function checkEndgame() {
  let validdrops = 0;


  if (debuginfo) {
    console.log('ENDGAME Tray count:', tray);
  }

  if (tray > 0) {
    // Only evaluate blocks that are not resting and are part of the tray
    let trayBlocks = block.filter(b => !b.isresting && b.dx + b.dy === 0 && !b.isFollower);

    for (let b of trayBlocks) {
      findbFollowers(b);

      for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
          let validfollowers = [];

          if (!grid[i][j].full) {
            for (let n = 0; n < checkfollowers.length; n++) {
              let ni = i + checkfollowers[n].dx;
              let nj = j + checkfollowers[n].dy;

              if (ni >= 0 && ni < grid.length && nj >= 0 && nj < grid[0].length) {
                if (!grid[ni][nj].full) {
                  validfollowers.push(n);
                }
              }
            }

            if (validfollowers.length === checkfollowers.length) {
              validdrops += 1;
            }
          }
        }
      }
    }
  }

  if (validdrops === 0) {
    endgame = true;
  }

  if (debuginfo) {
    console.log('is endgame? --- ' + validdrops);
    console.log(endgame);
  }
}

function findbFollowers(L) {
  checkfollowers = [];
  for (let i = 0; i < block.length; i++) {
    if (block[i].isFollower && !block[i].isresting) {
      if (block[i].anchor === L) {
        checkfollowers.push(block[i]);
      }
    }
  }
  if (debuginfo) {
    console.log('Followers for block:', L, checkfollowers);
  }
}

function bonusDisplay() {
  if (bonus > 1) {
    push();
    fill(0,150,30);
    textFont('Impact')
    textSize(gridUnit * .60);
    text('x' + bonus, gridbound.x1, layoutbound.y1 + gridUnit);
    pop();
  }
}

function showhighscore(){
  if (highscore !== null){
    push();
    fill(150);
    textFont('Arial');
    textAlign(CENTER);
    textSize(gridUnit * .5);
    text( highscore, gridpoints.x7, gridbound.y1 - gridUnit);
    pop();
  }
}