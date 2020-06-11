class Blob {
  constructor() {
    this.r = 50;
    this.x = 50; 
    this.y = height - this.r;
    this.vy = 0;
    this.gravity =  2; 
  } 

  jump() {
    if (this.y == height - this.r){
      this.vy = -30;
      this.gravity = 2;
    }
  }
 float(){
   if (this.y != height -this.r){
     this.gravity = 0.5;
   }
   if (this.y == height -this.r){
     this.gravity = 2;
   }
 }
  hits(floorblob) {
  
    return collideRectRect (this.x,this.y,this.r,this.r,floorblob.x,floorblob.y,floorblob.r,floorblob.r);
    
  }
  
  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height-this.r);
  }
  show() {
    rect(this.x, this.y, this.r, this.r);
  }
  
}
