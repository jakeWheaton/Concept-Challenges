//Thermo
function javaScriptCartesianCoordinates() {
  background(150,200,225);
  fill(25,150,255)
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
  text("1) Label the axes x and y\n\n2)show an x position of 350\n3) show a y position of 150\n4) show the position (350,150)", windowWidth/2-222,125,500,350);
  drawJavaScriptButtons()
}

function javaScriptCartesianCoordinatesClick() {
  for (var button of javaScriptButtons) {
    if (touchingMouse(button)) {
      if(button.name == "Back") {
        scene = "JavaScriptTropo";
        player.x = 0;
        player.y = 0;
      }
      if (button.name == "Starter Code") {
        window.open("https://scratch.mit.edu/projects/719199495/");
      }
	  if (button.name =="Success") {
		  answer = prompt("Are you a master of Cartesian Coordinates? (yes/no)", "yes");
		  if (answer == "yes"){
			setCookie(scene,true);
			alert("Nice Work!");
			scene = "JavaScriptTropo";
			player.x = 0;
			player.y = 0;
		  }
		  else {
			setCookie(scene,false);
			scene = "JavaScriptTropo";
			alert("Nice try!");
			player.x = 0;
			player.y = 0;
		  }
	  }
    }
  }
}