var player = {posX:0, posY:0, height:40, items:[{slot0:"None",nbt:{}}, {slot1:"None",nbt:{}}, {slot2:"None",nbt:{}}, {slot3:"None",nbt:{}}, {slot4:"None",nbt:{}}], hp:10, speed:20, passive:"None", cEffect:"None"};
/* Player explaination
posX/Y, easy to understand
items, 5 slots numbered 0-4
hp, health
speed, 10 = 1 tile per frame
height, 80 = standing height
*/

function setup() {
	collideDebug(true, 3, 'yellow');
	createCanvas(400, 400);
	frameRate(60);
	noCursor();
}

var rate = 60;
var frame = 0;
var RGBcolor = {R:0, G:0, B:0};
var colliding = {ground:[false, false], enemy:false};

function draw() {
	colliding.ground[1] = false
	//alert('started drawing');
	//alert('checking outside of boundries');
	if (player.posX <= 0){player.posX = 2;}
	if (player.posY >= 900){player.posY = 0;}
	
	//alert('player');
	frame++;
	clear();
	//player
	stroke('white');
	fill(RGBcolor.R, RGBcolor.G, RGBcolor.B);
	rect(90, 300, 40, player.height);
	
	//alert('colide');
	//ground
	//Not only collide, but also collidee
	for (var i = 0; i < tutorial.LINES.length; i++){
		line(tutorial.LINES[i].x0-player.posX, tutorial.LINES[i].y0-player.posY, tutorial.LINES[i].x1-player.posX, tutorial.LINES[i].y1-player.posY);
		colliding.ground[0] = collideLineRect(tutorial.LINES[i].x0-player.posX, tutorial.LINES[i].y0-player.posY, tutorial.LINES[i].x1-player.posX, tutorial.LINES[i].y1-player.posY, 90, 300, 40, player.height);
		if (colliding.ground[0] == true){
			y--;
			RGBcolor++;
			colliding.ground[1] = true;
		}
	}
	
	for (i = 0; i < tutorial.RECTS.length; i++){
		fill('#fff');
		rect(tutorial.RECTS[i].x0-player.posX, tutorial.RECTS[i].y0-player.posY, tutorial.RECTS[i].W, tutorial.RECTS[i].H);
		colliding.enemy = collideRectRect(tutorial.RECTS[i].x0-player.posX, tutorial.RECTS[i].y0-player.posY, tutorial.RECTS[i].W, tutorial.RECTS[i].H, 90, 300, 40, player.height);
	}
	
	if (colliding.enemy == true){
		RGBcolor.G += 5;
	}
	
	if (RGBcolor.R >= 255){
		RGBcolor.G += 1;
		RGBcolor.R = 0;
	}
	if (RGBcolor.G >= 255){
		RGBcolor.B += 1;
		RGBcolor.G = 0;
	}	
	if (RGBcolor.B >= 255){
		RGBcolor.B = 0;
	}	
	//alert('yay');
	
	document.getElementById('X').innerHTML = player.posX;
	document.getElementById('Y').innerHTML = player.posY;
	document.getElementById('frame').innerHTML = frame;
	document.getElementById('r').innerHTML = RGBcolor.R;
	document.getElementById('g').innerHTML = RGBcolor.G;
	document.getElementById('b').innerHTML = RGBcolor.B;
	
	//alert('movement');
	//L + R Movement
	player.height = 80;
	if (keyIsDown(LEFT_ARROW) == true){
		player.posX -= 2;
	}
	if (keyIsDown(RIGHT_ARROW) == true){
		player.posX += 2;
	}
	function keyReleased(){
		if (keyCode === 38){
		player.posY -= 10;
		}
	}	
	if (keyIsDown(DOWN_ARROW) == true){
		player.height = 40;
	}
  
	fill('white');
	stroke('black');
	triangle(mouseX, mouseY, mouseX+16, mouseY+2, mouseX+2, mouseY+16);
	
	if (collide.ground[1] == false){
		y++;
	}
}

function commandLine(){
	var a = document.getElementById('commandIn').value; //alert(a);
	var b = a.substr(0,2);
	var c = a.substr(3,5);
	
	switch(b){
		case "fr":
			var z = Number(c); //alert(b);
			if (isNaN(z) == false && z !== 0){
			rate = Number(z); //alert(rate);
			frameRate(rate);
			} else {alert('Needs to be number')}
			break;
		case "xp":
			var d = Number(c);
			if (isNaN(d) == false){
				player.posX = d;
			}
			break;
		case "yp":
			var e = Number(c);
			if (isNaN(e) == false){
				player.posY = e;
			}
			break;
	}
}

//Test Code, since i have not had any luck getting it to work

/*
Repo: https://github.com/bmoren/p5.collide2D/
Created by http://benmoren.com
Some functions and code modified version from http://www.jeffreythompson.org/collision-detection
Version 0.6 | Nov 28th, 2018
CC BY-NC-SA 4.0
*/

