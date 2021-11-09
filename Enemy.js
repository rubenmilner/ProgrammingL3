class Enemy {
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

    enemyMove() {
      this.x -= this.xSpeed;
      
      if(this.x < 0 - 1){
        this.x = canvas.width;
        this.y = 400 - this.h;
        this.w = 10;
        this.h = 10;
        this.xSpeed = Math.floor(Math.random() * (1+2) + 1);

      }
    }

    outOfBounds() {
      return this.x < 0;
    }
}