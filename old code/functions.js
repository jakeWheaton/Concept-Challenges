var functionNames = ["drawPlayer", "drawCoins", "drawWalls", "fireLasers","movePlayer","moveEnemies", "reset", "startGame"]
var f

function setup(){
    var c = createCanvas(750,500);
    c.parent("challenge")
    background(0,20,0);
    fill(0,255,0);

    f = functionNames[floor(random()*functionNames.length)];
    
    noStroke()
    textAlign(CENTER,CENTER)

    textSize(48);
    text("1) Create a function named " + f + ".\n\n2) Show how to call " + f + ".",
         10, -75, 730, 480);
}