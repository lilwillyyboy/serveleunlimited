# Servele Unlimited 🎾

**Guess the mystery ATP player.** A Wordle-style daily tennis game using the top 100 ATP rankings.

🌐 [serveleunlimited.com](https://serveleunlimited.com)

---

## How to Play

Type any ATP player's name into the search bar. After each guess, tiles reveal how close you are:

| Colour | Meaning |
|--------|---------|
| 🟩 Green | Exact match |
| 🟨 Yellow | Close (see ranges below) |
| ⬜ Grey | No match |

Arrows (↑ ↓) on numerical clues tell you which direction the answer is.

### Clue ranges for "Close"

| Clue | Close = |
|------|---------|
| Ranking | Within 3–10 spots (depends on difficulty) |
| Age | Within ±2 years |
| Titles | Within ±3 titles |
| Height | Within ±3 cm (~1 inch) |

---

## Difficulty Modes

Select your player pool using the **Pool** bar at the top:

| Mode | Pool |
|------|------|
| Top 25 | World #1–25 — well-known stars only |
| Top 50 | World #1–50 — moderate challenge |
| Top 75 | World #1–75 — harder |
| Top 100 | World #1–100 — hardest |

Rankings are based on the official ATP rankings as of **1 April 2026**.

---

## Features

- **Unlimited puzzles** — play as many as you want, any time
- **Give Up** — reveal the answer and move on
- **Difficulty selector** — Top 25 / 50 / 75 / 100
- **Stats tracking** — puzzles solved, avg guesses, fastest solve, streaks
- **Accounts** — register to keep your stats across devices and sessions
- **Dark mode**
- **Share** — copy your result grid to clipboard
- **PWA** — installable on iOS and Android as a home screen app

---

## Deployment

The app is a static site with no backend. Deploy anywhere that serves static files.

### Vercel (recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from the project folder
vercel --prod
```

`vercel.json` is already configured with the correct rewrites and cache headers.

### Netlify

Drag and drop the project folder into the [Netlify dashboard](https://app.netlify.com), or use the CLI:

```bash
npm i -g netlify-cli
netlify deploy --prod --dir .
```

Add a `_redirects` file if needed:
```
/*  /index.html  200
```

### Any static host (Nginx, Apache, S3, Cloudflare Pages…)

Just serve the files. The only requirement is that all routes return `index.html` — the `vercel.json` rewrite handles this on Vercel automatically.

---

## Project Structure

```
servele-final/
├── index.html       # App shell
├── app.js           # All game logic, auth, stats
├── style.css        # All styles
├── sw.js            # Service worker (PWA / offline)
├── manifest.json    # PWA manifest
├── vercel.json      # Vercel deployment config
└── icons/
    ├── icon.svg
    ├── icon-192.png
    └── icon-512.png
```

---

## Accounts & Data

All user data is stored in **localStorage** on the player's device. There is no server or database. Accounts allow stats to be merged when signing in on the same browser — they do not sync across different devices or browsers.

---

## Updating Rankings

Player data lives in the `RAW` array at the top of `app.js`. Each entry is:

```js
[rank, "Full Name", "Nationality", age, titles, "Hand", height_cm]
```

To update rankings, edit that array and redeploy.
