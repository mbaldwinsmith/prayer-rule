# Prayer Rule

A personal Orthodox morning and evening prayer app. Runs as a Progressive Web App on GitHub Pages — no build step, no dependencies, pure vanilla JS.

## Features

- **Morning & Evening offices** — full text of prayers, psalms, and canticles for both hours
- **Daily psalm rotation** — morning psalms cycle through Psalms 3, 37, 62, 87, 102, and 142 (Monday–Saturday); evening uses Psalm 140
- **Liturgical seasons** — UI adapts to Advent, Christmas, Great Lent, Eastertide, and Ordinary time using the Orthodox Paschalion
- **Day/Night theme** — toggles manually or defaults automatically at 4 pm
- **Streak tracking** — records daily completions in `localStorage`; shows a running day count
- **Installable PWA** — service worker + Web App Manifest; works offline after first load

## Structure

```
index.html          shell and navigation
css/style.css       all styles, theming, animations
js/
  app.js            entry point — wires theme, office, streak, service worker
  offices.js        ordered prayer IDs for morning and evening
  psalms.js         daily psalm resolver
  seasons.js        Orthodox Paschalion + liturgical season mapping
  streak.js         localStorage-backed completion tracking
  render.js         DOM builder for prayer cards
data/
  prayers.js        full prayer texts keyed by ID
sw.js               service worker (cache-first offline support)
manifest.json       PWA manifest
```

## Running locally

Any static file server works:

```bash
npx serve .
# or
python3 -m http.server
```

Open `http://localhost:3000` (or whatever port the server reports). ES modules require HTTP — opening `index.html` directly from the filesystem won't work.

## Deployment

Pushes to `main` deploy automatically via GitHub Actions to GitHub Pages (`.github/workflows/pages.yml`).
