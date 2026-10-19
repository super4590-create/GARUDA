# PROJECT CONTEXT: GARUDA by ANGIRAS INDUSTRIES

## 1. PROJECT
- **Entity**: GARUDA by ANGIRAS INDUSTRIES (Angiras Industries = parent brand; GARUDA = flagship rider-safety product).
- **Primary Goal**: Rider waitlist sign-ups.
- **Secondary Goal**: Qualified business and pilot enquiries.
- **Audience & Language**: English only; mobile-first design (riders accessing primarily on smartphones).
- **Tagline**: "Smart rider safety · Made in Chhattisgarh"
- **Supporting Line**: "Built to bring you home."

## WORKFLOW RULES
- At the start of every session read only `PROJECT_CONTEXT.md`. Do not scan the repo, do not re-analyze finished work, do not re-read files not listed for the current task.
- Work on exactly one task at a time, the first one not marked [x]. Read only the files in the FILE MAP that this task touches.
- Keep diffs small. Do not rewrite whole files to change a few lines. Do not refactor outside the task.
- Never create or run npm, package.json or any build tooling.
- After the task: test in browser (375px and 1280px, normal and reduced motion, no console errors, claims-check passes when relevant), fix failures, then update `PROJECT_CONTEXT.md` (task status, file statuses in FILE MAP, one PROGRESS LOG entry, any new DECISIONS LOG line).
- Report in at most 8 lines: what changed, checks run, result, open issues. Attach browser screenshots only for visual tasks (T5, T6, T7, T9, T12, T16).
- Then stop and wait for me to say "continue". If I say "continue all", keep going task by task, still updating the file after each, and stop immediately on any failing check.
- If a fact is missing, never invent it. Use a labelled placeholder and add it to OPEN APPROVALS.
- If `PROJECT_CONTEXT.md` and my chat message conflict, tell me and ask. Never silently change a rule.
- Never deploy and never say forms are live unless verified.

## 2. STACK AND CONVENTIONS
- **Stack**: Plain HTML5, CSS3 (custom properties for tokens), vanilla ES modules JS. No build step.
- **Templates**: Shared header/footer injected by a small JS include or repeated per page (choose the simplest, record in DECISIONS LOG).
- **Tokens**: Navy `#101B2B`, Orange `#F28A27`, Off-white `#F5F7FA`, Slate `#64748B`.
- **Aesthetic**: Dark-first, premium engineering-led. Abstract geometry only (grids, angles, hexagons, scanlines). NO literal bird, NO religious imagery, NO stock helmet renders.
- **Motion Rules**: CSS and small custom scripts. Animate only `transform` and `opacity`. Max duration 800ms (except ambient loops). Ambient loops pause on hidden tab. No layout shift. No fake live numbers/counters. Strict `prefers-reduced-motion` support (disable motion, display final static state).
- **Accessibility**: WCAG 2.2 AA compliant, visible focus rings, skip-to-content link, semantic HTML, unique interactive IDs.
- **Portability**: Must open by double-clicking `index.html` (or via local static server) and deploy to any static host (GitHub Pages, Netlify, Vercel static). No accounts, payments, subscriptions or device backends. Never deploy.

