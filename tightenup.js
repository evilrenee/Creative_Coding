var song;
var amp;
var volhistory = [];

function setup() {
  createCanvas(384, 384);
  angleMode(DEGREES);
  song = loadSound("tightenup.mp3", loaded);
  amp = new p5.Amplitude();
}

function loaded() {
  song.play();
}

function draw() {
  fill(5, 0, 20);
  noStroke();
  ellipse(192, 192, 384, 384);
  var vol = amp.getLevel();
  volhistory.push(vol);

  translate(width / 2, height / 2);

  beginShape();
  for (var i = 0; i < 1080; i++) {
    var r = map(volhistory[i], 0, 1, 50, 250);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
    stroke(20, 0, map(volhistory[i], 0, 1, 100, 250));
  }
  endShape();

  beginShape();
  for (var i = 0; i < 720; i++) {
    var r = map(volhistory[i], 0, 1, 50, 200);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
    stroke(115, 5, map(volhistory[i], 0, 1, 100, 250));
  }
  endShape();

  beginShape();
  for (var i = 0; i < 360; i++) {
    var r = map(volhistory[i], 0, 1, 50, 150);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
    stroke(190, 5, map(volhistory[i], 0, 1, 100, 250));
  }
  endShape();

    if (volhistory.length > 1080) {
      volhistory.splice(0, 1);
    }
}
