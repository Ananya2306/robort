var x =40;
var y = 380;
var radius = 45;
var bodyHeight = 160;
var neckHeight = 70;
var easing = 0.04;

function setup(){
 createCanvas(600,600);
  strokeWeight(2);
    ellipseMode(RADIUS);
}
function draw(){
  background("black");
  var targetX=mouseX;
  x=x+(targetX-x)* easing;
  
  if(mouseIsPressed){
    neckHeight = 16;
    BodyHeight= 90;
  }
  else{
    neckHeight = 70;
    bodyHeight = 160;
  }
  var neckY=y-bodyHeight-neckHeight-radius;
  
  
  stroke(100);
  line(x+12,y-bodyHeight,x+12,neckY);
  
  line(x+12,neckY,x-18,neckY-43);
  line(x+12,neckY,x+42,neckY-99);
  line(x+12,neckY,x+78,neckY+15);
  
  noStroke();
  fill("brown");
  ellipse(x,y-33,33,33);
  fill("red");
  rect(x-45,y-bodyHeight,90,bodyHeight-33);
  
  fill("blue");
  ellipse(x+12,neckY,radius,radius);
  fill("black");
  ellipse(x+24,neckY-16,14,14);

  ellipse(x+24,neckY-6,3,3);
  
}