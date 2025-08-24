
//initialization info
let centinfo = [];
let rhombus = [];
let centers = [];
let faceStep = [];

let triocent = [];
let indexcount = 0;
let Pinitial;
//setup type 0 - random grid position and fill
//      type 1 - cube in the center (WIP)
let setupState = 0;
let mode = 0;
// mode type 0 - random check pattern
//      type 1 - sequential check pattern (index length-0 by increments 4)
//      type 2 - sequential check pattern (index 0-length by increments 1)
//      type 3 - interval filtering
//      type 4 - interactive shifting 

const radDenom = 13;
let r;
let z = 1;
let conditionfactor = 50;
let lside

let initializing = true;
let conditionalflip = false;
let conditionalfiltering = false

let initialFactor = 5;
let checkFactor = 1;

let resetframe;
let pause = false;

//toggle debug
let debuginfo = false;

function windowResized() {  
  pause = true;
  rhombus = [];
  let runtime = frameCount;
  let bufferframes = 2;
  resetframe = runtime + bufferframes;
  resizeCanvas(windowWidth, windowHeight);
  centers = [];
  triocent = [];
  faceStep = [];
  indexcount = 0;
  z = 1;


}

function resetNow(){
  pause = false;
  initializing = true;
  setup();

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  lside = Math.max(windowWidth, windowHeight);
  r = lside / radDenom;

  Pinitial = {
    x: floor(random(r, width - r)),
    y: floor(random(r, height - r))
  };
  if(setupState == 0){
  cubebirth(Pinitial.x, Pinitial.y, r);
  }
  if (setupState == 1) {
    bigcube(width/2, height/2, r);
  }
}

function draw() {
  if (!pause){
    if (initializing) {

      for (let rh of rhombus) {
        rh.show();
      }
      if (setupState == 0) {
        frameRate(60);
      for (let i = 0; i < initialFactor; i++){
        checkcent();
        }
      }
      if (setupState == 1){
        frameRate(15);
        checkSteps();
      }
    } else {
      for (let rh of rhombus) {
        rh.show();
      }

      frameRate(30);
// conditional logic
if (conditionalfiltering){
  if (debuginfo){
    push();
    fill(80,30,190);
    textSize(35);
    text('conditional filter--> ON',30,height-120);
    pop();
  }
      if (frameCount % conditionfactor === 0){
        conditionalflip = false;
    }else{
      conditionalflip = true;
    }
  }else{
    conditionalflip = false;
  }

    findcenters();

    if (debuginfo){
      for (let center of triocent){
        push();
        fill(150,30,110);
        circle(center.x,center.y,r / 8)
        pop();
       }
       push();
       fill(200,50,30);
       textSize(30);
       text('stress',30,  height - 60)
       rect(30,height - 30,deltaTime * .5,20)
       pop();
       push();
       fill(200,150,50);
       textSize(30);
       text('mode: ' + mode,(width / 2) - 150,  height - 60)
       pop();
       push();
       fill(30,50,200);
       textSize(30);
       text('condition slip',width-200,  height - 60)
       text(round((conditionfactor)/(frameCount % conditionfactor), 3),width-200,  height - 30)
       pop();
      }

      if (mode == 0){
        conditionfactor = 300
        frameRate(7);
        if (triocent.length > 0){
          selectcenter(floor(random(0, triocent.length)));
        }      
      }

      if (mode == 1){
        conditionfactor = 150
        if (indexcount < triocent.length && triocent.length > 0){
        selectcenter(indexcount)
        }else{
          indexcount = triocent.length - z;
          z++
          if (z == 4){
            z = 1;
          }
        }
        if (indexcount > 4){
          indexcount -= 4;
        }
        if (indexcount <= 4){
          indexcount = triocent.length - z;
          z ++;
          if (z == 4){
            z = 1;
          }

        }
      }
      if (mode == 2){
        conditionfactor = 50;
        if (indexcount < triocent.length && triocent.length > 0){
          selectcenter(indexcount)
          indexcount += 3;
        } else{
          indexcount = floor(random(0,5));

        }

      }
      if (mode == 3) {
        conditionfactor = 150
        if (triocent.length > 0) {
          selectcenter(floor(random(0, triocent.length)));
        }
      
        let count = 12 * 60;
        if (frameCount % count == 0) {
          conditionalfiltering = !conditionalfiltering;
        }
      
        if (debuginfo) {
          push();
          textSize(40);
          fill(250)
          textAlign(CENTER)
          text('switch time  ' + round((frameCount/count),3), width/2, (height / 2)-30);
          pop();
        }
      }
    }

  }

    if (frameCount === resetframe) {
      resetNow();
    }
  }
  function mouseClicked(){
    if (mode === 4){  
      searchpotentialcenter(mouseX,mouseY);
      if (debuginfo){
        push();
        textSize(20);
        fill(135,200,90);
        text('{mouse input}',width - 100, height / 2);
        pop();
      }
    }
}
function keyPressed(){  
  if (key === 'b'){
    debuginfo = !debuginfo;
  }
  if (key === 'v'){
    conditionalfiltering = !conditionalfiltering
  }
  if(setupState === 0){
    if (key === '0'){
      mode = 0;
    }
    if (key === '1'){
      mode = 1;
    }
    if (key === '2'){
      mode = 2;
    }
    if (key === '3'){
      mode = 3;
    }
    if (key === '4'){
      mode = 4;
    }


  }
  if (setupState === 1){
    if (key === 2){
      mode = 2
    }
    if (key === 'f'){
      checkcent();
    }
  }
}

