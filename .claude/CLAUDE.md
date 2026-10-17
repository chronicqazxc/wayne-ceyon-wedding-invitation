# Wayne & Ceyon Wedding Invitation

Static, single-page, multilingual wedding invitation for Wayne (蕭裕翰) and Ceyon (金世娫 / 김세연). Wedding: Saturday 2025-11-15, 6:00 PM, 香頌私宅洋樓 (Chanson Bistro), Taipei. RSVP deadline: 2025-10-20. Plain HTML/CSS/JS, no build step, no dependencies. Repo: github.com/chronicqazxc/wayne-ceyon-wedding-invitation.

## Files

- `index.html` – all markup. A fixed `.deco` layer of four corner flowers plus a `.story` of sections, in order: landing, description (names/parents), movie, gallery (+ lightbox), details (time/location/Google Maps iframe), RSVP, comments (Disqus), thanks. A floating `a#rsvp-btn.rsvp-btn` scrolls to the RSVP section.
- `styles.css` – all styles. Theme is lavender, defined as `:root` custom properties (`--lavender`, `--accent`, `--background`, `--text`, …). Fonts: ChenYuluoyan (zh), HonokaShinMincho (ja), NanumSquareRound (ko), loaded from `assets/fonts/`. `--vh` (set inline in `<head>`) is used instead of `100vh` for mobile browsers.
- `translations.js` – the `translations` object (`en`, `zh`, `ko`, `ja`); loaded before `main.js`. Warns in the console if a language lacks a key.
- `main.js` – language switcher, gallery carousel, lightbox zoom/pan, RSVP button scroll, scroll-driven scenes.
- `assets/` – `gallery/` photos, `fonts/`, flower PNG corner decorations, `movie.mp4` + `wedding-video-thumbnail.png`, `rsvp-image.png`.
- `Wedding-Website-Template-main/` – original template snapshot; reference only, don't edit.

## How things work

- **i18n:** `translations` (in `translations.js`) holds `en`, `zh`, `ko`, `ja`. `getLang()` picks from `navigator.language` (default `en`); the EN/繁中/한국어/日本語 switcher changes it for the current visit only (not remembered). `setLanguage()` fills elements by ID via `textContent`. Any new translatable element needs an ID in `index.html`, a line in `setLanguage()`, and a key in **all four** language objects. The Korean description uses non-breaking spaces (U+00A0) on purpose; keep them when editing.
- **Venue link:** `setLanguage()` wraps "Chanson Bistro" / "香頌私宅洋樓" in a Google Maps link built from the single `MAP_URL` constant in `main.js`.
- **Names differ per language** (e.g. `Yuhan & Ceyon`, `裕翰 & Ceyon`, `유한 & 세연`, `ユーハン & セヨン`); bride's Chinese/Korean names and parents' names are intentionally different per language. Don't "normalize" them.
- **Gallery:** the photo list is the `GALLERY_IMAGES` array in `main.js`; slides are generated from `assets/gallery/<file>`. Adding or removing a photo means editing that array (and keeping the file in `assets/gallery/`; file names follow `N.NN.jpg`). The array and the folder currently match (30 photos).
- **Scrolling:** continuous page scroll (no snap). Landing, description and movie are tall `.scene`s whose `.stage` is `position: sticky`; `main.js` writes each scene's progress to `--p` (0–1) and the CSS animates from it (landing title fades, description words light up, video grows from a card). Other sections are `.panel`s that scroll normally, and each `.reveal` block (details, RSVP and comments headings, text and cards, thanks) animates in as it arrives and out as it leaves, in both scroll directions, from `--rv`/`--rd` set in `main.js`. The corner flowers are the fixed `.deco` layer: they bloom on load, sit at half size while reading (`--fs`) and return to full size, top-left/bottom-right only, on the thanks screen (`--e`). `<html>` starts with `no-scroll`; `main.js` removes it on `animationend` of `.fade-in-rsvp`, with a 3 s fallback. Use `overflow-x: clip` (not `hidden`) on `html`/`body`, and no `transform`/`filter` on ancestors of `#lightbox`, or sticky and the fixed lightbox break.
- **Description reveal:** `splitWords()` in `main.js` wraps each word of `#description-content` in `span.word` (via `Intl.Segmenter`) after every `setLanguage()`; whitespace, including the Korean non-breaking spaces, stays as text.
- **Gallery view:** every photo fills the screen and swipes horizontally (mandatory snap, mouse drag on desktop). `main.js` sets `--gv` (0–1, how fully the gallery is on screen) so the track zooms in on arrival and out on leaving. Swipe cues: a `.gallery-hint` pill (`#gallery-hint-text`, translated) that fades after the first sideways scroll, a one-time sideways nudge when the gallery first fills the screen, and prev/next arrows for mouse users (hidden on touch).
- **Lightbox:** custom pinch/drag/ctrl-wheel zoom (scale 1–5) in `main.js`; opened by clicking a `.gallery-slide img`.
- **Video:** `main.js` pauses the video when less than 50% visible.
- **RSVP:** the floating `a#rsvp-btn` scrolls to the RSVP section; the RSVP itself is an external Google Form link.
- **Comments:** Disqus, shortname `wayne-ceyon-wedding`, loaded in `index.html`.

## Deployment

Hosted on GitHub Pages with source set to **GitHub Actions** (not a branch). `.github/workflows/pages.yml` runs on every push to `main` (or manually), copies `index.html`, `styles.css`, `translations.js`, `main.js` and `assets/` into `_site/`, and deploys it. A new top-level file or folder the site needs must be added to the "Collect site files" step, or it won't be published.

## Working on it

- Preview: `open index.html` (or `live-server`). No build step and no automated tests.
- Verify manually in a browser at desktop and phone widths (the invitation is mostly viewed on phones, including iOS Safari), and in each of the four languages (use the switcher). Check that:
  1. the language defaults to the browser's and the switcher changes it;
  2. gallery photos load and the lightbox opens, zooms and closes;
  3. the video plays and the map embed and links work.
- Recent work has mostly been copy tweaks, font-size adjustments per device size, and image updates; keep text sizing responsive.

## Conventions

- **JS:** ES6+, `const`/`let`, `camelCase`. **HTML/JS:** 2-space indent. `styles.css` currently uses 4 spaces; match the file you're editing and don't reformat it wholesale.
- **CSS:** theme colours come from the `:root` custom properties (`--lavender`, `--accent`, …); layout uses flexbox, sticky scenes and CSS variables set from `main.js`. Class names are kebab-case (`gallery-slide`, `fade-in-rsvp`).
- **Formatting tools:** prettier/eslint are optional; no `.prettierrc` or `.eslintrc` is checked in.
- **Assets:** new files go in `assets/` (photos in `assets/gallery/` as `N.NN.jpg`, fonts in `assets/fonts/`). Keep photos reasonably small; the originals were 20 MB.
- **Commits:** conventional format, `type(scope): description` (e.g. `fix(i18n): ...`).
- **Pull requests:** descriptive title, reference related issues (`#<id>`), include screenshots for visual changes, and say what changed, why, and how to roll back.
