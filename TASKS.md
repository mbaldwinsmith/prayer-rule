# Prayer Rule — Build Tasks

A modular, incremental path from the Prayer Rule README to a working PWA. Each phase ends with something usable. Build in order; nothing later depends on anything you have not yet built.

The guiding principle: get a single prayer rendering on screen before touching streaks, themes, seasons, or service-worker plumbing. Content first, then state, then polish, then installability.

---

## Phase 0 — Skeleton and content model

The foundation everything else hangs from. The key decision here is to separate prayer *text* (data) from prayer *rendering* (code), so adding or editing a prayer never means touching logic.

- [ ] Create the repo structure: `index.html`, `/css/`, `/js/`, `/data/`, `/icons/`, `manifest.json`, `sw.js`.
- [ ] Write `index.html` as a single shell: a `<main id="office">` container, a minimal header, nothing else. No prayer text in the HTML.
- [ ] Define the content model in `/data/prayers.js` as an ES module exporting a structured object. Each prayer is an entry with `id`, `title`, and `body` (array of paragraphs, or array of lines where line breaks matter, e.g. the Trisagion and Psalm 50).
- [ ] Decide your rubric convention: short instructions like *"Before checking messages"* and *"Light a candle or vigil lamp"* are a distinct type from prayer text. Give them a `rubric` field or a separate block type so they can be styled differently (italic, muted).
- [ ] Capture the fixed-text prayers verbatim from the README first: Holy Spirit, Trisagion, Doxology, Morning Dismissal, It Is Truly Meet, Evening Dismissal, Psalm 50(51).
- [ ] Stub the variable prayers (Lord's Prayer, Jesus Prayer, Benedictus, Beatitudes, Magnificat, Ten Commandments) as empty entries to be filled in Phase 4.

**Done when:** `prayers.js` imports cleanly and you can `console.log` the full Holy Spirit prayer from it.

---

## Phase 1 — Render one office

Now make the data visible. A renderer that turns the content model into DOM, driven by an ordered list of prayer IDs per office.

- [ ] Create `/js/render.js` exporting a function that takes a prayer entry and returns DOM (or an HTML string injected safely). Handle the block types: rubric, title, paragraph body, line-break body.
- [ ] Create `/js/offices.js` defining the *order* of each office as an array of prayer IDs. Morning and Evening are just two ordered lists. This is where the Psalm-of-the-day slot and other variable slots live as placeholders.
- [ ] Create `/js/app.js` as the entry point: pick an office (hardcode Morning for now), walk its ID list, render each prayer into `#office`.
- [ ] Wire `app.js` into `index.html` as `<script type="module">`.

**Done when:** opening `index.html` locally shows the full Morning office in order, fixed prayers fully rendered, variable slots showing visible placeholders.

---

## Phase 2 — Office selection and structure

Two offices, chosen sensibly. Keep this dumb: a toggle, optionally time-aware, no persistence yet.

- [ ] Add Morning/Evening selection. Default by time of day (e.g. Evening after ~4pm) but always let you override.
- [ ] Render the candle/vigil-lamp rubric at the head of the Evening office and the "before checking messages" rubric at the head of Morning.
- [ ] Add light structural separation between sections (spacing, perhaps a subtle ornament between prayers rather than hard rules).

**Done when:** you can move between the complete Morning and Evening offices and each opens with its proper rubric.

---

## Phase 3 — The daily Psalm cycle

The first piece of genuine logic, and it touches the README's most specific instruction.

- [ ] Morning: map weekday to Psalm — 3, 37(38), 62(63), 87(88), 102(103), 142(143) across Monday–Saturday. Decide what Sunday shows (the README is silent; a sensible default is to repeat one, or surface a note).
- [ ] Evening: the README leaves the opening Psalm slot open. Either pick a fixed evening Psalm, define a second cycle, or leave a clearly marked placeholder — your call, but make the behaviour explicit in `offices.js`.
- [ ] Implement the weekday→psalm resolution as a small pure function so it is testable and obvious.
- [ ] Add the chosen Psalm texts to `prayers.js`.

**Done when:** opening the Morning office on different days (or by faking the date) shows the correct Psalm with no code change beyond the date.

---

## Phase 4 — Fill in all scripture and variable text

Content completeness. The README calls for *full text* for scripture, so this phase is mostly careful transcription, not engineering.

- [ ] Add full text for the NKJV passages: Benedictus, Ten Commandments, Beatitudes, Magnificat.
- [ ] Add the Lord's Prayer and the Jesus Prayer in your preferred form.
- [ ] Add the remaining daily Psalms in full.
- [ ] Proofread every prayer against the README and your sources — at this stage the app *is* the text, so accuracy matters more than anything else you will build.
- [ ] Remove all placeholders.

**Done when:** both offices render start to finish with no stubs, every word present.

---

## Phase 5 — Day / night theming

Visual atmosphere. The README wants something ancient-feeling and easy on the eyes; theming is most of that impression.

- [ ] Define two palettes as CSS custom properties on `:root` and a `[data-theme="night"]` selector — warm parchment/ink for day, low-luminance candlelit tones for night.
- [ ] Choose a typeface that reads as old without being a costume (a humanist serif; consider a single self-hosted font file to keep things dependency-free).
- [ ] Auto-select theme by time of day, mirroring the office default, with a manual toggle.
- [ ] Keep contrast comfortable in both modes; the night theme especially should be readable but dim.

**Done when:** the app shifts between a daylight and a candlelit appearance, manually and automatically, with no jarring colours.

---

## Phase 6 — Seasonal variation

Liturgical texture layered over the base themes. Reuse the Angelus seasonal-switching pattern rather than inventing a new one.

- [ ] Define a season resolver: a function mapping today's date to a liturgical season (Advent, Christmas, Lent, Eastertide, Ordinary Time, plus any feasts you care about).
- [ ] Decide what season *changes*: accent colour is the lightest-touch option; you might also vary an ornament, a header, or eventually a seasonal antiphon. Start with accent colour only.
- [ ] Apply the season as a second data attribute (`data-season`) so it composes with `data-theme` in CSS.
- [ ] Keep the resolver pure and date-driven; no external calendar API, no network.

**Done when:** the accent colour reflects the current liturgical season, and you can verify Lent and Eastertide look distinct by faking the date.

---

## Phase 7 — Streak tracking

Simple persistence, kept gentle. The README asks for *simple* — resist gamification; this is a record of faithfulness, not a game.

- [ ] On completing an office (define "complete" — reaching the end, or an explicit "Amen / done" tap), record today's date in `localStorage`.
- [ ] Compute the current streak as consecutive days with at least one completed office.
- [ ] Display it quietly — a small count, not a banner. Consider tracking Morning and Evening separately or as a single daily mark; single daily is simpler and kinder.
- [ ] Handle the edge cases: timezone, day boundaries, a missed day breaking the streak without scolding.
- [ ] Never block prayer behind the tracker; it observes, it does not gate.

**Done when:** completing an office increments a streak that survives a page reload and resets correctly after a missed day.

---

## Phase 8 — Subtle animations

The polish the README names explicitly. The watchword is *subtle*: nothing should draw attention to itself or feel like software.

- [ ] Gentle fade/settle as prayers or sections enter view.
- [ ] A soft transition on theme and season changes rather than an instant swap.
- [ ] Respect `prefers-reduced-motion` — disable or minimise everything for anyone who asks.
- [ ] Keep all motion CSS-driven where possible; avoid animation libraries entirely.

**Done when:** the app feels calm and unhurried, and turning on reduced-motion removes the movement cleanly.

---

## Phase 9 — Progressive Web App plumbing

Make it installable and offline. Do this last: a broken service worker during development is a needless source of caching pain.

- [ ] Write `manifest.json`: name, short name, icons, `display: standalone`, theme and background colours matching the day palette.
- [ ] Generate the icon set in `/icons/` (maskable plus standard sizes).
- [ ] Write `sw.js` with a cache-first strategy over the full app shell and all prayer data — the whole thing should work with no connection, since prayer should never depend on signal.
- [ ] Register the service worker from `app.js`, guarded so local development without HTTPS still works.
- [ ] Implement a sane cache-versioning scheme so updates actually reach the installed app (bump a version constant; clear old caches on activate).

**Done when:** the app installs to a home screen, opens in standalone mode, and renders both full offices in airplane mode.

---

## Phase 10 — Deploy to GitHub Pages

Shipping. Mirrors the Angelus and Stillpoint deployments.

- [ ] Confirm everything is relative-pathed so it works from a project subpath (or configure a custom domain as with thegoldenthread.garden).
- [ ] Push to the repo and enable Pages on the chosen branch.
- [ ] Test the installed PWA from the live HTTPS URL on a phone — service workers only fully behave over HTTPS.
- [ ] Walk both offices on the phone, install, go offline, and pray through one as the real acceptance test.

**Done when:** the Prayer Rule is live, installable from its URL, and works on your phone with no connection.

---

## Notes carried from the README

- **No build stage, no libraries, vanilla ES modules.** Every phase above holds to this. If something seems to want a dependency, it is almost certainly cheaper to write the twenty lines yourself.
- **Personal to your rhythms.** The Psalm cycle, the office defaults, the seasonal calendar, and the definition of a "complete" office are all yours to set. The structure above leaves each of those as an explicit, single-place decision rather than scattering assumptions through the code.
- **Full scripture text.** Phase 4 is load-bearing for the README's intent; treat transcription accuracy as the real deliverable.
- **Orthodox and ancient-feeling, easy on the eyes.** Phases 5, 6, and 8 carry this, and the bias throughout is toward restraint — subtle ornament over decoration, dim over bright, stillness over motion.