function searchpotentialcenter(x,y){
  let searchpoint = {
    x: x,
    y: y
  }
  for (let point of triocent){
    let centpoint = {
      x: point.x,
      y: point.y
    }
    let centdist = dist(searchpoint.x,searchpoint.y,centpoint.x,centpoint.y);
    if(centdist < r / 2){
      selectcenter(triocent.indexOf(point))
      break;
    }
  }

}

function cubebirth(x, y, rad) {
  centinfo = [];
  let theta0 = PI / 6;
  let thetaStep = TWO_PI / 3;

  for (let i = 0; i < 3; i++) {
    let theta = theta0 + i * thetaStep;

    let xn = x + rad * cos(theta);
    let yn = y + rad * sin(theta);

    centinfo.push({
      x: x,
      y: y,
      xn: xn,
      yn: yn,
      theta: theta,
      state: i
    });
  }

  appendrhombi(rad);
}
function bigcube(x,y, rad){
  centinfo = [];
  let theta0 = PI / 6;
  let thetaStep = TWO_PI / 3;

  for (let i = 0; i < 3; i++) {
    let theta = theta0 + i * thetaStep;

    let xn = x + rad * cos(theta);
    let yn = y + rad * sin(theta);

    centinfo.push({
      x: x,
      y: y,
      xn: xn,
      yn: yn,
      theta: theta,
      r: rad,
      state: i
    });
  }
  for (let c of centinfo){
    placeInitial(c);
  }
}
function placeInitial(c){
    rhombus.push(new Rhombus(c.x, c.y, c.xn, c.yn, c.r, c.theta, c.state));
    createCubeface(c.x,c.y,c.xn,c.yn,c.theta, c.r, c.state,0);
}
function appendrhombi(radius) {
  for (let c of centinfo) {
    rhombus.push(new Rhombus(c.x, c.y, c.xn, c.yn, radius, c.theta, c.state));
     addCenter(c.xn,c.yn,c.theta, radius, c.state);
  }
  centinfo = []
}
function createCubeface(centx,centy,pointx,pointy,angle,rad,state,stepindex){
  let tolAngleLeft = (atan2(pointy - centy, pointx - centx) - (PI / 3));
  let tolAngleRight = (atan2(pointy - centy, pointx - centx) + (PI / 3));
  let stepAngleLeft = (angle - (2 * PI / 3));
  let stepAngleRight = (angle + (2 * PI / 3));

  stepindex ++;
  //APR 21 looking to define a way to check for valid steps while also inputting steps for next level
  //
  if (pointx > 0 - rad && pointx < windowWidth + rad &&
    pointy > 0 - rad && pointy < windowHeight + rad){
      faceStep.push({TAL: tolAngleLeft,
        TAR: tolAngleRight,
        SAL: stepAngleLeft,
        SAR: stepAngleRight,
        state: state,
        theta: angle,
        r: rad,
        step: stepindex,
        newx: pointx,
        newy: pointy
      })
    }

}
function checkSteps(){
  if (faceStep.length > 0){
    let len = faceStep.length
    for (let i = faceStep.length - 1; i >= 0; i--){
      buildCenter(faceStep[i]);
      faceStep.splice(i, 1);
    }
  }else{
    initializing = false;
  }
}
function buildCenter(n){
  let nextPointX = n.newx
  let nextPointY = n.newy
  let nextPointXn = n.newx + (n.r * cos(n.theta));
  let nextPointYn = n.newy + (n.r * sin(n.theta));
  rhombus.push(new Rhombus(nextPointX,nextPointY,nextPointXn, nextPointYn, n.r, n.theta, n.state));
  
  for(let i = 1; i < n.step+ 1; i++){
    let newpointl = ({
      x: nextPointX + (n.r * cos(n.SAL) * i),
      y: nextPointY + (n.r * sin(n.SAL) * i),
    })
    let newpointr = ({
      x: nextPointX + (n.r * cos(n.SAR) * i),
      y: nextPointY + (n.r * sin(n.SAR) * i),
    })
    rhombus.push(new Rhombus(newpointl.x,newpointl.y,
      newpointl.x + (n.r * cos(n.theta)), newpointl.y + (n.r * sin(n.theta)),
      n.r,n.theta,n.state));
      rhombus.push(new Rhombus(newpointr.x,newpointr.y,
        newpointr.x + (n.r * cos(n.theta)), newpointr.y + (n.r * sin(n.theta)),
        n.r,n.theta,n.state));
  }
  
  if (nextPointX > (windowWidth / 2) - (lside/2) - (2 * n.r) && nextPointX < (windowWidth / 2) + (lside / 2) + (2 * n.r) &&
    nextPointY > (windowHeight / 2) - (lside/2) - (2 * n.r)&& (windowHeight / 2) + (lside/2) + (2 * n.r)){
      faceStep.push({TAL: n.TAL,
        TAR: n.TAR,
        SAL: n.SAL,
        SAR: n.SAR,
        state: n.state,
        theta: n.theta,
        r: n.r,
        step: n.step + 1,
        newx: nextPointXn,
        newy: nextPointYn
      })
    }

}
function addCenter(x, y, angle, r, state) {
   let edgetol = r 
   let exists = centers.some(c => c.x === x && c.y === y);
   if (
      !exists &&
      x > -edgetol && x < width + edgetol &&
      y > -edgetol && y < height + edgetol
    ) {
      centers.push({x: x, 
         y: y,
           theta: angle,
         r: r,
         state: state})
   }
}
function checkcent(){
   if (centers.length > 0){
      let checkindex = floor(random(0, centers.length))
      buildTrio(centers[checkindex].x,centers[checkindex].y,
         centers[checkindex].theta, centers[checkindex].r,
         centers[checkindex].state, checkindex)
}else {
  initializing = false;
}

}
function buildTrio(x, y, theta, r, angstate, i){
  let anglep = theta;
  let newstate1;
  let newstate2;

  let newangle1 = theta + (PI / 3)
  let newangle2 = theta + (-PI / 3)

  let newX = x;
  let newY = y;

  let newXn1 = (r * cos(newangle1)) + x;
  let newYn1 = r * sin(newangle1) + y;
  let newXn2 = (r * cos(newangle2)) + x;
  let newYn2 = r * sin(newangle2) + y;

    if (angstate == 0){
   newstate1 = 2
   //2
   newstate2 = 1
   //1
   if (!duplicateCheck(newX,newY,newXn1,newYn1,r)){
   rhombus.push(new Rhombus(newX,newY,
      newXn1,newYn1,
      r,newangle1,newstate1));
      addCenter(newXn1, newYn1, newangle1, r, newstate1);
   }
   if (!duplicateCheck(newX,newY,newXn2,newYn2,r)){

   rhombus.push(new Rhombus(newX,newY,
      newXn2,newYn2,
      r,newangle2,newstate2));
      addCenter(newXn2, newYn2, newangle2, r, newstate2);

   }
  }
   if (angstate == 1){
   newstate1 = 0
   newstate2 = 2
   if (!duplicateCheck(newX,newY,newXn1,newYn1,r)){
   rhombus.push(new Rhombus(newX,newY,
      newXn1,newYn1,
      r,newangle1,newstate1));
      addCenter(newXn1, newYn1, newangle1, r, newstate1);
   }
   if (!duplicateCheck(newX,newY,newXn2,newYn2,r)){
   rhombus.push(new Rhombus(newX,newY,
      newXn2,newYn2,
      r,newangle2,newstate2));
      addCenter(newXn2, newYn2, newangle2, r, newstate2);
   }
  }
   if (angstate == 2){
   newstate1 = 1
   newstate2 = 0
   if (!duplicateCheck(newX,newY,newXn1,newYn1,r)){
   rhombus.push(new Rhombus(newX,newY,
      newXn1,newYn1,
      r,newangle1,newstate1));
      addCenter(newXn1, newYn1, newangle1, r, newstate1);
   }
   if (!duplicateCheck(newX,newY,newXn2,newYn2,r)){

   rhombus.push(new Rhombus(newX,newY,
      newXn2,newYn2,
      r,newangle2,newstate2));
      addCenter(newXn2, newYn2, newangle2, r, newstate2);
   }
  }
centers.splice(i,1)
}

