var fixedRect, movingRect;

var rect1,rect2,rect3,rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  rect1 = createSprite(200,200,50,50);
  rect1.shapeColor = "green";

  rect2 = createSprite(400,200,50,50);
  rect2.shapeColor = "green";

  rect3 = createSprite(600,200,50,50);
  rect3.shapeColor = "green";

  rect4 = createSprite(800,200,50,50);
  rect4.shapeColor = "green";

 
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if( isTouching(movingRect,rect1)){
   movingRect.shapeColor = "orange";
   rect1.shapeColor = "white";
 }
 

 if(isTouching(movingRect,rect2)){
   rect2.destroy();
 }

 if(isTouching(movingRect,rect3)){
   rect3.velocityY = 3;
   fixedRect.velocityY = -2;
 }

 if(isTouching(movingRect,rect4)){
   rect4.height = 80;
 }

 bounceOff(rect3,fixedRect);

  drawSprites();
}


