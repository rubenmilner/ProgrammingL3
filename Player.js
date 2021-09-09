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
  
      if (rightPressed && this.x < canvas.width - P_SIZE) {
        this.x += this.xSpeed;
        if(this.x > canvas.width){
          this.x = 0;
        }
      }
  
      if (leftPressed && this.x >0) {
        this.x -= this.xSpeed;
      }

      if (upPressed && this.y > 0){  
        this.y -= this.ySpeed;
      }
      
      
      if (downPressed && this.y < 400 - P_SIZE) {
        this.y += this.ySpeed;
      } 

    }
  }