function duplicateCheck(xP,yP,x1,y1, radius){
   let check;
   let point;
   let pointi;
   let pointtol = .001;
   point = {
      x: xP + (radius / 2) * cos(atan2(y1-yP,x1-xP)),
      y: yP + (radius / 2) * sin(atan2(y1-yP,x1-xP))
   }
   for(let rh of rhombus){
      pointi = {
         x: rh.x + ((rh.r / 2) * cos(atan2(rh.yn - rh.y,rh.xn - rh.x))),
         y: rh.y + ((rh.r / 2) * sin(atan2(rh.yn - rh.y,rh.xn -rh.x)))
      }
      check = dist(pointi.x,pointi.y,point.x,point.y);
      if (check < pointtol){
         return true;
      }
    }
    return false;
}

function findcenters(){
  triocent = [];
  let centTOL = .01;
  for (let i of rhombus){
    for (let j of rhombus){
      if (i !== j){
        let distx1 = dist(i.x,i.y,j.x,j.y);
        let distx2 = dist(i.x,i.y,j.xn,j.yn);
        if (distx1 < centTOL){
          checktriomember(i,j,i.x,i.y,0,0);
        }
        if (distx2 < centTOL){
          checktriomember(i,j,i.x,i.y,0,1);
        }
        let distxn1 = dist(i.xn,i.yn,j.x,j.y);
        let distxn2 = dist(i.xn,i.yn,j.xn,j.yn);
        if (distxn1 < centTOL){
          checktriomember(i,j,i.xn,i.yn,1,0);
        }
        if (distxn2 < centTOL){
          checktriomember(i,j,i.xn,i.yn,1,1);
        }
      }
 
    }
  }
}
function trioExists(x, y, tol = 0.001) {
  return triocent.some(trio => dist(trio.x, trio.y, x, y) < tol);
}
function checktriomember(index1,index2, centx, centy, centp1, centp2){
  let trioTOL = .001

  if (trioExists(centx, centy, trioTOL)) return;

  for (let third of rhombus){
    if (third !== index1 && third !== index2){
      
      let distthird = dist(third.x,third.y,centx,centy)
      let distthirdN = dist(third.xn,third.yn,centx,centy)

      if (distthird < trioTOL){
        let index3 = rhombus.indexOf(third);  
        let centp3 = 0;
        triocent.push({
          index1: rhombus.indexOf(index1),
          cent1: centp1,
          index2: rhombus.indexOf(index2),
          cent2: centp2,
          index3: index3,
          cent3: centp3,
          x: centx,
          y: centy
        });
        break;
      }

      if (distthirdN < trioTOL){
        let index3 = rhombus.indexOf(third); 
        let centp3 = 1;
        triocent.push({
          index1: rhombus.indexOf(index1),
          cent1: centp1,
          index2: rhombus.indexOf(index2),
          cent2: centp2,
          index3: index3,
          cent3: centp3,
          x: centx,
          y: centy
        });
        break; 
      }

    }
  }
}

