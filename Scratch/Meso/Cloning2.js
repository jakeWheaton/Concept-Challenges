

function cloning2() {
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
  text("Use a broadcast message when the button is clicked to tell the cat to make a clone of itself. \n\n\nEach new clone should move to a random position. \n\nOnly one clone should be added each time the button is pressed", windowWidth/2-222,125,475,350);
  drawScratchButtons()
}

function cloning2Click(){
  for (var button of scratchButtons){
    if (touchingMouse(button)){
      if(button.name == "Back"){
        scene = "ScratchMeso";
        player.x = 625;
        player.y = 0;
      }
      if (button.name == "To Scratch"){
        window.open("https://scratch.mit.edu/projects/1115210005/");
      }
	  if (button.name =="Success") {
		  answer = prompt("Are you a master of Cloning? (yes/no)", "yes");
		  if (answer == "yes"){
			setCookie(scene,true);
			alert("Nice Work!");
			scene = "ScratchMeso";
			player.x = 625;
			player.y = 0;
		  }
		  else {
			setCookie(scene,false);
			scene = "ScratchMeso";
			alert("Nice try!");
			player.x = 625;
			player.y = 0;
		  }
	  }
    }
  }
}