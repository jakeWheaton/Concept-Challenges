var scratchStratoBuildings = [
             {name:"Animation", x:-700, y:250, w:200, h:200},
             {name:"Smooth Movement", x:450, y:450, w:200, h:200},
             {name:"Loops", x:450, y:-150, w:200, h:200},
             {name:"Extensions", x:-100, y: 250, w:200, h:200},
             {name:"Broadcasts", x:650, y:250, w:200, h:200},
			 {name:"Variables 2", x: -400, y:0, w:200, h:200},
			 {name:"Conditionals", x:-200, y:-400, w:200, h:200},
			 {name:"Ask Answer", x:200, y: 200, w:200, h:200},
			 {name:"Collision Detection", x:200, y:-200, w:200, h:200},
             {name:"Scratch", x:-100, y:-150,w:200,h:200, targetX:-25, targetY:-300}]

function scratchStratoMenu(){
   background(225,200,150);
  push()
    translate(windowWidth/2-player.w/2-player.x,windowHeight/2-player.h/2 - player.y)
    drawBuildings(scratchStratoBuildings);
    drawPlayer();
  pop()
}