console.log("### p5.collide ###"),p5.prototype._collideDebug=!1,p5.prototype.collideDebug=function(i){_collideDebug=i},p5.prototype.collideRectRect=function(i,t,e,o,r,l,n,c){return i+e>=r&&i<=r+n&&t+o>=l&&t<=l+c},p5.prototype.collideRectCircle=function(i,t,e,o,r,l,n){var c=r,p=l;return r<i?c=i:r>i+e&&(c=i+e),l<t?p=t:l>t+o&&(p=t+o),this.dist(r,l,c,p)<=n/2},p5.prototype.collideCircleCircle=function(i,t,e,o,r,l){return this.dist(i,t,o,r)<=e/2+l/2},p5.prototype.collidePointCircle=function(i,t,e,o,r){return this.dist(i,t,e,o)<=r/2},p5.prototype.collidePointEllipse=function(i,t,e,o,r,l){var n=r/2,c=l/2;if(i>e+n||i<e-n||t>o+c||t<o-c)return!1;var p=i-e,s=t-o,d=c*this.sqrt(this.abs(n*n-p*p))/n;return s<=d&&s>=-d},p5.prototype.collidePointRect=function(i,t,e,o,r,l){return i>=e&&i<=e+r&&t>=o&&t<=o+l},p5.prototype.collidePointLine=function(i,t,e,o,r,l,n){var c=this.dist(i,t,e,o),p=this.dist(i,t,r,l),s=this.dist(e,o,r,l);return void 0===n&&(n=.1),c+p>=s-n&&c+p<=s+n},p5.prototype.collideLineCircle=function(i,t,e,o,r,l,n){var c=this.collidePointCircle(i,t,r,l,n),p=this.collidePointCircle(e,o,r,l,n);if(c||p)return!0;var s=i-e,d=t-o,u=this.sqrt(s*s+d*d),h=((r-i)*(e-i)+(l-t)*(o-t))/this.pow(u,2),y=i+h*(e-i),f=t+h*(o-t);return!!this.collidePointLine(y,f,i,t,e,o)&&(this._collideDebug&&this.ellipse(y,f,10,10),s=y-r,d=f-l,this.sqrt(s*s+d*d)<=n/2)},p5.prototype.collideLineLine=function(i,t,e,o,r,l,n,c,p){var s=((n-r)*(t-l)-(c-l)*(i-r))/((c-l)*(e-i)-(n-r)*(o-t)),d=((e-i)*(t-l)-(o-t)*(i-r))/((c-l)*(e-i)-(n-r)*(o-t));if(s>=0&&s<=1&&d>=0&&d<=1){if(this._collideDebug||p)var u=i+s*(e-i),h=t+s*(o-t);return this._collideDebug&&this.ellipse(u,h,10,10),!p||{x:u,y:h}}return!!p&&{x:!1,y:!1}},p5.prototype.collideLineRect=function(i,t,e,o,r,l,n,c,p){var s,d,u,h,y;return p?(s=this.collideLineLine(i,t,e,o,r,l,r,l+c,!0),d=this.collideLineLine(i,t,e,o,r+n,l,r+n,l+c,!0),u=this.collideLineLine(i,t,e,o,r,l,r+n,l,!0),h=this.collideLineLine(i,t,e,o,r,l+c,r+n,l+c,!0),y={left:s,right:d,top:u,bottom:h}):(s=this.collideLineLine(i,t,e,o,r,l,r,l+c),d=this.collideLineLine(i,t,e,o,r+n,l,r+n,l+c),u=this.collideLineLine(i,t,e,o,r,l,r+n,l),h=this.collideLineLine(i,t,e,o,r,l+c,r+n,l+c)),!!(s||d||u||h)&&(!p||y)},p5.prototype.collidePointPoly=function(i,t,e){for(var o=!1,r=0,l=0;l<e.length;l++){r=l+1,r==e.length&&(r=0);var n=e[l],c=e[r];(n.y>t&&c.y<t||n.y<t&&c.y>t)&&i<(c.x-n.x)*(t-n.y)/(c.y-n.y)+n.x&&(o=!o)}return o},p5.prototype.collideCirclePoly=function(i,t,e,o,r){void 0==r&&(r=!1);for(var l=0,n=0;n<o.length;n++){l=n+1,l==o.length&&(l=0);var c=o[n],p=o[l];if(this.collideLineCircle(c.x,c.y,p.x,p.y,i,t,e))return!0}if(1==r){if(this.collidePointPoly(i,t,o))return!0}return!1},p5.prototype.collideRectPoly=function(i,t,e,o,r,l){void 0==l&&(l=!1);for(var n=0,c=0;c<r.length;c++){n=c+1,n==r.length&&(n=0);var p=r[c],s=r[n];if(this.collideLineRect(p.x,p.y,s.x,s.y,i,t,e,o))return!0;if(1==l){if(this.collidePointPoly(i,t,r))return!0}}return!1},p5.prototype.collideLinePoly=function(i,t,e,o,r){for(var l=0,n=0;n<r.length;n++){l=n+1,l==r.length&&(l=0);var c=r[n].x,p=r[n].y,s=r[l].x,d=r[l].y;if(this.collideLineLine(i,t,e,o,c,p,s,d))return!0}return!1},p5.prototype.collidePolyPoly=function(i,t,e){void 0==e&&(e=!1);for(var o=0,r=0;r<i.length;r++){o=r+1,o==i.length&&(o=0);var l=i[r],n=i[o],c=this.collideLinePoly(l.x,l.y,n.x,n.y,t);if(c)return!0;if(1==e&&(c=this.collidePointPoly(t[0].x,t[0].y,i)))return!0}return!1},p5.prototype.collidePointTriangle=function(i,t,e,o,r,l,n,c){var p=this.abs((r-e)*(c-o)-(n-e)*(l-o));return this.abs((e-i)*(l-t)-(r-i)*(o-t))+this.abs((r-i)*(c-t)-(n-i)*(l-t))+this.abs((n-i)*(o-t)-(e-i)*(c-t))==p},p5.prototype.collidePointPoint=function(i,t,e,o,r){return void 0==r&&(r=0),this.dist(i,t,e,o)<=r},p5.prototype.collidePointArc=function(i,t,e,o,r,l,n,c){void 0==c&&(c=0);var p=this.createVector(i,t),s=this.createVector(e,o),d=this.createVector(r,0).rotate(l),u=p.copy().sub(s);if(p.dist(s)<=r+c){var h=d.dot(u),y=d.angleBetween(u);if(h>0&&y<=n/2&&y>=-n/2)return!0}return!1};
