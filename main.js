var player = {posX:0, posY:0, items:{slot0:"None", slot1:"None", slot2:"None", slot3:"None", slot4:"None"}, hp:10, speed:5, passive:"None", cEffect:"None"};
/* Player explaination
posX/Y, easy to understand
items, 5 slots numbered 0-4
hp, health
speed, 10 = 1 tile per sec
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
}

var x = 1; 
var y = 1;
setInterval(thing, 500);
function thing(){
  x++;
  if (x >= windowWidth){
    x = 0;
    y++;
  }
  if (y >= windowHeight){
    y = 0;
  }
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  rect(x, y, 80, 80);
}
