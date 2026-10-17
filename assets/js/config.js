/**
 * GARUDA Frontend Configuration
 * Contains form submission endpoints, feature flags, contact defaults, and survey URL.
 *
 * NOTE: Formspree / Form endpoints are public submission targets by design.
 * If endpoints are left empty (""), the forms will honestly inform the user
 * that submission is currently not configured, rather than faking success.
 */

const CONFIG = {
  // Production Base Domain (Empty by default; replace before launch)
  SITE_URL: "", // Placeholder note: Set production canonical domain before launch (e.g. https://YOUR-DOMAIN-HERE)

  // External Rider Survey & Early-Access URL (Stored once here; read everywhere)
  SURVEY_URL: "https://garuda-helmet.vercel.app/",

  // Form submission endpoints (Leave empty "" until owner configures Formspree or equivalent)
  ENQUIRY_FORM_ENDPOINT: "",

  // Feature Flags
  EARLY_BIRD_ENABLED: false,

  // Optional Cloudflare Turnstile CAPTCHA Site Key
  TURNSTILE_SITE_KEY: "",

  // Public Contact Information (Owner to confirm public release)
  CONTACT_EMAIL: "angirasindustriesoo7@gmail.com",
  CONTACT_PHONE: "+91 93990 44128",
};

// Expose globally on window for all browser scripts
if (typeof window !== "undefined") {
  window.GARUDA_CONFIG = CONFIG;
}

// Support Node.js / module environments
if (typeof module !== "undefined" && module.exports) {
  module.exports = { CONFIG };
}
