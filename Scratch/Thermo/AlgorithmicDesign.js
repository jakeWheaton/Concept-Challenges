//Thermo
//fib is much easier than others
//string split
algorithmNames = [
  {name:"sorting", effect:"organizes a list in alphabetic or numerical order."},
  {name:"averaging", effect:"finds the mean, median, or mode average of a list of numbers."},
  {name:"the Fibonacci Sequence", effect:"generates a list of numbers, each of which is the sum of the two previous numbers."}]

var a

function algorithmicDesignSetup(){
  a = choice(algorithmNames);
}
function algorithmicDesign() {
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
  text("Algorithmic Design", windowWidth/2, 75)
  textAlign(LEFT)
  textSize(32)
  noStroke()
  textFont(scratchFont1)
  text("Create an algorithm for "+ a.name +" which " +a.effect, windowWidth/2-222,125,450,350);
  drawScratchButtons()
}

function algorithmicDesignClick(){
  for (var button of scratchButtons){
    if (touchingMouse(button)){
      if(button.name == "Back"){
        scene = "ScratchThermo";
        player.x = 0;
        player.y = 0;
      }
      if (button.name == "To Scratch"){
        window.open("https://scratch.mit.edu/projects/731633162/");
      }
	  if (button.name =="Success") {
		  answer = prompt("Are you a master of Algorithmic Design? (yes/no)", "yes");
		  if (answer == "yes"){
			setCookie(scene,true);
			alert("Nice Work!");
			scene = "ScratchThermo";
			player.x = 0;
			player.y = 0;
		  }
		  else {
			setCookie(scene,false);
			scene = "ScratchThermo";
			alert("Nice try!");
			player.x = 0;
			player.y = 0;
		  }
	  }
    }
  }
}