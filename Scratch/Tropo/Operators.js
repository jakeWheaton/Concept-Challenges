var numbers

function operatorsSetup(){
  numbers = []
  while (numbers.length <8){
    numbers.push(ceil(random(0,10)))
  }
}

//tropo
function operators() {
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
  text("Make the wizard solve the following equations using green operator blocks and say the results:\n\n1) "+numbers[0]+" + " + numbers[1]+ "\n2) "+numbers[2]+" - " + numbers[3]+ "\n3) "+numbers[4]+" x " + numbers[5]+ "\n4) "+numbers[6]+" / " + numbers[7], windowWidth/2-222,125,450,350);
  drawScratchButtons()
}

function operatorsClick(){
  for (var button of scratchButtons){
    if (touchingMouse(button)){
      if(button.name == "Back"){
        scene = "ScratchTropo";
        player.x = -150;
        player.y = 125;
      }
      if (button.name == "To Scratch"){
        window.open("https://scratch.mit.edu/projects/1058480899/");
      }
	  if (button.name =="Success") {
		  answer = prompt("Are you a master of Operators? (yes/no)", "yes");
		  if (answer == "yes"){
			setCookie(scene,true);
			alert("Nice Work!");
			scene = "ScratchTropo";
			player.x = -150;
			player.y = 125;
		  }
		  else {
			setCookie(scene,false);
			scene = "ScratchTropo";
			alert("Nice try!");
			player.x = -150;
			player.y = 125;
		  }
	  }
    }
  }
}