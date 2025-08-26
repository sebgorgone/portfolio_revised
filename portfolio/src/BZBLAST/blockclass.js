let shadeOffset = -30;

class Blocks {
   constructor(initialx, initialy, colorR, colorG, colorB, isFollower, anchorData) {
     this.x = initialx;
     this.y = initialy;
 
     this.cr = colorR;
     this.cg = colorG;
     this.cb = colorB;
 
     this.isFollower = isFollower;
     this.isresting = false;

     this.iconUnit = gridUnit / 1.8;
 
     if (this.isFollower && anchorData) {
       this.anchor = anchorData.anchor;
       this.dx = anchorData.dx;
       this.dy = anchorData.dy;
     } else {
       this.anchor = null;
       this.dx = 0;
       this.dy = 0;
     }
 
     this.updatePos();
   }
 
   updatePos() {
     this.x1 = this.x - gridUnit;
     this.y1 = this.y - gridUnit;
   }
 
   follow() {
     if (this.anchor && !this.isresting)  {
       this.x = this.anchor.x + this.dx * gridUnit;
       this.y = this.anchor.y + this.dy * gridUnit;
       this.updatePos();
     }
   }
 
   show() {
    if(this.x > layoutbound.x1 + gridUnit && this.x < layoutbound.x2 &&
      this.y > layoutbound.y1 + (1.5 * gridUnit) && this.y < layoutbound.y2 - (gridUnit)
    ) {
        push();
        stroke(146 + shadeOffset, 65 + shadeOffset, 68 + shadeOffset);
        // fill(this.cr, this.cg, this.cb);
        fill(146, 65, 68);
        quad(this.x1, this.y1, this.x, this.y1, this.x, this.y, this.x1, this.y);
        pop();
        push();
        noStroke();
        fill(146 - shadeOffset, 65 - shadeOffset, 68 - shadeOffset);
        // fill(this.cr - shadeOffset, this.cg - shadeOffset, this.cb - shadeOffset);
        quad(this.x1 + (gridUnit * .08), this.y1 + (gridUnit * .08), this.x - (gridUnit * .08), this.y1 + (gridUnit * .08), this.x - (gridUnit * .08), this.y - (gridUnit * .85), this.x1 + (gridUnit * .08), this.y - (gridUnit * .08));
        pop();
      }
   }
   showIcon() {
    push();
    // fill(this.cr, this.cg, this.cb);
    fill(146, 65, 68);
    quad(this.x - this.iconUnit, this.y - this.iconUnit, this.x, this.y - this.iconUnit, this.x, this.y, this.x - this.iconUnit, this.y);
    pop();
   }
   followIcon() {
    if (this.anchor && !this.isresting)  {
      this.x = this.anchor.x + (this.dx * this.iconUnit)
      this.y = this.anchor.y + (this.dy * this.iconUnit)
    }


   }
 }