var mySong;
var myJazzSong;
var analyzer;
var yoff = 0;
var xoff = 0;

function preload() {
  mySong = loadSound('./assets/Deep and Dirty.mp3');
  myJazzSong = loadSound('./assets/Bossa Antigua.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // The analyzer allows to perform analysis on a sound file
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);
  analyzer2 = new p5.Amplitude();
  analyzer2.setInput(myJazzSong);
}

function draw() {
  var volume = 0;
  // get the volume and remap it to a bigger value
  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, 0, height);



  if (mouseX > width / 2) {
    background(0, 255, 0);
    if (mySong.isPlaying() == false) {
      mySong.play();
      myJazzSong.stop();
    }
ellipse(width / 2, height / 2, volume + 40)

  } else {
    background(230);
    if (myJazzSong.isPlaying() == false) {
      mySong.stop();
      myJazzSong.play();
    }
    volume2 = analyzer2.getLevel();
    volume2 = map(volume2, 0, 1, 0, height);
    ellipse(width / 2, height / 2, volume2 + 20)
  }

}
