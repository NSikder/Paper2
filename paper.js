class Paper {
    constructor(){
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2

        }
        this.body = Bodies.circle(75, 100, 50, options);
        this.radius = 50;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        stroke("Yellow");
        fill(255,0,0);
        imageMode(CENTER);
        image(this.image, 0, 0, 100, 100);
        pop();
    }
};