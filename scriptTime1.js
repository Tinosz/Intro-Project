document.getElementById("pentolChat").innerHTML = "<br>Hello";
var greeting;
function gameClock() {
      setTimeout(function() {
        currTime++;
  
        var hour = Math.floor(currTime / 10 / 60) % 60;
        if (hour <= 9) {
          hour = "0" + hour;
        }
        
        var minute = Math.floor(currTime / 10) % 60;
        if (minute <= 9) {
          minute = "0" + minute;
        }

        hour = hour % 24;
        
        document.getElementById("clock").innerHTML = hour + ":" + minute;
          
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

        

        gameClock();
      }, 1);
    }
  
var currTime = 3500; 
gameClock();

var levelBarFill = document.getElementById("level-bar-fill");
var levelCounter = document.getElementById("level-counter-value");
var isFull = true;
var temp = 0;
function fillFirst(){
  if (isFull) {
    levelBarFill.classList.remove("empty");
    levelBarFill.style.width = "0%";
    setTimeout(emptyBar, 36);
    isFull = false;
  }
}

function fillBar() {
  if (isFull) {
    levelBarFill.classList.remove("empty");
    levelBarFill.style.width = "100%";
    setTimeout(emptyBar, 360000);
    isFull = false;
  }
}

function emptyBar() {
  levelBarFill.classList.add("empty");
  levelBarFill.style.width = "0%";
  levelCounter.innerText = parseInt(levelCounter.innerText) + 1;
  setTimeout(fillBar, 0);
  isFull = true;
}

if(temp == 0){
  fillFirst();
  temp == 1;
}
fillBar();

var level = document.getElementById("level-counter-value").value;
const evolution = "";
if (level >= 5 && level <= 10){
  evolution = "Aset/";
} else if (level > 10 && level <= 15){
  evolution = "";
} else if (level > 15 && level <= 20)
  evolution = "";

  document.getElementById("object2").innerHTML = evolution;
