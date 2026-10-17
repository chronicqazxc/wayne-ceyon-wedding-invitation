# Wayne & Ceyon Wedding Invitation

Static, single-page, multilingual wedding invitation for Wayne (蕭裕翰) and Ceyon (金世娫 / 김세연). Wedding: Saturday 2025-11-15, 6:00 PM, 香頌私宅洋樓 (Chanson Bistro), Taipei. RSVP deadline: 2025-10-20. Plain HTML/CSS/JS, no build step, no dependencies. Repo: github.com/chronicqazxc/wayne-ceyon-wedding-invitation. See also `AGENTS.md` for contributor conventions (2-space indent, BEM-style classes, conventional commits `type(scope): description`).

## Files

- `index.html` – all markup. A `.snap-container` of full-height `.snap-section`s, in order: landing, description (names/parents), movie, gallery (+ lightbox), details (time/location/Google Maps iframe), RSVP, comments (Disqus), thanks. A floating `a#rsvp-form.rsvp-btn` scrolls to the RSVP section.
- `styles.css` – all styles. Theme is lavender, defined as `:root` custom properties (`--lavender`, `--accent`, `--background`, `--text`, …). Fonts: ChenYuluoyan (zh), HonokaShinMincho (ja), NanumSquareRound (ko), loaded from `assets/fonts/`. `--vh` (set inline in `<head>`) is used instead of `100vh` for mobile browsers.
- `main.js` – i18n, gallery carousel, lightbox zoom/pan, RSVP button scroll.
- `assets/` – `gallery/` photos, `fonts/`, flower PNG corner decorations, `movie.mp4` + `wedding-video-thumbnail.png`, `rsvp-image.png`.
- `Wedding-Website-Template-main/` – original template snapshot; reference only, don't edit.

## How things work

- **i18n:** `translations` in `main.js` holds `en`, `zh`, `ko`, `ja`. `getLang()` picks from `navigator.language` (default `en`); there is no manual language switcher. `setLanguage()` fills elements by ID via `textContent`. Any new translatable element needs an ID in `index.html`, a line in `setLanguage()`, and a key in **all four** language objects.
- **Venue link:** `setLanguage()` wraps "Chanson Bistro" / "香頌私宅洋樓" in a Google Maps `<a>` via `innerHTML`; the URL is duplicated in two branches, so update both.
- **Names differ per language** (e.g. `Yuhan & Ceyon`, `裕翰 & Ceyon`, `유한 & 세연`, `ユーハン & セヨン`); bride's Chinese/Korean names and parents' names are intentionally different per language. Don't "normalize" them.
- **Gallery:** the photo list is a hard-coded `images` array in an inline `<script>` inside `.gallery-track` in `index.html`; slides are generated from `assets/gallery/<file>`. Adding or removing a photo means editing that array (and keeping the file in `assets/gallery/`; file names follow `N.NN.jpg`). The array and the folder currently match (30 photos).
- **Scrolling:** `.snap-container` uses CSS scroll-snap and starts with `no-scroll`; `main.js` removes it after 1800 ms to match the landing animation. If landing animation timings in CSS change, update that delay.
- **Lightbox:** custom pinch/drag/ctrl-wheel zoom (scale 1–5) in `main.js`; opened by clicking a `.gallery-slide img`.
- **Video:** an inline script at the bottom of `index.html` pauses the video when less than 50% visible.
- **RSVP form handler** at the top of `main.js` targets `#rsvp-form`, which is currently the floating button (an `<a>`), not a form — treat that handler as legacy/dead code.
- **Comments:** Disqus, shortname `wayne-ceyon-wedding`, loaded in `index.html`.

## Deployment

Hosted on GitHub Pages with source set to **GitHub Actions** (not a branch). `.github/workflows/pages.yml` runs on every push to `main` (or manually), copies `index.html`, `styles.css`, `main.js` and `assets/` into `_site/`, and deploys it. A new top-level file or folder the site needs must be added to the "Collect site files" step, or it won't be published.

## Working on it

- Preview: `open index.html` (or `live-server`). No tests; verify manually in a browser at desktop and phone widths (the invitation is mostly viewed on phones, including iOS Safari), in each of the four languages (change browser language to test).
- Format with `npx prettier --write "**/*.js" "**/*.css"` if prettier is available; there is no `.prettierrc` or `.eslintrc` checked in.
- Recent work has mostly been copy tweaks, font-size adjustments per device size, and image updates; keep text sizing responsive.
