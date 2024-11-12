//your JS code here. If required.
let timerDisplay = document.getElementById("timer");

function updateTimer() {
  let currentDate = new Date();
  timerDisplay.innerHTML = currentDate.toLocaleString();
}


setInterval(updateTimer, 1000);
updateTimer(); 
