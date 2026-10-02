# Page map: what each page shows, in order, and where its content comes from today

Website: Prosperya (React + Vite), two languages (EN, FR), routes `/en/...` and `/fr/...`.
Branch: `redesign-no-repeat`. "Inline" means the text is written in the page or component code and is listed
line by line in `INLINE-TEXT.md`. File paths point into `source/`.

Code-owned on purpose (not CMS content): animations, layouts, the 3D Hub scene, diagram geometry, and which
visual a section uses (the CMS may pick among existing visuals by enum, never create one).

Site rules the content model must not let editors break (see GLOSSARY.md and docs/adr/0001-no-repeat-rules.md in
the website repo): every page has one Hero and one Close; a page shows the Hub graphic at most once; the client
Marquee is on Home only; every Close has its own title.

## Global

- Header navigation labels: `src/i18n/messages.js` (`nav`). Menu and accessibility labels: inline in `SiteHeader.jsx`.
- Footer statement, location, rights, link groups: `src/i18n/messages.js` (`footer`) and `src/components/layout/SiteFooter.jsx`.
- Common labels (view case study, retry, loading, no results): `src/i18n/messages.js` (`common`); empty and error states: `EmptyState.jsx`, `ErrorState.jsx`, `AppErrorBoundary.jsx` (inline).
- Legal page slugs are translated per language in `src/i18n/legalRoutes.js`.
- Images in use: see `FILES.md` (two photographs plus the social preview image). Case studies and insights without a photograph use a generated cover chosen by an enum (`cover`).

## Home `/`

1. **Hero**: `src/sections/home/heroStory.copy.js` (eyebrow, the two claim lines, lead, two button labels, audience label, five audiences each with an icon, two status labels). Visual: 3D Hub; its system labels live in `src/three/systemScene.data.js`.
2. **Client Marquee**: clients from `src/data/companyStories.data.js` (name, sector) with its demo flag; eyebrow, demo note and pause/play labels inline in `ClientCompanies.jsx`.
3. **What we do**: first four capabilities from `src/data/expertise.data.js` (icon, title, summary); heading inline in `CapabilitiesSection.jsx`.
4. **Built around NetSuite**: eyebrow, two-line heading, paragraph and link label inline in `PlatformStorySection.jsx`; module families and module names in `NetSuiteFoundation.jsx`.
5. **Featured work**: first three case studies from `src/data/caseStudies.data.js` (image or cover, category, name, description, three metrics); heading, link and note inline in `FeaturedWorkSection.jsx`.
6. **Approach preview**: process stages from `src/data/company.data.js` via `getProcess`; eyebrow, heading and link inline in `ApproachPreviewSection.jsx`.
7. **Close**: default title, description and button labels inline in `CTASection.jsx`.

## Expertise `/expertise`

1. **Hero**: eyebrow, title, lead inline in `ExpertisePage.jsx`; the capability index lists every capability (number, title, summary, link).
2. **Four moves** (pinned section): first four capabilities plus state labels in `CapabilityStory.jsx`.
3. **Architecture**: eyebrow, heading, paragraph, link inline in `ExpertisePage.jsx`; diagram labels (columns, sources, modules, outcomes) in `ArchitectureFlowDiagram.jsx`.
4. **Close**: inline in `ExpertisePage.jsx`.

## Expertise detail `/expertise/:slug` (six capabilities)

From `src/data/expertise.data.js` plus `src/data/expertiseDetails.data.js`: hero (tagline, lead, hero visual chosen by `scene` enum), key outcomes, then a list of typed sections (types in `SECTION-TYPES.md`: services, comparison, metrics, ecosystem, outcomes, flow, matrix, phases, signals), related capabilities, and a Close (`cta` variant, `ctaTitle`, `ctaText`). Some scene visuals carry their own labels (`AutomationLanes.jsx`, `LayeredArchitecture.jsx`, `NetSuiteCoreDiagram.jsx`). Section and button labels inline in `ExpertiseDetailPage.jsx` and `DetailSections.jsx`.

## Solutions `/solutions`

