class Bomb {
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


  BombMove() {
    this.y += this.ySpeed;
  }
  
  outOfBounds() {
    return this.y > 400; // change 400 to terrain.y
  }

  hasHitItem(item) {
    return (this.x + this.w > item.x && this.x < item.x + item.w) && (this.y + this.h > item.y && this.y < item.y + item.h);
  }

  hasHitEnemy(enemy){
    return this.hasHitItem(enemy);
}

  hasCollided() {
    var self = this;
    var collided = false;
    enemies.forEach(function (enemy, i) {
      if (self.hasHitEnemy(enemy)) {
        delete enemies[i];
        collided = true;
      }
    });
    enemies = enemies.filter(item => item !== undefined);
    return collided;
  }



}