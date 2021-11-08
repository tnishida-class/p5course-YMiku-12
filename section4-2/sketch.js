//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  const ds = random(10, 80);
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size: ds, vx: dx, vy: dy };
    balls.push(b);
  }
}

function createBalls(){
  const dx = random(1, 15);
  const dy = random(1, 15);
  const ds = random(10, 80);
  const b = { x: width / 2, y: height / 2, size: ds, vx: dx, vy: dy };
  balls.push(b);
}
setInterval(createBalls, 500);

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
