// ********************************************************** Clock
// initializes clock display
function initClock() {
    const clockEl = document.getElementById('clock-display');
  
    startClock(clockEl);
  }
  
  // sets clock time
  function startClock() {
    const date = new Date(); /* creating object of Date class */
    const hour = updateTime(date.getHours());
    const min = updateTime(date.getMinutes());
    const sec = updateTime(date.getSeconds());
  
    document.getElementById("clock-display").innerText = hour + " : " + min + " : " + sec;
  
    setTimeout(startClock, 1000);
  }
  
  // adjusts time display
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }