var tasks = ["says hello", "shrinks the character", "grows the character", "changes the character's color", "moves the character to a random position"]

var c1, c2, n;
function loopsSetup(){
	c1 = choice(tasks);
	c2 = choice(tasks);
	n = floor(random(1,100));
}

//strato
function loops() {
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
  text("1) Create a loop which "+ c1 + " " + n + " times\n\n2) Create a loop which " + c2 +
  " forever", windowWidth/2-222,125,450,350);
  drawScratchButtons()
}

function loopsClick(){
  for (var button of scratchButtons){
    if (touchingMouse(button)){
      if(button.name == "Back"){
        scene = "ScratchStrato";
        player.x = 0;
        player.y = 0;
      }
      if (button.name == "To Scratch"){
        window.open("https://scratch.mit.edu/projects/1059791269/");
      }
	  if (button.name =="Success") {
		  answer = prompt("Are you a master of Loops? (yes/no)", "yes");
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