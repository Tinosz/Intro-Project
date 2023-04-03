
var greeting;
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

        if(hour >= 0 && hour < 6){
          greeting = "Selamat Tidur";
          document.getElementById("greeting").innerHTML = greeting;
        }

        if(hour >= 6 && hour < 12){
          greeting = "Selamat Siang";
          document.getElementById("greeting").innerHTML = greeting;
        }

        if(hour >= 12 && hour < 18){
          greeting = "Selamat Sore";
          document.getElementById("greeting").innerHTML = greeting;
        }

        if(hour >= 18 && hour < 24){
          greeting = "Selamat Malam";
          document.getElementById("greeting").innerHTML = greeting;
        }
        gameClock();
      }, 100);
    }
  }
  
  var temp = 1;
  var currTime = 7100; 
  gameClock();
  