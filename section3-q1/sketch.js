// 練習問題
let x, y, r, vr;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  r = width / 20;
  vr = 1;
}

function draw(){
  noStroke();
  background(175, 223, 228);//水色
  fill(255, 192, 203); //ピンク
  ellipse(x, y, r, r);
  let rmin, rmax;
  rmin = width / 25;
  rmax = width / 15;
  if(r < rmin || rmax < r){
          vr *= -1;
      }
      r += vr;
  //左矢印を押している間、速くなる
  if(keyIsDown(LEFT_ARROW)){
    let rmin, rmax;
    rmin = width / 25;
    rmax = width / 15;
    if(r < rmin || rmax < r){
            vr *= -1;
        }
        r += vr;
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
