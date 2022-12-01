
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particle1, particle2, particle3;
var rotator1, rotator2, rotator3;
var block1, block2
var angle1=60
var angle2=60
var angle3=60



function setup() {
	createCanvas(550, 600);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	//Crie os Corpos aqui.
var plane_options ={
	isStatic: true
}

plane=Bodies.rectangle(600, height, 1200, 20, plane_options);
World.add(world,plane);

block1 = Bodies.rectangle(100, 400, 150, 20, plane_options)
World.add(world,block2);
	
block2=Bodies.rectangle(400,409,15,20,plane_options)
World.add(world,block2);

var particle_options={
	restitution:0.4,
	friction: 0.02
}

particle1 = Bodies.circle(200,10,10,particle_options)
World.add(world.particle1)

particle2 = Bodies.circle(200,10,10,particle_options)
World.add(world,particle2)
particle3 = Bodies.circle(200,10,10,particle_options)
World.add(world,particle3)

	var rotator_options={
		isStatic: true
	}
rotator1 = Bodies.rectangle(250,200,150,20,rotator_options)
World.add(world,rotator1)

rotator2 = Bodies.rectangle(250,200,150,20,rotator_options)
World.add(world,rotator2)

rotator3 = Bodies.rectangle(250,200,150,20,rotator_options)
World.add(world,rotator3)

fill("blue")
rectMode(CENTER)
ellipseMode(RADIUS)






}








function draw() {
  background("white");
  
  Engine.update(engine);

  rect(plane.position.x,plane.position.y,1200,20)
  rect(block1.position.x,block1.position.y,150,20)
  rect(block2.position.x,block2.position.y,150,20)

ellipse(particle1.position.x,particle1.position.y,10)
ellipse(particle2.position.x,particle2.position.y,10)
ellipse(particle3.position.x,particle3.position.y,10)











  drawSprites();
 
}



