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


var level = document.getElementById("level-counter-value").textContent;

function changeObject2Image() {
  if (level >= 4 && level < 9) {
    document.getElementById("object2").src = "Aset/kitten/evolve2.gif";
  } else if (level >= 9 && level < 14) {
    document.getElementById("object2").src = "Aset/kitten/evolve3.gif";
  } else if (level >= 14) {
    document.getElementById("object2").src = "Aset/kitten/evolve4.gif";
  }
}

changeObject2Image();
  
  var currTime = 3600; 
  gameClock();
