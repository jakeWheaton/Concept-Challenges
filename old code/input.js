var keys = ["a","b", "c", "space","left arrow", "enter", "r"]
var k;

function setup(){
    var c = createCanvas(750,500);
    c.parent("challenge");
    background(0,20,0);
    fill(0,255,0);

    k = removeRandom(keys)

    noStroke()
    textAlign(CENTER,CENTER)

    textSize(48);
    text("1) Show the functions used to read keyboard input.\n\n2) Show the functions used to read mouse input.\n\n3) Show how to tell if the \""
          + k + "\" key has been pressed.",
         10, -95, 730, 480);
}

function removeRandom(arr){
    var i = floor(random(arr.length));
    var output = arr[i];
    arr[i] = arr[arr.length-1];
    arr.pop();
    return output;
}