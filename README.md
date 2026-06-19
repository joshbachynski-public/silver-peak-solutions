# Silver Peak — website

A plain HTML + CSS website. **No React, no JavaScript framework, no build step.**
What is in this repository is exactly what gets served. Open `index.html` in any
browser and it works.

## What is here

```
.
  index.html        ← the live homepage
  404.html          ← shown for unknown URLs
  styles.css        ← all styling (the whole design system)
  robots.txt        ← search-engine instructions
  assets/           ← images + favicon
  templates/        ← reusable pieces used to build new pages (see below)
      base.html         ← empty page skeleton (head, title, meta)
      partials/header.html   ← the top navigation bar
      partials/footer.html   ← the bottom footer
      blocks.html       ← copy-paste section blocks + the icon library
```

## How edits work (Claude acts as the CMS)

Tell Claude what to change in plain English — for example:

- "Change the phone number to 250-555-1234"
- "Add a fourth paragraph to the Advantage section"
- "Make a new page called Commercial Services with a hero and three cards"
- "Swap the hero photo"

Claude edits the HTML and pushes it to GitHub. The live site updates
automatically (see Deploy below). You never touch code.

### How a NEW page is built

1. Start from `templates/base.html`.
2. Paste `templates/partials/header.html` where it says to.
3. Paste one or more blocks from `templates/blocks.html` into `<main>`.
4. Paste `templates/partials/footer.html` at the bottom.
5. Fill in the `{{PLACEHOLDER}}` text.
6. Save as `the-page-name.html` at the repo root. It is linkable at
   `/the-page-name.html`.

Header and footer are duplicated into each page (the trade-off for having no
build step). When the phone number or a nav link changes, Claude updates every
page in one pass.

## Deploy

The site is static, so any static host works. The HTML lives at the repo root,
so there is **no build command and no output sub-folder to configure.**

### Option A — Cloudflare Pages (recommended)
1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git →
   pick this repository.
2. Build settings:
   - Framework preset: **None**
   - Build command: **(leave empty)**
   - Build output directory: **`/`** (the root — leave default)
3. Save and Deploy. Every `git push` redeploys.
4. Add the custom domain `silver-peak.ca` under the project's Custom domains tab.

### Option B — GitHub Pages
Repository → Settings → Pages → Source: **Deploy from a branch** → Branch:
**main**, Folder: **/ (root)** → Save. Served at the GitHub Pages URL; a custom
domain can be added on the same screen.

## Notes

- Fonts (Outfit + Plus Jakarta Sans) load from Google Fonts via the `<link>` in
  each page's head.
- Icons are inline SVG (from the Lucide icon set), so there is no icon library
  to load.
- The footer year is hard-coded (currently 2026) because there is no JavaScript.
  Claude bumps it when needed.
