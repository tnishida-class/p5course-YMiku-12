//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう


let balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
  count = 0;
}

function draw(){
  noStroke();
  count++;
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
  if(count % 10 == 0){
    const b = { x: random(0, width), y: -10, size: random(5, 12), vx: random(-1, 1), vy: random(1, 2)};
    balls.push(b);
  }
}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  const ds = random(10, 20);
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size: ds, vx: dx, vy: dy };
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
