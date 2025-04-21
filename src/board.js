

class Board {
  constructor(worldCtx, collisionCtx) {
    this.worldCtx = worldCtx
    this.collisionCtx = collisionCtx
    this.overworld = new Image();
    this.overworld.src = './assets/images/maps/overworld.png'
    this.collisionMap = new Image();
    this.collisionMap.src = './assets/images/maps/overworld-collision.png'

    
    this.pos = { x: 5376, y: 3528 }
  }

  setLocation(playerPos, worldPos, map, collisionMap) {

  }

  scroll(direction) {

  }


  getMapPos() {
    return { x: this.pos.x / 768, y: (this.pos.y + 168) / 528}
  }

  render() {
    this.drawWorld();
    this.drawCollisionMap();
  }

  drawWorld() {
    this.worldCtx.drawImage(
      this.overworld,
      this.pos.x, 
      this.pos.y, 
      768,
      696,
      0,
      0,
      768,
      696
    )
  }

  drawCollisionMap() {
    this.collisionCtx.drawImage(
      this.collisionMap,
      this.pos.x,
      this.pos.y, 
      768,
      696,
      0,
      0,
      768,
      696
    )
  }
}

export default Board;

