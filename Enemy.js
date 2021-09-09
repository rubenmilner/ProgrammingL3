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
      // this.y += this.ySpeed;

    }

    outOfBounds() {
      return this.x > canvas.width;
    }
}