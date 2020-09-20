function isTouching(rectA,rectB){
    if (rectA.x - rectB.x < rectB.width/2 + rectA.width/2
      && rectB.x - rectA.x < rectB.width/2 + rectA.width/2
      && rectA.y - rectB.y < rectB.height/2 + rectA.height/2
      && rectB.y - rectA.y < rectB.height/2 + rectA.height/2) {
          return true;
  }
  else {
          return false;
  }
  }
  
  
  function bounceOff(rectA,rectB){
    if (rectA.x - rectB.x < rectB.width/2 + rectA.width/2
      && rectB.x - rectA.x < rectB.width/2 + rectA.width/2
      && rectA.y - rectB.y < rectB.height/2 + rectA.height/2
      && rectB.y - rectA.y < rectB.height/2 + rectA.height/2) {
         rectA.velocityX = (-1)* rectA.velocityX;
         rectA.velocityY = (-1)* rectA.velocityY;
         rectB.velocityX = (-1)* rectB.velocityX;
         rectB.velocityY = (-1)* rectB.velocityY;
  }
  }