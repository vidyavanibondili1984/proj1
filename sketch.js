
var car,wall;
var speed,weight;
var defar;
function setup() {
  createCanvas(800,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  wall=createSprite(700,200,60,height/2);
}

function draw() {
  background("black");  
  if(car.collide(wall))
  {
defar=(0.5*weight*speed*speed)/22500;
console.log(defar);
  }
  if(defar<100)
  {
    car.shapeColor="green";
  }
  else if(defar>100 && defar <180)
  {
    car.shapeColor="yellow";
  }
  else if(defar >180)
  {
    car.shapeColor="red";
  }
  drawSprites();
}