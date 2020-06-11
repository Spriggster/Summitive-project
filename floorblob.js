class Floorblob{
  
  constructor() {
    this.r = 75;
    this.x = width;
    this.y = height - this.r;
  }
  
  move() {
    this.x -= 15;
  }
  show() {
    rect(this.x, this.y, this.r, this.r);
  }
}

 
