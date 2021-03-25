// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var mistakes = 0;
var t = 90;

function generatePattern(){
  for(let i=0;i<8;i++){
    //scales float to between 1 and 6 and rounds to nearest int
    pattern[i] = Math.floor((Math.random() * 6) + 1);
  }
  console.log("pattern: " + pattern);
}

var clock = setInterval(function(){
  if(gamePlaying){
    console.log("starting clock");
    var m = Math.floor(t / 60);
    var s = t - (m * 60);
    if(s < 10){
      s = "0" + s
    }
    document.getElementById("timer").innerHTML = m + ":" + s;
    t--;
    if (t < 0) {
      clearInterval(clock);
      loseGame();
    }
  }
}, 1000);

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  mistakes = 0;
  clueHoldTime = 1000;
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  generatePattern();
  playClueSequence();
}

function stopGame(){
  //reset game variable
  gamePlaying = false;
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 520,
  6: 570
}
function playTone(btn,len){ 
  context.resume()
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  document.getElementById("img"+btn).classList.remove("hidden")
  setTimeout(function(){
    stopTone(btn)
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
  document.getElementById("img"+btn).classList.remove("hidden")
}
function stopTone(btn){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
    document.getElementById("img"+btn).classList.add("hidden")
}

//helper function if user clicks image instead of button
function imgClick(img){
  stopTone(img);
  guess(img);
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  clueHoldTime -= 115;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Congratulations! You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(btn == pattern[guessCounter]){
    //correct guess
    if(guessCounter == progress){
      //end of turn
      if(progress == pattern.length - 1){
        //final turn
        winGame();
        clearInterval(clock);
      }else{
        //not final turn
        progress++;
        playClueSequence();
      } 
    }else{
      //not end of turn
      guessCounter++;
    }
  }else{
    //incorrect guess
    mistakes++;
    if(mistakes == 3){
      //strike 3
      loseGame();
    }else{
      //not strike 3
      alert("Strike " + mistakes);
      clueHoldTime += 115 //keeps game from speeding up if you make a mistake
      playClueSequence(); //repeats clue for second try
    }
  }
}