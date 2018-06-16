var COUNT_START = 10*10*15; // tenths * seconds * hours
var count = COUNT_START;
var playing = true;

function countdown(){
    displayTime();
    if (count == 0) {
      playing = false;
    } else if (playing) {
      setTimeout(countdown, 100);
      count--;
    } else {
      setTimeout(countdown, 100);
    }
}
countdown();

function displayTime() {
  var tenths = count;
  var sec = Math.floor(tenths / 10);
  var hours = Math.floor(sec / 3600);
  sec -= hours * (3600);
  var mins = Math.floor(sec / 60);
  sec -= mins * (60);

  if (hours < 1) {
    document.getElementById('time_left').innerHTML = LeadingZero(mins)+':'+LeadingZero(sec);
  }
  else {
    document.getElementById('time_left').innerHTML = hours+':'+LeadingZero(mins)+':'+LeadingZero(sec);
  }
}

function LeadingZero(Time) {
  return (Time < 10) ? "0" + Time : + Time;
}
