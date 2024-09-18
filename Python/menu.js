var pythonBuildings = [
             //{name:"pythonStrato", x:-100, y:-450, w:200, h:200},
             //{name:"pythonTropo", x:-450, y:-450, w:200, h:200},
             //{name:"pythonMeso", x:250, y:-450, w:200, h:200},
             //{name:"pythonThermo", x:600, y:-450, w:200, h:200},
             {name:"Menu", x:-100, y:-150,w:200,h:200, targetX:-275, targetY:0}]

pythonButtons = [{name:"Back",x:-235, y:500, w:100, h:50},
                  {name:"To Scratch", x:-100, y:500, w:170, h:50},
                  {name:"Success",x:95, y:500, w:180, h:50}]

function pythonMenu(){
   background(150,225,200);
  push()
    translate(windowWidth/2-player.w/2-player.x,windowHeight/2-player.h/2 - player.y)
    drawBuildings(pythonBuildings);
    drawPlayer();
  pop()
}

function drawPythonButtons(){
  push()
  translate(windowWidth/2,0)
  for (var button of pythonButtons){
    if(touchingMouse(button)){
      fill(255,200,75)
    } else {
      fill(255,150,25)
    }
    strokeWeight(2)
    stroke(0)
    rect(button.x,button.y,button.w,button.h);
    textAlign(CENTER)
    textSize(24)
    fill(255)
    noStroke()
    textFont(scratchFont3)
    text(button.name, button.x+button.w/2,button.y+35)
  }
  pop()
}