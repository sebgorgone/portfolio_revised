let r = 80;
let rho = [];
let columns = 12;
let rows = 6;
const PI = Math.PI;
let theta1, theta2, theta3;

let checkFactor = 1;

const TOL = .0;
let radDenom = 12;

theta1 = 0;
theta2 = (2 * PI) / 3;
theta3 = (4 * PI) / 3;
let orientation1 = 'orientation1';
let orientation2 = 'orientation2';
let orientation3 = 'orientation3';


function setup() {
  // noLoop();
    noStroke()

    frameRate(12);
    createCanvas(windowWidth, windowHeight);
    gridsetup();
    }

function draw() {
  background(50);

if ( frameCount % .5 === 0){
  for (let i = 0; i < checkFactor; i++){
    let randomIndex = Math.floor(Math.random() * rho.length);
    checktrio(rho[randomIndex]);
  }
}
  for (let rhombus of rho) {
    rhombus.show();
    }
 }

 function gridsetup() {
  rho = [];
  
  let lSide = Math.max(windowWidth, windowHeight);
  r = lSide * (1 / radDenom);
  let xOffset = 1.5 * r;
  let yOffset = r * sqrt(3);

  columns = Math.ceil(windowWidth / xOffset) + 1;
  rows = Math.ceil(windowHeight / yOffset) + 2;

  tiling(columns, rows);
}
function tiling(cols, rows) {

  let xOffset = 1.5 * r;
  let yOffset = r * sqrt(3);
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let xPos = col * xOffset;
      let yPos = row * yOffset;

      if (col % 2 === 1) {
        yPos += yOffset / 2;
      }

      rho.push(new Rhombus(orientation1, theta1, xPos, yPos));
      rho.push(new Rhombus(orientation2, theta2, xPos, yPos));
      rho.push(new Rhombus(orientation3, theta3, xPos, yPos));
    }
  }
}

class Rhombus {
  constructor(state, thetastate, xpos, ypos) {
    this.state = state;
    this.theta = thetastate;
    this.r = r + TOL;

    this.x = xpos;
    this.xn = this.r * cos(this.theta);
    this.xa = this.r * cos(this.theta + (PI / 3));
    this.xb = this.r * cos(this.theta - (PI / 3));

    this.y = ypos;
    this.yn = this.r * sin(this.theta);
    this.ya = this.r * sin(this.theta + (PI / 3));
    this.yb = this.r * sin(this.theta - (PI / 3));

  }

  show() {
    push();
    if (this.state == orientation1) {
      fill(50);
    } else if (this.state == orientation2) {
      fill(75);
    } else if (this.state == orientation3) {
      fill(25);
    }
    quad(this.x, this.y, this.x + this.xa, this.y + this.ya, this.x + this.xn, this.y + this.yn, this.x + this.xb, this.y + this.yb);
    pop();
  }

  setShade(value) {
    this.shade = value;
  }

  rotateRhombus() {
        this.theta += (PI);  

        this.xn = this.r * cos(this.theta);
        this.xa = this.r * cos(this.theta + (PI / 3));
        this.xb = this.r * cos(this.theta - (PI / 3));
        this.yn = this.r * sin(this.theta);
        this.ya = this.r * sin(this.theta + (PI / 3));
        this.yb = this.r * sin(this.theta - (PI / 3));
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
