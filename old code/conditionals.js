var conditionNames = ["x is less than 10", "y is greater than 500", "score is greater than highscore", "lives are less than 0", "points are equal to 7",
                      "wallTimer is equal to 0", "level is greater than 2", "AI is equal to true", "Playing is equal to false"]
var condition;


function setup(){
    var c = createCanvas(750,500);
    c.parent("challenge")
    background(0,20,0);
    fill(0,255,0);

    condition = removeRandom(conditionNames);

    
    noStroke()
    textAlign(CENTER,CENTER)

    textSize(48);
    text("1) Create an if else statement which sets the fill to red if " + condition + 
         " and blue otherwise. \n\nYou can assume all variables are already declared",
         10, -50, 730, 480);
}


function removeRandom(arr){
    var i = floor(random(arr.length));
    var output = arr[i];
    arr[i] = arr[arr.length-1];
    arr.pop();
    return output;
}