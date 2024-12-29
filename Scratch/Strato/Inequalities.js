var conditions = ["size","x position","y position"]

var c1, c2, n1, d1, d2, n2;
function inequalitiesSetup(){
	c1 = choice(conditions);
	c2 = choice(conditions);
	n1 = floor(random(-160,160));
	n2 = floor(random(-160,160));
}

//strato
function inequalities() {
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
  text("Make the wizard solve the following equations using green operator blocks and say the results:\n\n1) " + c1 + " is less than " + n1 + "\n2) " + c2 + " is greater than " + n2, windowWidth/2-222,125,450,350);
  drawScratchButtons()
}

function inequalitiesClick(){
  for (var button of scratchButtons){
    if (touchingMouse(button)){
      if(button.name == "Back"){
        scene = "ScratchStrato";
        player.x = -125;
        player.y = -250;
      }
      if (button.name == "To Scratch"){
        window.open("https://scratch.mit.edu/projects/1115201352/editor/");
      }
	  if (button.name =="Success") {
		  answer = prompt("Are you a master of Inequalities? (yes/no)", "yes");
		  if (answer == "yes"){
			setCookie(scene,true);
			alert("Nice Work!");
			scene = "ScratchStrato";
			player.x = -125;
			player.y = -250;
		  }
		  else {
			setCookie(scene,false);
			scene = "ScratchStrato";
			alert("Nice try!");
			player.x = -125;
			player.y = -250;
		  }
	  }
	  
    }
  }
}