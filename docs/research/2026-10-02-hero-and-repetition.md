# Home hero structure and visual repetition on B2B consultancy and enterprise-software sites

Observed 2026-10-02. Research note for the Prosperya redesign. Facts are cited inline; interpretation and recommendations are labelled as such.

## 1. Question

> How do top B2B consultancy and enterprise-software sites structure the home hero, and how do they avoid repeating visuals and animations across sections and pages? Cover:
> 1. How the home hero is structured (one viewport vs. pinned scroll story; what the hero visual is; how many text elements).
> 2. How long pinned/sticky scroll stories run (in viewport heights) and when they hurt (usability, accessibility, performance).
> 3. How many times a site's signature visual/motif appears per site, and how it is varied when it recurs.
> 4. How closing CTAs differ from page to page (same component everywhere vs. varied per page).
> 5. How motion is varied section by section (which sections animate, what kind, which stay still).

### Summary

- None of the 14 sampled sites pins its home hero. Every measurable home hero fits about one viewport (0.8 to 1.14 viewport heights), led by one visual (product UI, a looping film, or one animated graphic) and 1 to 5 text elements.
- Pinned or sticky scroll stories appeared on 4 of 14 sites, always below the hero, with 1.0 to 3.75 viewport heights of pinned travel (one partial-height sticky column held for about 4.4). Two current Apple product pages showed no pinned sections at the positions sampled.
- Where a signature visual could be traced (Stripe wave, Snowflake arrow container, Thoughtworks hero film, Gembaware connecting lines), it appeared 1 to 3 times per page and changed size, colour, footage or orientation between uses.
- Closing CTAs: 2 sites reuse one identical band (Snowflake everywhere, Linear on product pages). Most keep one component but rewrite it per page. Several swap the component by page intent: a sales form on enterprise pages, a careers block on About, a FAQ on product pages.
- Motion clusters in the hero and one demo section. Other sections measured as still or nearly still. Most sites with autoplaying film expose pause controls.
- Recommendation for Prosperya: a one-viewport hero; at most one pinned story per page, kept to about 2 to 3 viewport heights; about one hub per page, varied when it recurs; closing CTAs that differ by page intent; most sections without motion.

## 2. Method

**Sample (14 sites, 33 pages).**

