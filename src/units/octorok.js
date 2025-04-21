import * as Util from '../util/util'
import Unit from './unit'
class Octorok extends Unit {
  constructor(pixelPos, grid, ctx) {
    let type = Util.random(0, 4)
    super(pixelPos, grid, (type * 96), ctx)
    

    this.hp = (type === 0 || type === 2) ? 1 : 2;


    this.speed = Util.random(1,3)
    //start action cycle
    this.updateAction();
  }
  
}

export default Octorok;