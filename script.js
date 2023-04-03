function switchImage() {
  const images = ['Aset/pentol/pentol-idle.gif', 'Aset/chad.gif', 'Aset/laptop.gif', 'Aset/cold.gif', 'Aset/chad.gif']; // an array of image file names
  let currentImageIndex = 0;
  const imageElement = document.getElementById('object2'); 

  setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length; 
    imageElement.src = images[currentImageIndex]; 
  }, 30000); 
}

switchImage();


/*const progressBar1 = document.getElementById('energy');
const progressBar2 = document.getElementById('food');
const progressBar3 = document.getElementById('sleep');
const progressBar4 = document.getElementById('health');
function startProgressBar(progressBar, decreasingFlag, decrementValue, threshold, alertMessage, resetValue = 100, barAmount) {
  
  let interval = setInterval(() => {
    let progressValue = parseFloat(progressBar.style.width) || 100.0;
    if (decreasingFlag) {
      progressValue -= decrementValue;
      progressBar.style.width = `${progressValue}%`;
    }

    if (progressValue <= threshold) {
      progressBar.style.backgroundColor = 'red'; 
      document.getElementById("pentolChat").innerHTML = (alertMessage);
    } 
    
    if(progressValue <= 0){
      decreasingFlag = false;
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

let interval2 = startProgressBar(progressBar2, true, 0.14,  20.0, "I'm <br>Feeling Hungry :(", 1000, 100);
let eatButton = document.getElementById("eatButton");
eatButton.addEventListener("click", () => {
  interval2.add(20);
});

let interval3 = startProgressBar(progressBar3, true, 0.1, 20.0, "I'm <br>feeling sleepy zzz", 1000, 100);
let sleepButton = document.getElementById("sleepButton");
sleepButton.addEventListener("click", () => {
  interval3.reset();
});*/


let health = 100;
let healthBar = document.querySelector('#health');
let heal = document.querySelector('#obatButton');
let healCounter = 10;
let nullHP = 0;
let healCounterElem = document.querySelector('#healCounter');

let healthFlag = true;
let healthAlertShown = false;
let healthDecrement = false;
let gameOver = false;

let healthInterval = setInterval(() => {
  if(healthFlag && healthDecrement){
    health -= 2;
    healthBar.style.width = `${health}%`;
  }

  if(health <= 20 && !healthAlertShown){
    healthAlertShown = true;
    alert("I'm feeling sick");
    healthBar.style.backgroundColor = 'red';
  }else{
    hungerBar.style.backgroundColor = 'green';
  }

  if(health<=0){
    alert("Bye Bye :(");
    clearInterval(healthInterval);
    gameOver = true;
    const gameOverOverlay = document.createElement('div');
    gameOverOverlay.style.position = 'absolute';
    gameOverOverlay.style.top = 0;
    gameOverOverlay.style.left = 0;
    gameOverOverlay.style.width = '100%';
    gameOverOverlay.style.height = '100%';
    gameOverOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    gameOverOverlay.style.display = 'flex';
    gameOverOverlay.style.alignItems = 'center';
    gameOverOverlay.style.justifyContent = 'center';
    const gameOverText = document.createElement('p');
    gameOverText.style.color = 'white';
    gameOverText.style.fontSize = '3em';
    gameOverText.style.textAlign = 'center';
    gameOverText.textContent = 'Game Over!';
    gameOverOverlay.appendChild(gameOverText);
    document.body.appendChild(gameOverOverlay);
    document.body.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }
}, 1000); //fungsi berjalan setiap detik

heal.addEventListener('click', () =>{
  if(healCounter > nullHP){
    healthFlag = true;
    healthAlertShown = false;
    health += 10;
    if(healthDecrement && !gameOver){
      healCounter--;
      healCounterElem.textContent = healCounter;
    }
    if(health > 100){
      health = 100;
    }
    healthBar.style.width = `${health}%`;
  }
});

//emotion bar
let fun = 100;
let funBar = document.querySelector('#fun');
let playBtn = document.querySelector('#playButton');

let funFlag = true;
let playAlertShown = false;

