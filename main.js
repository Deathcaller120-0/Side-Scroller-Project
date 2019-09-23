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
var x = 0;
var y = 360;

function draw() {
 //alert('started drawing');
  
  //alert('loading framerate');
  
  frameRate(rate);
  
  //alert('checking outside of boundries');
  if (y <= 0){
    y = 2;
  }
  if (x <= 0){
    x = 2;    
  }
  if (y >= 401){
    y = 400;
  }
  if (x >= 401){
    x = 400;
  }
  
  //alert('everything else')
  frame++;
  clear();
  strokeWeight(4);
  stroke(0,127,255);
  rect(x, y, 40, 40);
  document.getElementById('X').innerHTML = x;
  document.getElementById('Y').innerHTML = y;
  document.getElementById('frame').innerHTML = frame;
  
  //alert('movement');
  //L + R Movement
  if (keyIsDown(LEFT_ARROW) == true){
    x -= 2;
  }
  if (keyIsDown(RIGHT_ARROW) == true){
    x += 2;
  }
  if (keyIsDown(UP_ARROW) == true){
    y -= 2;
  }
  if (keyIsDown(DOWN_ARROW) == true){
    y += 2;
  }
}

/*
function keyPressed(){
  //Jump
  if (keyCode === UP_ARROW){
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
*/
function Rate(){
  var a = document.getElementById('frame').value;
  var b = Number(a);
  if (b !== undefined){
    rate = b;
  } else {alert('Needs to be number')}
}
