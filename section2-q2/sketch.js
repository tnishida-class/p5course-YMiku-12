// チェッカー
function setup() {
  createCanvas(500, 500);
  const width = 240;
  let size = width / 8;
  let i, j;
  noStroke();
  for(i = 0; i < 8; i++){
    for(j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if((i + j) % 2 == 0){
        fill(255);
      }
      else{
        fill(150);
      }
      console.log(i, j);
      rect(i * size, j * size, width / 8, width / 8);
    }
  }
  function circle(){
    for(i = 0; i < 8; i++){
      for(j = 0; j < 8; j++){
        if(((i + j) % 2 == 0 ) < 3){
          fill(255, 0, 0);
        }
        else if(((i + j) % 2 == 0 ) < 8){
          fill(0);
        }
        else {
          fill(150);
        }
        console.log(i, j);
        arc(i * size, j * size, width / 8);
      }
    }
  }
}
