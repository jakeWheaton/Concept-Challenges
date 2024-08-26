//Arithmetic: Multiplication/Division/Negatives/Decimals/Inequalities



function setup(){
    var c = createCanvas(750,500);
    c.parent("challenge")
    background(0,20,0);
    fill(0,255,0);

    let denominator = floor(random(2,10));
    let numerator = denominator * floor(random(2,10));
    
    noStroke()
    //textAlign(CENTER,CENTER)

    textSize(40);
    text("Answer the following Math problems:\n\n1) " + floor(random(20)) + " multiplied by " + floor(random(20)) + " = ?\n2) "
         + numerator + " divided by " + denominator + " = ?\n3) "
         + floor(random(20)) + " + " + floor(random(-20)-1) + " = ?\n4) "
         + random(20).toFixed(1) + " - " + random(20).toFixed(1) + " = ?\n5) "
         + floor(random(-20,20)) + " > " + floor(random(-20,20)) + " ?",
         30, 10, 730, 480);
}


function removeRandom(arr){
    var i = floor(random(arr.length));
    var output = arr[i];
    arr[i] = arr[arr.length-1];
    arr.pop();
    return output;
}