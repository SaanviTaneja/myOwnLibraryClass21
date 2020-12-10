var movingRect, fixedRect;



function setup() {
  createCanvas(1200,800);
  

  fixedRect = createSprite(400,100,50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = 5;
  fixedRect.debug = true;

  movingRect = createSprite(400, 800, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = -5;

  
}

function draw() {
  background(0); 
/*movingRect.x = mouseX; 
movingRect.y = mouseY;*/

console.log(movingRect.x - fixedRect.x);
  
bounceOff(movingRect, fixedRect);


  drawSprites();
}

