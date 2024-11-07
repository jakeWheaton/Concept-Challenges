//Thermo
function cartesianCoordinates() {
  background(255,200,100);
  fill(255,150,25)
  stroke(0)
  strokeWeight(3);
  rect(windowWidth/2-230,115,505,360)  
  fill(255);
  textAlign(CENTER)
  textSize(72)
  textFont(scratchFont1)
  // noStroke()
  text("Cartesian Coordinates", windowWidth/2, 75)
  textAlign(LEFT)
  textSize(32)
  noStroke()
  textFont(scratchFont1)
  text("Click the button to open the Scratch project to remix. \n\nGet the positions and shapes correct", windowWidth/2-222,125,500,350);
  drawScratchButtons()
}

function cartesianCoordinatesClick() {
  for (var button of scratchButtons) {
    if (touchingMouse(button)) {
      if(button.name == "Back") {
        scene = "ScratchTropo";
        player.x = 450;
        player.y = -500;
      }
      if (button.name == "To Scratch") {
        window.open("https://scratch.mit.edu/projects/719199495/");
      }
	  if (button.name =="Success") {
		  answer = prompt("Are you a master of Cartesian Coordinates? (yes/no)", "yes");
		  if (answer == "yes"){
			setCookie(scene,true);
			alert("Nice Work!");
			scene = "ScratchTropo";
			player.x = 450;
			player.y = -500;
		  }
		  else {
			setCookie(scene,false);
			scene = "ScratchTropo";
			alert("Nice try!");
			player.x = 450;
			player.y = -500;
		  }
	  }
    }
  }
}