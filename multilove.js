var song;
var amp;
var volhistory = [];

function setup() {
  createCanvas(384, 384);
  angleMode(DEGREES);
  song = loadSound("multilove.mp3", loaded);
  amp = new p5.Amplitude();
}

function loaded() {
  song.play();
  song.loop();
}

function draw() {
  fill(23, 0, 12);
  noStroke();
  ellipse(192, 192, 384, 384);
  var vol = amp.getLevel();
  volhistory.push(vol);

  translate(width / 2, height / 2);

  beginShape();
  for (var i = 0; i < 1080; i++) {
    var r = map(volhistory[i], 0, 1.2, 50, 180);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
    stroke(255, 10, map(volhistory[i], 0, 1, 0, 100));
  }
  endShape();

  beginShape();
  for (var i = 0; i < 720; i++) {
    var r = map(volhistory[i], 0, 1.2, 50, 160);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
    stroke(255, map(volhistory[i], 0, 1, 20, 120), 15);
  }
  endShape();

  beginShape();
  for (var i = 0; i < 360; i++) {
    var r = map(volhistory[i], 0, 1.2, 50, 140);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
    stroke(255, map(volhistory[i], 0, 1, 150, 250), 0);
  }
  endShape();

    if (volhistory.length > 1080) {
      volhistory.splice(0, 1);
    }
}
