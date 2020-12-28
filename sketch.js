
var dustbin1,dustbin2,dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper1;
function preload()
{
	
}

function setup() {
  createCanvas(1000, 400);
  rectMode(CENTER);
  engine = Engine.create();
	world = engine.world;
groundSprite=createSprite(width/2,380,width,10)
groundSprite.shapeColor=color("yellow")

dustbin1=createSprite(800,365,150,10)
dustbin2=createSprite(870,345,10,50)
dustbin3=createSprite(720,345,10,50)
dustbin1.shapeColor=color("white")
dustbin2.shapeColor=color("white")
dustbin3.shapeColor=color("white")

	
paper1=new paper(100,362,25,25)
	//Create the Bodies Here.
  ground=Bodies.rectangle(width/2,380,width,10,{ bounce:true});
  World.add(world,ground);

  dustbin1=Bodies.rectangle(800,365,150,10,{isStatic:true});
  World.add(world,dustbin1);
  dustbin2=Bodies.rectangle(870,345,10,50,{isStatic:true});
  World.add(world,dustbin2);
  dustbin3=Bodies.rectangle(720,345,10,50,{isStatic:true});
  World.add(world,dustbin3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  drawSprites();
  paper1.display();
}


function KeyPressed(){
  if(keyCode === UP_ARROW){
   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85}); 
  }
}
