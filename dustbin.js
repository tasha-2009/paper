class dustbin extends BaseClass {
    constructor(x, y, height, angle) {
     super(x,y,20,height);
      Matter.Body.setAngle(this.body, angle);
     
    }
    
  }

