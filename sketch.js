var fixedRect, movingRect;
var gameObject1, gameObject2;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite (200,100,50,80);
  movingRect = createSprite(200,400,80,50);
  gameObject1 = createSprite (600,100,50,80);
  gameObject2 = createSprite(600,400,80,50);

  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";

  fixedRect.velocityY = 5;
  movingRect.velocityY = -5;
  gameObject1.velocityY = 5;
  gameObject2.velocityY = -5;

}

function draw() {
  background(255,255,255);  
  
  bounceOff(fixedRect, movingRect); 
  
  bounceOff(gameObject1, gameObject2);
  
  drawSprites();
}

