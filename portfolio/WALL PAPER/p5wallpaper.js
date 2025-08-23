let r;
let rho = [];
let columns;
let rows;
const PI = Math.PI;

let orientation1 = 'orientation1';
let orientation2 = 'orientation2';
let orientation3 = 'orientation3';

let theta1, theta2, theta3;
let radDenom = 13;
let checkFactor = 1;

const TOL = .14995;
const ATOL = 0;
theta1 = (PI / 6);
theta2 = ((5 * PI) / 6);
theta3 = ((3 * PI) / 2);


function setup() {
  noLoop();
  noStroke();
  // pixelDensity(2);


  frameRate(30);
  createCanvas(windowWidth, windowHeight);
  gridsetup();
}

function draw() {
  background(230);


  
  for (let i = 0; i < checkFactor; i++){
    let randomIndex = Math.floor(Math.random() * rho.length);
    checktrio(rho[randomIndex]);
  }

  for (let rhombus of rho) {
    rhombus.show();
  }
}

function tiling(cols, rows) {
  rho = [];
  let xOffset = (r * (Math.sqrt(3)));
  let yOffset = (r * 1.5); 
  
  // let xOffset = 1.5 * r;
  // let yOffset = r * sqrt(3);
  

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let xPos = col * (xOffset);
      let yPos = row * yOffset;

      if (row % 2 === 1){
        xPos += xOffset / 2;
      }

      rho.push(new Rhombus(orientation1, theta1, xPos, yPos));
      rho.push(new Rhombus(orientation2, theta2, xPos, yPos));
      rho.push(new Rhombus(orientation3, theta3, xPos, yPos));
    }
  }
}

function gridsetup() {
  rho = [];
  
  let lSide = Math.max(windowWidth, windowHeight);
  r = lSide * (1 / radDenom);

  let Offset = r * 2 * (Math.sqrt(3) / 2);

  columns = Math.ceil(windowWidth / Offset) + 1;
  rows = Math.ceil(windowHeight / Offset) + 2;

  tiling(columns, rows);
}

class Rhombus {
  constructor(state, thetastate, xpos, ypos) {
    this.state = state;
    this.centx = xpos
    this.centy = ypos
    this.theta = thetastate;
    this.r = r + TOL; 

    this.x = xpos;
    this.xn = (this.r * cos(this.theta));
    this.xa = (this.r * cos(this.theta + (PI / 3)));
    this.xb = (this.r * cos(this.theta - (PI / 3)));

    this.y = ypos;
    this.yn = (this.r * sin(this.theta));
    this.ya = (this.r * sin(this.theta + (PI / 3)));
    this.yb = (this.r * sin(this.theta - (PI / 3)));

    if ( this.state === orientation2){
      let anglecalc = (this.theta % (2 * PI))
      if (this.theta % ((5 * PI) / 6) === 0 ){
      this.x = this.centx + (ATOL * (((5 * PI) / 6) + PI))
      }
      this.r +=.01;
    }
    if ( this.state === orientation1){
      let anglecalc3 = (this.theta % (2 * PI))
      if (anglecalc3 % (PI / 6) === 0 ){
      this.x = this.centx - (ATOL * (((5 * PI) / 6) + PI))
      }
      this.r += .01;    
    }
  }

  show() {
    push();
    if (this.state == orientation1) {
      fill(0);
    } else if (this.state == orientation2) {
      fill(45);
    } else if (this.state == orientation3) {
      fill(90);
    }
    quad(this.x, this.y, this.x + this.xa, this.y + this.ya, this.x + this.xn, this.y + this.yn, this.x + this.xb, this.y + this.yb);
    pop();
  }

  rotateRhombus() {
    this.theta += (PI);  

    this.xn = (this.r * cos(this.theta));
    this.xa = (this.r * cos(this.theta + (PI / 3)));
    this.xb = (this.r * cos(this.theta - (PI / 3)));
    this.yn = (this.r * sin(this.theta));
    this.ya = (this.r * sin(this.theta + (PI / 3)));
    this.yb = (this.r * sin(this.theta - (PI / 3)));

    // if ( this.state === orientation2){
    //   let anglecalc = (this.theta % (2 * PI))
    //   if (anglecalc % ((5 * PI) / 6) === 0 ){
    //   this.x = this.centx + (ATOL * (((5 * PI) / 6) + PI))
    //   }
    //   if (anglecalc % ((10 * PI) / 6) === 0 ){
    //     this.x = this.centx - (ATOL * ((5 * PI) / 6))
    //   }
    // }
    // if ( this.state === orientation1){
    //   let anglecalc2 = (this.theta % (2 * PI))
    //   if (anglecalc2 % (PI / 6) === 0 ){
    //     this.x = this.centx - (ATOL * (((5 * PI) / 6) + PI))
    //   }
    //   if (anglecalc2 % (7 * PI / 6) === 0 ){
    //     this.x = this.centx + (ATOL * (((5 * PI) / 6) + PI))
        
    //   }
    // }
  }
}

function checktrio(reference) {
  let threshold = .1;  
  let foundTrio = false;

  for (let i = 0; i < rho.length; i++) {
    for (let j = 0; j < rho.length; j++) {
      if (i !== j && i !== rho.indexOf(reference) && j !== rho.indexOf(reference)) {

        let dstXi = dist(reference.x, reference.y, rho[i].x, rho[i].y);
        let dstXj = dist(reference.x, reference.y, rho[j].x, rho[j].y);

        if (dstXi < threshold && dstXj < threshold) {

          reference.rotateRhombus();
          rho[i].rotateRhombus();
          rho[j].rotateRhombus();

          foundTrio = true;
          break;
        }
      }
    }
    if (foundTrio) break;
  }
}

