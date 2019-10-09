// Map format obj
//Save select area
var tutorial = {LINES:[{x0:0,y0:360,x1:80,y1:340}, {x0:80,y0:340,x1:210,y1:380}, {x0:162,y0:360,x1:900,y1:355}], RECTS:[{x0:90,y0:340,W:10,H:10}]};

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
