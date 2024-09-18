var player = {
  x:0, y:0, w:50, h:50, color:"red"
}
var menus = {
  Menu:menu,
  
  Scratch:scratchMenu,
  ScratchTropo:scratchTropoMenu,
  ScratchStrato:scratchStratoMenu,
  ScratchMeso:scratchMesoMenu,
  ScratchThermo:scratchThermoMenu,
  
  JavaScript:javaScriptMenu,
  JavaScriptTropo:javaScriptTropoMenu,
  
  Python:pythonMenu
}

challenges = {
	//scratch
  OrderofOperations:{draw:orderOfOperations, mousePressed:orderOfOperationsClick},
  Variables:{draw:variables,mousePressed:variablesClick,setup:variablesSetup},
  CartesianCoordinates:{draw:cartesianCoordinates, mousePressed:cartesianCoordinatesClick},
  AlgorithmicDesign:{draw:algorithmicDesign, mousePressed:algorithmicDesignClick, setup:algorithmicDesignSetup},
  CustomBlocks:{draw:customBlocks, mousePressed:customBlocksClick, setup:blocksSetup},
  Lists:{draw:lists, mousePressed:listsClick, setup:listsSetup},
  Cloning:{draw:cloning, mousePressed:cloningClick, setup:cloningSetup},
  Loops:{draw:loops, mousePressed:loopsClick, setup:loopsSetup},
  Recursion:{draw:recursion, mousePressed:recursionClick, setup:recursionSetup},
  Broadcasts:{draw:broadcasts, mousePressed:broadcastsClick, setup : broadcastSetup},
  Events: {draw:events, mousePressed:eventsClick},
  SmoothMovement: {draw:smoothMovement, mousePressed:smoothMovementClick},
  Operators:{draw:operators, mousePressed:operatorsClick, setup:operatorsSetup},
  UserInput:{draw:userInput, mousePressed:userInputClick, setup:userInputSetup},
  Extensions:{draw:extensions, mousePressed:extensionsClick, setup:extensionsSetup},
  Animation:{draw:animation, mousePressed:animationClick},
  Sprites:{draw:sprites, mousePressed:spritesClick},
  Sounds:{draw:sounds, mousePressed:soundsClick, setup:soundsSetup},
  
  //JavaScript
  JSCartesianCoordinates:{draw:javaScriptCartesianCoordinates, mousePressed: javaScriptCartesianCoordinatesClick}
}
var register = {}

var scene;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  scene = "Menu";
}

function draw() {
  if(scene in menus){
    menus[scene]();
    movePlayer();
  }
  else if (scene in challenges){
    challenges[scene].draw()
  }
  else {
	  alert("this area is under development. Return to menu");
	  scene = "Menu";
  }
}

function mousePressed(){
  if (scene in challenges){
    challenges[scene].mousePressed();
  }
  if (scene in menus){
	  //make buildings clickable
  }
}

function drawPlayer(){
  fill(player.color)
  rect(player.x, player.y,player.w,player.h)
}

function movePlayer(){
  lastX = player.x;
  lastY = player.y;
  if(register[LEFT_ARROW] && player.x >-1000){
    player.x-=8;
  }
  if(register[RIGHT_ARROW] && player.x <1000){
    player.x+=8;
  }
  if(register[UP_ARROW] && player.y >-1000){
    player.y-=8;
  }
  if(register[DOWN_ARROW] && player.y < 1000){
    player.y+=8;
  }

}

function collision(obj1, obj2){
  return (obj1.x < obj2.x + obj2.w &&
          obj1.x + obj1.w > obj2.x &&
          obj1.y < obj2.y + obj2.h &&
          obj1.y + obj1.h > obj2.y)
}
function touchingMouse(obj){
  return collision(obj, {x:mouseX-windowWidth/2,y:mouseY,w:1,h:1})
}

function choice(arr){
  return arr[floor(random(0,arr.length))]
}

function setCookie(name,val){
	const d = new Date();
	//set expiration for 365 days
	d.setTime(d.getTime() + (365*24*60*60*1000));
	let expires = "expires="+ d.toUTCString();
	document.cookie = name + "=" + val + ";" + expires;
}

function getCookie(name,debug=false){
	var cookies = document.cookie;
	var cookieList = cookies.split(";");
	var cookieDict = {};
	for (var item of cookieList){
		items = item.split("=");
		cookieDict[items[0].trim()] = items[1];
	}
	if(debug)
		console.log(cookieDict)
	return cookieDict[name];
}

function keyPressed(){
  register[keyCode] = true;
  if(keyCode == 49){
    textFont(scratchFont1)
  }
  if(keyCode == 50){
    textFont(scratchFont2)
  }
  if(keyCode == 51){
    textFont(scratchFont3)
  }
}

function keyReleased(){
  register[keyCode] = false;
}

window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);
