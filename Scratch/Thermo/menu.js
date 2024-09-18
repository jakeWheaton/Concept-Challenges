var scratchThermoBuildings = [
             {name:"Algorithmic Design", x:-100, y:-700, w:200, h:200},
             {name:"Recursion", x:600, y:-450, w:200, h:200},
             {name:"Scratch", x:-100, y:-150,w:200,h:200, targetX:675, targetY:-300}]


function scratchThermoMenu(){
   background(225,200,150);
  push()
    translate(windowWidth/2-player.w/2-player.x,windowHeight/2-player.h/2 - player.y)
    drawBuildings(scratchThermoBuildings);
    drawPlayer();
  pop()
}