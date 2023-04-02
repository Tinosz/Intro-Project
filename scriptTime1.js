function gameClock() {
    if (temp == 1) {
      setTimeout(function() {
        currTime++;
        var period = "AM";
  
        var hour = Math.floor(currTime / 10 / 60) % 60;
        if (hour <= 9) {
          hour = "0" + hour;
        }
        if (hour >= 12){
          period = "PM"
        }
        var minute = Math.floor(currTime / 10) % 60;
        if (minute <= 9) {
          minute = "0" + minute;
        }
        document.getElementById("clock").innerHTML = hour + ":" + minute + period;
        gameClock();
      }, 100);
    }
  }
  
  var temp = 1;
  var currTime = 7200; 
  gameClock();
  