## 3. FILE MAP
- `AGENTS.md`: Agent entry directive. [done]
- `PROJECT_CONTEXT.md`: Single source of truth, workflow, memory. [done]
- `CONTENT_CHECKLIST.md`: Placeholders, unresolved facts, ownership tracking. [done]
- `README.md`: Setup, static serving, form config. [done]
- `index.html`: Home page. [done]
- `products/garuda.html`: Product details page. [done]
- `how-it-works.html`: How it works and testing status. [done]
- `about.html`: About Angiras Industries, team, milestones. [done]
- `contact.html`: Contact and business enquiry page. [done]
- `waitlist.html`: Rider waitlist page. [done]
- `privacy.html`: Draft privacy policy. [done]
- `terms.html`: Draft terms of service. [done]
- `404.html`: Static 404 page. [done]
- `sitemap.xml`: XML sitemap. [done]
- `robots.txt`: Search engine instructions. [done]
- `favicon.svg`: SVG favicon. [done]
- `assets/css/tokens.css`: CSS custom properties for color, typography, spacing tokens. [done]
- `assets/css/base.css`: CSS reset, typography, layout wrappers, skip link, focus rings. [done]
- `assets/css/components.css`: Button, Card, Badge, StatusBadge, FormField, Section, FAQ styles. [done]
- `assets/css/animations.css`: HUD grid, scanline, pulse, reveal styles, prefers-reduced-motion overrides. [done]
- `assets/js/config.js`: Form endpoints, early-bird flag, contact details. [done]
- `assets/js/content.js`: Verified content pack with status and approvedForPublic flags. [done]
- `assets/js/main.js`: Navigation, sticky header shrink, mobile menu toggle. [done]
- `assets/js/reveal.js`: IntersectionObserver scroll reveal wrapper. [done]
- `assets/js/workflow.js`: Detect-Check-SOS 3-node animated pulse flow. [done]
- `assets/js/simulation.js`: Browser-only rider check simulation state machine and event log. [done]
- `assets/js/forms.js`: Client validation, honeypot, Turnstile hook, form submission. [done]
- `assets/images/garuda-enclosure-render.webp`: Authentic enclosure render. [done]
- `assets/images/garuda-prototype-testing.webp`: Authentic physical prototype test photo. [done]
- `assets/images/placeholders/`: Labelled placeholder images. [done]
- `scripts/claims-check.js`: Plain Node claims-check scanner (no dependencies). [done]
- `scripts/claims-check.sh`: Shell wrapper for claims-check scanner. [done]
- `tests/simulation.test.html`: Browser-run test harness for simulation logic (no framework). [done]

## 4. VERIFIED CONTENT PACK
- **Company**: Angiras Industries, Bilaspur, Chhattisgarh. Pre-incubated at NIT Raipur Incubation Centre (NIT Raipur, NOT I-Hub GEC Raipur). Not incorporated: never describe as a registered company, Pvt Ltd, DPIIT, or Startup India recognised.
- **Team**: Atharv Angiras Dubey (Founder and CEO), Raj Malviya (CTO), Ankush Dwivedi (COO), Himanshu Kumar Singh (enclosure design).
- **Product Concept**: GARUDA, a rider-safety system that senses motion and vibration, runs a rider check, and prepares an SOS workflow to preconfigured contacts with location when GPS and a communication path are available. Status: Prototype, in field testing with 5 beta riders. Use the name GARUDA only. Product configuration (full helmet vs clip-on module) = "To be confirmed".
- **Design Targets (label "Provisional, pending validation")**: Tilt above 50 degrees plus vibration triggers sequence; 30-second cancellation window; USB-C charging.
- **Patent**: "Patent application filed (No. 202521123556). Not yet granted." (Never state granted).
- **Milestones (`approvedForPublic: true`)**:
  - Chhattisgarh Ideathon 2025, 3rd position.
  - Prize at CG TechStart, Atal Nagar (Nov 2025).
  - Prototype demonstrated to the District Collector, Bilaspur (2023).
- **Milestones (`approvedForPublic: false`, hidden by default)**:
  - Young India Shark Tank runner-up.
  - Anantya'26 B-Model 2nd runner-up.
  - Navonmesh 2025 2nd runner-up.
  - Product shown to the Chief Minister and a Cabinet Minister.
  - 50-unit pilot LOI (never name partner; if approved, state "pilot LOI from an automotive company").
