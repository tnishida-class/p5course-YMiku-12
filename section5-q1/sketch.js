// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", 10, 100, 100, 0, 0, 0, 255, 255, 255);
}

function balloon(t, cp, cx, cy, n1, n2, n3, n4, n5, n6){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = cp;
  let x = cx;
  let y = cy;
  fill(n1, n2, n3);
  rect(x, y, w + p * 2, h + p * 2, p);
  triangle(x + p, y + h + p * 2, x - p, y + p + h * 2, x + p * 4, y + h + p * 2);
  fill(n4, n5, n6);
  text(t, p + x, h + p + y);
}
