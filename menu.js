menuBuildings = [{name:"Scratch", x:150, y:-150, w:200, h:200},
             {name:"Python", x:-350, y:-150, w:200, h:200},
             {name:"JavaScript", x:-100, y:-250, w:200, h:200},
			 {name:"Credits", x:350, y:200, w:200, h:200}]


function menu(){
  background(200,150,225);
  push()
    translate(windowWidth/2-player.w/2-player.x,windowHeight/2-player.h/2 - player.y)
    drawBuildings(menuBuildings);
    drawPlayer();
  pop()
}

function drawBuildings(buildings){
  for (var building of buildings){
    //structure
    strokeWeight(1)
	textFont(scratchFont1)
    fill(200);
    rect(building.x,building.y, building.w,building.h,5,5,0,0)
    fill(0)
    textAlign(CENTER)
    textSize(32)
    text(building.name, building.x+building.w/2,building.y+building.h/3)
    //door
    fill(0)
    rect(building.x+building.w/2-30, building.y+building.h-100,60,100,3,3,0,0);
	if(getCookie(building.name.replaceAll(" ","") ) == "true"){
		noFill()
		stroke(0,255,0)
		strokeWeight(3)
		rect(building.x,building.y, building.w,building.h,5,5,0,0)
		strokeWeight(1);
		stroke(0);
	}
    if(register[ENTER]){
      if(collision(building, player)){
        scene = building.name.replaceAll(" ","");
        register[ENTER] = false;
		if ("targetX" in building){
			player.x = building.targetX;
			player.y = building.targetY;
		} else {
			player.x = 0;
			player.y = 0;
		}
        if(scene in challenges){
          if("setup" in challenges[scene]){
            challenges[scene].setup();
          }
        }
      }
    }
  }
}