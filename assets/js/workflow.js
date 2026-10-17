/**
 * GARUDA Detect-Check-SOS Animated Workflow Component
 * Coordinates the 3-node animated flow. A pulse travels along the connector line,
 * highlighting each node in sequence, looping calmly.
 * Pausable on hover, focus, and tab hidden.
 * Displays static state under prefers-reduced-motion.
 */

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".workflow-flow");
  if (!container) return;

  const nodes = container.querySelectorAll(".workflow-node");
  const pulse = container.querySelector(".workflow-pulse");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) {
    // Under reduced motion, all nodes stay in their ready static state and pulse is disabled
    nodes.forEach((node) => node.classList.add("static-active"));
    if (pulse) pulse.style.display = "none";
    return;
  }

  let currentIndex = 0;
  let isPaused = false;
  let timer = null;
  const STEP_DURATION = 1800; // ms per node

  function activateNode(index) {
    nodes.forEach((node, i) => {
      if (i === index) {
        node.classList.add("active");
        node.setAttribute("aria-current", "step");
      } else {
        node.classList.remove("active");
        node.removeAttribute("aria-current");
      }
    });

    if (pulse) {
      // 0%, 50%, 100% position along the track
      const percentage = (index / (nodes.length - 1)) * 100;
      pulse.style.left = `${percentage}%`;
    }
  }

  function advance() {
    if (isPaused) return;
    currentIndex = (currentIndex + 1) % nodes.length;
    activateNode(currentIndex);
  }

  function startLoop() {
    stopLoop();
    activateNode(currentIndex);
    timer = setInterval(advance, STEP_DURATION);
  }

  function stopLoop() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  // Hover pause
  container.addEventListener("mouseenter", () => {
    isPaused = true;
    container.classList.add("paused");
  });

  container.addEventListener("mouseleave", () => {
    isPaused = false;
    container.classList.remove("paused");
  });

  // Focus pause for keyboard accessibility
  container.addEventListener("focusin", () => {
    isPaused = true;
    container.classList.add("paused");
  });

  container.addEventListener("focusout", () => {
    isPaused = false;
    container.classList.remove("paused");
  });

  // Pause when tab hidden
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      isPaused = true;
      stopLoop();
    } else {
      isPaused = false;
      startLoop();
    }
  });

  startLoop();
});
