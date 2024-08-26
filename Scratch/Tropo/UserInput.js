var inputActions = [
  "Make the octopus say a message",
  "Make the octopus move",
  "Make the octopus hide",
  "Make the octopus show",
  "Make the octopus change size"
]

var keys = "abcdefghijklmnopqrstuvwxyz"

var a1, a2, k

function userInputSetup(){
  a1 = choice(inputActions)
  a2 = choice(inputActions)
  k = choice(keys.split(""))
}

//tropo
function userInput() {
  background(255,200,100);
  fill(255,150,25)
  stroke(0)
  strokeWeight(3);
  rect(windowWidth/2-232,115,465,360)  
  fill(255);
  textAlign(CENTER)
  textSize(72)
  textFont(scratchFont1)
  text("User Input", windowWidth/2, 75)
  textAlign(LEFT)
  textSize(32)
  noStroke()
  textFont(scratchFont1)
  text("Click the button to open the Scratch project \n\nto remix. \n\n1) " + a1 + " when it is clicked.\n\n2) " + a2 + " when the " + k + " key is pressed", windowWidth/2-222,125,450,350);
  drawScratchButtons()
}

function userInputClick(){
  for (var button of scratchButtons){
    if (touchingMouse(button)){
      if(button.name == "Back"){
        scene = "ScratchTropo";
        player.x = 0;
        player.y = 0;
      }
      if (button.name == "To Scratch"){
        window.open("https://scratch.mit.edu/projects/1058086610/");
      }
    }
  }
}