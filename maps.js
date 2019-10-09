// Map format obj
//Save select area
var tutorial = {LINES:[{x0:0,y0:460,x1:100,y1:440}, {x0:100,y0:440,x1:200,y1:480}, {x0:200,y0:460,x1:900,y1:500}], RECTS:[{x0:100,y0:440,W:10,H:10}]};

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