function selectcenter(n) {
  if (triocent.length === 0) return;

  if (debuginfo) {
  push();
  fill(200,0,150)
  textSize(25)
  textAlign(CENTER)
  text((triocent.length) 
  + '  SELECTING --  ' + triocent[n].cent1
     + ' ' + triocent[n].cent2
     + ' ' + triocent[n].cent3,width/2,height/2)
  pop();
  
}
let checkforprevious = false
if (conditionalflip &&
  triocent[n].cent1 === 0 &&
  triocent[n].cent2 === 0 &&
  triocent[n].cent3 === 0){
    checkforprevious = true;
  }
//   let checkfornew = false
// if (conditionalflip &&
//   triocent[n].cent1 === 1 &&
//   triocent[n].cent2 === 1 &&
//   triocent[n].cent3 === 1){
//     checkfornew = true;
//   }

if (!checkforprevious){
  if (triocent[n].cent1 === 1){
    rhombus[triocent[n].index1].polarityFlip();
    triocent[n].cent1 = 0;
  }
    if (triocent[n].cent2 === 1){
      rhombus[triocent[n].index2].polarityFlip();
      triocent[n].cent2 = 0;

    }
    if (triocent[n].cent3 === 1){
      rhombus[triocent[n].index3].polarityFlip();
      triocent[n].cent3 = 0;

    }
    cubeflip(n);
  }
  
}
function cubeflip(trio) {
  rhombus[triocent[trio].index1].mirror();
  rhombus[triocent[trio].index2].mirror();
  rhombus[triocent[trio].index3].mirror();

}


