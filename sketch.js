
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hasfired = false;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	fill(255,0,0);

	//Create the Bodies Here.
	ground = Bodies.rectangle(800, 700, 1600, 1 , {friction:1.0, isStatic:true} );
	World.add(world, ground);

	paper1 = new Paper();
	box1 = new BoxBase(1400,580,200,10);
	box2 = new Box(1300,555,10,190);
	box3 = new Box(1500,555,10,190);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(200,200,200);
  
  drawSprites();
  paper1.display();
  box2.display();
  box3.display();
  box1.display();
  if (keyWentDown("UP_ARROW") && hasfired == false ){
	launch();
  }
}

function launch(){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:700,y:-595});
	hasfired = true;
}