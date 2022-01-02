let radiuss = [];
var slider;
let gene = 8;
var on=true;


function setup() {
  
  resetSketch();
  
  var button = createButton("Reset");
  button.mousePressed(resetSketch);
  
  var button2 = createButton("SaveImage");
  button2.mousePressed(saveImage);
  
  slider = createSlider(1,8,3);

}


function saveImage(){
  save('SnowFlakes.png');
}


function resetSketch(){
  
  createCanvas(400, 400);
  //fill(220)
  //noFill();
  stroke(0);
  strokeWeight(1);

  for(i = 0; i < gene; i++){
    radiuss[i] = random(5,30);
  }
}


function texts(){
  
  fill(0);
  stroke(255);
  textAlign(CENTER, CENTER);
  textSize(12);
  text('·Snowflakes Generator·',width/2,20);
  textSize(8);
  text('made by yuna',width/2,height-20);

}



function draw() {

  background(220);
  
  push();
    texts();
  pop();
  
  let edge = slider.value();
  
  for(let o=0; o < edge*2 ; o+=1){
    push();
      translate(width/2,height/2);
    
      if(on){
        let time = millis();
        rotate(time / 1000);
      }
      
      rotate(PI*o/edge);
      snowf();
    pop(); 
  
  }
}


function mousePressed(){
  if(mouseX<390 && mouseY<390){on=!on}
}

  
  
function snowf(){

  let x=0;
  let y=0;

  for(i = 0; i < gene ; i++){
    if(i > 0) {
      x += cos(PI/3)*radiuss[i-1] ;
      y += sin(PI/3)*radiuss[i-1] ;
    }
    polygon(x, y, radiuss[i], 6);

  }
}


function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}