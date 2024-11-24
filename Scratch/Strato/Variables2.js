var names = ["Lives","HP","Health","Mana","Energy","Points", "Gold", "Timer", "Score","ID"]

var c1, n1,n2;
function variables2Setup(){
	c1 = choice(names);
	n1 = floor(random(1,100));
	n2 = floor(random(1,100));
}

//strato
function variables2() {
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
  text("1) Create a variable named " + c1 + " for the shark and set its value to " + n1 + ".\n\nCreate a second variable named " + c1 + 
  " for the fish and set its value to " + n2 +".\n These values must not overwrite each other!", windowWidth/2-222,125,450,350);
  drawScratchButtons()
}

function variables2Click(){
  for (var button of scratchButtons){
    if (touchingMouse(button)){
      if(button.name == "Back"){
        scene = "ScratchStrato";
        player.x = -325;
        player.y = 150;
      }
      if (button.name == "To Scratch"){
        window.open("https://scratch.mit.edu/projects/1101452314/");
      }
	  if (button.name =="Success") {
		  answer = prompt("Are you a master of Local Variables? (yes/no)", "yes");
		  if (answer == "yes"){
			setCookie(scene,true);
			alert("Nice Work!");
			scene = "ScratchStrato";
			player.x = -325;
			player.y = 150;
		  }
		  else {
			setCookie(scene,false);
			scene = "ScratchStrato";
			alert("Nice try!");
			player.x = -325;
			player.y = 150;
		  }
	  }
	  
    }
  }
}