document.getElementById("pentolChat").innerHTML = "Hello";
var greeting;
function gameClock() {
      setTimeout(function() {
        currTime++;
        var period = "AM";
  
        var hour = Math.floor(currTime / 10 / 60) % 60;
        if (hour <= 9) {
          hour = "0" + hour;
        }
        if (hour >= 12 && hour <= 23){
          period = "PM";
        } else if (hour >= 0 && hour < 12)
          period = "AM";
          
        var minute = Math.floor(currTime / 10) % 60;
        if (minute <= 9) {
          minute = "0" + minute;
        }

        hour = hour % 24;
        
        document.getElementById("clock").innerHTML = hour + ":" + minute + period;
          
        if(hour >= 0 && hour < 6){
          greeting = "Selamat Tidur";
          document.getElementById("greeting").innerHTML = greeting;
        }

        if(hour >= 6 && hour < 12){
          greeting = "Selamat Pagi";
          document.getElementById("greeting").innerHTML = greeting;
        }

        if(hour >= 12 && hour < 18){
          greeting = "Selamat Siang";
          document.getElementById("greeting").innerHTML = greeting;
        }

        if(hour >= 18 && hour < 24){
          greeting = "Selamat Malam";
          document.getElementById("greeting").innerHTML = greeting;
        }

        if (hour >= 0 && hour < 6) {
          document.getElementById("object1").src = "Aset/Bedroom_Night_Dark.png";
        } else if (hour >= 6 && hour < 15) {
          document.getElementById("object1").src = "Aset/Bedroom_Day.png";
        } else if(hour >=16 && hour < 19){
          document.getElementById("object1").src = "Aset/Bedroom_Evening.png";
        } else{
          document.getElementById("object1").src = "Aset/Bedroom_Night.png";
        }
        gameClock();
      }, 25);
    }
  
  

  var currTime = 3600; 
  gameClock();
  
  