const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,pendulum,pendulum2,pendulum3,pendulum4,pendulum5,rop1,rop2,rop3,rop4,rop5;

function setup() {
  canvas=createCanvas(1000,1000);
  engine=Engine.create()
  world=Engine.world
  pendulum=new Pendulum(350,600)
  pendulum2=new Pendulum(400,600)
  pendulum3=new Pendulum(450,600)
  pendulum4=new Pendulum(500,600)
  pendulum5=new Pendulum(550,600)
  rop1=new Sling(pendulum.body,{x:350,y:600})
  rop2=new Sling(pendulum2.body,{x:400,y:600})
  rop3=new Sling(pendulum3.body,{x:450,y:600})
  rop4=new Sling(pendulum4.body,{x:500,y:600})
  rop5=new Sling(pendulum5.body,{x:550,y:600})
  
}

function draw() {
  background(255,255,255);  
  pendulum.display()
  pendulum5.display()
  pendulum2.display()
  pendulum3.display()
  pendulum4.display()
  rop1.display()
  rop2.display()
  rop3.display()
  rop4.display()
  rop5.display()
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(pendulum.body,{x:mouseX,y:mouseY})
}