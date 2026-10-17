/**
 * GARUDA Simulation Component
 * Browser-only demonstration of the accident-detection and response window sequence.
 * Strictly self-contained: Never accesses geolocation, SMS, phone calls, or emergency services.
 * Features: Start, Cancel, Reset, circular countdown ring with 5s red color shift,
 * and illustrative event log. Keyboard accessible with aria-live announcements.
 */

class SimulationStateMachine {
  constructor(options = {}) {
    this.totalSeconds = options.totalSeconds || 30;
    this.remainingSeconds = this.totalSeconds;
    this.state = "idle"; // idle | running | cancelled | completed
    this.timer = null;
    this.onTick = options.onTick || (() => {});
    this.onStateChange = options.onStateChange || (() => {});
    this.onLog = options.onLog || (() => {});
  }

  start() {
    if (this.state === "running") return;
    this.state = "running";
    this.remainingSeconds = this.totalSeconds;
    this.onStateChange(this.state, this.remainingSeconds);
    this.onLog("Sensor trigger simulated: tilt threshold >50° & vibration shock detected.", "amber");
    this.onLog("30-second rider response window started. Audible check sounded.", "dim");

    this.timer = setInterval(() => {
      this.remainingSeconds--;
      this.onTick(this.remainingSeconds);

      if (this.remainingSeconds === 5) {
        this.onLog("5 seconds remaining in response window.", "red");
      }

      if (this.remainingSeconds <= 0) {
        this.complete();
      }
    }, 1000);
  }

  cancel() {
    if (this.state !== "running") return;
    this.stopTimer();
    this.state = "cancelled";
    this.onStateChange(this.state, this.remainingSeconds);
    this.onLog("Rider check cancelled by user. Sequence halted. No notification prepared.", "dim");
  }

  reset() {
    this.stopTimer();
    this.state = "idle";
    this.remainingSeconds = this.totalSeconds;
    this.onStateChange(this.state, this.remainingSeconds);
    this.onLog("System reset. Ready to run simulated rider check.", "dim");
  }

  complete() {
    this.stopTimer();
    this.state = "completed";
    this.onStateChange(this.state, 0);
    this.onLog("No rider response received within 30-second window.", "amber");
    this.onLog("SOS workflow would be prepared for preconfigured contacts (Prototype simulation only).", "blue");
    this.onLog("[demo location] Coordinates: 22.1366° N, 82.1288° E (Illustrative sample, not a live alert).", "dim");
  }

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}

// Attach to window for test harness
if (typeof window !== "undefined") {
  window.SimulationStateMachine = SimulationStateMachine;
}

// UI Controller
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".sim-container");
  if (!container) return;

  const btnStart = container.querySelector("#sim-btn-start");
  const btnCancel = container.querySelector("#sim-btn-cancel");
  const btnReset = container.querySelector("#sim-btn-reset");
  const countdownNumber = container.querySelector("#sim-countdown-number");
  const countdownLabel = container.querySelector("#sim-countdown-label");
  const ringProgress = container.querySelector("#sim-ring-progress");
  const statusDot = container.querySelector("#sim-status-dot");
  const statusText = container.querySelector("#sim-status-text");
  const logFeed = container.querySelector("#sim-log-feed");
  const liveRegion = container.querySelector("#sim-live-region");

  if (!btnStart || !btnCancel || !btnReset) return;

  // SVG ring circumference (radius = 70 => 2 * PI * 70 ≈ 439.82)
  const RADIUS = 70;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  if (ringProgress) {
    ringProgress.style.strokeDasharray = `${CIRCUMFERENCE}`;
    ringProgress.style.strokeDashoffset = "0";
  }

  function getTimestamp() {
    const d = new Date();
    return d.toTimeString().split(" ")[0];
  }

  function appendLog(message, colorClass = "dim") {
    if (!logFeed) return;
    const line = document.createElement("div");
    line.className = `sim-log-line ${colorClass}`;
    line.textContent = `[${getTimestamp()}] ${message}`;
    logFeed.appendChild(line);
    logFeed.scrollTop = logFeed.scrollHeight;
  }

  function announce(text) {
    if (liveRegion) {
      liveRegion.textContent = text;
    }
  }

  const sim = new SimulationStateMachine({
    totalSeconds: 30,
    onTick: (seconds) => {
      if (countdownNumber) {
        countdownNumber.textContent = String(seconds).padStart(2, "0");
        if (seconds <= 5) {
          countdownNumber.classList.add("urgent");
        }
      }

      if (ringProgress) {
        const offset = CIRCUMFERENCE - (seconds / 30) * CIRCUMFERENCE;
        ringProgress.style.strokeDashoffset = `${offset}`;
        if (seconds <= 5) {
          ringProgress.classList.add("urgent");
        }
      }

      if (seconds === 15 || seconds === 5) {
        announce(`Simulation: ${seconds} seconds remaining in response window.`);
      }
    },
    onStateChange: (state, seconds) => {
      if (countdownNumber) {
        countdownNumber.textContent = String(seconds).padStart(2, "0");
        if (state !== "running" || seconds > 5) {
          countdownNumber.classList.remove("urgent");
        }
      }

      if (ringProgress) {
        if (state === "idle") {
          ringProgress.style.strokeDashoffset = "0";
          ringProgress.classList.remove("urgent");
        } else if (state === "completed") {
          ringProgress.style.strokeDashoffset = `${CIRCUMFERENCE}`;
        }
      }

      if (statusDot && statusText) {
        statusDot.className = "sim-log-status-dot";
        if (state === "running") {
          statusDot.classList.add("running");
          statusText.textContent = "CHECK RUNNING";
          btnStart.disabled = true;
          btnCancel.disabled = false;
          btnReset.disabled = false;
          announce("Simulated rider check running. 30 seconds to cancel.");
        } else if (state === "cancelled") {
          statusDot.classList.add("idle");
          statusText.textContent = "CHECK CANCELLED";
          btnStart.disabled = false;
          btnCancel.disabled = true;
          btnReset.disabled = false;
          announce("Simulated check cancelled by rider. No alert prepared.");
        } else if (state === "completed") {
          statusDot.classList.add("urgent");
          statusText.textContent = "WINDOW EXPIRED";
          btnStart.disabled = false;
          btnCancel.disabled = true;
          btnReset.disabled = false;
          announce("Simulation window expired. SOS workflow would be prepared.");
        } else {
          // idle
          statusDot.classList.add("idle");
          statusText.textContent = "STANDBY";
          btnStart.disabled = false;
          btnCancel.disabled = true;
          btnReset.disabled = true;
          announce("Simulation in standby. Ready to trigger.");
        }
      }
    },
    onLog: (msg, color) => {
      appendLog(msg, color);
    },
  });

  btnStart.addEventListener("click", () => sim.start());
  btnCancel.addEventListener("click", () => sim.cancel());
  btnReset.addEventListener("click", () => sim.reset());
});
