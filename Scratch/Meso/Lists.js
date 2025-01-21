//Meso
listNames = ["Students","Super Heroes","Video Games","TV Shows", "Movies"]

var v,n1

function listsSetup(){
  v = choice(listNames);
  n1 = floor(random(1,11));

}

function lists() {
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
  text("1) Create a list with the names of 10 different "+ v +".\n\n2) make the fish say the name of the item in slot " + n1+".\n(This should find whatever item is in that slot even if the list is changed)", windowWidth/2-222,125,450,350);
  drawScratchButtons()
}

function listsClick(){
  for (var button of scratchButtons){
    if (touchingMouse(button)){
      if(button.name == "Back"){
        scene = "ScratchMeso";
        player.x = -350;
        player.y = 0;
      }
      if (button.name == "To Scratch"){
        window.open("https://scratch.mit.edu/projects/725032360/editor");
      }
	  if (button.name =="Success") {
		  answer = prompt("Are you a master of using Lists? (yes/no)", "yes");
		  if (answer == "yes"){
			setCookie(scene,true);
			alert("Nice Work!");
			scene = "ScratchMeso";
			player.x = -350;
			player.y = 0;
		  }
		  else {
			setCookie(scene,false);
			scene = "ScratchMeso";
			alert("Nice try!");
			player.x = -350;
			player.y = 0;
		  }
	  }
    }
  }
}