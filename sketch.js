var fixedRect, movingRect, car, wall;


function setup() {
  createCanvas(1200,800);
  wall = createSprite(600, 400, 50, 80);
  wall.shapeColor = "green";
  wall.debug = true;
  car = createSprite(400,200,80,30);
  car.shapeColor = "green";
  car.debug = true;
}

function draw() {
  background(0,0,0);  
  car.x = World.mouseX;
  car.y = World.mouseY;

if (collide(car,wall)){

  car.shapeColor = "red";
  wall.shapeColor = "red";

}
else{
  car.shapeColor = "green";
  wall.shapeColor = "green";


}
  drawSprites();
}