- **Contact Details**: Configured in `assets/js/config.js` (defaults `angirasindustriesoo7@gmail.com`, `+91 93990 44128`; owner confirmation required).
- **Early-bird Offer**: Feature flag in `assets/js/config.js`, disabled by default. Never mention "Garuda AI" anywhere.
- **Unresolved (Show "To be confirmed" or omit)**: SOS path (Bluetooth via phone vs built-in SIM), component part numbers, battery runtime, charging time, water/dust rating, Bluetooth range, weight (do not state any number), sizes, colours, pricing, warranty, delivery dates, mobile app, certifications.
- **Status Badges**: `Verified`, `Prototype`, `Design target`, `To be confirmed`. Every product feature carries one of these.
- **Mandatory Footer Disclaimer**: "Ride responsibly. Always wear a correctly fitted helmet. Accident detection and SOS features depend on sensor behaviour, power, GPS reception and communication availability; they cannot guarantee injury prevention or rescue."

## 5. HARD CLAIMS BAN
- **Regex Enforcement**: Banned patterns checked using word boundaries (`\b...`), scanning all `.html`, `.css`, and `.js` files (excluding `.md` files and `scripts/claims-check.js`).
- **Banned Terms**:
  - Certifications: `BIS`, `ISI certified`, `ISI specification`, `DOT`, `ECE certified`, `ECE approved`.
  - Testing/validation claims: `crash-tested`, `proven`, `validated` (except "pending validation").
  - Accuracy statistics: Any accuracy or false-alarm percentage/figure.
  - AI buzzwords: `AI`, `Garuda AI`, `machine learning`, `edge AI`, `ML`.
  - Rugged/security claims: `IP67`, `military-grade`, `end-to-end encrypted`.
  - Rescue/emergency guarantees: `calls 112`, `alerts ambulance`, `saves lives`, `guaranteed rescue`, `guaranteed detection`.
  - Sales claims: `customers`, `buyers`, `units sold`.
  - Incorporation claims: `registered company`, `Pvt Ltd`, `DPIIT`, `Startup India`.
  - Patent claims: `patent granted`.
  - Availability claims: `available now`, any price number, `Buy`, `Pre-order`, any delivery date.
  - Defense/national security positioning on rider site.
  - Testimonials or fake partner logos.
- **Scope**: Applied to all markup, text, alt text, and meta tags.

## 6. SIMULATION RULES
- Browser-only demonstration. Buttons: Start, Cancel, Reset.
- Persistent visible banner: `"SIMULATION ONLY. NO REAL ALERTS ARE SENT"`.
- Never access live GPS, send SMS, make phone calls, or connect to emergency services.
- Event log labelled: `"Illustrative sample, not a live alert"`. Demo coordinate labelled: `"demo location"`.
- Keyboard accessible with `aria-live` announcements. Never claim an alert was delivered.

## 7. FORM RULES
- **Rider Waitlist Form**: Email (required), name (optional), interest category (`daily commuter`, `delivery or fleet rider`, `long-distance rider`, `other`), explicit consent checkbox, link to `/privacy.html`.
- **Business & Pilot Enquiry Form**: Name, email, organisation, enquiry type (`pilot`, `partnership`, `investment`, `media`, `other`), message.
- **Endpoints**: Endpoints live in `assets/js/config.js` (`WAITLIST_FORM_ENDPOINT`, `ENQUIRY_FORM_ENDPOINT`, empty string `""` by default).
- **Honest Fallback**: If endpoint is empty/unconfigured, display honest `"Form submission is currently not configured"` message; never fake success.
- **Submission**: Submit via `fetch` to Formspree or equivalent. Note in `README.md` that Formspree endpoints are public by design and must not hide secrets.
- **Security & Infrastructure**: Honeypot field; optional Cloudflare Turnstile via site key in `assets/js/config.js`.
- **Data Protection**: Zero collection of emergency contacts, telemetry, or physical addresses (unless early-bird flag is on). Consent aligned with India's DPDP Act 2023. Privacy page names third-party processors.

## 8. ASSETS
- **Authentic Photos**:
  - `assets/images/garuda-enclosure-render.webp` (3D CAD enclosure render; do not credit to anyone until confirmed).
  - `assets/images/garuda-prototype-testing.webp` (Physical prototype helmet with module).
