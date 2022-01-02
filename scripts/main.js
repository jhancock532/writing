class DarkModeToggleButton {
  constructor(node) {
    this.button = node;
    this.lightmode = true;

    this.setUpDarkMode();
  }

  setUpDarkMode() {
    const darkmodePreference = window.localStorage.getItem("darkmode");
    if (darkmodePreference === "Dark") {
      this.toggleDarkMode();
    }

    this.button.addEventListener("click", () => {
      this.toggleDarkMode();
    });
  }

  toggleDarkMode() {
    const root = document.documentElement;

    if (this.lightMode) {
      root.style.setProperty("--background", "#000");
      root.style.setProperty("--text", "#fff");
      this.button.innerHTML = "Light mode please...";
      window.localStorage.setItem("darkmode", "Dark");
    } else {
      root.style.setProperty("--background", "#fff");
      root.style.setProperty("--text", "#000");
      this.button.innerHTML = "Dark mode please...";
      window.localStorage.setItem("darkmode", "Light");
    }
    this.lightMode = !this.lightMode;
  }
}

class Timer {
  constructor(node) {
    this.timer = node;
    this.timeDisplay = node.querySelector("#timer__time");
    this.timeToggle = node.querySelector("#timer__toggle");
    this.timeIsDisplayed = true;
    this.startTime = new Date();

    this.setupTimer();
  }

  setupTimer() {
    this.timeToggle.addEventListener("click", () => {
      this.toggleTimerDisplay();
    });

    setInterval(() => {
      const now = new Date();
      const timeSpent = new Date(now - this.startTime);

      function addZero(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }

      //let h = addZero(timeSpent.getHours());
      let m = addZero(timeSpent.getMinutes());
      let s = addZero(timeSpent.getSeconds());
      let timeString = m + ":" + s;
      this.timeDisplay.innerHTML = timeString;
    }, 1000);
  }

  toggleTimerDisplay() {
    if (this.timeIsDisplayed) {
      this.timeDisplay.style.display = "none";
      this.timeToggle.innerHTML = "<p>Show Timer</p>";
    } else {
      this.timeDisplay.style.display = "block";
      this.timeToggle.innerHTML = "<p>Hide Timer</p>";
    }
    this.timeIsDisplayed = !this.timeIsDisplayed;
  }
}

const darkmodeButton = document.getElementById("darkmodeToggle");
const timerElement = document.getElementById("timer");
const timer = new Timer(timerElement);
const dmtb = new DarkModeToggleButton(darkmodeButton);
