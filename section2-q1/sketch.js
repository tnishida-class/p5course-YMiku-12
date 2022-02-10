// 小手調べ
function setup(){
  createCanvas(300,300);
  for(let i = 0; i < 10; i++){
    // BLANK[1]
    noFill();
    if(i < 5){
      stroke(0, 0, 255);
    }
    else{
      stroke(255, 0, 0);
    }
    ellipse(100, 100, i * 10 + 10);
  }
}
