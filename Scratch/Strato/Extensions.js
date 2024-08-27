var extensionOptions = ["Pen", "Music", "Video Sensing", "Text to Speech", "translate"]

var eo;

function extensionsSetup(){
	eo = choice(extensionOptions);
}

//Strato
function extensions() {
  background(255,200,100);
  fill(255,150,25)
  stroke(0)
  strokeWeight(3);
  rect(windowWidth/2-232,115,465,360)  
  fill(255);
  textAlign(CENTER)
  textSize(72)
  textFont(scratchFont1)
  text(scene, windowWidth/2, 75)
  textAlign(LEFT)
  textSize(32)
  noStroke()
  textFont(scratchFont1)
  text("1) Load the " + eo + " module into your project\n\n2) Build something cool with it!", windowWidth/2-222,125,450,350);
  drawScratchButtons()
}

function extensionsClick(){
  for (var button of scratchButtons){
    if (touchingMouse(button)){
      if(button.name == "Back"){
        scene = "ScratchStrato";
        player.x = 0;
        player.y = 0;
      }
      if (button.name == "To Scratch"){
        window.open("https://scratch.mit.edu/projects/1059793201/");
      }
    }
  }
}