var timerDisplay = document.getElementById('timer');
var breakDisplay = document.getElementById('break');
var startButton = document.getElementById('start');
var pauseButton = document.getElementById('pause');
var clearButton = document.getElementById('clear');
var addTime = document.getElementById('plustime');
var substractTime = document.getElementById('minustime');
var addBreak = document.getElementById('plusbreak');
var substractBreak = document.getElementById('minusbreak');
var minutes = 1; //lenght of Pomodoro, in minutes
var counter = 0; //used to count the number of seconds in each minute
var breakminutes = 1; //same, but for breaks
var breakcounter = 0;
var OnOff = 1; //This is used to switch between 2 states: Pomodoros and Breaks
var isIntervalInProgress = false;
var tomatoHeight = document.getElementById('tomato').offsetHeight;

var clockAudio = new Audio('http://www.soundjay.com/clock/sounds/clock-ticking-3.mp3');

var breakAudio = new Audio('http://www.soundjay.com/misc/sounds/bell-ringing-05.mp3');

//User controls

startButton.onclick = countDown;
pauseButton.onclick = pauseTimer;
addTime.onclick = addOneTimer;
substractTime.onclick = minusOneTimer;
addBreak.onclick = addOneBreak;
substractBreak.onclick = minusOneBreak;
clearButton.onclick = clearTimer;

function countDown() {
  if (isIntervalInProgress === false) {
    isIntervalInProgress = true;
    document.getElementById('tomato').style.backgroundColor = 'inherit';
    clockAudio.play();
    initialMinutes = Number(timerDisplay.innerHTML);
    initialBreak = Number(breakDisplay.innerHTML);
    initialSeconds = Number(timerDisplay.innerHTML) * 60;
    myInterval = setInterval(switchPomodoro, 1000);
  }
}

//This is the main function to display the timer
function switchPomodoro() {

  if (minutes === 0 && counter === 0 && OnOff === 1) {
    breakAudio.play();
  }

  if (minutes === 0 && counter === 0 && breakminutes === 0 && breakcounter === 0 && OnOff === 0) {
    breakAudio.play();
    minutes = initialMinutes; //so that everything starts again after the Pomodoro - Break sequence

  }

  if (minutes === 0 && counter === 0) {

    OnOff = 0;
  } else if (breakminutes === 0 && breakcounter === 0) {
    OnOff = 1;
    breakAudio.play();
    breakminutes = initialBreak;
  }

  if (OnOff === 0) {
    if (breakminutes < 0) {
      breakminutes = 0;
    }
    if (breakcounter === 0) {
      breakcounter = 60;
      breakminutes--;
    } else {
      breakcounter--;
      display.innerHTML = 'Relax!  ' + (breakminutes < 10 ? "0" + breakminutes : breakminutes) + ':' + (breakcounter < 10 ? "0" + breakcounter : breakcounter);
      fillTomato();
    }
  }

  if (OnOff === 1) {
    if (counter === 0) {
      counter = 60;
      minutes--;
    } else {

      counter--;
      display.innerHTML = 'Focus! ' + (minutes < 10 ? "0" + minutes : minutes) + ':' + (counter < 10 ? "0" + counter : counter);
      fillTomato();
    }
  }

}

//Functions for user controls
function pauseTimer() {
  clearInterval(myInterval);
  isIntervalInProgress = false;
}

function addOneTimer() {
  if (isIntervalInProgress === false) {
    minutes++;
    timerDisplay.innerHTML = minutes;
  }
}

function minusOneTimer() {
  if (isIntervalInProgress === false) {
    minutes--;
    if (minutes < 1) {
      minutes = 1;
    }
    timerDisplay.innerHTML = minutes;
  }

}

function addOneBreak() {
  if (isIntervalInProgress === false) {
    breakminutes++;
    breakDisplay.innerHTML = breakminutes;
  }
}

function minusOneBreak() {
  if (isIntervalInProgress === false) {
    breakminutes--;
    if (breakminutes < 1) {
      breakminutes = 1;
    }
    breakDisplay.innerHTML = breakminutes;
  }
}

function clearTimer() {

  clearInterval(myInterval);
  display.innerHTML = '';
  minutes = initialMinutes;
  counter = 0;
  breakminutes = initialBreak;
  breakcounter = 0;
  OnOff = 1;
  isIntervalInProgress = false;
  document.getElementById('display').style.height = 0 + "px";
  document.getElementById('tomato').style.backgroundColor = '#E36B71';
}

function fillTomato() {
  if (breakminutes === 1) {
    remainingSeconds = ((minutes) * 60) + counter;
  } else {
    remainingSeconds = ((minutes + breakminutes) * 60) + (counter + breakcounter);
  }
  ratio = (1 - (remainingSeconds / initialSeconds)) * tomatoHeight

  document.getElementById('display').style.height = ratio + "px";

}
