//Strato
function animation() {
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
  text("Create and animate a character using either your own sprite or one from Scratch's library.", windowWidth/2-222,125,500,350);
  drawScratchButtons()
}

function animationClick(){
  for (var button of scratchButtons){
    if (touchingMouse(button)){
      if(button.name == "Back"){
        scene = "ScratchStrato";
        player.x = -625;
        player.y = 400;
      }
      if (button.name == "To Scratch"){
        window.open("https://scratch.mit.edu/projects/725040383/editor/");
      }
	  if (button.name =="Success") {
		  answer = prompt("Are you a master of Animation? (yes/no)", "yes");
		  if (answer == "yes"){
			setCookie(scene,true);
			alert("Nice Work!");
			scene = "ScratchStrato";
			player.x = -625;
			player.y = 400;
		  }
		  else {
			setCookie(scene,false);
			scene = "ScratchStrato";
			alert("Nice try!");
			player.x = -625;
			player.y = 400;
		  }
	  }
    }
  }
}