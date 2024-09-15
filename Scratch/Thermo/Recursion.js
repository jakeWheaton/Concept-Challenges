//Thermo
recursionNames = [
  {name:"factorial", effect:"calculate the product of a given number and each number smaller than it. \n\n(factorial of 4 = 4*3*2*1 = 24) "},
  {name:"shrink", effect:"set the sprite's size to the given size and makes a clone and then calls itself again with a smaller size.\n\n (Note: call this function when the green flag is clicked)"},
  {name:"fibonacci", effect:"say a given number of the fibonacci sequence. \n\n The fibonacci sequence starts with [1, 1] and each following number is the sum of the previous two: (1,1,2,3,5,8,13,ect..}\n\nfibonacci(4) would give us 3"}
]

var r

function recursionSetup(){
  r = choice(recursionNames)
}

function recursion() {
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
  text("Create a custom block named "+ r.name +" which uses recursion to " + r.effect, windowWidth/2-222,125,450,350);
  drawScratchButtons()
}

function recursionClick(){
  for (var button of scratchButtons){
    if (touchingMouse(button)){
      if(button.name == "Back"){
        scene = "ScratchThermo";
        player.x = 0;
        player.y = 0;
      }
      if (button.name == "To Scratch"){
        window.open("https://scratch.mit.edu/projects/731634835/");
      }
	  if (button.name =="Success") {
		  answer = prompt("Are you a master of Recursive Blocks? (yes/no)", "yes");
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