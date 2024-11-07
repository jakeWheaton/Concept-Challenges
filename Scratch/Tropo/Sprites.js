//Tropo
function sprites() {
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
  text("Create three new Sprites:\n\n1)From the Scratch library\n2)From a drawing\n3)From an uploaded image", windowWidth/2-222,125,500,350);
  drawScratchButtons()
}

function spritesClick(){
  for (var button of scratchButtons){
    if (touchingMouse(button)){
      if(button.name == "Back"){
        scene = "ScratchTropo";
        player.x = 0;
        player.y = -700;
      }
      if (button.name == "To Scratch"){
        window.open("https://scratch.mit.edu/projects/1058477460/");
      }
	  if (button.name =="Success") {
		  answer = prompt("Are you a master of Sprites? (yes/no)", "yes");
		  if (answer == "yes"){
			setCookie(scene,true);
			alert("Nice Work!");
			scene = "ScratchTropo";
			player.x = 0;
			player.y = -700;
		  }
		  else {
			setCookie(scene,false);
			scene = "ScratchTropo";
			alert("Nice try!");
			player.x = 0;
			player.y = -700;
		  }
	  }
    }
  }
}