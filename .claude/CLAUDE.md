# Wayne & Ceyon Wedding Invitation

Static, single-page, multilingual wedding invitation for Wayne (蕭裕翰) and Ceyon (金世娫 / 김세연). Wedding: Saturday 2025-11-15, 6:00 PM, 香頌私宅洋樓 (Chanson Bistro), Taipei. RSVP deadline: 2025-10-20. Plain HTML/CSS/JS, no build step, no dependencies. Repo: github.com/chronicqazxc/wayne-ceyon-wedding-invitation. See also `AGENTS.md` for contributor conventions (2-space indent, BEM-style classes, conventional commits `type(scope): description`).

## Files

- `index.html` – all markup. A `.snap-container` of full-height `.snap-section`s, in order: landing, description (names/parents), movie, gallery (+ lightbox), details (time/location/Google Maps iframe), RSVP, comments (Disqus), thanks. A floating `a#rsvp-form.rsvp-btn` scrolls to the RSVP section.
- `styles.css` – all styles. Theme is lavender, defined as `:root` custom properties (`--lavender`, `--accent`, `--background`, `--text`, …). Fonts: ChenYuluoyan (zh), HonokaShinMincho (ja), NanumSquareRound (ko), loaded from `assets/fonts/`. `--vh` (set inline in `<head>`) is used instead of `100vh` for mobile browsers.
- `translations.js` – the `translations` object (`en`, `zh`, `ko`, `ja`); loaded before `main.js`. Warns in the console if a language lacks a key.
- `main.js` – language switcher, gallery carousel, lightbox zoom/pan, RSVP button scroll.
- `assets/` – `gallery/` photos, `fonts/`, flower PNG corner decorations, `movie.mp4` + `wedding-video-thumbnail.png`, `rsvp-image.png`.
- `Wedding-Website-Template-main/` – original template snapshot; reference only, don't edit.

## How things work

- **i18n:** `translations` (in `translations.js`) holds `en`, `zh`, `ko`, `ja`. `getLang()` picks from `navigator.language` (default `en`); the EN/繁中/한국어/日本語 switcher changes it for the current visit only (not remembered). `setLanguage()` fills elements by ID via `textContent`. Any new translatable element needs an ID in `index.html`, a line in `setLanguage()`, and a key in **all four** language objects. The Korean description uses non-breaking spaces (U+00A0) on purpose; keep them when editing.
- **Venue link:** `setLanguage()` wraps "Chanson Bistro" / "香頌私宅洋樓" in a Google Maps link built from the single `MAP_URL` constant in `main.js`.
- **Names differ per language** (e.g. `Yuhan & Ceyon`, `裕翰 & Ceyon`, `유한 & 세연`, `ユーハン & セヨン`); bride's Chinese/Korean names and parents' names are intentionally different per language. Don't "normalize" them.
- **Gallery:** the photo list is the `GALLERY_IMAGES` array in `main.js`; slides are generated from `assets/gallery/<file>`. Adding or removing a photo means editing that array (and keeping the file in `assets/gallery/`; file names follow `N.NN.jpg`). The array and the folder currently match (30 photos).
- **Scrolling:** `.snap-container` uses CSS scroll-snap and starts with `no-scroll`; `main.js` removes it on `animationend` of the `.fade-in-rsvp` button (the last landing animation), with a 3 s fallback.
- **Lightbox:** custom pinch/drag/ctrl-wheel zoom (scale 1–5) in `main.js`; opened by clicking a `.gallery-slide img`.
- **Video:** `main.js` pauses the video when less than 50% visible.
- **RSVP:** the floating `a#rsvp-btn` scrolls to the RSVP section; the RSVP itself is an external Google Form link.
- **Comments:** Disqus, shortname `wayne-ceyon-wedding`, loaded in `index.html`.

## Deployment

Hosted on GitHub Pages with source set to **GitHub Actions** (not a branch). `.github/workflows/pages.yml` runs on every push to `main` (or manually), copies `index.html`, `styles.css`, `translations.js`, `main.js` and `assets/` into `_site/`, and deploys it. A new top-level file or folder the site needs must be added to the "Collect site files" step, or it won't be published.

## Working on it

- Preview: `open index.html` (or `live-server`). No tests; verify manually in a browser at desktop and phone widths (the invitation is mostly viewed on phones, including iOS Safari), in each of the four languages (change browser language to test).
- Format with `npx prettier --write "**/*.js" "**/*.css"` if prettier is available; there is no `.prettierrc` or `.eslintrc` checked in.
- Recent work has mostly been copy tweaks, font-size adjustments per device size, and image updates; keep text sizing responsive.
