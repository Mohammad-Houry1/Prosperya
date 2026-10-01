# Visual refinement verification

Third pass completed 2026-09-19 against the ten supplied reference images. It replaces the second pass (2026-09-15).

## Art direction per page

Each page has its own composition and motion idea; no two pages share a hero template. The radial hub belongs to Home (and the 404, which links back into it); listing pages no longer reuse it.

Gestures: every horizontal scroller (testimonials, proof rail, strips, tabs, stage row) swipes natively on touch and trackpads and drags with the mouse via `src/motion/gestures.js` (flick, settle on an item, no accidental click).

Shared motion: every hero `h1` and `RevealText` heading rises line by line out of a mask (GSAP SplitText); reduced motion leaves them static.

| Page | Composition | Motion |
| --- | --- | --- |
| Home | Pinned split stage: narrative column (claim, then four chapters) beside the 3D architecture in its own framed panel, so text never sits on the scene; client marquee below | Three.js + GSAP scroll timeline (camera tilt/zoom, chapters, rail); marquee drifts left to right and pauses on hover; featured work becomes a swipe rail below 1100px |
| Expertise | Hero is a numbered capability index (six rows linking to the details), then the pinned four-moves story | Rules draw in row by row; hover fill sweeps from the left; scroll-driven state changes |
| Expertise detail | One metaphor per capability (layered architecture, connection mesh, automation lanes, …) + key outcomes, typed CMS sections | Hero progress drives the scene |
| Solutions | Stacked hero over a four-panel strip, one metaphor per function, editorial rows, then a function-by-function proof rail (each function with its case) | Panels curtain in; the focused panel widens and its metaphor resolves; proof rail drags/swipes with arrows |
| Solution detail | One metaphor per function: consolidation, workflow, network, insight | Scene progress, packets, bars |
| Work | Hero is a fanned hand of case covers, editorial portfolio with filters, testimonial rail | Cards fan out on load and lift on hover; parallax only on wide features; testimonial rail drags/swipes |
| Case study | Problem → before → transformation (pinned architecture morph) → after → outcome → metrics | Pinned morph, counters |
| Approach | One delivery path through seven stages; collaboration shown as two circles meeting on shared goals | Pinned path with Prev/Next and sideways swipe on the stage panel; circles converge, overlap lights, return arc draws |
| About | Calm editorial; no system diagram; client marquee; one-quote testimonial carousel | Four-line title rises line by line; photo unmasks upward; quotes swipe/drag with progress bars and arrows |
| Insights | Magazine masthead (oversized title, drawn rule), featured story, filterable asymmetric grid, newsletter preview | Title rises line by line; grid re-staggers on each filter change |
| Article | Centered masthead, 68ch measure, typed body blocks, related reading | Reading progress only |
| Contact | Split statement + two-part brief (About you / Your project) | Focus rings, label color, note fade-in |
| Legal | Calm reading layout with a table of contents that tracks the current section | None beyond color transitions |
| 404 | Hub whose nodes route back into the site | Hub draw-in |

## Verification (2026-09-19)

- `npm test`: 16 core + 10 UI tests passed. `npm run verify`: syntax, imports, dependencies, CSS OK.
- `npm run lint`: 0 errors, 2 fast-refresh warnings (constant exports beside components).
- `npm run build`: passed. The lazy Three.js chunk (~880 kB, 238 kB gzip) loads only for the desktop WebGL hero; Vite's large-chunk advisory remains.
- Automated Playwright sweep of 18 routes at 390 (FR, light, reduced motion), 768 and 1024 (EN, dark): no page errors, no console errors, no horizontal page overflow, and no reveal left hidden (except one decorative hero field).
- Screenshot review: every page at 1440 dark; Home light + 390; Insights 390 light; Contact 390 FR light; Approach, About, case study, solution and expertise details 390 FR light reduced motion; tablet Home/Insights/Contact at 768.
- Fixes from this QA round: a global heading line-height (loose two-line h2s), solution metaphor labels scaled up on phones (they rendered at ~6px), the expertise key-outcomes card no longer overlaps the buttons on phones, and the Approach signal band is shorter on mobile.

## Honesty constraints kept

- No client logos, partner badges, certifications or unverified company statistics. Case metrics and quotes are labelled illustrative.
- Leadership uses a monogram, not a fabricated portrait. Platform names are plain text with a "does not imply partnership" note.
- The project form and newsletter are previews: they validate input, then say plainly that nothing was sent or stored.
- Legal pages remain drafts that need business and legal approval.

## Still requires client input

Real photography and portraits, approved logos and testimonials, verified results, a contact email/phone, a backend for the form and newsletter, and final legal text.
