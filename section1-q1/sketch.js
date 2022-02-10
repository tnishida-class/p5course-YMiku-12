// 練習問題：神戸市のマーク
function setup(){
  createCanvas(500, 200);
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  stroke(22, 131, 46);
  strokeWeight(25);
  strokeCap(SQUARE);
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  // BLANK[1]
  strokeWeight(25);
  strokeCap(SQUARE);
  arc(70, 100, 100, 100, QUARTER_PI * 5, QUARTER_PI * 5 + PI);
  //神戸大のロゴ
  //青の三日月
  stroke(14, 47, 146);
  strokeWeight(15);
  arc(300 + 10, 100, 120, 120, 0, PI * 2);
  fill(255);
  stroke(255);
  arc(300 + 5, 100 - 5, 110, 110, 0, PI * 2);
  //緑の三日月
  stroke(22, 131, 46);
  strokeWeight(10);
  arc(300 + 5, 100 - 5, 110, 110, 0, PI * 2);
  fill(255);
  stroke(255);
  strokeWeight(10);
  arc(300 - 2, 100, 100, 100, 0, PI * 2);
  //テキスト
  textSize(25);
  fill(77);
  text("KOBE", 265, 90);
  textSize(15);
  text("university", 275, 110);

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);
}
