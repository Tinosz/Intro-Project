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
let interval2 = setInterval(() => {
  let progressValue = parseFloat(progressBar2.style.width) || 100.0;
  progressValue -= 0.1;
  progressBar2.style.width = `${progressValue}%`;

  if (progressValue <= 20.0) {
    progressBar2.style.backgroundColor = 'red';
  }

  if (progressValue <= 0) {
    clearInterval(interval2);
    alert("I'm feeling hungry :(");
  }
}, 7);

//fatigue bar
let interval3 = setInterval(() => {
  let progressValue = parseFloat(progressBar3.style.width) || 100.0;
  progressValue -= 0.1;
  progressBar3.style.width = `${progressValue}%`;

  if (progressValue <= 20.0) {
    progressBar3.style.backgroundColor = 'red';
  }

  if (progressValue <= 0) {
    clearInterval(interval3);
  }
}, 2000);

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


const clock = document.getElementById("time");
	var getTime = new Date();
	var hour = getTime.getHours();
	var minute = getTime.getMinutes();
	var stopTime = true;

	function startTime() {
		minute = parseInt(minute);
		hour = parseInt(hour);
		minute = minute + 1;

		if (minute == 60) {
			hour = hour + 1;
			minute = 0;
		}

		if (minute < 10 || minute == 0) {
			minute = '0' + minute;
		}

		if (hour < 10 || hour == 0) {
			hour = '0' + hour;
		}

		if (hour > 23) {
			hour = '00';
		}

		clock.innerHTML = "<h3>" + hour + ":" + minute + "</h3>";
		setTimeout("startTime()", 1000);
	}
