const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground, dustbin;
var world;
	
function setup() {
	createCanvas(1200, 500);

    engine = Engine.create();
    world = engine.world;

	paper=new Paper();
	ground=new Ground(450, 490, 1200, 10);
	dustbin=new Dustbin();

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");
  paper.display();
  ground.display();
  dustbin.display();
 

}

function keyPressed(){

	if(keyCode == UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-100})

	}

}