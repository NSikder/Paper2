class BoxBase{
    constructor(x, y, width, height) {
      var options = {
          'friction':1.0,
          'isStatic':true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.image = loadImage("dustbingreen.png");
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      translate(this.body.position.x, this.body.position.y);
      fill(0,255,0);
      imageMode(CENTER);
      image(this.image, 0, 0,240,250);
      pop();
    }
  };
  