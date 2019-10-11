var mySong;
var myJazzSong;
var analyzer;
var colorList = ['red', 'aquamarine', 'teal', 'blue'];



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

  //generates a spectrum for sound to appear on
  	fft = new p5.FFT();
    //tells spectrum to use mySong
	mySong.connect(fft);

  //higher frequencies than this are sort of useless
	number = 200;

}

function draw() {
  var index = Math.round(random() * (colorList.length - 1)); //Math.round arrotonda il risultato




  var volume = 0;
  // get the volume and remap it to a bigger value
  //volume = analyzer.getLevel();
  //volume = map(volume, 0, 1, 0, height);

  //records the spectrum for visualization
  	spectrum = fft.analyze()


  if (mouseX > width / 2) {
    background(color(colorList[index]));
    if (mySong.isPlaying() == false) {
      mySong.play();
      myJazzSong.stop();
    }

    for (let i = 0; i < number; i++) {
  x = map(i, 0, number, 0.25, 0.75)*width
  y = 800
  w = (width*0.5)/number
  h = spectrum[i]* -3
  rect(x, y, w, h)
}

  } else {
    background(230);
    if (myJazzSong.isPlaying() == false) {
      mySong.stop();
      myJazzSong.play();
    }

    // get the volume and remap it to a bigger value
    volume2 = analyzer2.getLevel();
    volume2 = map(volume2, 0, 0.5, 0, height);
    ellipse(width / 2, height / 2, volume2 )
  }

}
