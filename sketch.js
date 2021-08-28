const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg

var superhero, monster

function preload() {
//preload the images here
bg = loadImage("light.png")
}

function setup() {
  createCanvas(900, 400);
  // create sprites here
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(250,390,900,10);

  superhero = new Hero(400,3,150,150);
  superhero.scale = 0.5

  monster = new Monster(650,250,10,10);
  monster.scale = 0.5
  
  stroke (1);
  fill ("red")
  attach = new Fly(superhero.body,{x:100,y:465});
  block1 = new Block(400,365,35,40)
  block2 = new Block(435,365,35,40)
  block3 = new Block(470,365,35,40)
  block4 = new Block(505,365,35,40)
  block5 = new Block(540,365,35,40)
  block6 = new Block(435,324,35,40)
  block7 = new Block(470,324,35,40)
  block8 = new Block(505,324,35,40)
  block9 = new Block(435,283,35,40)
  block10 = new Block(435,242,35,40)
  block11 = new Block(435,201,35,40)
  block12 = new Block(505,283,35,40)
  block13 = new Block(505,242,35,40)
  block14 = new Block(505,201,35,40)
  
  
  
  Engine.run(engine);
}

function draw() {
  background(bg);

ground.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();

superhero.display();
monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{x:mouseX, y: mouseY})
}

function mouseReleased(){
  attach.throw();
}