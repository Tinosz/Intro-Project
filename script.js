const progressBars = document.querySelectorAll('.progress');

progressBars.forEach(progressBar => {
  let progressValue = 100;

  const interval = setInterval(() => {
    progressValue--;
    progressBar.style.width = `${progressValue}%`;

    if (progressValue <= 20) {
      progressBar.style.backgroundColor = 'red';
    }

    if (progressValue === 0) {
      clearInterval(interval);
    }
  }, 3500);
});

