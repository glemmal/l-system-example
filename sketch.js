
var axiom = 'F';
var sequence = axiom;
var len = 80;
var angle = 0;

var rules = [
  {
    a: "F",
    b: "FF+[+F-F-F]-[-F+F+F]"
  }
];

function setup() {
  angle = radians(25);
  createCanvas(400, 400);
  background(51);
  turtle();
  var button = createButton("generate");
  button.mousePressed(generate);
  createP(sequence);
}

function generate() {
  var newSequence = "";
  len *= 0.6;
  for(var i = 0; i < sequence.length; i++) {
    var curr = sequence.charAt(i);
    var isMatch = false;
    for(var j = 0; j < rules.length; j++) {
      if(curr == rules[j].a) {
        newSequence += rules[j].b;
        isMatch = true;
        break;
      }
    }
    if(!isMatch) {
      newSequence += curr;
    }
  }
  sequence = newSequence;
  createP(sequence);
  turtle();
}

function turtle() {
  
  background(51);
  resetMatrix();
  translate(width / 2, height);
  stroke(255);
  
  for(var i = 0; i < sequence.length; i++) {
    
    var curr = sequence.charAt(i);
    
    if(curr == "F") {
     line(0,0,0, -len);
     translate(0, -len);
    } else if( curr == "+") {
      rotate(angle);
    } else if( curr == "-") {
      rotate(-angle);
    } else if ( curr == "[") { 
      push();
    } else if( curr == "]") {
      pop();
    }
    
  }
}

function draw() {
  
}