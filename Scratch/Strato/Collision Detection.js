var tasks = ["say hello", "shrink", "grow", "changes color", "moves to a random position"]

var c1, c2;
function collisionDetectionSetup(){
	c1 = choice(tasks);
	c2 = choice(tasks);

}

//strato
function collisionDetection() {
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
  text("1) Make the beetle "+ c1 + " when it touches the pencil.\n\n2) Make the beetle " + c2 +
  " when it touches the orange part of the background.\nYou may use any event/trigger you like to activate these blocks.", windowWidth/2-222,125,450,350);
  drawScratchButtons()
}

function collisionDetectionClick(){
  for (var button of scratchButtons){
    if (touchingMouse(button)){
      if(button.name == "Back"){
        scene = "ScratchStrato";
        player.x = 275;
        player.y = -50;
      }
      if (button.name == "To Scratch"){
        window.open("https://scratch.mit.edu/projects/1101458905/");
      }
	  if (button.name =="Success") {
		  answer = prompt("Are you a master of Collision Detection? (yes/no)", "yes");
		  if (answer == "yes"){
			setCookie(scene,true);
			alert("Nice Work!");
			scene = "ScratchStrato";
			player.x = 275;
			player.y = -50;
		  }
		  else {
			setCookie(scene,false);
			scene = "ScratchStrato";
			alert("Nice try!");
			player.x = 275;
			player.y = -50;
		  }
	  }
	  
    }
  }
}