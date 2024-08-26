var colorNames = ["Blue", "Purple", "Orange", "Yellow", "Red", "Aqua (blue-green)", "Black", "Brown", "Green", "White"];
var color1;
var color2;
var color3;


function setup(){
    var c = createCanvas(750,500);
    c.parent("challenge")
    background(0,20,0);
    fill(0,255,0);

    color1 = removeRandom(colorNames);
    color2 = removeRandom(colorNames);
    color3 = removeRandom(colorNames);

    noStroke()
    textAlign(CENTER,CENTER)

    textSize(48);
    text("1) Find the color code for " + color1 + ".\n\n2) Find the color code for " + 
         color2 + ".\n\n3) Find the color code for " + color3 + ".",
         10, -150, 730, 480);
}

function removeRandom(arr){
    var i = floor(random(arr.length));
    var output = arr[i];
    arr[i] = arr[arr.length-1];
    arr.pop();
    return output;
}