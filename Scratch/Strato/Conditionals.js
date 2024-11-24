var conditions = ["size","x position","y position"]
var directions = ["greater than", "less than"]

var c1, c2, n1, d1, d2, n2;
function conditionalsSetup(){
	c1 = choice(conditions);
	c2 = choice(conditions);
	n1 = floor(random(-160,160));
	n2 = floor(random(-160,160));
	d1 = choice(directions);
	d2 = choice(directions);
}

//strato
function conditionals() {
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
  text("1) Create a conditional which sets the rabbit's " + c1 + " to " + n1 + " if its " + c1 + " is " + d1 +" " + n1+ 
  "\n\n2) Create a conditional which sets the rabbit's color effect to 100 if it's "+ c2 +" is " + d2+ " " + n2+" and sets the rabbit's color effect to 0 otherwise", windowWidth/2-222,125,450,350);
  drawScratchButtons()
}

function conditionalsClick(){
  for (var button of scratchButtons){
    if (touchingMouse(button)){
      if(button.name == "Back"){
        scene = "ScratchStrato";
        player.x = -125;
        player.y = -250;
      }
      if (button.name == "To Scratch"){
        window.open("https://scratch.mit.edu/projects/1101435709/");
      }
	  if (button.name =="Success") {
		  answer = prompt("Are you a master of Conditionals? (yes/no)", "yes");
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