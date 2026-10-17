# GARUDA by Angiras Industries

> Smart rider safety hardware · Engineered in Bilaspur, Chhattisgarh.  
> *Built to bring you home.*

---

## 1. Project Overview

GARUDA is a smart rider-safety hardware prototype developed by **Angiras Industries**, pre-incubated at the **NIT Raipur Incubation Centre** in Bilaspur, Chhattisgarh, India.

This repository hosts the official static website for GARUDA. The website is engineered with a dark-first, engineering-led aesthetic using vanilla web standards (HTML5, CSS3, vanilla ES JavaScript) without any build pipelines, npm packages, or bundlers.

- **Primary Goal**: Rider waitlist sign-ups and survey participation.
- **Secondary Goal**: Qualified business and fleet pilot enquiries.
- **Audience**: Two-wheeler riders, delivery fleets, automotive OEMs, and institutional partners.

---

## 2. Directory & File Structure

```text
GAruda/
├── 404.html                          # Static 404 error page
├── about.html                        # About Angiras Industries, team & milestones
├── contact.html                      # Commercial, pilot & partner enquiry form
├── how-it-works.html                 # Incident sequence & interactive simulation
├── index.html                        # Home page & architecture overview
├── privacy.html                      # Draft Privacy Policy (DPDP Act 2023)
├── terms.html                        # Draft Terms of Service
├── waitlist.html                     # Rider survey redirect & waitlist
├── favicon.svg                       # Abstract geometric SVG favicon
├── robots.txt                        # Search engine crawling rules
├── sitemap.xml                       # XML Sitemap (placeholder domain)
├── CONTENT_CHECKLIST.md              # Placeholders & open approvals tracker
├── PROJECT_CONTEXT.md                # Single source of truth & task memory
├── README.md                         # Documentation & deployment guide
├── assets/
│   ├── css/
│   │   ├── animations.css            # HUD grids, scanlines & reduced-motion rules
│   │   ├── base.css                  # CSS reset, typography, skip link & focus rings
│   │   ├── components.css            # Buttons, cards, badges, status badges, forms, FAQ
│   │   └── tokens.css                # Color, typography & spacing custom properties
│   ├── images/
│   │   ├── garuda-enclosure-render.webp    # Authentic 3D CAD enclosure render
│   │   └── garuda-prototype-testing.webp   # Authentic prototype road test photo
│   └── js/
│       ├── config.js                 # Global configuration & endpoints
│       ├── content.js                # Verified content pack & public milestones
│       ├── forms.js                  # Honeypot, validation & submission handler
│       ├── main.js                   # Header shrink & accessible mobile drawer
│       ├── reveal.js                 # IntersectionObserver scroll animations
│       ├── simulation.js             # 30s rider check state machine demo
│       └── workflow.js               # 3-node pulse animation controller
├── scripts/
│   ├── claims-check.js               # Node.js hard claims ban scanner
│   └── claims-check.sh               # Shell wrapper for claims-check
└── tests/
    └── simulation.test.html          # In-browser test suite for simulation
```

---

## 3. How to Run Locally

Because the site is built with pure standard HTML, CSS, and vanilla JavaScript, it requires **no compilation, no npm install, and no build steps**.

### Option A: Local Static Server (Recommended)
Running through any local HTTP server provides standard HTTP headers and routing:
```bash
# Python 3
python -m http.server 8085

# Node npx (serve)
npx serve .

# PHP
php -S localhost:8085
```
Open `http://localhost:8085` in your browser.

### Option B: Double-Click (file://)
You can double-click `index.html` directly in your file explorer. All stylesheets, scripts, and media use relative links and will load properly in all modern browsers.

---

## 4. Content & Configuration Management

### Where to Edit Content
All verified company facts, team rosters, and milestone entries are defined in:
`assets/js/content.js`

- **Milestones**: Each item has an `approvedForPublic` boolean flag. Only items where `approvedForPublic: true` are rendered on the live site. Hidden items remain unrendered until officially approved.
- **Specifications & Status Badges**: All hardware specifications carry explicit status badges (`Verified`, `Prototype`, `Design target`, or `To be confirmed`).

### Where to Set Configuration
Global settings and integration endpoints are configured in:
`assets/js/config.js`

Key configuration variables:
- `SURVEY_URL`: External rider survey URL (default: `https://garuda-helmet.vercel.app/`).
- `ENQUIRY_FORM_ENDPOINT`: Endpoint URL for the commercial enquiry form (Formspree or equivalent).
- `WAITLIST_FORM_ENDPOINT`: Endpoint for on-site waitlist submissions if enabled.
- `SITE_URL`: Production canonical domain (empty by default; replace before launch).
- `CONTACT_EMAIL`: Official contact email address.
- `CONTACT_PHONE`: Official telephone contact number.
- `ENABLE_EARLY_BIRD`: Feature flag (default: `false`).

---

## 5. Formspree Setup for Commercial Enquiry Form

The enquiry form on `contact.html` is built to submit asynchronously via `fetch` to Formspree or any compatible endpoint.

> **Note on Endpoint Privacy**: Formspree endpoints are **public by design**. They are intended to be embedded in client-side HTML/JavaScript. Spam protection is managed through hidden honeypot fields (`_gotcha`), email verification, and Formspree's automated reCAPTCHA/rate-limiting systems.

