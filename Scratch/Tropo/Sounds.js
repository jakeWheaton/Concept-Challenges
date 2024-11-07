var soundlist = ["Chomp","Clang","Collect","Jump","Boing","Zoop","Whiz","Win","Cave","Dubstep","Jungle", "Mystery"]

var s;

function soundsSetup(){
  s = choice(soundlist)
}

//Tropo
function sounds() {
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
  text("Make Kiran play the \"" + s + "\" sound from the Scratch sound library when the green flag is clicked", windowWidth/2-222,125,450,350);
  drawScratchButtons()
}

function soundsClick(){
  for (var button of scratchButtons){
    if (touchingMouse(button)){
      if(button.name == "Back"){
        scene = "ScratchTropo";
        player.x = -500;
        player.y = -150;
      }
      if (button.name == "To Scratch"){
        window.open("https://scratch.mit.edu/projects/1058477859/");
      }
	  if (button.name =="Success") {
		  answer = prompt("Are you a master of Sound Effects? (yes/no)", "yes");
		  if (answer == "yes"){
			setCookie(scene,true);
			alert("Nice Work!");
			scene = "ScratchTropo";
			player.x = -500;
			player.y = -150;
		  }
		  else {
			setCookie(scene,false);
			scene = "ScratchTropo";
			alert("Nice try!");
			player.x = -500;
			player.y = -150;
		  }
	  }
    }
  }
}