// 最終課題を制作しよう


let r, c1, c2, c3, c4, x1, y1, x2, y2, cx, cy, cr1, cr2; //r ~ c4が虹, x1 ~ y2が雨, cx ~ cr2が雲
let rcolor, lines, circles; //虹の配列, 雨の配列, 雲の配列

function setup(){
  createCanvas(windowWidth, windowHeight);
  lines = [];
  circles = [];
  count = 0;
  r = 0;
  rcolor = [];
  let rc1 = {c1: 255, c2: 0, c3: 0, c4: 160};
  rcolor.push(rc1);
  let rc2 = {c1: 255, c2: 165, c3: 0, c4: 125};
  rcolor.push(rc2);
  let rc3 = {c1:255 , c2:255 , c3: 0, c4: 125};
  rcolor.push(rc3);
  let rc4 = {c1: 0, c2: 255, c3: 0, c4: 125};
  rcolor.push(rc4);
  let rc5 = {c1: 0, c2: 0, c3: 255, c4: 140};
  rcolor.push(rc5);
  let rc6 = {c1: 0, c2: 0, c3: 128, c4: 125};
  rcolor.push(rc6);
  let rc7 = {c1: 50, c2: 0, c3: 75, c4: 125};
  rcolor.push(rc7);
  let rc8 = {c1: 101, c2: 187, c3: 233, c4: 255};
  rcolor.push(rc8);
}

function colorCircle(c1, c2, c3, c4, r){ // 虹の描画のための関数
  push();
  fill(c1, c2, c3, c4);
  ellipse(width, height, r);
  pop();
}
function cloud(cx, cy, cr1, cr2){ // 雲の関数
  push();
  noStroke();
  fill(255);
  ellipse(cx, cy, cr1, cr2);
  ellipse(cx + 10, cy + 15, cr1, cr2);
  ellipse(cx - 20, cy + 22, cr1, cr2 - 25);
  ellipse(cx + 20, cy, cr1, cr2 - 20);
  ellipse(cx + 40, cy + 17, cr1 - 15, cr2 - 25);
  pop();
}
function mouseDragged(){ // ドラッグされたら雲を増やす
  const cx = mouseX - pmouseX;
  const cy = mouseY - pmouseY;
  const c = { cx: mouseX, cy: mouseY, cr1: 60, cr2: 60, vcx: cx, vcy:cy };
  circles.push(c);
}
function keyPressed(){ // 雲の配列を削除する
  if(key == " "){
    circles.splice(0);
  }
}

function draw(){
  background(101, 187, 233);
  noStroke();
  for(let i = 0; i < 8; i++){ // 虹を描画
    let rc = rcolor[i];
    colorCircle(rc.c1, rc.c2, rc.c3, rc.c4, width * 1.3 - i * width / 16);
  }

  stroke(255);
  count++;
  for(let i = 0; i < lines.length; i++){ // 雨を描画
    let l = lines[i];
    line(l.x1, l.y1, l.x2, l.y2);
    l.x1 += l.vx;
    l.y1 += l.vy;
    l.x2 += l.vx;
    l.y2 += l.vy;
    if(l.y1 > height){ // 画面外に雨が出たら、配列の1番始めを削除
      lines.shift();
    }
  }
  if(count % 8 == 0){ // countが8で割り切れるときlinesに雨のデータが1つ追加される
    let ran1 = random(width);
    const l = { x1: ran1, y1: -150, x2: ran1, y2: random(-80, -20), vx: 0, vy: 10};
    lines.push(l);
  }
  if(keyIsDown(LEFT_ARROW)){ // 左矢印を押している間、雨がやむ
    lines.splice(0);
  }
  if(keyIsDown(RIGHT_ARROW)){ // 右矢印を押している間、雨がたくさん降る
    if(count % 2 == 0){
      let ran1 = random(width);
      const l = { x1: ran1, y1: -150, x2: ran1, y2: random(-80, -20), vx: 0, vy: 10};
      lines.push(l);
    }
  }

  for(let i = 0; i < circles.length; i++){ // 雲を描画
    let c = circles[i];
    cloud(c.cx, c.cy, c.cr1, c.cr2);
    c.cx += c.vcx;
    c.cy += c.vcy;
  }
  if(count % 60 == 0){ // countが60で割り切れるときcirclesにデータが1つ追加される
    let ran2 = random(50, 80);
    const c = {cx: -100 , cy: random(height * 0.5, height * 0.9), cr1: ran2, cr2: ran2, vcx: random(1, 3), vcy: 0};
    circles.push(c);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