1. **Hero**: inline in `SolutionsPage.jsx`; below it a four-panel strip, one per solution (title, tagline, diagram chosen by `metaphor` enum; diagram labels in `SolutionMetaphor.jsx`).
2. **Solution rows**: each solution's title, tagline, icon, cover, pains, capabilities, outcomes (`src/data/solutions.data.js`); labels inline in `SolutionRow.jsx`.
3. **Connected architecture**: heading and paragraph inline in `SolutionsPage.jsx`; layer labels in `LayeredArchitecture.jsx`.
4. **Proof rail**: each solution paired with its case study (`caseStudyId`): cover, name, title, first metric; labels inline in `SolutionProof.jsx`.
5. **Close**: inline in `SolutionsPage.jsx`.

## Solution detail `/solutions/:slug` (four solutions)

The solution record plus its `story` (statement, lead, friction title and lines, metrics, metrics note), related capabilities, the proof case study, and a Close whose title is built from the solution title. Labels inline in `SolutionDetailPage.jsx`.

## Work `/work`

1. **Hero**: inline in `WorkPage.jsx`; a fanned deck of the first four case studies (image or cover, category, name).
2. **Filters**: industries and capabilities derived from the case studies; labels inline.
3. **Portfolio**: every case study (category, name, title, description, industry, capabilities, platforms, metrics); labels inline in `ProjectFeature.jsx`.
4. **Stats band**: selected case-study metrics (icons mapped by metric id in code); heading and note inline.
5. **Testimonials rail**: testimonials from `src/data/companyStories.data.js` (quote, name, role, company) with demo flag; labels inline in `Testimonials.jsx`.
6. **Close**: inline in `WorkPage.jsx`.

## Case study `/work/:slug` (four case studies)

The case study record plus `src/data/caseStudyDetails.data.js`: hero (industry label, intro, six hero facts, image or cover), challenge, before/after architecture (drawn by `ArchitectureMorph`), at a glance, features, platform stack, outcomes, quote, then the next case study and a contact line. Labels inline in `CaseStudyPage.jsx`.

## Approach `/approach`

1. **Hero**: inline in `ApproachPage.jsx` (title, lead, two buttons).
2. **Delivery sequence** (pinned section): seven stages from `src/data/company.data.js` (title, description, icon, activities, deliverable); header inline in `DeliverySequence.jsx`.
3. **Loop line, practices, collaboration (four circle labels), principles**: `src/pages/Approach/approach.copy.js`.
4. **FAQ**: `src/data/companyStories.data.js`, topic "approach".
5. **Close**: inline in `ApproachPage.jsx`.

## About `/about`

`src/pages/About/about.copy.js` (eyebrow, four title lines, lead, photo caption, story paragraphs, facts, leadership labels, focus list, principles, platforms note, "how we work" steps) and the photograph `public/images/paris-editorial.webp`; client marks shown still; leadership from `src/data/company.data.js` (name, role, bio, initials, LinkedIn); platforms from `src/data/platforms.data.js`; capability tags from `src/data/expertise.data.js`; one-quote testimonial carousel; Close inline in `AboutPage.jsx`.

## Insights `/insights` and Article `/insights/:slug`

Hero inline in `InsightsPage.jsx`; articles from `src/data/insights.data.js` (title, category, category id, featured flag, image or cover, dates and reading time, body). Article body is a list of blocks: a string is a paragraph, `{ h2 }`, `{ quote }`, `{ list: [] }`. Article page: the same record, related articles, and the newsletter (copy inline in `src/components/insight/Newsletter.jsx`; sign-up is not connected yet).

## Contact `/contact`

Eyebrow, title, lead, three "what happens next" steps and the privacy notice inline in `ContactPage.jsx`; form fields from `src/data/projectInquiry.data.js` (field name, label, type, required, options, max length); error messages inline; FAQ topic "contact". Field names are used by validation and must stay stable.

## Legal (four documents)

`src/data/legal.data.js`; marked as drafts awaiting legal approval.

## 404

Inline in `NotFoundPage.jsx`; the Hub's nodes link to six sections.
