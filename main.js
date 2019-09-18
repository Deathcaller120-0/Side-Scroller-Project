var player = {posX:0, posY:0, items:{slot0:"None", slot1:"None", slot2:"None", slot3:"None", slot4:"None"}, hp:10, speed:5, passive:"None", cEffect:"None"};
/* Player explaination
posX/Y, easy to understand
items, 5 slots numbered 0-4
hp, health
speed, 10 = 1 tile per sec
*/

function setup() {
  createCanvas(400, 400);
}

var rate = 60;
var frame = 0;
var x = 1;
var y = 1;

function draw() {
  frameRate(rate);
  if (y <= 0){
    y = 0;
  }
  if (x <= 0){
    x = 0;    
  }
  frame++;
  clear();
  strokeWeight(4);
  stroke(0,127,255);
  rect(x, y, 40, 40);
  document.getElementById('X').innerHTML = x;
  document.getElementById('Y').innerHTML = y;
  document.getElementById('frame').innerHTML = frame;
  
  //L + R Movement
  if (keyIsPressed(LEFT_ARROW)){
    x -= 3;
  }
  if (keyIsPressed(RIGHT_ARROW)){
    x += 3;
  }
}

function keyTyped(){
  //Jump
  if (key === UP_ARROW){
    function a(){
      y++;
      if(y >= 21){
        clearInterval(q);
        function aa(){
          y--;
          if (y == 0){
            clearInterval(e);
          }
        }
        var e = setInterval(aa, 10);
      }
    }
    var q = setInterval(a, 10);
  }
}
