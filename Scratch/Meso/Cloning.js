//Meso
function cloning() {
  background(255,200,100);
  fill(255,150,25)
  stroke(0)
  strokeWeight(3);
  rect(windowWidth/2-232,115,480,360)  
  fill(255);
  textAlign(CENTER)
  textSize(72)
  textFont(scratchFont1)
  text(scene, windowWidth/2, 75)
  textAlign(LEFT)
  textSize(32)
  noStroke()
  textFont(scratchFont1)
  text("Create a project in which an object makes clones of itself that fall from the sky.", windowWidth/2-222,125,500,350);
  drawScratchButtons()
}

function cloningClick(){
  for (var button of scratchButtons){
    if (touchingMouse(button)){
      if(button.name == "Back"){
        scene = "ScratchMeso";
        player.x = 0;
        player.y = 0;
      }
      if (button.name == "To Scratch"){
        window.open("");
      }
    }
  }
}