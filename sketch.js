var FixedRect;
var MovingRect;
var GameObject1,GameObject2,GameObject3,GameObject4;

function setup() {
  createCanvas(1200,800);
  FixedRect=createSprite(200,200,50,80);
  FixedRect.shapeColor="green";
  MovingRect=createSprite(400,200,80,30);
  MovingRect.shapeColor="green";

  FixedRect.debug=true;
  MovingRect.debug=true;

  GameObject1 = createSprite(100,100,50,50);
   GameObject1.shapeColor="White"

   GameObject2 = createSprite(200,100,50,50);
   GameObject2.shapeColor="White"

   GameObject3 = createSprite(300,100,50,50);
   GameObject3.shapeColor="White"

   GameObject4 = createSprite(400,100,50,50);
   GameObject4.shapeColor="White"


}

function draw() {
  background("red");
  
  MovingRect.x=mouseX;
  MovingRect.y=mouseY;

 console.log(MovingRect.y-FixedRect.y);
 
 if(isTouching(MovingRect,GameObject3)){
   GameObject3.shapeColor="black";
   MovingRect.shapeColor="cyan";
 

 }
 else{
  GameObject3.shapeColor="white";
  MovingRect.shapeColor="green"; 
 }





  drawSprites();
}

function isTouching(object1,object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2   &&
      object2.x - object1.x < object2.width/2 + object1.width/2   &&
      object1.y - object2.y < object2.height/2 + object1.height/2 &&
      object2.y - object1.y < object2.height/2 + object1.height/2){

  return true; 
   }
  else{
  return false;
  }
  }
  

