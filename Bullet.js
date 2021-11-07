class Bullet {
    constructor(x, y, w, h, c, xSpeed, ySpeed) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.c = c;
      this.xSpeed = xSpeed;
      this.ySpeed = ySpeed;
    }
  
    drawRect() {
      canvasContext.fillStyle = this.c;
      canvasContext.fillRect(this.x, this.y, this.w, this.h);
    }

    bulletMove() {
        this.x -= this.xSpeed;
        this.y -= this.ySpeed;
    }

    

    outOfBounds(){
      return this.y < 0;
    }

    hasHitItem(item) {
      return (this.x + this.w > item.x && this.x < item.x + item.w) && (this.y + this.h > item.y && this.y < item.y + item.h);
    }

    hasHitEnemy(player){
      return this.hasHitItem(player);
  }

  hasCollided(){
    
  }
}