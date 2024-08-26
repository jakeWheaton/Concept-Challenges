var options = [
    {name: "classroom", items:["students", "teachers", "computers"]},
    {name: "coolPeople", items:["students", "teachers", "super heroes"]},
    {name: "highScores", items:["names", "numbers", "games"]},
    {name: "collectibles", items:["coins", "powerups", "gems"]},
    {name: "styles", items:["colors", "patterns", "sounds"]},
    {name: "locations", items:["countries", "planets", "continents"]},

]

var array;

var contentNum;

var content;


function setup(){
    var c = createCanvas(750,500);
    c.parent("challenge")
    background(0,20,0);
    fill(0,255,0);

    var i = floor(random()*options.length);
    array = options[i].name
    contentNum = floor(random()*4+3);

    content = options[i].items[floor(random()*options[i].items.length)];

    noStroke()
    textAlign(CENTER,CENTER)

    textSize(48);
    text("1) Create an array named " + array + " with " + contentNum + " " + content + " in it.\n\n2) Show how to access the last of the " + content + " in the array.",
         10, -75, 730, 480);
}