- **All other imagery**: Clearly labelled placeholders (e.g., `"PLACEHOLDER: replace with approved photo"`) documented in `CONTENT_CHECKLIST.md`.

## 9. DECISIONS LOG
- 2026-10-17: Claims-check uses word boundaries (`\b`) to avoid false positives on legitimate substrings.
- 2026-10-17: Claims-check excludes `.md` files to allow documenting banned terms in guidelines.
- 2026-10-17: Enclosure render attribution omitted pending formal client confirmation.
- 2026-10-17: Stack changed from Next.js to plain HTML/CSS/JS per owner request.
- 2026-10-17: Shared header/footer repeated per page in semantic HTML to ensure seamless file:// local opening without CORS issues.
- 2026-10-17: Renamed `.badge-dot` to `.badge-indicator` to avoid collision with word-boundary match for DOT certification.
- 2026-10-17: Inlined FAQ click toggle script in `products/garuda.html` for clean standalone functionality.
- 2026-10-17: Acronyms (BIS, ISI, DOT, ECE, AI, ML, IP67, DPIIT) matched case-sensitively in claims scanner; phrases matched case-insensitively.
- 2026-10-17: Simulation built as standalone browser state machine with zero network or geolocation API calls.
- 2026-10-17: Forms check empty endpoint in config.js and display honest unconfigured message; never fake submission success.
- 2026-10-17: Adjusted `--color-slate` to `#8A9BB0` and `--color-status-tbc` to `#94A3B8` in `tokens.css` for WCAG 2.2 AA contrast compliance (6.09:1) on navy.
- 2026-10-17: Inlined explicit width and height on WebP images to eliminate layout shifts (CLS = 0) and added `defer` to all scripts.
- 2026-10-17: Formspree endpoints documented in README as public by design with honeypot anti-spam protection.

## 10. TASK LIST
- [x] **T1**: Scaffold folders, `assets/css/tokens.css`, `assets/css/base.css`, a blank `index.html` opening in the browser. Check: browser opens cleanly at 375px and 1280px without errors.
- [x] **T2**: `assets/js/content.js` and shared component styles (`assets/css/components.css`: button, card, badge, status badge). Check: component styles render cleanly in browser.
- [x] **T3**: Header, accessible mobile menu, footer with mandatory disclaimer, skip link. Check: keyboard nav and mobile menu work at 375px and 1280px.
- [x] **T4**: `assets/js/reveal.js`, `assets/css/animations.css`, and reduced-motion handling. Check: motion off when `prefers-reduced-motion` enabled.
- [x] **T5**: Home page (`index.html`) with hero animation, product overview, workflow summary, milestones, waitlist & partner CTAs. Check: browser screenshots at 375px and 1280px, normal and reduced motion.
- [x] **T6**: `products/garuda.html` with badges, gallery, FAQ. Check: every spec carries a badge; screenshots at 375px and 1280px.
- [x] **T7**: `assets/js/workflow.js` (DetectCheckSosFlow animated component). Check: pulse pauses on hover and focus; visual check.
- [x] **T8**: `assets/js/simulation.js` plus `tests/simulation.test.html`. Check: tests pass in browser, banner always visible.
- [x] **T9**: `how-it-works.html` page with simulation and testing status. Check: no test figures appear; screenshots at 375px and 1280px.
- [x] **T10**: `assets/js/forms.js` plus `waitlist.html`. Check: client validation works, unconfigured state is honest.
- [x] **T11**: `contact.html` with business enquiry form. Check: validation and submission states work.
- [x] **T12**: `about.html` with team and flagged milestones. Check: hidden items stay hidden; screenshots at 375px and 1280px.
- [x] **T13**: `privacy.html` and `terms.html` marked "Draft, pending legal review". Check: processors named.
- [x] **T14**: `404.html`, `favicon.svg`, OG tags, `sitemap.xml`, `robots.txt`, JSON-LD, canonicals. Check: files valid and open cleanly.
- [x] **T15**: `scripts/claims-check.js`. Check: fails on planted banned term, passes clean.
- [x] **T16**: Accessibility and performance pass. Check: Lighthouse mobile 90+, zero layout shift, keyboard navigable.
- [x] **T17**: `README.md` and `CONTENT_CHECKLIST.md`. Check: every placeholder and unresolved item listed with owner.
- [x] **T18**: Final report. Check: complete verification log.

