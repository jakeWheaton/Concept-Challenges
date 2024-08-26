//https://scratch.mit.edu/projects/713976944/
//tropo
function orderOfOperations() {
  background(255,200,100);
  fill(255,150,25)
  stroke(0)
  strokeWeight(3);
  rect(windowWidth/2-232,115,450,360)  
  fill(255);
  textAlign(CENTER)
  textSize(72)
  textFont(scratchFont1)
  text("Order of Operations", windowWidth/2, 75)
  textAlign(LEFT)
  textSize(32)
  noStroke()
  textFont(scratchFont1)
  text("Click the button to open the Scratch project \n\nto remix. \n\nGuide the cat to the exit to win!", windowWidth/2-222,125,500,350);
  drawScratchButtons()
}

function orderOfOperationsClick(){
  for (var button of scratchButtons){
    if (touchingMouse(button)){
      if(button.name == "Back"){
        scene = "ScratchTropo";
        player.x = 225;
        player.y = 0;
      }
      if (button.name == "To Scratch"){
        window.open("https://scratch.mit.edu/projects/713976944/editor");
      }
    }
  }
}