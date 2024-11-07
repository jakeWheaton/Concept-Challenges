//tropo
variableNames = ["elephants","dragons","score","points","spaceships","aliens","sharks"]

var v,n1,n2

function variablesSetup(){
  v = choice(variableNames);
  n1 = floor(random(0,100));
  n2 = floor(random(0,100))
}

function variables() {
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
  text("1) Create a variable named "+ v +" \n\n\n2) Make " + v + " reset to " + n1 + " when the game begins\n\n3) Use any trigger to make " + v + " increase by " + n2, windowWidth/2-222,125,500,350);
  drawScratchButtons()
}

function variablesClick(){
  for (var button of scratchButtons){
    if (touchingMouse(button)){
      if(button.name == "Back"){
        scene = "ScratchTropo";
        player.x = -375;
        player.y = -525;
      }
      if (button.name == "To Scratch"){
       window.open("https://scratch.mit.edu/projects/717297100/editor/");
      }
	  if (button.name =="Success") {
		  answer = prompt("Are you a master of Variables? (yes/no)", "yes");
		  if (answer == "yes"){
			setCookie(scene,true);
			alert("Nice Work!");
			scene = "ScratchTropo";
			player.x = -375;
			player.y = -525;
		  }
		  else {
			setCookie(scene,false);
			scene = "ScratchTropo";
			alert("Nice try!");
			player.x = -375;
			player.y = -525;
		  }
	  }
    }
  }
}