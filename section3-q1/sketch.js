// 練習問題「太陽と地球と月」
let x, y, r, a, va, b, vb;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  r = 50;
  vr = 1;
  a = 0;
  va = PI / 360;
  b = 0;
  vb = PI / 30;
}

function draw(){
  noStroke();
  background(34, 58, 112);
  //太陽
  fill(255, 0, 0);
  ellipse(x, y, r, r);
  //地球
  fill(0, 0, 255);
  ellipse(x + 150 * sin(a), y + 150 * cos(a), r / 3, r / 3);
  //月
  fill(255, 255, 0);
  ellipse((x + 150 * sin(a)) + sin(b) * 20, (y + 150 * cos(a)) + cos(b) * 20, r / 6, r / 6);
  a += va;
  b += vb;
  //右矢印を押すと地球と月の速度が上がる
  if(keyIsDown(RIGHT_ARROW)){ va += PI / 360, vb += PI / 30; }
  //左矢印を押している間、太陽と地球と月のサイズが変わる
  if(keyIsDown(LEFT_ARROW)){
    let rmin, rmax;
    rmin = 25;
    rmax = 100;
    if(r < rmin || rmax < r){
            vr *= -1;
        }
        r += vr;
  }
}
function keyPressed(){
  if(key == " "){　// スペースキーを押したらリセット
    x = width / 2;
    y = height / 2;
    r = 50;
    va = PI / 360;
    vb = PI / 30;
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
