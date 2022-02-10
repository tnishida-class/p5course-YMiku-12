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
  for(i = 0; i < 8; i++){
    for(j = 0; j < 8; j++){
      if(((i + j) % 2 == 1 ) && j < 3){
        fill(255, 0, 0);
      }
      else if(((i + j) % 2 == 1 ) && 5 <= j){
        fill(0);
      }
      else if(((i + j) % 2 == 1 ) && j < 5){
        fill(150);
      }
      else{
        fill(255);
      }
      arc(i * size + width / 16, j * size + width /16, width / 8, width / 8, 0, PI * 2);
    }
  }
}