- Consultancies: McKinsey, BCG, Accenture, Thoughtworks, Slalom.
- Boutique NetSuite/ERP partner: Gembaware. Chosen because NetSuite named it 2025 Alliance Partner of the Year for France ([NetSuite, 2025 Partners of the Year](https://www.netsuite.com/portal/resource/articles/business-strategy/netsuite-celebrates-and-thanks-2025-partners-of-the-year.shtml)). It is French, like Prosperya.
- Enterprise software: Stripe, Linear, Vercel, Snowflake, ServiceNow, NetSuite, Palantir.
- Calibration for pinned scroll at scale: Apple (MacBook Pro and AirPods Pro product pages).
- For each site, the home page plus 1 or 2 inner pages (service, product or about).
- Not sampled because of time: Deloitte, Datadog, Workday. The sample already covers both categories.

**Setup.** Claude desktop browser pane, viewport emulated at 1440x900, date 2026-10-02. US English pages where offered. Accenture geo-redirected to `/en` and `/en/services/ai-data?country=LB`. Gembaware is in French.

**What was measured, by script on each page.** The script first scrolled each page top to bottom in 900 px steps to load lazy content. It then recorded:

- page height divided by `innerHeight`;
- GSAP `.pin-spacer` heights, where pinned travel = spacer height minus pinned element height ([GSAP ScrollTrigger docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/): pinSpacing adds padding so later content catches up);
- CSS `position: sticky` elements taller than half a viewport, with their container height;
- `ScrollTrigger.getAll()` where GSAP exposed it;
- headings, paragraphs, links and buttons inside the first 900 px, excluding the site header and nav;
- large media in the first viewport;
- `<video>` loop, autoplay and controls attributes;
- canvases and Lottie elements;
- pause/play buttons, found by accessible name;
- `document.getAnimations()` counts per section;
- the text of the last heading block before the footer, taken as the closing CTA.

**Cookie banners.** Non-essential cookies were rejected where a reject button existed (Snowflake, Slalom). Where only accept or manage was offered (McKinsey) or only a notice was shown (ServiceNow), the banner was left untouched. No forms, sign-ins or downloads.

**What could not be measured.**

- **What the pages actually looked like.** The browser pane was hidden, so animation frames were throttled. A screenshot of linear.app came out blank because its entrance animations never ran. Visual types are therefore inferred from DOM signals (asset file names, element types, sizes), not from viewing.
- **Motion intensity.** `getAnimations()` is a one-moment count of CSS and WAAPI animations. It cannot see JavaScript canvas loops. Treat motion findings as coarse.
- **Pinning that uses neither GSAP pin-spacers nor CSS sticky** (for example, per-frame transforms) would be missed. On Apple MacBook Pro this was spot-checked at 9 scroll positions for fixed or sticky elements.
- **ServiceNow.** Content is rendered inside web components, so heading text and the hero visual type were not determined.
- **Signature motif counts** were possible only where the motif has a traceable asset name or class: Stripe, Snowflake, Thoughtworks and Gembaware. For the other sites: not measured.
- **Visual treatment of closing CTA bands** (animated or still): not measured.

## 3. Per-site observations

Viewport 1440x900, observed 2026-10-02. "vh" means multiples of the 900 px viewport height. Hero text counts exclude site header, nav and announcement bars.

### 3a. Hero and pinning

| Site | Pages observed | Home hero: height and visual | Hero text elements | Pinned / sticky sections (pinned travel) |
|---|---|---|---|---|
| Stripe | [home](https://stripe.com/), [payments](https://stripe.com/payments), [billing](https://stripe.com/billing) | One viewport (hero section 0.8 vh, logo strip directly below). Animated gradient wave on a canvas, with a static image fallback. | 4: live counter eyebrow, one H1 (headline plus lighter continuation sentence), 2 CTAs | None on all 3 pages (page heights 16.7, 20.7, 11.8 vh) |
| Linear | [home](https://linear.app/), [plan](https://linear.app/plan), [enterprise](https://linear.app/enterprise) | Hero block 1.14 vh. Product UI image (1440x810). | 3: H1, one paragraph, one announcement link | None on all 3 pages |
| Vercel | [home](https://vercel.com/), [enterprise](https://vercel.com/enterprise), [AI Gateway](https://vercel.com/ai-gateway) | One viewport (0.93 vh). Animated canvas filling the hero, plus an image. Inner pages: large SVG illustration (enterprise), interactive code widget (AI Gateway). | 3: H1, 2 CTAs (plus event bar) | Home and enterprise: none. AI Gateway: a 0.63 vh sticky column holds for about 4.4 vh while cards scroll past (partial height, not a full-viewport pin). |
| Snowflake | [home](https://www.snowflake.com/en/), [why Snowflake](https://www.snowflake.com/en/why-snowflake/), [platform](https://www.snowflake.com/en/product/platform/) | One viewport. Product UI illustrations (CLI screens as SVG). Inner pages: arrow-container graphic (why Snowflake), platform diagram (platform). | 5: H1, 2 paragraphs, 2 CTAs (plus event banner) | None. GSAP is loaded; ScrollTrigger reported 0 triggers on home. |
| ServiceNow | [home](https://www.servicenow.com/), [ITSM](https://www.servicenow.com/products/itsm.html) | One viewport. Visual not determined (web components). | 4: two-line H1, paragraph, 2 CTAs (plus event banner) | No story pin. A decorative 1 vh sticky background layer stays behind the whole page (8.8 vh home, 10.5 vh ITSM). |
| NetSuite | [home](https://www.netsuite.com/portal/home.shtml), [ERP](https://www.netsuite.com/portal/products/erp.shtml) | Short home page (2.3 vh total): a promo carousel with previous/next buttons, then the H1 block with static images | 7 or more across the carousel slide (eyebrow, heading, paragraph, CTA) and the H1 block (H1, H2, paragraph) | None |
| Palantir | [home](https://www.palantir.com/), [AIP](https://www.palantir.com/platforms/aip/) | One viewport, full-bleed looping autoplay video reel (1425x900) | 2: H1, 1 CTA (plus announcement link) | Home: none. AIP: two pins, 1.0 vh (at 1 vh) and 3.75 vh (at 3 vh; three product videos change in turn). |
| Apple (calibration) | [MacBook Pro](https://www.apple.com/macbook-pro/), [AirPods Pro](https://www.apple.com/airpods-pro/) | Welcome section exactly 1.0 vh on both | Not measured | None detected, even though the pages are 71.5 and 47 vh long. No pin-spacers. No sticky or fixed element taller than 0.3 vh except the nav overlay, at 9 sampled positions. |
| McKinsey | [home](https://www.mckinsey.com/), [Operations](https://www.mckinsey.com/capabilities/operations/how-we-help-clients), [Strategy & Corp. Finance](https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/how-we-help-clients) | Type-led brand statement and subline, then 5 editorial tiles (case study, podcast, report, report, webinar). No hero media. Operations page: looping video band (1440x500). | Home: 2 statement lines plus 5 tiles (label and title each) and 1 CTA | None on all 3 pages |
| BCG | [home](https://www.bcg.com/), [AI](https://www.bcg.com/capabilities/artificial-intelligence) | One viewport, full-bleed looping brand film | 2: H1, 1 CTA | None |
| Accenture | [home](https://www.accenture.com/us-en), [Data & AI](https://www.accenture.com/us-en/services/data-ai) | Looping background video band (1425x400) behind a brand-line H1 (one letter drawn as a graphic). Three feature cards in the first viewport. | 3 (H1, H2, paragraph) plus 3 cards | Home: sticky awards stage, 1 vh tall in a 3.3 vh container (about 2.3 vh of travel), plus a minor GSAP pin of 0.17 vh. Data & AI: none. |
| Thoughtworks | [home](https://www.thoughtworks.com/), [what we do](https://www.thoughtworks.com/what-we-do), [about](https://www.thoughtworks.com/about-us) | One viewport, full-bleed looping film | 1: a two-line H1, no CTA | Home: 2.24 vh (case-study section at about 4 vh). What we do: 1.68 vh. About: none. |
| Slalom | [home](https://www.slalom.com/us/en), [AI](https://www.slalom.com/us/en/services/artificial-intelligence) | Full-viewport rotating carousel (7 full-size media elements in the DOM, mostly video), with pause, previous and next buttons | 2 to 4 per slide: eyebrow, H1, 1 or 2 CTAs | None |
| Gembaware | [home](https://www.gembaware.com/), [Oracle NetSuite](https://www.gembaware.com/oracle-netsuite) | One viewport. Background illustration: city line drawing plus a connecting-lines shape. | 5: eyebrow, H1, paragraph, 2 CTAs | None |

### 3b. Motif, closing CTA, motion

| Site | Signature motif recurrence | Closing CTA across sampled pages | Motion signals by section |
|---|---|---|---|
| Stripe ([home](https://stripe.com/), [payments](https://stripe.com/payments), [billing](https://stripe.com/billing)) | Gradient wave: once per page, always in the hero. Each product page gets its own art: billing has a billing-specific fallback asset; payments uses a different gradient component. | Same heading on all 3 (a "get started" band). Body copy and the adjacent link cards are specific to each page. | Home: hero canvas with 38 running animations; the product-demo section had 58; the other 7 sections had 0 to 1 at measurement time. |
| Linear ([home](https://linear.app/), [plan](https://linear.app/plan), [enterprise](https://linear.app/enterprise)) | Not measured. The recurring visual is product UI in every feature section. | Identical band on home and plan (same heading, same 2 buttons). Enterprise ends with a contact-sales form instead. | Home: no video, no canvas. Running animations were found in 2 of 7 sections (9 and 1). Plan: one looping autoplay video. |
| Vercel ([home](https://vercel.com/), [enterprise](https://vercel.com/enterprise), [AI Gateway](https://vercel.com/ai-gateway)) | Not measured | Different on each page. Home: a short deploy CTA. Enterprise: a trial-request form. AI Gateway: a get-started section, then a FAQ. | AI Gateway: one section had 80 running animations, two had 6 to 8, the rest 0. Home: canvas hero. |
| Snowflake ([home](https://www.snowflake.com/en/), [why](https://www.snowflake.com/en/why-snowflake/), [platform](https://www.snowflake.com/en/product/platform/)) | Arrow-container graphic, once per page. Small gray version mid-page on home (4.6 vh). Large gray version in the hero on Why Snowflake. Once mid-page on Platform (2.7 vh). | Identical closing band on all 3 (same heading, start-for-free and watch-a-demo buttons). Platform adds a page-specific trial CTA above the FAQ. | Home: 4 running animations, no video, no canvas |
| ServiceNow ([home](https://www.servicenow.com/), [ITSM](https://www.servicenow.com/products/itsm.html)) | Not measured | Same structure, different copy. Home: a general "put AI to work" close with contact and demos. ITSM: a product-specific expert-demo close. | Home: 9 Lottie elements and 2 full-viewport canvases mid-page (3.6 and 4.6 vh) |
| NetSuite ([home](https://www.netsuite.com/portal/home.shtml), [ERP](https://www.netsuite.com/portal/products/erp.shtml)) | Not measured | No closing band. Home ends on a product promo with a learn-more link. ERP ends with a resources list. | Promo carousel. One video on home, without loop or autoplay attributes. ERP: no video, no canvas. |
| Palantir ([home](https://www.palantir.com/), [AIP](https://www.palantir.com/platforms/aip/)) | Not measured (video-led, no single graphic) | Home ends with customer testimonials and no CTA band. AIP ends with a product-specific build-and-request-access CTA. | Home: looping hero video; no pause/play button found by accessible name. AIP: 10 looping videos. |
| Apple ([MacBook Pro](https://www.apple.com/macbook-pro/), [AirPods Pro](https://www.apple.com/airpods-pro/)) | n/a | Not compared | 14 and 16 videos. 10 play/pause buttons with descriptive labels on each page. |
| McKinsey ([home](https://www.mckinsey.com/), [Ops](https://www.mckinsey.com/capabilities/operations/how-we-help-clients), [Strategy](https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/how-we-help-clients)) | Not measured | The two practice pages share one component ("connect with our [practice]") with practice-specific contact and social channels. Home ends with an app promo. | Home: 1 video, with controls. Operations: looping hero video band. Strategy: no video. |
| BCG ([home](https://www.bcg.com/), [AI](https://www.bcg.com/capabilities/artificial-intelligence)) | Not counted. Film appears on both pages in different formats: full-viewport on home, a 1265x382 band on AI. | A shared ask-a-question module on both pages. Home then closes with careers and newsletter. AI adds page-specific "explore more" links. | Home: 2 pause buttons for the film |
| Accenture ([home](https://www.accenture.com/us-en), [Data & AI](https://www.accenture.com/us-en/services/data-ai)) | Not measured | A careers block closes both pages, with copy specific to each (general careers vs data careers) | Home: 3 Lottie, 3 pause/play buttons. Data & AI: 4 Lottie, carousel with pause. |
| Thoughtworks ([home](https://www.thoughtworks.com/), [what we do](https://www.thoughtworks.com/what-we-do), [about](https://www.thoughtworks.com/about-us)) | Abstract looping film, once per page in the hero, with different footage per page (home and What we do use different video files). About uses a static photo banner instead. | Same component, different copy and button: build differently / get in touch (home), explore capabilities / get in touch (What we do), careers (About) | Home: 7 pause/play buttons, 1 Lottie, 1 pin |
| Slalom ([home](https://www.slalom.com/us/en), [AI](https://www.slalom.com/us/en/services/artificial-intelligence)) | Not measured | Home ends with an end-to-end services block. AI ends with a FAQ. | Home: 21 pause/play buttons, 6 Lottie. AI: rotating hero of 3 static images. |
| Gembaware ([home](https://www.gembaware.com/), [Oracle NetSuite](https://www.gembaware.com/oracle-netsuite)) | Connecting-lines background shape. Home: 3 placements, using 3 different shape variants. NetSuite page: 2 placements of one variant, flipped vertically at the top and unflipped at the bottom. | Home ends with a question, a talk-to-an-expert button and contact details. NetSuite page ends with a FAQ and a contact link. | 2 running animations at measurement. No video, canvas or Lottie. |

## 4. Findings

### 4.1 Home hero structure

Observed:
- **No home hero was pinned.** No home page in the sample had a pin-spacer or tall sticky element in its hero. Measured hero heights were 0.8 to 1.14 vh: Stripe 0.8 ([stripe.com](https://stripe.com/)), Vercel 0.93 ([vercel.com](https://vercel.com/)), Linear 1.14 ([linear.app](https://linear.app/)), Apple 1.0 ([MacBook Pro](https://www.apple.com/macbook-pro/), [AirPods Pro](https://www.apple.com/airpods-pro/)). Film heroes are one viewport tall: Palantir 900 px ([palantir.com](https://www.palantir.com/)), BCG 900 px ([bcg.com](https://www.bcg.com/)), Thoughtworks 846 px ([thoughtworks.com](https://www.thoughtworks.com/)).
- **Four families of hero visual:**
  - product UI: Linear, Snowflake, Vercel AI Gateway, Stripe payments;
  - full-bleed looping film: Palantir, BCG, Thoughtworks, Slalom, plus Accenture as a shorter band;
  - one animated generative graphic: the Stripe wave, the Vercel canvas;
  - illustration or type-led: Gembaware, Vercel enterprise, McKinsey home.
  Sources: the hero rows of table 3a.
- **Hero text elements ranged from 1 to 5,** not counting announcement bars:
  - Thoughtworks 1;
  - Palantir and BCG 2;
  - Linear and Vercel 3;
  - Stripe and ServiceNow 4;
  - Snowflake and Gembaware 5.
  The sites whose hero is a film used the fewest words (1 or 2). Sources: table 3a.
- **For comparison, Prosperya's hero copy block** has 6 element groups: eyebrow, two-line H1, lead, 2 CTAs, and an audience label with its list. Four chapters with a progress rail come after it inside the same pinned section (`src/sections/home/HeroSection.jsx`).

Interpretation: across this sample the convention is a one-viewport hero with one dominant visual and a short message. The longer story is told in ordinary sections below the hero.

### 4.2 Length of pinned or sticky stories, and when they hurt

Observed (sample):
- **4 of 14 sites had a pinned or sticky story section, none of them in the hero:**
  - Palantir AIP: 1.0 vh and 3.75 vh ([AIP](https://www.palantir.com/platforms/aip/)).
  - Thoughtworks: 2.24 vh on home and 1.68 vh on What we do ([home](https://www.thoughtworks.com/), [what we do](https://www.thoughtworks.com/what-we-do)).
  - Accenture: about 2.3 vh of sticky travel ([home](https://www.accenture.com/us-en)).
  - Vercel: a partial-height sticky column held for about 4.4 vh ([AI Gateway](https://vercel.com/ai-gateway)).
- **The other 10 sites, including both Apple product pages, had no pinned story** on the pages sampled.
- **Where they appeared, pinned stories started 1 to 4 vh down the page.**

Observed (Prosperya, from the code):
- **Home hero:** `.story` is `height: 420svh` with a sticky stage of `100svh` minus the header (`src/sections/home/HomeHero.module.css`). That is about 3.2 vh of pinned travel, starting at the top of the page.
- **Approach DeliverySequence:** `height: calc(100svh + var(--stages) * 55svh)` with 7 stages (`src/pages/Approach/DeliverySequence.module.css`, `src/data/company.data.js`). That is 485svh, about 3.85 vh of pinned travel.
- **Expertise CapabilityStory:** 4 chapters at `min-height: 86svh` scroll past a sticky column (`src/pages/Expertise/CapabilityStory.module.css`). That is about 3.4 vh.
- **Each of these is about as long as, or longer than, the longest full-viewport pin observed in the sample** (Palantir AIP, 3.75 vh). The home one is the only one in either set that starts at the very top of a page.

When they hurt, per first-party research:
- **Disorientation.** NN/g's own usability study of scrolljacking, testing sites from several industries, found that most participants were at least mildly disoriented. Short, fast scrolljacks that add contextual information were tolerated best. Task-oriented users were the least patient. The most severe problems came when users had to read animated text while scrolling ([NN/g, Scrolljacking 101, Sara Paul, 2023](https://www.nngroup.com/articles/scrolljacking-101/)).
- **NN/g's guidelines in that article:**
  - use scrolljacking only below the fold, to highlight calls to action that are already above the fold;
  - limit the text inside it;
  - test the scroll rate to reduce interaction cost;
  - avoid it on mobile.
  ([NN/g, Scrolljacking 101](https://www.nngroup.com/articles/scrolljacking-101/))
- **Attention concentrates at the top of the page.** In NN/g's eyetracking study (120 participants, 1920x1080 screens), 57% of page-viewing time was above the fold, 74% in the first two screenfuls and 81% in the first three ([NN/g, Scrolling and Attention, Therese Fessenden, 2018](https://www.nngroup.com/articles/scrolling-and-attention/)).
- **Scroll-triggered text animation delays people.** NN/g reports this from its usability research. It advises against such effects on sites that support high-stakes tasks, naming B2B, financial and medical sites. Effects should run only the first time the user scrolls down, and should apply to secondary content rather than body text ([NN/g, Scroll-Triggered Text Animations Delay Users, Aurora Harley, 2017](https://www.nngroup.com/articles/scroll-animations/)).

Interpretation:
- NN/g defines scrolljacking as changing the speed or direction of scrolling. A GSAP scrubbed pin keeps native scrolling, but the page stops moving while the user scrolls, which produces the same symptom. NN/g's findings are therefore the closest first-party evidence for pinned stories, not an exact match.
- On that reading, Prosperya's hero is at the riskiest end on three counts:
  - it pins at the top of the page, not below the fold;
  - it carries four chapters of text;
  - it spends about 3 of the first 4 screenfuls (where most viewing time goes, per Fessenden) on one composition.

### 4.3 How often a signature motif recurs, and how it varies

Observed:
- **Stripe:** the gradient wave appears once per page and only in the hero. Each product page has its own version: billing ships a billing-specific fallback image; payments uses a different gradient component ([home](https://stripe.com/), [payments](https://stripe.com/payments), [billing](https://stripe.com/billing)).
- **Snowflake:** the arrow-container graphic appears once per page. Its size and placement change: small and mid-page on home, large in the hero on Why Snowflake, mid-page on Platform ([home](https://www.snowflake.com/en/), [why](https://www.snowflake.com/en/why-snowflake/), [platform](https://www.snowflake.com/en/product/platform/)).
- **Thoughtworks:** one hero film per page, with different footage on home and What we do. The About page replaces the film with a static photo ([home](https://www.thoughtworks.com/), [what we do](https://www.thoughtworks.com/what-we-do), [about](https://www.thoughtworks.com/about-us)).
- **Gembaware:** the connecting-lines shape appears 3 times on home, as 3 different variants, and 2 times on the NetSuite page, as one variant flipped at the top and unflipped at the bottom ([home](https://www.gembaware.com/), [NetSuite](https://www.gembaware.com/oracle-netsuite)).
- **Other sites:** not measured (no traceable asset).

Observed (Prosperya, from imports and the brief):
- **The hub family** (a centre with labelled nodes) renders in these places:
  - Home hero (`OrchestrationExperience`) and Home "Built around NetSuite" (`NetSuiteCoreDiagram`): 2 on Home;
  - Expertise `CapabilityStory` and `ArchitectureFlowDiagram`, per the brief;
  - Expertise detail, where `NetSuiteCoreDiagram` and `HubDiagram` (via `DetailSections`) are both imported (whether every detail page renders both depends on data, not checked);
  - Case study (`HubDiagram`);
  - 404 (`HubDiagram`).
- **`SignalWave`** renders in every `CTASection` (10 page components plus Home through `FinalCtaSection`). It also appears in the Approach hero and `DeliverySequence`, the Expertise detail hero, and inline on the case study page. That makes 3 waves on Approach and 2 on Expertise detail and on case study (`src/components/common/CTASection.jsx` and the grep of imports).

Interpretation: the sites that do have a signature visual ration it to about once per page (Gembaware, at 2 to 3, is the most frequent). They change its scale, colour, footage or orientation, and some pages skip it entirely. Prosperya currently shows the hub twice on Home and the wave up to three times on one page, which is more than any measurable site in the sample.

### 4.4 Closing CTAs from page to page

Observed patterns:
- **(a) One identical band everywhere.** Snowflake: the same heading and two buttons on all 3 pages ([home](https://www.snowflake.com/en/), [why](https://www.snowflake.com/en/why-snowflake/), [platform](https://www.snowflake.com/en/product/platform/)). Linear: the same band on its product pages ([home](https://linear.app/), [plan](https://linear.app/plan)).
- **(b) One component, copy rewritten per page.**
  - Stripe: the same heading, page-specific body and link cards ([payments](https://stripe.com/payments), [billing](https://stripe.com/billing)).
  - McKinsey: a per-practice "connect" block ([Ops](https://www.mckinsey.com/capabilities/operations/how-we-help-clients), [Strategy](https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/how-we-help-clients)).
  - Thoughtworks: different line and button per page ([home](https://www.thoughtworks.com/), [what we do](https://www.thoughtworks.com/what-we-do)).
  - ServiceNow: general vs product-specific ([home](https://www.servicenow.com/), [ITSM](https://www.servicenow.com/products/itsm.html)).
  - Accenture: careers vs data careers ([home](https://www.accenture.com/us-en), [Data & AI](https://www.accenture.com/us-en/services/data-ai)).
- **(c) A different component chosen by page intent.**
  - A sales or trial form on enterprise pages: [Linear enterprise](https://linear.app/enterprise), [Vercel enterprise](https://vercel.com/enterprise).
  - A careers block on About: [Thoughtworks about](https://www.thoughtworks.com/about-us).
  - A FAQ ending on product or service pages: [Vercel AI Gateway](https://vercel.com/ai-gateway), [Slalom AI](https://www.slalom.com/us/en/services/artificial-intelligence), [Gembaware NetSuite](https://www.gembaware.com/oracle-netsuite).
  - No CTA band at all: [Palantir home](https://www.palantir.com/), [NetSuite home](https://www.netsuite.com/portal/home.shtml).

Observed (Prosperya):
- **Every page already passes its own title and description** to `CTASection`, and the component has three layouts: band, card and split.
- **The repetition is in structure and visual, not in the words:**
  - every variant draws an animated `SignalWave`;
  - every variant carries the same two buttons (start a conversation, plus a secondary);
  - five pages reuse the "Ready to transform..." formula as title or eyebrow: About, Case study and Solutions as title; Approach and Expertise as eyebrow (`src/pages/*/*Page.jsx`).

Interpretation: an identical band works when the page has a single action (Snowflake's trial). Sites with several audiences pick the close by page intent. Prosperya varies the words but keeps the same moving visual and the same formula, which is the part a visitor actually notices.

### 4.5 How motion varies by section

Observed:
- **Running animations cluster in one or two sections per page.**
  - Stripe home: hero 38 and product demo 58, then 0 to 1 in the remaining 7 sections ([stripe.com](https://stripe.com/)).
  - Vercel AI Gateway: 80 in one section, 0 to 8 elsewhere ([AI Gateway](https://vercel.com/ai-gateway)).
  - Linear home: animations in 2 of 7 sections ([linear.app](https://linear.app/)).
- **Film-led sites put motion in the hero and give it controls.** Pause or play buttons were found on BCG (2), Thoughtworks (7), Slalom (21), Accenture (3) and Apple (10 per page, with descriptive labels). None was found by accessible name on the Palantir home page. Sources: table 3b.
- **Lottie is used for small illustrations.** ServiceNow had 9, Slalom 6, Accenture 3 to 4.
- **Some sites are nearly static.** NetSuite ERP, Gembaware and McKinsey Strategy showed no video, no canvas and few or no running animations ([ERP](https://www.netsuite.com/portal/products/erp.shtml), [Gembaware](https://www.gembaware.com/), [Strategy](https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/how-we-help-clients)).

Observed (Prosperya):
- **The same fade-up reveal (`data-reveal`) is applied 109 times across 36 JSX files** (`src/styles/animations.css`, grep).

Interpretation:
- Motion works as a spotlight: one moving hero and at most one interactive demo, with everything else still.
- NN/g's guidance points the same way for a B2B audience: animate supporting content, once, and leave body text alone ([NN/g, scroll animations](https://www.nngroup.com/articles/scroll-animations/)).

## 5. Accessibility and performance constraints

- **WCAG 2.2 SC 2.2.2 Pause, Stop, Hide (Level A).**
  - The rule: content that moves, blinks or scrolls, starts automatically, lasts more than five seconds and is shown alongside other content must have a way for the user to pause, stop or hide it, unless the motion is essential. Auto-updating content has a similar rule.
  - The Understanding document explains five seconds as long enough to get attention but short enough to wait out.
  - Its sufficient techniques are page-level mechanisms, such as G4 (allow pause and restart) and G186 (a control that stops moving content).
  - It does not mention prefers-reduced-motion or decorative animation. Source: [W3C, Understanding SC 2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html).
  - Interpretation: a continuously looping canvas, such as `SignalWave` in every CTA, meets the "starts automatically, lasts more than 5 s, in parallel" conditions. A reduced-motion media query alone is not among the listed sufficient techniques.
- **WCAG 2.2 SC 2.3.3 Animation from Interactions (Level AAA).**
  - The rule: motion triggered by interaction, which includes scroll-driven motion, can be disabled unless it is essential.
  - The Understanding document cites parallax as an example and describes severe vestibular reactions (nausea, migraine).
  - It lists C39, using the CSS prefers-reduced-motion query, as a sufficient technique. Source: [W3C, Understanding SC 2.3.3](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html).
- **prefers-reduced-motion.** MDN defines it as detecting that the user asked the device to minimise non-essential motion. It notes that scaling or panning large objects can trigger vestibular symptoms ([MDN, prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)). Pinned 3D scenes that tilt and zoom on scroll fall into that category (interpretation).
- **GSAP pin mechanics** ([GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)):
  - a pinned element sticks while the rest of the content keeps scrolling;
  - by default pinSpacing adds padding so later content catches up, so pin length adds directly to page length;
  - `end` sets how long the pin lasts;
  - `scrub` ties animation progress to the scrollbar;
  - `anticipatePin` avoids a flash of unpinned content;
  - `pinReparent` is described as expensive, to use only if needed;
  - ScrollTrigger recalculates positions on resize.
- **GSAP and reduced motion.** `gsap.matchMedia()` reverts the animations and ScrollTriggers created for a query when that query stops matching. Its documented example uses a reduce-motion condition to skip to the end ([GSAP matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/)).
- **Rendering cost.** Google's guide recommends animating only `opacity` and `transform`, avoiding properties that trigger layout or paint, and using `will-change` sparingly ([web.dev, animations guide, Basques and Andrew](https://web.dev/articles/animations-guide)).
- **Offscreen animation loops.** MDN says browsers pause `requestAnimationFrame` in background tabs and hidden iframes ([MDN, requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame)).
  - Interpretation: an offscreen canvas in a visible tab keeps running unless the code stops it.
  - Observed: `SignalWave.jsx` already stops on `IntersectionObserver` and `document.hidden`.
- **Auto-advancing carousels** hurt discoverability and control. NN/g recommends showing new panels only when users ask for them ([NN/g, Auto-Forwarding Carousels, Jakob Nielsen, 2013](https://www.nngroup.com/articles/auto-forwarding/)). This applies to the rotating heroes observed at Slalom and NetSuite.

## 6. Implications for Prosperya (recommendations, not facts)

Ranked by expected impact. Each item names the files it touches.

1. **Make the home hero one viewport, with no pin.**
   - Files: `src/sections/home/HeroSection.jsx`, `src/sections/home/HomeHero.module.css`, `src/sections/home/heroStory.copy.js`.
   - Remove the `story` mode (the `420svh` section and the scrubbed timeline). Use the existing `static` layout, copy beside the visual, as the desktop default, at `min-height: calc(100svh - var(--header-height))`.
   - Cut the hero to 4 or 5 text elements: eyebrow, "Complexity. Orchestrated.", lead, 2 CTAs. Move the audience row below the fold.
   - Let the 3D hub play a short settle from fragmented to orchestrated on load, under 5 seconds, then hold still. Alternatively, give it a pause button.
   - Move the four chapters into a normal, unpinned section. `CapabilitiesSection` already sits two sections below.
   - Basis: 0 of 14 home heroes pinned; NN/g's below-the-fold rule; 57% and 74% attention in the first one and two screenfuls; SC 2.2.2.
2. **Allow at most one pinned story per page, below the fold, about 2 to 3 vh, and never on phones.**
   - Approach `DeliverySequence` (`src/pages/Approach/DeliverySequence.module.css`): cut the per-stage step from `55svh` to about `25svh`. That gives 100 + 7 × 25 = 275svh, about 1.75 vh of travel. Or drop the pin and let the existing stage buttons drive it.
   - Expertise `CapabilityStory` (`src/pages/Expertise/CapabilityStory.module.css`): lower `min-height: 86svh` to about `60svh` per chapter.
   - Home phones (`HomeHero.module.css`, the mobile `.track` sticky diagram): render the diagram in place, not sticky.
   - Basis: the sampled pins ran 1.0 to 3.75 vh; NN/g advises against scrolljacking on mobile and against much text inside it.
3. **Give the hub motif a budget of one per page, and vary it when it recurs.**
   - Home: keep the 3D hub in the hero only. In `src/sections/home/PlatformStorySection.jsx`, replace `NetSuiteCoreDiagram` with a non-hub visual that already exists. `LayeredArchitecture.jsx` (a stack, today used only on Solutions) or `AutomationLanes.jsx` (lanes) would both work.
   - Expertise: keep one hub. Let `ArchitectureFlowDiagram` read as a left-to-right flow, and make sure `CapabilityStateVisual` (in `CapabilityStory`) does not draw a centre-and-nodes layout too.
   - Expertise detail and Case study: never render `NetSuiteCoreDiagram` and `HubDiagram` on the same page.
   - 404: the hub can stay as an echo, ideally a "missing node" variant.
   - Whenever the hub recurs, change at least one of: dimension (3D in the hero, flat 2D elsewhere), scale or crop, node count, or colour. This mirrors Stripe, Snowflake and Thoughtworks.
4. **Vary the closing CTA by page intent and stop animating it everywhere.**
   - Files: `src/components/common/CTASection.jsx` and the pages that call it.
   - Make the wave static (draw one frame) in the `card` and `split` variants. Keep the animated wave in one place, Approach, where it carries the delivery metaphor.
   - Retire the "Ready to transform..." formula where it repeats: About, Case study, Solutions, plus the Approach and Expertise eyebrows.
   - Choose the close by intent:
     - Insights and Article: subscribe or "read next";
     - Case study: next case study plus contact;
     - About: team or careers;
     - Expertise detail: a specific offer such as a NetSuite diagnostic;
     - Home: the general band.
   - This uses the existing `variant`, `title` and `secondary` props. A new prop is needed only if one of these closes needs a different action.
5. **Let most sections stay still.**
   - Files: `src/styles/animations.css` and the 36 files with `data-reveal`.
   - Keep `data-reveal` on images and cards. Remove it from headings and body paragraphs, so text never waits on a reveal.
   - Leave these fully still:
     - client logos (`ClientCompanies`);
     - Featured work (hover only);
     - Approach preview;
     - article body;
     - legal pages;
     - the closing CTA, once the wave is static.
   - Target per page: one moving hero and at most one interactive or pinned demo.
   - Basis: the per-section counts in 4.5; NN/g's advice to animate secondary content, once, on B2B sites.
6. **Accessibility guardrails for whatever motion remains.**
   - Any loop that runs longer than 5 seconds alongside other content gets a visible pause control or stops itself within 5 seconds. Today that covers `SignalWave` instances and any idle motion in the 3D hero.
   - Keep the existing reduced-motion paths (`useReducedMotion` in `HeroSection.jsx`, `SignalWave.jsx`, `DeliverySequence.jsx`). Create ScrollTriggers inside `gsap.matchMedia()` so they revert cleanly when reduced motion is on.
   - Animate only `transform` and `opacity` in scroll scrubs.

## 7. Sources

Sites observed (2026-10-02, 1440x900):

| URL | Used for |
|---|---|
| https://stripe.com/ | Hero, wave motif, section motion counts, closing CTA |
| https://stripe.com/payments | Inner page hero, wave variant, closing CTA |
| https://stripe.com/billing | Inner page hero, wave variant, closing CTA |
| https://linear.app/ | Hero, sections, closing CTA |
| https://linear.app/plan | Inner hero (video), identical closing CTA |
| https://linear.app/enterprise | Form-based close |
| https://vercel.com/ | Hero, closing CTA |
| https://vercel.com/enterprise | Illustration hero, trial-form close |
| https://vercel.com/ai-gateway | Sticky column length, section motion, FAQ close |
| https://www.snowflake.com/en/ | Hero, arrow motif, identical close, GSAP with 0 triggers |
| https://www.snowflake.com/en/why-snowflake/ | Arrow motif in hero, identical close |
| https://www.snowflake.com/en/product/platform/ | Arrow motif mid-page, identical close plus trial CTA |
| https://www.servicenow.com/ | Hero text, sticky background, Lottie and canvas, close |
| https://www.servicenow.com/products/itsm.html | Product-specific close |
| https://www.netsuite.com/portal/home.shtml | Short home with carousel, no closing band |
| https://www.netsuite.com/portal/products/erp.shtml | Static product page, resources close |
| https://www.netsuite.com/portal/resource/articles/business-strategy/netsuite-celebrates-and-thanks-2025-partners-of-the-year.shtml | Choice of Gembaware (2025 Alliance Partner of the Year, France) |
| https://www.palantir.com/ | Film hero, no close band, no pause button found |
| https://www.palantir.com/platforms/aip/ | Two GSAP pins (1.0 and 3.75 vh), product close |
| https://www.apple.com/macbook-pro/ | Calibration: 1.0 vh hero, no pins at 9 positions, play/pause labels |
| https://www.apple.com/airpods-pro/ | Calibration: 1.0 vh hero, no pins, play/pause labels |
| https://www.mckinsey.com/ | Type-led hero with editorial tiles, close |
| https://www.mckinsey.com/capabilities/operations/how-we-help-clients | Video band hero, practice close |
| https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/how-we-help-clients | Practice close (same component, different copy) |
| https://www.bcg.com/ | Film hero (2 text elements), pause buttons, close |
| https://www.bcg.com/capabilities/artificial-intelligence | Video band, shared module plus page-specific links |
| https://www.accenture.com/us-en | Video band hero, sticky awards, careers close |
| https://www.accenture.com/us-en/services/data-ai | Careers close with page copy, carousel pause |
| https://www.thoughtworks.com/ | Film hero (1 text element), 2.24 vh pin, close |
| https://www.thoughtworks.com/what-we-do | Different hero film, 1.68 vh pin, close copy |
| https://www.thoughtworks.com/about-us | Static banner instead of film, careers close |
| https://www.slalom.com/us/en | Rotating video hero with controls, close |
| https://www.slalom.com/us/en/services/artificial-intelligence | Rotating image hero, FAQ close |
| https://www.gembaware.com/ | Boutique NetSuite partner hero, connecting-lines motif, close |
| https://www.gembaware.com/oracle-netsuite | Motif variant (flipped), FAQ close |

Standards, documentation and research:

| URL | Used for |
|---|---|
| https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html | SC 2.2.2 requirement, 5 s rationale, sufficient techniques |
| https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html | SC 2.3.3 requirement, parallax, vestibular effects, C39 technique |
| https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion | Definition and vestibular triggers |
| https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame | rAF pause in background tabs only |
| https://gsap.com/docs/v3/Plugins/ScrollTrigger/ | pin, pinSpacing, end, scrub, anticipatePin, pinReparent, refresh |
| https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/ | Reverting on media change, reduced-motion example |
| https://web.dev/articles/animations-guide | Animate transform and opacity, will-change sparingly |
| https://www.nngroup.com/articles/scrolljacking-101/ | NN/g usability study on scrolljacking and its guidelines |
| https://www.nngroup.com/articles/scroll-animations/ | NN/g research: scroll-triggered text animation delays users; B2B caution |
| https://www.nngroup.com/articles/scrolling-and-attention/ | NN/g eyetracking: 57% / 74% / 81% of viewing time |
| https://www.nngroup.com/articles/auto-forwarding/ | NN/g: auto-forwarding carousels |

Project files read for section 6: `src/sections/home/HeroSection.jsx`, `src/sections/home/HomeHero.module.css`, `src/components/common/CTASection.jsx`, `src/components/visuals/SignalWave.jsx`, `src/styles/animations.css`, `src/pages/Expertise/CapabilityStory.jsx` and `.module.css`, `src/pages/Approach/DeliverySequence.module.css`, `src/data/company.data.js`, and the import lines of the page components.
