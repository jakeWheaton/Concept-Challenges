//Meso

function timers() {
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
  text(scene, windowWidth/2, 75)
  textAlign(LEFT)
  textSize(32)
  noStroke()
  textFont(scratchFont1)
  text("Make the knight follow the mouse for exactly five seconds when the player presses any key. You must build a solution which uses no wait blocks.", windowWidth/2-222,125,450,350);
  drawScratchButtons()
}

function timersClick(){
  for (var button of scratchButtons){
    if (touchingMouse(button)){
      if(button.name == "Back"){
        scene = "ScratchMeso";
        player.x = 275;
        player.y = 300;
      }
      if (button.name == "To Scratch"){
        window.open("https://scratch.mit.edu/projects/1120339268/editor");
      }
	  if (button.name =="Success") {
		  answer = prompt("Are you a master of Timers? (yes/no)", "yes");
		  if (answer == "yes"){
			setCookie(scene,true);
			alert("Nice Work!");
			scene = "ScratchMeso";
			player.x = 275;
			player.y = 300;
		  }
		  else {
			setCookie(scene,false);
			scene = "ScratchMeso";
			alert("Nice try!");
			player.x = 275;
			player.y = 300;
		  }
	  }
    }
  }
}