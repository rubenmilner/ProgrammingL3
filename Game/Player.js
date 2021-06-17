class Player {
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
  
    playerMove() {
  
      if (rightPressed) {
        this.x += this.xSpeed;
        if(this.x > canvas.width){
          this.x = 0;
        }
      }
  
      if (leftPressed) {
        this.x -= this.xSpeed;
        if(this.x + this.w < 0){
          this.x = canvas.width - this.w;
        }
      }
  
      if (upPressed && this.y > 0){
        this.y -= this.ySpeed;
      }
  
      if (downPressed && this.y < canvas.height - P_SIZE){
        this.y += this.ySpeed;
      }
    }
  }
  