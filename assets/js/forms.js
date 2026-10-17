/**
 * GARUDA Form Validation & Submission Handler
 * ONLY the business and pilot enquiry form.
 * Rider sign-ups are handled via the external rider survey.
 */

document.addEventListener("DOMContentLoaded", () => {
  const config = window.GARUDA_CONFIG || {
    ENQUIRY_FORM_ENDPOINT: "",
  };

  // Business / Pilot Enquiry Form ONLY
  const enquiryForm = document.getElementById("enquiry-form");
  if (enquiryForm) {
    setupEnquiryForm(enquiryForm, config.ENQUIRY_FORM_ENDPOINT);
  }

  function showError(inputEl, message) {
    if (!inputEl) return;
    const group = inputEl.closest(".form-group") || inputEl.parentElement;
    const errorEl = group ? group.querySelector(".form-error") : null;
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.add("visible");
    }
    inputEl.focus();
  }

  function setupEnquiryForm(form, endpoint) {
    const statusBanner = form.querySelector(".form-status-banner");
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.textContent : "Submit";

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (statusBanner) {
        statusBanner.className = "form-status-banner";
        statusBanner.textContent = "";
      }

      // Reset error messages
      form.querySelectorAll(".form-error").forEach((el) => el.classList.remove("visible"));

      const nameInput = form.querySelector("#enquiry-name");
      const emailInput = form.querySelector("#enquiry-email");
      const orgInput = form.querySelector("#enquiry-org");
      const msgInput = form.querySelector("#enquiry-message");
      const consentCheckbox = form.querySelector("#enquiry-consent");
      const hpInput = form.querySelector('input[name="_gotcha"]');

      // Honeypot check - silently halt spam without feedback
      if (hpInput && hpInput.value.trim() !== "") {
        return;
      }

      let isValid = true;

      // Validation
      if (!nameInput || nameInput.value.trim() === "") {
        showError(nameInput, "Please provide your full name.");
        isValid = false;
      }

      const emailVal = emailInput ? emailInput.value.trim() : "";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailVal || !emailRegex.test(emailVal)) {
        showError(emailInput, "Please enter a valid work email address.");
        isValid = false;
      }

      if (!orgInput || orgInput.value.trim() === "") {
        showError(orgInput, "Please enter your organisation or company name.");
        isValid = false;
      }

      if (!msgInput || msgInput.value.trim() === "") {
        showError(msgInput, "Please enter your message or pilot requirements.");
        isValid = false;
      }

      if (!consentCheckbox || !consentCheckbox.checked) {
        showError(consentCheckbox, "You must consent to commercial communication.");
        isValid = false;
      }

      if (!isValid) return;

      // Honest unconfigured check: never fake success
      if (!endpoint || endpoint.trim() === "") {
        if (statusBanner) {
          statusBanner.className = "form-status-banner error";
          statusBanner.textContent = "This form is not configured yet. Please reach out directly via contact email.";
        }
        return;
      }

      // Form submission via fetch if endpoint configured
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      try {
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = "Submitting...";
        }

        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          form.reset();
          if (statusBanner) {
            statusBanner.className = "form-status-banner success";
            statusBanner.textContent =
              "Thank you. Your details have been recorded. We will be in touch with verified updates.";
          }
        } else {
          throw new Error(`Server responded with status ${response.status}`);
        }
      } catch (err) {
        if (statusBanner) {
          statusBanner.className = "form-status-banner error";
          statusBanner.textContent =
            "Submission could not be completed. Please try again later or reach out directly.";
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalBtnText;
        }
      }
    });
  }
});
