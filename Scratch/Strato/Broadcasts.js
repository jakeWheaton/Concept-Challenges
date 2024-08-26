//Strato
function broadcasts() {
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
  text("Use a broadcast message to make one sprite disappear when another is clicked", windowWidth/2-222,125,500,350);
  drawScratchButtons()
}

function broadcastsClick(){
  for (var button of scratchButtons){
    if (touchingMouse(button)){
      if(button.name == "Back"){
        scene = "ScratchStrato";
        player.x = 0;
        player.y = 0;
      }
      if (button.name == "To Scratch"){
        window.open("");
      }
    }
  }
}