### Steps to Connect Formspree:
1. Log in to [Formspree.io](https://formspree.io) and click **"New Form"**.
2. Name the form (e.g., `GARUDA Business Enquiries`) and set your notification email.
3. Copy your unique form endpoint URL (e.g., `https://formspree.io/f/mqkvyxyz`).
4. Open `assets/js/config.js` and set:
   ```javascript
   ENQUIRY_FORM_ENDPOINT: "https://formspree.io/f/mqkvyxyz",
   ```
5. Save the file and reload `contact.html`.
6. Fill out and submit a test commercial enquiry.
7. Verify the success state in the browser and confirm that the notification email arrives in your inbox.
8. If `ENQUIRY_FORM_ENDPOINT` is left empty `""`, the form displays an honest message: *"Form submission is currently not configured."* It will never fake a successful submission.

---

## 6. Hard Claims Ban Scanner (`claims-check`)

To guarantee compliance with ethical hardware marketing guidelines and the project rules in `PROJECT_CONTEXT.md`, an automated zero-dependency scanner is included.

### What it Scans:
- Scans all `.html`, `.css`, and `.js` source files (excluding `.md` and the script itself).
- **Uppercase Acronyms** (strict whole-word uppercase match): `BIS`, `ISI`, `DOT`, `ECE`, `AI`, `ML`.
- **Banned Phrases** (case-insensitive match): `crash-tested`, `proven`, `validated` (except allowed "pending validation"), `saves lives`, `guaranteed`, `available now`, `military-grade`, `IP67`, `end-to-end`, `calls 112`, `alerts ambulance`, `units sold`, `Pvt Ltd`, `DPIIT`, `patent granted`, `Buy now`, `Pre-order`, `machine learning`, `Startup India`, etc.
- **Unverified Incubators**: Flags any mention of `I-Hub`.
- **Price Patterns**: Flags any digit-with-rupee or price mentions (`₹`, `Rs.`, `INR`).

### Running the Scanner:
```bash
# Using Node directly
node scripts/claims-check.js

# Using the shell wrapper
./scripts/claims-check.sh
```
Exit code `0` indicates a clean pass. Exit code `1` prints the exact file, line number, and offending term.

---

## 7. Testing Procedures

1. **Interactive Simulation Harness**:
   - Open `tests/simulation.test.html` in your browser.
   - Confirms that the 30-second cancellation timer, state machine transitions, cancel action, and reset actions operate correctly with zero network or geolocation API calls.
2. **Form Validation & Fallback States**:
   - Test `contact.html` with empty fields to verify HTML5 + client validation.
   - Verify honeypot field (`_gotcha`) is hidden and ignored by regular users.
   - When `ENQUIRY_FORM_ENDPOINT` is empty, confirm that the honest fallback banner appears.
3. **Accessibility & Keyboard Walkthrough**:
   - Tab through all pages using only the keyboard (`Tab`, `Shift+Tab`, `Enter`, `Space`).
   - Confirm that the `.skip-link` appears on first Tab and jumps focus directly to `<main id="main-content">`.
   - Verify that all interactive elements show a high-contrast orange focus ring (`outline: 2px solid var(--color-orange)`).
   - Test mobile navigation drawer: `Esc` key closes the drawer and restores focus to the toggle button.
4. **Reduced Motion**:
   - Enable `prefers-reduced-motion: reduce` in your operating system or browser developer tools.
   - Confirm all CSS transitions and animations halt, scroll reveals display in their final visible state immediately, and the 3-node workflow shows a complete static diagram.
5. **Responsive Breakpoints**:
   - Verify layout, cards, and navigation at **375px** (mobile view) and **1280px** (desktop view).

---

## 8. Deployment Instructions

This website can be hosted on any static web server or CDN.

### GitHub Pages
1. Push this repository to GitHub.
2. Navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
4. Select `main` (or `master`) branch and folder `/ (root)`.
5. Click **Save**. The site will be live at `https://<username>.github.io/<repo>/`.

### Netlify
1. Log in to [Netlify](https://www.netlify.com).
2. Choose **Add new site** > **Deploy manually** (drag and drop the `GAruda` folder).
3. Alternatively, import the Git repository:
   - Build command: *(leave blank)*
   - Publish directory: `.` (or root)
4. Click **Deploy site**.

### Vercel Static
1. Install Vercel CLI or import the repository in the Vercel dashboard.
2. Framework preset: **Other**.
3. Build & Output Settings: leave default (root directory).
4. Click **Deploy**.

---

## 9. Pre-Launch Checklist

Before pointing production DNS to the site:
- [ ] Replace `https://YOUR-DOMAIN-HERE` in `sitemap.xml`, `robots.txt`, and canonical tags with the production domain.
- [ ] Set `SITE_URL` in `assets/js/config.js`.
- [ ] Replace `assets/images/garuda-prototype-testing.webp` in Open Graph meta tags with a dedicated 1200×630px social preview image if desired.
- [ ] Verify owner approval on public display of email and phone numbers in `config.js`.
- [ ] Configure `ENQUIRY_FORM_ENDPOINT` in `config.js` with your active Formspree endpoint.
- [ ] Complete formal legal review of `privacy.html` and `terms.html`.
- [ ] Run `node scripts/claims-check.js` to confirm zero banned claims.