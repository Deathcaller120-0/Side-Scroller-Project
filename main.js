var player = {posX:0, posY:0, items:{slot0:"None", slot1:"None", slot2:"None", slot3:"None", slot4:"None"}, hp:10, speed:5, passive:"None", cEffect:"None"};
/* Player explaination
posX/Y, easy to understand
items, 5 slots numbered 0-4
hp, health
speed, 10 = 1 tile per sec
*/

function setup() {
  createCanvas(800, 600, WEBGL);
}

var x = 1; 
var y = 1;

document.addEventListener('onkeydown', function(event){
  var h = event.key;
  alert(h);
  if (h = "w"){
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
}, true)

function draw() {
  noStroke()
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  rect(x, y, 40, 40);
  fill('red');
  rect(x, y, 10, 10);
}
