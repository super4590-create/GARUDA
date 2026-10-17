/**
 * GARUDA Main JavaScript
 * Handles sticky header shrink on scroll and accessible mobile navigation.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Sticky Header Shrink on Scroll
  const header = document.querySelector(".site-header");
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  }

  // 2. Accessible Mobile Menu
  const toggleBtn = document.querySelector(".mobile-menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (toggleBtn && mobileMenu) {
    const openMenu = () => {
      toggleBtn.setAttribute("aria-expanded", "true");
      mobileMenu.classList.add("open");
      document.body.style.overflow = "hidden";
      // Focus first link in mobile menu
      const firstLink = mobileMenu.querySelector("a");
      if (firstLink) firstLink.focus();
    };

    const closeMenu = () => {
      toggleBtn.setAttribute("aria-expanded", "false");
      mobileMenu.classList.remove("open");
      document.body.style.overflow = "";
      toggleBtn.focus();
    };

    toggleBtn.addEventListener("click", () => {
      const isOpen = toggleBtn.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && toggleBtn.getAttribute("aria-expanded") === "true") {
        closeMenu();
      }
    });

    // Close menu when clicking navigation links
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });

    // Close menu on resize to desktop width
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 860 && toggleBtn.getAttribute("aria-expanded") === "true") {
        closeMenu();
      }
    });
  }

  // 3. Dynamic Survey Links from config.js
  const config = window.GARUDA_CONFIG;
  if (config && config.SURVEY_URL) {
    document.querySelectorAll("a[data-survey-link]").forEach((link) => {
      link.href = config.SURVEY_URL;
    });
    document.querySelectorAll("[data-survey-url]").forEach((el) => {
      el.textContent = config.SURVEY_URL;
    });
  }

  // 4. Contact Details from config.js
  if (config) {
    if (config.CONTACT_EMAIL) {
      document.querySelectorAll("#contact-email-link").forEach((el) => {
        el.href = `mailto:${config.CONTACT_EMAIL}`;
        el.textContent = config.CONTACT_EMAIL;
      });
    }
    if (config.CONTACT_PHONE) {
      document.querySelectorAll("#contact-phone-link").forEach((el) => {
        el.href = `tel:${config.CONTACT_PHONE.replace(/\s+/g, "")}`;
        el.textContent = config.CONTACT_PHONE;
      });
    }
  }
});
