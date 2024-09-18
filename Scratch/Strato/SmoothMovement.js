//strato
function smoothMovement() {
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
  text("Smooth Movement", windowWidth/2, 75)
  textAlign(LEFT)
  textSize(32)
  noStroke()
  textFont(scratchFont1)
  text("1) Create smooth movement for Kiran using the arrow keys\n\n2) Create smooth movement for Ripley using the mouse", windowWidth/2-222,125,500,350);
  drawScratchButtons()
}

function smoothMovementClick(){
  for (var button of scratchButtons){
    if (touchingMouse(button)){
      if(button.name == "Back"){
        scene = "ScratchStrato";
        player.x = 525;
        player.y = 600;
      }
      if (button.name == "To Scratch"){
        window.open("https://scratch.mit.edu/projects/1059796393/");
      }
	  if (button.name =="Success") {
		  answer = prompt("Are you a master of Smooth Movement? (yes/no)", "yes");
		  if (answer == "yes"){
			setCookie(scene,true);
			alert("Nice Work!");
			scene = "ScratchStrato";
			player.x = 525;
			player.y = 600;
		  }
		  else {
			setCookie(scene,false);
			scene = "ScratchStrato";
			alert("Nice try!");
			player.x = 525;
			player.y = 600;
		  }
	  }
    }
  }
}