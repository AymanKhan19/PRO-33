const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var snow = []



function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;
   bg = loadImage("snow1.jpg")
 
   

for(var i = 0; i< 500; i++){

  snow.push(new Snow(random (0,1000), random (0,100), random (10,40)))
}

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg); 
  Engine.update(engine); 
  drawSprites();
  for(var j = 0; j<snow.length; j++){

    snow[j].display();
  }
}