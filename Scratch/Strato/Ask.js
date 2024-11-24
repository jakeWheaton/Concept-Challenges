var questions = ["what their name is", "what their favorite color is", "what their favorite shape is", "what their favorite food is", "how many pets they have"]

var q;
function askAnswerSetup(){
	q = choice(questions);

}

//strato
function askAnswer() {
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
  text("1) Create a program which asks the user "+q+" and says their answer back to them", windowWidth/2-222,125,450,350);
  drawScratchButtons()
}

function askAnswerClick(){
  for (var button of scratchButtons){
    if (touchingMouse(button)){
      if(button.name == "Back"){
        scene = "ScratchStrato";
        player.x = 275;
        player.y = 350;
      }
      if (button.name == "To Scratch"){
        window.open("https://scratch.mit.edu/projects/1101457572/");
      }
	  if (button.name =="Success") {
		  answer = prompt("Are you a master of the Ask block? (yes/no)", "yes");
		  if (answer == "yes"){
			setCookie(scene,true);
			alert("Nice Work!");
			scene = "ScratchStrato";
			player.x = 275;
			player.y = 350;
		  }
		  else {
			setCookie(scene,false);
			scene = "ScratchStrato";
			alert("Nice try!");
			player.x = 275;
			player.y = 350;
		  }
	  }
	  
    }
  }
}