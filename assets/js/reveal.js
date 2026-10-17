/**
 * GARUDA Scroll Reveal & Motion Handling
 * Uses IntersectionObserver for performant, layout-shift-free scroll reveals.
 * Respects prefers-reduced-motion and tab visibility.
 */

document.addEventListener("DOMContentLoaded", () => {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 1. Reveal Elements
  const revealElements = document.querySelectorAll(".reveal");

  if (prefersReduced) {
    // Immediately show all elements without animation if user prefers reduced motion
    revealElements.forEach((el) => {
      el.classList.add("revealed");
    });
  } else if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target); // Trigger once
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.1,
      }
    );

    revealElements.forEach((el) => {
      observer.observe(el);
    });
  } else {
    // Fallback for older browsers
    revealElements.forEach((el) => el.classList.add("revealed"));
  }

  // 2. Pause ambient loops when tab is hidden
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      document.body.classList.add("tab-hidden");
    } else {
      document.body.classList.remove("tab-hidden");
    }
  });
});
