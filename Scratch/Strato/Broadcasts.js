var broadcastActions = ["make the egg appear when the chicken is clicked", 
					"make the duck glide to the egg when the egg is clicked",
					"make the duck point towards the mouse when the egg touches the mouse cursor"]
var a;

function broadcastSetup(){
	a = choice(broadcastActions);
}

//Strato
function broadcasts() {
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
  text("Use a broadcast message to " + a, windowWidth/2-222,125,450,350);
  drawScratchButtons()
}

function broadcastsClick(){
  for (var button of scratchButtons){
    if (touchingMouse(button)){
      if(button.name == "Back"){
        scene = "ScratchStrato";
        player.x = 0;
        player.y = 0;
      }
      if (button.name == "To Scratch"){
        window.open("https://scratch.mit.edu/projects/1059796742/");
      }
	  if (button.name =="Success") {
		  answer = prompt("Are you a master of Broadcast Messages? (yes/no)", "yes");
		  if (answer == "yes"){
			setCookie(scene,true);
			alert("Nice Work!");
			scene = "ScratchStrato";
			player.x = 0;
			player.y = 0;
		  }
		  else {
			setCookie(scene,false);
			scene = "ScratchStrato";
			alert("Nice try!");
			player.x = 0;
			player.y = 0;
		  }
	  }
    }
  }
}