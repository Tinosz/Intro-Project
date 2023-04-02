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
var currTime = 7100; 
gameClock();

const progressBar1 = document.getElementById('energy');
const progressBar2 = document.getElementById('food');
const progressBar3 = document.getElementById('sleep');
const progressBar4 = document.getElementById('health');

//energy bar
let interval1 = setInterval(() => {
  let progressValue = parseFloat(progressBar1.style.width) || 100.0;
  progressValue -= 0.1;
  progressBar1.style.width = `${progressValue}%`;
  
  if (progressValue <= 20.0) {
    progressBar1.style.backgroundColor = 'red';
  }
  
  if (progressValue <= 0) {
    clearInterval(interval1);
  }
}, 1000);

//hunger bar
let decreasingHunger= true; //membuat flag biar tahu kalau sedang berkurang atau enggak 
let interval2 = setInterval(() => {
  let progressValue = parseFloat(progressBar2.style.width) || 100.0;
  if(decreasingHunger){
    progressValue -= 0.1;
    progressBar2.style.width = `${progressValue}%`;
  }

  if (progressValue <= 20.0) {
    progressBar2.style.backgroundColor = 'red';
  }

  if (progressValue <= 0) {
    decreasingHunger= false;
    alert("I'm feeling hungry :(");
  }
}, 100); //range barnya

let eatButton = document.getElementById("eatButton");
eatButton.addEventListener("click", () =>{
  decreasingHunger= true;
  let currentHungerWidth = parseFloat(progressBar2.style.width);
  let newHungerWidth = currentHungerWidth + 20; //seberapa besar ingin menambahkan makannya, make persentase
  if (newHungerWidth > 100){
    newHungerWidth = 100; 
  }
  progressBar2.style.width = `${newHungerWidth}%`;
  progressBar2.style.backgroundColor = 'green';
});

//fatigue bar
let decreasingSleep= true; //membuat flag biar tahu kalau sedang berkurang atau enggak 
let interval3 = setInterval(() => {
  let progressValue = parseFloat(progressBar3.style.width) || 100.0;
  if(decreasingSleep){
    progressValue -= 0.1;
    progressBar3.style.width = `${progressValue}%`;
  }

  if (progressValue <= 20.0) {
    progressBar3.style.backgroundColor = 'red';
  }

  if (progressValue <= 0) {
    decreasingSleep= false;
    alert("I'm feeling sleepy zzz");
  }
}, 300); //range barnya

let sleepButton = document.getElementById("sleepButton");
sleepButton.addEventListener("click", () =>{
  decreasingSleep= true;
  let currentSleepWidth = parseFloat(progressBar3.style.width);
  let newSleepWidth = currentSleepWidth + 20; //seberapa besar ingin menambahkan makannya, make persentase
  if (newSleepWidth > 100){
    newSleepWidth = 100; 
  }
  progressBar3.style.width = `${newSleepWidth}%`;
  progressBar3.style.backgroundColor = 'green';
});

const img = document.getElementById('myImg');
let currentImgIdx = 0;
const images = [ 
    '',
    'Aset/pentol/pentol-sleeping.gif',
    'images/bridge.jpg',
    'images/coffee.jpg',
    'images/leaves.jpg',
    'images/lock.jpg'
]; 

function changetosleep(value) {
  let currentImgIdx = document.getElementById("object2");
  if(value == 1)
   currentImgIdx = img.src = "Aset/pentol/pentol-sleeping.gif";
}


function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
