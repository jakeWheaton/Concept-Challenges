var scratchMesoBuildings = [
             {name:"Lists", x:-425, y:-150, w:200, h:200},
			 {name:"Lists2", x:-750, y:-150, w:200, h:200},
             {name:"Custom Blocks", x:250, y:-450, w:200, h:200},
             {name:"Cloning", x:225, y: -150, w:200, h:200},
			 {name:"Cloning2", x:550, y: -150, w:200, h:200},
			 {name:"Timers", x:200,y:150, w:200, h:200},
			 {name:"Randomness", x:-400, y:150, w:200, h:200},
			 {name:"Gravity", x:-450, y:-450, w:200, h:200},
             {name:"Scratch", x:-100, y:-150,w:200,h:200, targetX:325, targetY:-300}]



function scratchMesoMenu(){
   background(225,200,150);
  push()
    translate(windowWidth/2-player.w/2-player.x,windowHeight/2-player.h/2 - player.y)
    drawBuildings(scratchMesoBuildings);
    drawPlayer();
  pop()
}
