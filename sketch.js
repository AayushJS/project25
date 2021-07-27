
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world , crumball, crumballImage;

function setup() {
	createCanvas(1400, 660);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,650,width,20);
	dustbinObj=new dustbin(1200,650);
	crumball =new paper(100,600,100);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(230);
 
  groundObject.display();
  dustbinObj.display();
  crumball.display(); 
   
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(crumball.body,crumball.body.position,{x:585,y:-600});
	}
}