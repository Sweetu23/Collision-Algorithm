

var mr,fr;


function setup() {
  createCanvas(800,800);
  fr=createSprite(600, 400, 50, 80);
  mr=createSprite(400, 200, 80, 30);

  fr.shapeColor="green";
  mr.shapeColor="green";
}

function draw() {
  background(0,255,255);  
  mr.x=World.mouseX;
  mr.y=World.mouseY; 

  if(mr.x-fr.x<mr.width/2+fr.width/2
    && fr.x-mr.x<mr.width/2+fr.width/2
    && mr.y-fr.y<mr.width/2+fr.width/2
    && fr.y-mr.y<mr.width/2+fr.width/2
    ) {
  mr.shapeColor="red";
  fr.shapeColor="red"
  
  }
  else{
    mr.shapeColor="green";
    fr.shapeColor="green";
  
  }

  drawSprites();
}