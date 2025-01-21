//Meso

function randomness() {
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
  text("\n1) Make the ghost move to a random spot in the blue area whenever the '1' key is pressed.\n2) Make the ghost move to a random spot in the red area whenever the '2' key is pressed.\n3) Make the ghost move to a random spot in the green area whenever the '3' key is pressed.", windowWidth/2-222,125,450,350);
  drawScratchButtons()
}

function randomnessClick(){
  for (var button of scratchButtons){
    if (touchingMouse(button)){
      if(button.name == "Back"){
        scene = "ScratchMeso";
        player.x = -325;
        player.y = 300;
      }
      if (button.name == "To Scratch"){
        window.open("https://scratch.mit.edu/projects/1122801417/editor/");
      }
	  if (button.name =="Success") {
		  answer = prompt("Are you a master of Randomness? (yes/no)", "yes");
		  if (answer == "yes"){
			setCookie(scene,true);
			alert("Nice Work!");
			scene = "ScratchMeso";
			player.x = -325;
			player.y = 300;
		  }
		  else {
			setCookie(scene,false);
			scene = "ScratchMeso";
			alert("Nice try!");
			player.x = -325;
			player.y = 300;
		  }
	  }
    }
  }
}