var scratchTropoBuildings = [{name:"Order of Operations", x:150, y:-150, w:200, h:200},
             {name:"Variables", x:-350, y:-150, w:200, h:200},
             {name:"Cartesian Coordinates", x:-100, y:-450, w:200, h:200},
             {name:"Events", x:350, y:150, w:200, h:200},
             {name:"Sounds", x:-450, y:400, w:200, h:200},
             {name:"Operators", x:-100, y:550, w:200, h:200},
             {name:"Sprites", x:-350, y:150, w:200, h:200},
             {name:"User Input", x:150, y:250, w:200, h:200},
             {name:"Scratch", x:-100, y:-150, w:200,h:200, targetX:-375, targetY:-300}]


function scratchTropoMenu(){
   background(225,200,150);
  push()
    translate(windowWidth/2-player.w/2-player.x,windowHeight/2-player.h/2 - player.y)
    drawBuildings(scratchTropoBuildings);
    drawPlayer();
  pop()
}
