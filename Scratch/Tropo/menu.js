var scratchTropoBuildings = [{name:"Order of Operations", x:-1000, y:-500, w:200, h:200},
             {name:"Variables", x:-450, y:-620, w:275, h:200},
             {name:"Cartesian Coordinates", x:250, y:-600, w:350, h:200},
             {name:"Events", x:250, y:0, w:250, h:200},
             {name:"Sounds", x:-600, y:-250, w:300, h:250},
             {name:"Operators", x:-225, y:-125, w:250, h:350},
             {name:"Sprites", x:-125, y:-800, w:300, h:200},
             {name:"User Input", x:505, y:-250, w:300, h:200},
             {name:"Scratch", x:-100, y:-420, w:200,h:200, targetX:-375, targetY:-300}]


function scratchTropoMenu(){
   background(225,200,150);
  push()
	let xTranslate = windowWidth/2-player.w/2-player.x
	if (xTranslate > 1000){xTranslate = 1000}
	if (xTranslate < windowWidth - 1050) {xTranslate = windowWidth -1050}
	let yTranslate = windowHeight/2-player.h/2 - player.y
	if (yTranslate > 1000){yTranslate = 1000}
	if (yTranslate < windowHeight - 1050) {yTranslate = windowHeight -1050}
    translate(xTranslate,yTranslate)
	image(scratchTropoImage, -1000, -1000, 2050, 2050);
    drawBuildings(scratchTropoBuildings, true);
    drawPlayer();
  pop()
}
