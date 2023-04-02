const progressBar1 = document.getElementById('fun');
const progressBar2 = document.getElementById('food');
const progressBar3 = document.getElementById('sleep');
const progressBar4 = document.getElementById('health');

function startProgressBar(progressBar, decreasingFlag, decrementValue, threshold, alertMessage, barAmount, resetValue = 100) {
  let interval = setInterval(() => {
    let progressValue = parseFloat(progressBar.style.width) || 100.0;
    if (decreasingFlag) {
      progressValue -= decrementValue;
      progressBar.style.width = `${progressValue}%`;
    }

    if (progressValue <= threshold) {
      progressBar.style.backgroundColor = 'red';
    }

    if (progressValue <= 0) {
      decreasingFlag = false;
      alert(alertMessage);
    }
  }, barAmount);

  return {
    add: (newWidth) => {
      let progressValue = parseFloat(progressBar.style.width) || 100.0;
      let currentWidth = parseFloat(progressBar.style.width);
      let updatedWidth = currentWidth + newWidth;
      if (updatedWidth > 100) {
        updatedWidth = 100;
      }
      progressBar.style.width = `${updatedWidth}%`;
      progressBar.style.backgroundColor = 'green';
    
      if (progressValue <= threshold) {
        progressBar.style.backgroundColor = 'red';
      }
    
      if (progressValue <= 0) {
        decreasingFlag = false;
        alert(alertMessage);
      } else {
        decreasingFlag = true;
      }
    },
    reset: () => {
      decreasingFlag = true;
      progressBar.style.width = `${resetValue}%`;
      progressBar.style.backgroundColor = 'green';
    }
  }
}


//interval1 = energy, intervavl2 = hunger, interval3 = sleep, interval 4 = hp

let interval2 = startProgressBar(progressBar2, true, 1,  20.0, "I'm Feeling Hungry :(", 1000);
let eatButton = document.getElementById("eatButton");
eatButton.addEventListener("click", () => {
  interval2.add(20);
});

let interval3 = startProgressBar(progressBar3, true, 1 , 20.0, "i'm feeling ssleepy zzz", 1000, 100);
let sleepButton = document.getElementById("sleepButton");
sleepButton.addEventListener("click", () => {
  interval3.reset();
});




//energy bar
/*let interval1 = setInterval(() => {
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
}, 30); //range barnya

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
*/
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

function changetosleep(currentImgIdx) {
  if(currentImgIdx == 1)
    img.src = "Aset/pentol/pentol-sleeping.gif";
}


function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  document.getElementById('time').innerHTML =
  h + ":" + m;
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
