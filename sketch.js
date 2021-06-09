
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var object3;
var object2;
var engine, world;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
object=Bodies.rectangle(200,300,50,100);
object3=Bodies.rectangle(100,150,50,100);
object2=Bodies.circle(300,200,50,100);
World.add(world,object);
World.add(world,object2);
World.add(world,object3);
console.log(object);
console.log(object.position.x);
console.log(object.position.y);
}
function draw()
{
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
    rect(object.position.x,object.position.y,50,50);
    circle(object2.position.x,object2.position.y,50,50); 
    rect(object3.position.x,object3.position.y,50,50);
  }
