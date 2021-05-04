
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{	
}

function setup() {
 createCanvas(800, 700);
 engine = Engine.create();
 world = engine.world;

bob1=new Bob(200,450);
bob2=new Bob(280,450);
bob3=new Bob(360,450);
bob4=new Bob(440,450);
bob5=new Bob(520,450);

holder=new Roof(360,70);

rope1=new Rope(bob1.body,holder.body,-100,0);
rope2=new Rope(bob2.body,holder.body,-40,0);
rope3=new Rope(bob3.body,holder.body,0,0);
rope4=new Rope(bob4.body,holder.body,40,0);
rope5=new Rope(bob5.body,holder.body,100,0);

 Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);	
  rectMode(CENTER);
  background("lightgreen");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  holder.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
     Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50});    
  }
}

  




