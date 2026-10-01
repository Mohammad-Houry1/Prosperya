# Visual refinement verification

Third pass completed 2026-09-19 against the ten supplied reference images. It replaces the second pass (2026-09-15).

## Art direction per page

Each page has its own composition and motion idea; no two pages share a hero template. The no-repeat rules (docs/adr/0001-no-repeat-rules.md, GLOSSARY.md): every Hero fits one screen and never pins; a page shows the Hub at most once; at most one Pinned story per page, below the Hero, about 2.25 screens, none on phones; every Close has a still Wave and its own title; the Marquee runs on Home only, with a pause control.

Shared motion: each Hero title rises line by line on load (GSAP SplitText); only cards and images fade up as they enter; headings and body text never wait on a reveal. Gestures: every horizontal scroller swipes on touch and trackpads and drags with the mouse (`src/motion/gestures.js`).

| Page | Composition | Motion |
| --- | --- | --- |
| Home | One-screen Hero: claim beside the 3D Hub in a framed panel; client Marquee; "Built around NetSuite" as modules standing on one foundation (not a Hub); Close is the general band | The Hub settles once from fragmented to orchestrated on load (about 4s), then holds still; Marquee drifts left to right with a pause button; featured work becomes a swipe rail below 1100px |
| Expertise | Hero is a numbered capability index, then the pinned four-moves section (the page's one Hub), then the architecture as a left-to-right flow | Index rows draw in and fill on hover; four moves pin for about 2.25 screens (no pin on phones); flow packets run twice, then stop |
| Expertise detail | One metaphor per capability (layered architecture, connection mesh, automation lanes, …) + key outcomes, typed CMS sections | Hero progress drives the scene |
| Solutions | Stacked hero over a four-panel strip, one metaphor per function, editorial rows, then a function-by-function proof rail (each function with its case) | Panels curtain in; the focused panel widens and its metaphor resolves; proof rail drags/swipes with arrows |
| Solution detail | One metaphor per function: consolidation, workflow, network, insight | Scene progress, packets, bars |
| Work | Hero is a fanned hand of case covers, editorial portfolio with filters, testimonial rail | Cards fan out on load and lift on hover; parallax only on wide features; testimonial rail drags/swipes |
| Case study | Hero shows the case cover and headline facts; problem, before, transformation (pinned architecture morph, the page's one Hub), after, outcome; closes on the next case plus one contact line | Pinned morph (about 1.4 screens, static on phones), counters |
| Approach | One delivery path through seven stages; collaboration as two circles meeting on shared goals | Pinned path for about 2.25 screens with Prev/Next and sideways swipe; circles converge, overlap lights, return arc draws |
| About | Calm editorial; client marks shown still; one-quote testimonial carousel | Four-line title rises line by line; photo unmasks upward; quotes swipe or drag |
| Insights | Magazine masthead, featured story, filterable asymmetric grid; closes with the newsletter | Title rises line by line; grid re-staggers on each filter change |
| Article | Centered masthead, 68ch measure, typed body blocks, related reading; closes with the newsletter | Title rises line by line; reading progress |
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