class Rhombus {
  constructor(xpos, ypos, xnpos, ynpos, radius, theta, state) {
    this.r = radius;

    this.x = xpos;
    this.y = ypos;
    this.xn = xnpos;
    this.yn = ynpos;

    this.theta = theta;
    this.state = state;


    this.xa = this.r * cos(this.theta + PI / 3);
    this.xb = this.r * cos(this.theta - PI / 3);
    this.ya = this.r * sin(this.theta + PI / 3);
    this.yb = this.r * sin(this.theta - PI / 3);
  }

  show() {
    push();
    if (!debuginfo){
      noStroke();
    }
    if (this.state === 0) {
      fill(25, 29, 50);
    } else if (this.state== 1) {
      fill(89, 59, 72);
    } else if (this.state == 2) {
      fill(113, 159, 184);
    }

    quad(
      this.x, this.y,
      this.x + this.xa, this.y + this.ya,
      this.xn, this.yn,
      this.x + this.xb, this.y + this.yb
    );
    pop();
    //debug directionality of rhombus
    if (debuginfo){
      push();
      stroke(255);
      line(this.x + (r/8 * cos(this.theta)),
      this.y + (r/8 * sin(this.theta)),
      this.x + (r/2 * cos(this.theta)),
      this.y + (r/2 * sin(this.theta))
    )
    pop();
  }

  }
  polarityFlip() {
    if (debuginfo){
    push();
    fill(200,0,150);
    textSize(25);
    textAlign(CENTER);
    text('FLIPPED',50,50);
    pop();
    }
    this.x = this.xn;
    this.y = this.yn;
    this.theta += PI;

    this.xn = this.r * cos(this.theta) + this.x;
    this.yn = this.r * sin(this.theta) + this.y;

    this.xa = this.r * cos(this.theta + PI / 3);
    this.xb = this.r * cos(this.theta - PI / 3);
    this.ya = this.r * sin(this.theta + PI / 3);
    this.yb = this.r * sin(this.theta - PI / 3);

  }
  mirror(){
    this.theta += PI;

    this.xn = this.r * cos(this.theta) + this.x;
    this.yn = this.r * sin(this.theta) + this.y;

    this.xa = this.r * cos(this.theta + PI / 3);
    this.xb = this.r * cos(this.theta - PI / 3);
    this.ya = this.r * sin(this.theta + PI / 3);
    this.yb = this.r * sin(this.theta - PI / 3);
  }
}