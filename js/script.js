 // Declarations
  const timerDisplay = document.getElementById('timer');
  const startStopButton = document.getElementById('startStop');
  const resetButton = document.getElementById('reset');

  // Timer variables
  let timerInterval; 
  let finishedTime = localStorage.getItem('finishedTime') ? parseInt(localStorage.getItem('finishedTime')) : 0;
  let timerState = localStorage.getItem('timerState') === 'true';

 // Function to format time
  function formatTime(seconds) {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  }

 // Update the timer display
  function updateDisplay() {
    timerDisplay.textContent = formatTime(finishedTime);
  }


     // Start the timer
      function startTimer() {
          timerInterval = setInterval(() => {
            finishedTime++;
            localStorage.setItem('finishedTime', finishedTime);
            updateDisplay();
          }, 1000);
          timerState = true;
          localStorage.setItem('timerState', timerState);
    }

    // Stop the timer
    function stopTimer() {
      clearInterval(timerInterval);
      timerState = false;
      localStorage.setItem('timerState', timerState);
    }

    // Reset the timer
    function resetTimer() {
      stopTimer();
      finishedTime = 0;
      localStorage.setItem('finishedTime', finishedTime);
      updateDisplay();
    }


      // Event listeners (Actions)
      startStopButton.addEventListener('click', () => {
        if (timerState) {
          stopTimer();
          startStopButton.textContent = 'Start';
        } else {
          startTimer();
          startStopButton.textContent = 'Stop';
        }
      });
  
      resetButton.addEventListener('click', () => {
        resetTimer();
        startStopButton.textContent = 'Start';
      });
  
      // Initialize timer display and state on loading the page
      updateDisplay();
      if (timerState) {
        startTimer();
        startStopButton.textContent = 'Stop';
      }





