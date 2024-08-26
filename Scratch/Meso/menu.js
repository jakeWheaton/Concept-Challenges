var scratchMesoBuildings = [
             {name:"Lists", x:-450, y:-450, w:200, h:200},
             {name:"Custom Blocks", x:250, y:-450, w:200, h:200},
             {name:"Cloning", x:700, y: 0, w:200, h:200},
             {name:"Scratch", x:-100, y:-150,w:200,h:200}]



function scratchMesoMenu(){
   background(225,200,150);
  push()
    translate(windowWidth/2-player.w/2-player.x,windowHeight/2-player.h/2 - player.y)
    drawBuildings(scratchMesoBuildings);
    drawPlayer();
  pop()
}
