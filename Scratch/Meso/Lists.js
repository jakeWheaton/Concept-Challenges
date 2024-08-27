//Meso
listNames = ["Scores","Ids","Merits","Times"]
actions = ["increase", "decrease"]

var v,n1,n2,a

function listsSetup(){
  v = choice(listNames);
  n1 = floor(random(0,100));
  n2 = floor(random(0,100))
  a = choice(actions);
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
  text("1) Create a list named "+ v +" \n\n\n2) Fill " + v + " with " + n1 + " different numbers when the game begins\n\n3) Use any trigger to make each number in " + v + " " + a + " by 1", windowWidth/2-222,125,450,350);
  drawScratchButtons()
}

function listsClick(){
  for (var button of scratchButtons){
    if (touchingMouse(button)){
      if(button.name == "Back"){
        scene = "ScratchMeso";
        player.x = 0;
        player.y = 0;
      }
      if (button.name == "To Scratch"){
        window.open("https://scratch.mit.edu/projects/725032360/editor");
      }
    }
  }
}