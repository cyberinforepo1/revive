# Revive Clinic

This repository contains the Revive Clinic compatibility matrix for procedure rules review and doctor approval.

## Files

- `index.html` – main page and matrix UI, including client-side rules generation, modal editing, filter controls, and JSON export.
- `styles.css` – extracted dark-theme styles and layout rules for the matrix, dashboard, modal, and overall page visuals.
- `server.js` – local backend server that serves the static site and exposes `POST /save-rules` for saving rule state to `saved_rules.json`.
- `revive_procedures.json` – procedure names and prices loaded by the client to build the matrix dynamically.
- `saved_rules.json` – optional backend save file generated when rule state is posted to the server.
- `rules-engine-draft.md` and `rules-engine-draft (2).md` – draft documentation for the rules engine and decision semantics.
- `patient-journey-map.html` – patient journey reference for workflow and screening contexts.
- `rules-engine-explainer.html` – explanatory page describing the rules engine approach.
- `master-prompt-final.md` and `master-prompt-final (2).md` – prompt and design notes used to craft the rules engine review experience.
- `revive-tracker.html` – tracking dashboard or additional UX demo page.
- `.nojekyll` – disables Jekyll processing on GitHub Pages so `.json` files like `revive_procedures.json` are served correctly.

## Run locally

1. Install dependencies:

```bash
npm install express
```

2. Start the backend server:

```bash
node server.js
```

3. Open the app in your browser:

```text
http://localhost:3000
```

The site will load `revive_procedures.json` dynamically and preserve the matrix UI, filters, modal behavior, and export/save workflows.

## GitHub Pages note

If `revive_procedures.json` does not load correctly on GitHub Pages, use one of these approaches:

- Add an empty `.nojekyll` file at the repo root to disable Jekyll processing for static files.
- Or embed the procedure data directly in `index.html` using a `<script type="application/json" id="procData">…</script>` block instead of fetching external JSON.
