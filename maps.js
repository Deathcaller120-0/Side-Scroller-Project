// Map format obj
//Save select area
var tutorialLINES = [{x0:0,y0:360,x1:80,y1:340}, {x0:80,y0:340,x1:210,y1:380}, {x0:162,y0:360,x1:900,y1:355}];
var tutorialRECTS = [{x0:30,y0:340,W:10,H:10}];

/* Note for future me
	to RENDER,
	
	LINES:
	for (var i = 0; i < tutorialLINES.length; i++){
		line(tutorialLINES[i].x0-player.posX, tutorialLINES[i].y0-player.posY, tutorialLINES[i].x1-player.posX, tutorialLINES[i].y1-player.posY);
	}
	
	RECTS:
	for (var i = 0; i < tutorialRECTS.length; i++){
		rect(tutorialRECTS[i].x0, tutorialRECTS[i].y0, tutorialRECTS[i].W, tutorialRECTS[i].H);
	}
*/