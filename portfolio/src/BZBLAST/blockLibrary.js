let blocklength = 78;
function pickblock(n,x,y){
  if(n === 0 || n === 36 || n === 45|| n === 67){
    two_by_two(x,y);
    //4
  }
  if(n === 1  || n === 46){
     L_one(x,y);
  }
   if(n === 2  || n === 47){
      L_two(x,y);
   }
   if(n === 3  || n === 48){
      L_three(x,y);
   }
   if(n === 4 || n === 53){
      L_four(x,y);
   }
   if(n === 5 || n === 54){
      L_five(x,y);
   }
    if(n === 6 || n === 55){
        L_six(x,y);
    }
    if(n === 7 || n === 37){
        T_one(x,y);
    }
    if(n === 8  || n === 38){
        T_two(x,y);
    }
    if(n === 9  || n === 39){
        T_three(x,y);
    }
    if(n === 10  || n === 40){
        T_four(x,y);
    }
    if(n === 11  || n === 41|| n === 68){
      //3
        THREE_I_H(x,y);
    }
    if(n === 12  || n === 42|| n === 69){
      //3
        THREE_I_V(x,y);
    }
    if(n === 13 || n === 56){
        Ninety_bottom_left(x,y);
    }
    if(n === 14 || n === 57){
        Ninety_bottom_right(x,y);
    }
    if(n === 15 || n === 58){
        Ninety_top_left(x,y);
    }
    if(n === 16 || n === 59){
        Ninety_top_right(x,y);
    }
    if(n === 17 || n === 60){
        three_by_three(x,y);
    }
    if(n === 18 || n === 61|| n === 70){
        TWO_I_H(x,y);
    }
    if(n === 19 || n === 62|| n === 71){
        TWO_I_V(x,y);
    }
    if(n === 20 || n === 63|| n === 72){
        FOUR_I_H(x,y);
    }
    if(n === 21 || n === 64|| n === 73){
        FOUR_I_V(x,y);
    }
    if(n === 22 || n === 65|| n === 74){
        FIVE_I_H(x,y);
    }
    if(n === 23 || n === 66|| n === 75){
        FIVE_I_V(x,y);
    }
    if (n === 24  || n === 43|| n === 76){
        two_by_three_H(x,y);
    }
    if (n === 25  || n === 44|| n === 77){
        two_by_three_V(x,y);
    }
    if (n === 26 ){
        Diagnol_forward(x,y);
    }
    if (n === 27 ){
        Diagnol_backward(x,y);
    }
    if (n === 28){
      Elbow_one(x,y);
    }
    if (n === 29){
      Elbow_two(x,y);
    }
    if (n === 30){
      Elbow_three(x,y);
    }
    if (n === 31){
      Elbow_four(x,y);
    }
    if (n === 32  || n === 49){
      Z_one(x,y);
    }
    if (n === 33  || n === 50){
      Z_two(x,y);
    }
    if (n === 34  || n === 51){
      Z_three(x,y);
    }
    if (n === 35  || n === 52){
      Z_four(x,y);
    }
}
//1
function two_by_two(x, y) {
  let r = 160, g = 160, b = 0;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);

  block.push(new Blocks(x, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: 1 }));
  block.push(new Blocks(x + gridUnit, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: 1 }));
  block.push(new Blocks(x + gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: 0 }));
}
//2
function L_one(x, y) {
  let r = 160, g = 50, b = 20;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);

  block.push(new Blocks(x, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: 1 }));
  block.push(new Blocks(x + gridUnit, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: 1 }));
  block.push(new Blocks(x , y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: -1 }));
}
//3
function L_two(x, y) {
  let r = 0, g = 150, b = 200;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);

  block.push(new Blocks(x, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: 1 }));
  block.push(new Blocks(x - gridUnit, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: -1, dy: 1 }));
  block.push(new Blocks(x , y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: -1 }));
}
//4
function L_three(x, y) {
  let r = 20, g = 175, b = 125;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);

  block.push(new Blocks(x, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: 1 }));
  block.push(new Blocks(x + gridUnit, y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: -1 }));
  block.push(new Blocks(x , y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: -1 }));
}
//5
function L_four(x, y) {
  let r = 160, g = 50, b = 200;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);

  block.push(new Blocks(x, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: 1 }));
  block.push(new Blocks(x - gridUnit, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: -1, dy: -1 }));
  block.push(new Blocks(x , y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: -1 }));
}
//6
function L_five(x, y) {
  let r = 40, g = 50, b = 200;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);

  block.push(new Blocks(x + gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: 0 }));
  block.push(new Blocks(x - gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: -1, dy: 0 }));
  block.push(new Blocks(x + gridUnit, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: 1 }));
}
//7
function L_six(x, y) {
  let r = 190, g = 75, b = 40;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);

  block.push(new Blocks(x + gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: 0 }));
  block.push(new Blocks(x - gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: -1, dy: 0 }));
  block.push(new Blocks(x - gridUnit, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: -1, dy: 1 }));
}
//8
function T_one(x,y){
    let r = 0, g = 255, b = 255;
    let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
    block.push(anchorBlock);
  
    block.push(new Blocks(x, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: 1 }));
    block.push(new Blocks(x + gridUnit, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: 1 }));
    block.push(new Blocks(x - gridUnit, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: -1, dy: 1 }));
}
//9
function T_two(x,y){
  let r = 150, g = 0, b = 255;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);

  block.push(new Blocks(x, y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: -1 }));
  block.push(new Blocks(x + gridUnit, y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: -1 }));
  block.push(new Blocks(x - gridUnit, y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: -1, dy: -1 }));
}
//10
function T_three(x,y){
  let r = 100, g = 50, b = 150;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);

  block.push(new Blocks(x, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: 1 }));
  block.push(new Blocks(x - gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: -1, dy: 0 }));
  block.push(new Blocks(x , y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: -1 }));
}
//11
function T_four(x,y){
  let r = 150, g = 30, b = 30;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);

  block.push(new Blocks(x, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: 1 }));
  block.push(new Blocks(x + gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: 0 }));
  block.push(new Blocks(x , y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: -1 }));
}
//12
function THREE_I_H(x,y){

    let r = 30, g = 120, b = 190;
    let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
    block.push(anchorBlock);
  
    block.push(new Blocks(x - gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: -1, dy: 0 }));
    block.push(new Blocks(x + gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: 0 }));  
}
//13
function THREE_I_V(x,y){

  let r = 20, g = 170, b = 150;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);

  block.push(new Blocks(x, y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: -1 }));
  block.push(new Blocks(x, y  + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: 1 }));  
}
//14
function Ninety_bottom_left(x,y){
  let r = 150, g = 120, b = 50;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);

  block.push(new Blocks(x + gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: 0 }));
  block.push(new Blocks(x + (gridUnit * 2), y, r, g, b, true, { anchor: anchorBlock, dx: 2, dy: 0 }));


  block.push(new Blocks(x, y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: -1}));
  block.push(new Blocks(x, y - (gridUnit * 2), r, g, b, true, { anchor: anchorBlock, dx: 0, dy: -2 }));
}
//15
function Ninety_bottom_right(x,y){
  let r = 50, g = 200, b = 200;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);

  block.push(new Blocks(x - gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: -1, dy: 0 }));
  block.push(new Blocks(x - (gridUnit * 2), y, r, g, b, true, { anchor: anchorBlock, dx: -2, dy: 0 }));


  block.push(new Blocks(x, y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: -1}));
  block.push(new Blocks(x, y - (gridUnit * 2), r, g, b, true, { anchor: anchorBlock, dx: 0, dy: -2 }));
}
//16
function Ninety_top_left(x,y){
  let r = 0, g = 200, b = 50;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);

  block.push(new Blocks(x + gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: 0 }));
  block.push(new Blocks(x + (gridUnit * 2), y, r, g, b, true, { anchor: anchorBlock, dx: 2, dy: 0 }));


  block.push(new Blocks(x, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: 1}));
  block.push(new Blocks(x, y + (gridUnit * 2), r, g, b, true, { anchor: anchorBlock, dx: 0, dy: 2 }));
}
//17
function Ninety_top_right(x,y){
  let r = 255, g = 0, b = 100;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);

  block.push(new Blocks(x - gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: -1, dy: 0 }));
  block.push(new Blocks(x - (gridUnit * 2), y, r, g, b, true, { anchor: anchorBlock, dx: -2, dy: 0 }));


  block.push(new Blocks(x, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: 1}));
  block.push(new Blocks(x, y + (gridUnit * 2), r, g, b, true, { anchor: anchorBlock, dx: 0, dy: 2 }));
}
//18
function three_by_three(x,y){
  let r = 0, g = 190, b = 100;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);

  block.push(new Blocks(x, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: 1 }));
  block.push(new Blocks(x + gridUnit, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: 1 }));
  block.push(new Blocks(x + gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: 0 }));

  block.push(new Blocks(x, y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: -1 }));
  block.push(new Blocks(x - gridUnit, y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: -1, dy: -1 }));
  block.push(new Blocks(x - gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: -1, dy: 0 }));

  block.push(new Blocks(x + gridUnit, y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: -1 }));
  block.push(new Blocks(x - gridUnit, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: -1, dy: 1 }));
}
//19
function TWO_I_H(x,y){
  let r = 190, g = 0, b = 0;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);
  block.push(new Blocks(x + gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: 0 }));
}
//20
function TWO_I_V(x,y){
  let r = 100, g = 0, b = 150;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);
  block.push(new Blocks(x, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: 1 }));
}
//21
function FOUR_I_H(x,y){
  let r = 180, g = 90, b = 180;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);
  block.push(new Blocks(x + gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: 0 }));
  block.push(new Blocks(x + (2 * gridUnit), y, r, g, b, true, { anchor: anchorBlock, dx: 2, dy: 0 }));
  block.push(new Blocks(x - gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: -1, dy: 0 }));
}
//22
function FOUR_I_V(x,y){
    let r = 180, g = 80, b = 0;
    let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
    block.push(anchorBlock);
    block.push(new Blocks(x, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: 1 }));
    block.push(new Blocks(x, y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: -1 }));
    block.push(new Blocks(x, y - (2 * gridUnit), r, g, b, true, { anchor: anchorBlock, dx: 0, dy: -2 }));
}
//23
function FIVE_I_H(x,y){
  let r = 0, g = 40, b = 200;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);
  block.push(new Blocks(x + gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: 0 }));
  block.push(new Blocks(x + (2 * gridUnit), y, r, g, b, true, { anchor: anchorBlock, dx: 2, dy: 0 }));
  block.push(new Blocks(x - gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: -1, dy: 0 }));
  block.push(new Blocks(x - (2 * gridUnit), y, r, g, b, true, { anchor: anchorBlock, dx: -2, dy: 0 }));
}
//24 
function FIVE_I_V(x,y){
  let r = 50, g = 180, b = 0;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);
  block.push(new Blocks(x, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: 1 }));
  block.push(new Blocks(x, y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: -1 }));
  block.push(new Blocks(x, y - (2 * gridUnit), r, g, b, true, { anchor: anchorBlock, dx: 0, dy: -2 }));
  block.push(new Blocks(x, y + (2 * gridUnit), r, g, b, true, { anchor: anchorBlock, dx: 0, dy: 2 }));

}
//25
function two_by_three_H(x, y) {
  let r = 0, g = 190, b = 190;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);

  block.push(new Blocks(x, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: 1 }));
  block.push(new Blocks(x + gridUnit, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: 1 }));
  block.push(new Blocks(x + gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: 0 }));
  block.push(new Blocks(x - gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: -1, dy: 0 }));
  block.push(new Blocks(x - gridUnit, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: -1, dy: 1 }));
}
//26
function two_by_three_V(x, y) {
  let r = 190, g = 0, b = 190;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);

  block.push(new Blocks(x, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: 1 }));
  block.push(new Blocks(x + gridUnit, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: 1 }));
  block.push(new Blocks(x + gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: 0 }));
  block.push(new Blocks(x, y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: -1 }));
  block.push(new Blocks(x + gridUnit, y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: -1 }));


}
//27
function Diagnol_forward(x, y) {
  let r = 50, g = 100, b = 50;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);

  block.push(new Blocks(x - gridUnit, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: -1, dy: 1 }));
  block.push(new Blocks(x + gridUnit, y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: -1 }));
}
//28
function Diagnol_backward(x, y) {
  let r = 50, g = 50, b = 100;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);

  block.push(new Blocks(x - gridUnit, y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: -1, dy: -1 }));
  block.push(new Blocks(x + gridUnit, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: 1 }));
}
//29
function Elbow_one(x, y) {
  let r = 0, g = 190, b = 0;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);

  block.push(new Blocks(x, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: 1 }));
  block.push(new Blocks(x + gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: 0 }));
}
//30
function Elbow_two(x, y) {
  let r = 0, g = 190, b = 150;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);

  block.push(new Blocks(x, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: 1 }));
  block.push(new Blocks(x - gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: -1, dy: 0 }));
}
//31
function Elbow_three(x, y) {
  let r = 150, g = 160, b = 0;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);

  block.push(new Blocks(x, y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: -1 }));
  block.push(new Blocks(x - gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: -1, dy: 0 }));
}
//32
function Elbow_four(x, y) {
  let r = 0, g = 150, b = 200;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);

  block.push(new Blocks(x, y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: -1 }));
  block.push(new Blocks(x + gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: 0 }));
}
//33
function Z_one(x, y) {
  let r = 180, g = 40, b = 130;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);

  block.push(new Blocks(x, y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: -1 }));
  block.push(new Blocks(x + gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: 1, dy: 0 }));
  block.push(new Blocks(x - gridUnit, y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: -1, dy: -1 }));

}
//34
function Z_two(x, y) {
  let r = 90, g = 40, b = 190;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);

  block.push(new Blocks(x, y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: -1 }));
  block.push(new Blocks(x - gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: -1, dy: 0 }));
  block.push(new Blocks(x + gridUnit, y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: +1, dy: -1 }));

}
//35
function Z_three(x, y) {
  let r = 40, g = 40, b = 100;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);

  block.push(new Blocks(x, y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: -1 }));
  block.push(new Blocks(x - gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: -1, dy: 0 }));
  block.push(new Blocks(x - gridUnit, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: -1, dy: +1 }));

}
//36
function Z_four(x, y) {
  let r = 150, g = 80, b = 20;
  let anchorBlock = new Blocks(x, y, r, g, b, false, { dx: 0, dy: 0 });
  block.push(anchorBlock);

  block.push(new Blocks(x, y - gridUnit, r, g, b, true, { anchor: anchorBlock, dx: 0, dy: -1 }));
  block.push(new Blocks(x + gridUnit, y, r, g, b, true, { anchor: anchorBlock, dx: +1, dy: 0 }));
  block.push(new Blocks(x + gridUnit, y + gridUnit, r, g, b, true, { anchor: anchorBlock, dx: +1, dy: +1 }));

}