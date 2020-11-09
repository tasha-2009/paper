const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground;
var engine, world;
var ball,box1,box2,box3;



function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,390,1200,20)

    box1 = new dustbin(700,330,30,100);
    box2 = new dustbin (800,370,200,30);
    box3 = new dustbin(900,330,30,100);
   

   ball= new paper(30,365,20,20);
 ball.velocityY=5;
  
}


function draw(){
    background("black");
    Engine.update(engine);
  //  console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    ball.display();
}


