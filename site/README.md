# Silver Peak — static website

A plain HTML + CSS website. No React, no JavaScript framework, no build step.
What is in this folder is exactly what gets served. Open `index.html` in any
browser and it works.

## What is here

```
site/
  index.html        ← the live homepage
  404.html          ← shown for unknown URLs
  styles.css        ← all styling (the design system from the original site)
  robots.txt        ← search-engine instructions
  assets/           ← images + favicon
  templates/        ← reusable pieces used to build new pages (see below)
      base.html         ← empty page skeleton (head, title, meta)
      partials/header.html   ← the top navigation bar
      partials/footer.html   ← the bottom footer
      blocks.html       ← copy-paste section blocks + the icon library
```

## How edits work (I act as your CMS)

You tell me what to change in plain English — for example:

- "Change the phone number to 250-555-1234"
- "Add a fourth paragraph to the Advantage section"
- "Make a new page called Commercial Services with a hero and three cards"
- "Swap the hero photo"

I edit the HTML in this folder and push it to GitHub. The live site updates
automatically (see Deploy below). You never touch code.

### How a NEW page is built

1. Start from `templates/base.html`.
2. Paste `templates/partials/header.html` where it says to.
3. Paste one or more blocks from `templates/blocks.html` into `<main>`.
4. Paste `templates/partials/footer.html` at the bottom.
5. Fill in the `{{PLACEHOLDER}}` text.
6. Save as `the-page-name.html` in this folder. It is linkable at
   `/the-page-name.html`.

Header and footer are duplicated into each page (that is the trade-off for
having no build step). When the phone number or a nav link changes, I update
every page in one pass.

## Deploy

The site is static, so any static host works. Two simple options:

### Option A — Cloudflare Pages (recommended)
1. Push this repo to GitHub.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git →
   pick this repo.
3. Build settings:
   - Framework preset: **None**
   - Build command: **(leave empty)**
   - Build output directory: **`site`**
4. Save and Deploy. Every `git push` redeploys.
5. Add the custom domain `silver-peak.ca` under the project's Custom domains tab.

### Option B — GitHub Pages
GitHub Pages can only serve the repo root or a `/docs` folder, so this `site/`
folder would need to be renamed `docs/`. Cloudflare Pages (Option A) avoids that
and gives a faster global CDN, which is why it is the recommendation.

## Notes

- Fonts (Outfit + Plus Jakarta Sans) load from Google Fonts via the `<link>` in
  each page's head.
- Icons are inline SVG (from the Lucide icon set), so there is no icon library
  to load.
- The footer year is hard-coded (currently 2026) because there is no JavaScript.
  I bump it when needed.
