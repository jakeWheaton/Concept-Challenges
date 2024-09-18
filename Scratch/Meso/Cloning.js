//Meso
var cloningOptions = ["make a snowfall effect", 
					  "make a rain effect", 
					  "make a meteor shower", 
					  "make a windy day effect", 
					  "make a trail behind a character which follows the mouse",
					  "make a trail behind a character which bounces around the screen",
					  "make the screen disappear behind a bank of clouds",
					  "make the screen disappear behind a herd of animals"]
var o;

function cloningSetup(){
	o = choice(cloningOptions);
}

function cloning() {
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
  text("Use cloning to " + o, windowWidth/2-222,125,500,350);
  drawScratchButtons()
}

function cloningClick(){
  for (var button of scratchButtons){
    if (touchingMouse(button)){
      if(button.name == "Back"){
        scene = "ScratchMeso";
        player.x = 775;
        player.y = 150;
      }
      if (button.name == "To Scratch"){
        window.open("https://scratch.mit.edu/projects/1059803154/");
      }
	  if (button.name =="Success") {
		  answer = prompt("Are you a master of Cloning? (yes/no)", "yes");
		  if (answer == "yes"){
			setCookie(scene,true);
			alert("Nice Work!");
			scene = "ScratchMeso";
			player.x = 775;
			player.y = 150;
		  }
		  else {
			setCookie(scene,false);
			scene = "ScratchMeso";
			alert("Nice try!");
			player.x = 775;
			player.y = 150;
		  }
	  }
    }
  }
}