let funInterval= setInterval(() => {
  if(funFlag){
    if(!sleepFlag){
      fun -= 10; //
    } else{
      fun -= 0.5;
    }
    funBar.style.width = `${fun}%`;
  }

  if(fun <= 20){
    funBar.style.backgroundColor = 'red';
  } else{
    funBar.style.backgroundColor = 'green';
  }

  if(fun<=0 && !playAlertShown){
    funFlag = false;
    alert("I'm bored...")
    playAlertShown = true;
  }
}, 1000); //fungsi berjalan setiap detik

playBtn.addEventListener('click', () =>{
  funFlag = true;
  playAlertShown = false;
  if(!sleepFlag){
    fun += 10;
  }else{
    fun += 50;
  }
  if(fun > 100){
    fun = 100;
  }
  funBar.style.width = `${fun}%`;
});

//hunger bar
let hunger = 100;
let hungerBar = document.querySelector('#food');
let eatBtn = document.querySelector('#eatButton');

let hungerFlag = true;
let hungerAlertShown = false;

let hungerInterval = setInterval(() => {
  if(hungerFlag){
    healthDecrement = false;
    if(!funFlag){
      hunger -= 10;
    }else{
      hunger -= 1;
    }
    hungerBar.style.width = `${hunger}%`;
  }

  if(hunger <= 20){
    hungerBar.style.backgroundColor = 'red';
  } else{
    hungerBar.style.backgroundColor = 'green';
  }

  if(hunger<=0 && !hungerAlertShown){
    hungerFlag = false;
    alert("I'm feeling hungry...")
    hungerAlertShown = true;
    healthDecrement = true;
  }
}, 1000); //fungsi berjalan setiap detik

eatBtn.addEventListener('click', () =>{
  hungerFlag = true;
  hungerAlertShown = false;
  hunger += 10;
  if(hunger > 100){
    hunger = 100;
  }
  hungerBar.style.width = `${hunger}%`;
});

//sleep bar
let sleep = 100;
let sleepBar = document.querySelector('#sleep');
let sleepBtn = document.querySelector('#sleepButton');

let sleepFlag = true;
let sleepAlertShown = false;

let sleepInterval= setInterval(() => {
  if(sleepFlag){
    sleep -= 1;
    sleepBar.style.width = `${sleep}%`;
  }

  if(sleep <= 20){
    sleepBar.style.backgroundColor = 'red';
  } else{
    sleepBar.style.backgroundColor = 'green';
  }

  if(sleep<=0 && !sleepAlertShown){
    sleepFlag = false;
    alert("Feeling tired...")
    sleepAlertShown = true;
  }
}, 1000); //fungsi berjalan setiap detik

sleepBtn.addEventListener('click', () =>{
  sleepFlag = true;
  sleepAlertShown = false;
  if(hunger <= 50){ //kondisi tidur
    sleep += 35;
  }else{
    sleep += 100;
  }
  
  if(sleep > 100){
    sleep = 100;
  }
  sleepBar.style.width = `${sleep}%`;
});

function changetoeat() {
  const eatingImage = "Aset/sad.gif";
  const intervalDuration = 3000; // 5 seconds
  document.getElementById("object2").src = eatingImage;
  setTimeout(() => {
    document.getElementById("object2").src = "Aset/pentol/pentol-idle.gif";
  }, intervalDuration);
}

function changetosleep() {
  const eatingImage = "Aset/sad.gif";
  const intervalDuration = 5000; // 5 seconds
  document.getElementById("object2").src = eatingImage;
  setTimeout(() => {
    document.getElementById("object2").src = "Aset/pentol/pentol-idle.gif";
  }, intervalDuration);
}

function changetoobat() {
  const eatingImage = "Aset/sad.gif";
  const intervalDuration = 5000; // 5 seconds
  document.getElementById("object2").src = eatingImage;
  setTimeout(() => {
    document.getElementById("object2").src = "Aset/pentol/pentol-idle.gif";
  }, intervalDuration);
}


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

function changetosleep(value) {
  let currentImgIdx = document.getElementById("object2");
  if(value == 1)
   currentImgIdx = img.src = "Aset/pentol/pentol-sleeping.gif";
}