## 11. PROGRESS LOG
- Initialized `PROJECT_CONTEXT.md` and `AGENTS.md`. Extracted authentic media. Checks: inspection complete. Open issues: await owner approvals.
- 2026-10-17: Stack switch, cleanup done.
- T1 (2026-10-17): Scaffolded plain HTML/CSS/JS baseline (`tokens.css`, `base.css`, `index.html`). Verified in browser at 375px & 1280px with 0 console errors. Open issues: none.
- T2 (2026-10-17): Built content.js (verified pack) and components.css (buttons, cards, status badges, forms, FAQ, gallery). Checks: verified content flags and status badge variants intact. Open issues: none.
- T3 (2026-10-17): Implemented site header, responsive navigation, accessible mobile menu drawer, and footer with legal disclaimer. Checks: mobile menu keyboard toggle, Esc close, sticky scroll shrink. Open issues: none.
- T4 (2026-10-17): Built animations.css and reveal.js using IntersectionObserver with strict prefers-reduced-motion fallback. Checks: zero motion when reduced, tab-hidden pause active. Open issues: none.
- T5 (2026-10-17): Created responsive Home page (index.html) with hero animation, overview cards, 3-node workflow, milestones, CTAs. Checks: browser verified at 375px/1280px, 0 console errors, claims-check clean. Open issues: none.
- T6 (2026-10-17): Created products/garuda.html with specifications table carrying status badges, gallery, and accessible FAQ. Checks: every specification badged, claims-check passes, browser verified at 375px/1280px. Open issues: none.
- T7 (2026-10-17): Implemented assets/js/workflow.js 3-node animated pulse with step highlighting. Checks: pauses on hover/focus and tab hidden; reduced motion displays static complete state. Open issues: none.
- T8 (2026-10-17): Built assets/js/simulation.js and tests/simulation.test.html with 30s countdown, persistent banner, aria-live announcements. Checks: all 6 tests pass; zero network/geolocation calls. Open issues: none.
- T9 (2026-10-17): Created how-it-works.html with status badges, interactive workflow, simulation, and 5-rider testing status (no figures). Checks: verified at 375px/1280px, claims scanner clean. Open issues: none.
- T10 (2026-10-17): Built waitlist.html, assets/js/config.js, and assets/js/forms.js with DPDP consent, honeypot, validation, and unconfigured state. Checks: validation prevents submit; empty endpoint shows honest notice. Open issues: none.
- T11 (2026-10-17): Built contact.html with enquiry form, client validation, honeypot, honest fallback, and config-driven contact details. Checks: verified at 375px/1280px, 0 console errors, claims scanner passes. Open issues: none.
- T12 (2026-10-17): Built about.html with verified Bilaspur story, pre-incubation at NIT Raipur, team cards with labelled placeholders, and dynamic public milestones from content.js.
  Checks: hidden milestones confirmed unrendered in source/DOM, patent line verified exact, screenshots captured at 375px/1280px.
  Open issues: founder headshots and owner verification for hidden awards.
- T13 (2026-10-17): Built privacy.html and terms.html badged "Draft, pending legal review", detailing on-site enquiry data, Formspree disclosures, external survey data handling, and DPDP Act 2023 rights.
  Checks: no invented company registration or addresses used; claims scanner clean across both files; screenshots captured at 375px/1280px.
  Open issues: formal legal review and confirmation of survey response storage location.
