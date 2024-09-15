//Meso

blockNames = [
  {name:"Jump", input:"height", effect:"Make the character jump up and down the set height"},
  {name:"Flip", input:"degrees", effect:"Make the character smoothly rotate the set number of degrees"},
  {name:"Fade", input:"seconds", effect:"Make the character fade out for the set number of seconds and then fade back in."}]

var b

function blocksSetup(){
  b = choice(blockNames);
}

function customBlocks() {
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
  text("Custom Blocks", windowWidth/2, 75)
  textAlign(LEFT)
  textSize(32)
  noStroke()
  textFont(scratchFont1)
  text("Create a custom block named "+ b.name +" with an input of " + b.input + " which creates the following effect:\n\n\n"+b.effect, windowWidth/2-222,125,450,350);
  drawScratchButtons()
}

function customBlocksClick(){
  for (var button of scratchButtons){
    if (touchingMouse(button)){
      if(button.name == "Back"){
        scene = "ScratchMeso";
        player.x = 0;
        player.y = 0;
      }
      if (button.name == "To Scratch"){
        window.open("https://scratch.mit.edu/projects/725035131/editor");
      }
	  if (button.name =="Success") {
		  answer = prompt("Are you a master of using Custom Blocks? (yes/no)", "yes");
		  if (answer == "yes"){
			setCookie(scene,true);
			alert("Nice Work!");
			scene = "ScratchMeso";
			player.x = 0;
			player.y = 0;
		  }
		  else {
			setCookie(scene,false);
			scene = "ScratchMeso";
			alert("Nice try!");
			player.x = 0;
			player.y = 0;
		  }
	  }
    }
  }
}