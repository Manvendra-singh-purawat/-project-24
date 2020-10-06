
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var line1Sprite,line2Sprite,line3Sprite;
var ballSprite;


function setup() {
	createCanvas(800, 700);

var option



	engine = Engine.create();
	world = engine.world;

	line1Sprite=createSprite(500,600,10,100);

	line2Sprite = createSprite(550,650,100,10);

	line1Sprite=createSprite(600,600,10,100);

	ballSprite=createSprite(200,500,10,10);
	
	
	
	
	
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