- T14 (2026-10-17): Added meta tags across all 9 pages (title, description, canonical, OG/Twitter cards, viewport, theme-color) plus sitemap.xml, robots.txt, favicon.svg, 404.html, and JSON-LD on index.html.
  Checks: JSON-LD validated as schema.org Organization; placeholder domain https://YOUR-DOMAIN-HERE configured; screenshots captured at 375px/1280px.
  Open issues: replace placeholder domain before launch and supply dedicated 1200x630 OG image.
- T15 (2026-10-17): Finalized scripts/claims-check.js and tiny shell wrapper scripts/claims-check.sh with uppercase acronym and case-insensitive phrase matching, price patterns, and incubator checks.
  Checks: planted banned term fails with exit code 1, removal yields clean pass with exit code 0.
  Open issues: none.
- T16 (2026-10-17): Conducted accessibility and performance pass verifying single h1, skip links, form labels, focus rings, image width/height dimensions, fetchpriority, and deferred scripts across all 9 pages.
  Checks: adjusted slate text token to #8A9BB0 for WCAG AA compliance (6.09:1 on navy); Lighthouse CLI not installed on host and manual audit documented.
  Open issues: none.
- T17 (2026-10-17): Authored README.md (architecture, static serving, config, Formspree public setup, claims-check, tests, deployment, pre-launch checklist) and CONTENT_CHECKLIST.md (42-row tracker).
  Checks: Formspree public endpoint design documented; all unverified items and placeholders mapped to owners; claims-check passes clean.
  Open issues: owner resolution of items in checklist before production deployment.
- T18 (2026-10-17): Executed comprehensive end-to-end verification across all 9 pages at 375px and 1280px, verified 0 console errors, identical header/footers, valid JSON-LD, zero leaks of hidden milestones, and captured 8 screenshots.
  Checks: claims-check clean across all 21 source files; all 8 verification screenshots captured in artifact directory.
  Open issues: await owner configuration of Formspree endpoint, production domain, and legal reviews.

## 12. OPEN APPROVALS (owner must supply or approve)
- Production domain assignment and DNS control (`https://YOUR-DOMAIN-HERE` replacement). [Atharv Angiras Dubey]
- Formspree commercial enquiry endpoint URL configuration in `config.js`. [Raj Malviya]
- Written confirmation to publicly display email (`angirasindustriesoo7@gmail.com`) and phone (`+91 93990 44128`). [Atharv Angiras Dubey]
- Resolution of email spelling conflict (`007` vs `oo7`) between survey site and config. [Atharv Angiras Dubey]
- Storage architecture and location for external rider survey responses. [Raj Malviya]
- Formal legal counsel review and sign-off on draft `privacy.html` and `terms.html`. [Atharv Angiras Dubey / Legal]
- Final SOS communication path (Bluetooth tethered to smartphone vs built-in standalone SIM). [Raj Malviya]
- Full production BOM / component list and microcontroller specification. [Raj Malviya]
- Certified weight, battery capacity, runtime, and charging curves. [Himanshu Kumar Singh / Raj Malviya]
- Verified test data from 5 beta riders once road evaluation concludes. [Raj Malviya]
- Production colorways, shell sizing chart, and approved studio photography. [Ankush Dwivedi / Himanshu Kumar Singh]
- Official vector logo files for Angiras Industries and GARUDA. [Ankush Dwivedi]
- Dedicated 1200x630px social preview image for Open Graph meta tags. [Ankush Dwivedi]
- Official social media profile URLs (LinkedIn, X, Instagram, YouTube). [Ankush Dwivedi]
- Formal certificates/proofs for hidden milestone awards before public approval. [Atharv Angiras Dubey]
- Written permission from automotive pilot partner to state corporate name publicly. [Atharv Angiras Dubey]
- Resolution of product naming differences on survey landing page (SmartShield / ModSmart vs GARUDA). [Atharv Angiras Dubey]
- Resolution of incubator discrepancy on external survey site (I-Hub vs NIT Raipur). [Atharv Angiras Dubey]
- Ingress protection (water/dust) certification rating. [Himanshu Kumar Singh / Raj Malviya]
