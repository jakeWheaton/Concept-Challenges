var javaScriptTropoBuildings = [{name:"JS Order of Operations", x:150, y:-150, w:200, h:200},
             {name:"JS Variables", x:-350, y:-150, w:200, h:200},
             {name:"JS Cartesian Coordinates", x:-100, y:-450, w:200, h:200},
             {name:"JS Operators", x:-100, y:550, w:200, h:200},
             {name:"JavaScript", x:-100, y:-150, w:200,h:200}]


function javaScriptTropoMenu(){
   background(150,200,225);
  push()
    translate(windowWidth/2-player.w/2-player.x,windowHeight/2-player.h/2 - player.y)
    drawBuildings(javaScriptTropoBuildings);
    drawPlayer();
  pop()
}
