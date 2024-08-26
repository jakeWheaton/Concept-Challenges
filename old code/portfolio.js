function setup(){
    var c = createCanvas(750,500);
    c.parent("challenge")
    background(0,20,0);
    fill(0,255,0);


    noStroke()
    textAlign(CENTER,CENTER)

    textSize(48);
    text("Create a portfolio which showcases at least one of your projects!",
         10, -75, 730, 480);
}