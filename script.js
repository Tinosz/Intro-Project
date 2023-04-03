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


var pentolIdle = document.getElementById("object2");
pentolIdle.src = "Aset/pentol/pentol-idle.gif";

function setVolume() {
  var myAudio = document.getElementById("myAudio");  
  myAudio.volume = 0.2;
}

let dangerZone = false;

if(!dangerZone){
  var chatList = [
    "<br>I like fish",
    "<br>How are you?",
    "<br>Itchy...",
    "<br>Is that you I saw?",
    "<br>Never have I<br>ever...",
    "<br>What's that sound?",
    "<br>Constant Jazz~",
  ];
  
  function switchChat(){
    var randomChat = Math.floor(Math.random() * chatList.length);
    var randomMsg = chatList[randomChat];
    document.getElementById("pentolChat").innerHTML = chatList[randomChat];
  }
  
  setInterval(switchChat, 10000);
}

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
    dangerZone = true;
    pentolChat.innerHTML = "Not feeling <br> well...";
    healthBar.style.backgroundColor = 'red';
  }else{
    hungerBar.style.backgroundColor = 'green';
  }

  if(health<=0){
    pentolChat.innerHTML = "Bye bye :'(";
    clearInterval(healthInterval);
    gameOver = true;
    const gameOverOverlay = document.createElement('div');
    gameOverOverlay.style.position = 'absolute';
    gameOverOverlay.style.top = 0;
    gameOverOverlay.style.left = 0;
    gameOverOverlay.style.width = '100%';
    gameOverOverlay.style.height = '100%';
    gameOverOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    gameOverOverlay.style.display = 'flex';
    gameOverOverlay.style.alignItems = 'center';
    gameOverOverlay.style.justifyContent = 'center';
    const gameOverText = document.createElement('p');
    gameOverText.style.fontFamily = 'pixelFont';
    gameOverText.style.color = 'white';
    gameOverText.style.fontSize = '3em';
    gameOverText.style.textAlign = 'center';
    gameOverOverlay.style.zIndex = '9999';
    gameOverText.textContent = 'Game Over!';
    gameOverOverlay.appendChild(gameOverText);
    document.body.appendChild(gameOverOverlay);
    document.body.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }
}, 500); //fungsi berjalan setiap detik

heal.addEventListener('click', () =>{
  if(healCounter > nullHP){
    healthFlag = true;
    healthAlertShown = false;
    health += 10;
    if(healthDecrement || health < 100){
      healCounter--;
      healCounterElem.textContent = healCounter;
    }
    if(health > 100){
      health = 100;
    }
    healthBar.style.width = `${health}%`;
  }
});

//fun bar
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
    dangerZone = true;
    funBar.style.backgroundColor = 'red';
    pentolChat.innerHTML = "I'm bored...";
  } else{
    funBar.style.backgroundColor = 'green';
  }

  if(fun<=0 && !playAlertShown){
    funFlag = false;
    playAlertShown = true;
  }
}, 500); //fungsi berjalan setiap detik

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
    dangerZone = true;
    hungerBar.style.backgroundColor = 'red';
    pentolChat.innerHTML = "I'm feeling <br> hungry...";
  } else{
    hungerBar.style.backgroundColor = 'green';
  }

  if(hunger<=0 && !hungerAlertShown){
    hungerFlag = false;
    hungerAlertShown = true;
    healthDecrement = true;
  }
}, 500); //fungsi berjalan setiap detik

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
    sleep -= 100/180;
    sleepBar.style.width = `${sleep}%`;
  }

  if(sleep <= 20){
    dangerZone = true;
    sleepBar.style.backgroundColor = 'red';
    pentolChat.innerHTML = "Feeling tired...";
  } else{
    sleepBar.style.backgroundColor = 'green';
  }

  if(sleep<=0 && !sleepAlertShown){
    sleepFlag = false;
    sleepAlertShown = true;
  }
}, 500); //fungsi berjalan setiap detik

sleepBtn.addEventListener('click', () =>{
  sleepFlag = true;
  sleepAlertShown = false;
  if(hunger <= 50){ //kondisi tidur
    sleep += 35;
    currTime += 3 * 60 * 10;
  }else{
    sleep += 100;
    currTime += 8 * 60 * 10;
  }
  
  if(sleep > 100){
    sleep = 100;
  }
  sleepBar.style.width = `${sleep}%`;
});

function changetoeat() {
  const eatingImage = "Aset/pentol/eating.gif";
  const idleImage = "Aset/pentol/pentol-idle.gif";
  const intervalDuration = 3000;
  const object2 = document.getElementById("object2");
  document.getElementById("object2").src = eatingImage;
  setTimeout(() => {
    object2.src = `${idleImage}`;
  }, intervalDuration);
}

function changeImageToSleeping() {
  const sleepingImage = "Aset/pentol/sleeping.gif";
  const idleImage = "Aset/pentol/pentol-idle.gif";
  const intervalDuration = 5000;
  const object2 = document.getElementById("object2");
  object2.src = `${sleepingImage}`;
  setTimeout(() => {
    object2.src = `${idleImage}`;
  }, intervalDuration);
}


function changetoobat() {
  const healingImage = "Aset/pentol/sad.gif";
  const idleImage = "Aset/pentol/pentol-idle.gif";
  const intervalDuration = 3000;
  const object2 = document.getElementById("object2");
  object2.src = `${healingImage}`;
  document.getElementById("object2").src = healingImage;
  setTimeout(() => {
    object2.src = `${idleImage}`;
  }, intervalDuration);
}

function changetoplay() {
  const playingImage = "Aset/pentol/playing.gif";
  const idleImage = "Aset/pentol/pentol-idle.gif";
  const intervalDuration = 4000;
  const object2 = document.getElementById("object2");
  object2.src = `${playingImage}`;
  document.getElementById("object2").src = playingImage;
  setTimeout(() => {
    object2.src = `${idleImage}`;
  }, intervalDuration);
}


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

// parent window JavaScript code
function openPopup() {
  const popupWidth = 400;
  const popupHeight = 475;
  const popupLeft = (screen.width - popupWidth) / 2;
  const popupTop = (screen.height - popupHeight) / 2;

  const popup = window.open("uler.html", "game-uler", `width=${popupWidth},height=${popupHeight},left=${popupLeft},top=${popupTop}`);

  // Add an event listener to the window object that listens for the beforeunload event
  window.addEventListener('beforeunload', function(event) {
    // Check if the popup window is still open
    if (popup && !popup.closed) {
      // If the content is finished or cannot be clicked anymore, close the popup window
      if (popup.contentFinished || !popup.document.hasFocus()) {
        popup.close();
      } else {
        // Prevent the default behavior of the beforeunload event
        event.preventDefault();
      }
    }
  });
}
