

//Tropo
function events() {
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
  text("Make the Dino move, speak, or change for each of the following events:\n\n1) When the Green Flag is clicked\n\n2) When the space key is pressed\n\n3) When the backdrop switches to Woods", windowWidth/2-222,125,450,350);
  drawScratchButtons()
}

function eventsClick(){
  for (var button of scratchButtons){
    if (touchingMouse(button)){
      if(button.name == "Back"){
        scene = "ScratchTropo";
        player.x = 325;
        player.y = 100;
      }
      if (button.name == "To Scratch"){
        window.open("https://scratch.mit.edu/projects/1058476129/");
      }
	  if (button.name =="Success") {
		  answer = prompt("Are you a master of Events? (yes/no)", "yes");
		  if (answer == "yes"){
			setCookie(scene,true);
			alert("Nice Work!");
			scene = "ScratchTropo";
			player.x = 325;
			player.y = 100;
		  }
		  else {
			setCookie(scene,false);
			scene = "ScratchTropo";
			alert("Nice try!");
			player.x = 325;
			player.y = 100;
		  }
	  }
    }
  }
}