// Map format obj
//Save select area
var tutorial = {LINES:[{x0:0,y0:460,x1:200,y1:440}, {x0:200,y0:440,x1:400,y1:480}, {x0:400,y0:480,x1:1000,y1:500}, {x0:1000,y0:500,x1:1500,y1:480}], RECTS:[{x0:800,y0:420,W:40,H:80}]};

/* Note for future me
	to RENDER,
	
	LINES:
	for (var i = 0; i < tutorial.LINES.length; i++){
		line(tutorial.LINES[i].x0-player.posX, tutorial.LINES[i].y0-player.posY, tutorial.LINES[i].x1-player.posX, tutorial.LINES[i].y1-player.posY);
	}
	
	RECTS:
	for (var i = 0; i < tutorial.RECTS.length; i++){
		rect(tutorial.RECTS[i].x0, tutorial.RECTS[i].y0, tutorial.RECTS[i].W, tutorial.RECTS[i].H);
	}
*/

var weapons = {melee:{strSwd:{slot:"Starter Sword", nbt:{dmg:5,dis:5}}, shtSwd:{slot:"Dagger", nbt:{dmg:6, dis:2}}}, ranged:{}, special:{}};
