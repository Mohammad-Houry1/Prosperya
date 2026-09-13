# Prosperya V1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the complete Prosperya React frontend with premium Apple-inspired storytelling, reusable mapped components, dark/light themes, EN/FR localized routing, GSAP motion, a performance-conscious React Three Fiber orchestration scene, and a mock repository/query layer that can later be swapped for CMS APIs without rewriting presentation components.

**Architecture:** React components consume normalized domain data only through repository-backed TanStack Query hooks. Local JS objects are the V1 data source; future CMS integration replaces repository internals and adds mappers. Layout, theme, localization, motion, and 3D are independent systems with focused boundaries and reduced-motion/mobile fallbacks.

**Tech Stack:** React 19, Vite, React Router, Mantine, CSS Modules, TanStack Query, GSAP + ScrollTrigger, Three.js + React Three Fiber + Drei, Vitest + Testing Library.

**Spec:** `docs/superpowers/specs/2026-09-06-prosperya-frontend-design.md`

## Global Constraints

- Frontend only; no backend.
- Prosperya accent color is exactly `#3B9B71` and used sparingly.
- Full dark and light visual systems use semantic CSS variables.
- Locale is part of URLs: `/en/...` and `/fr/...`.
- Desktop, tablet, and mobile must be intentionally designed.
- Repeated UI is rendered from arrays/objects into reusable domain components.
- Pages do not fetch with scattered `useEffect`; server-style state uses repository/query hooks.
- Mock data shape matches future normalized CMS contracts.
- GSAP timelines stay local to their owning component/scene and clean up on unmount.
- Three.js is V1 for the signature orchestration experience, lazy-loaded and bounded; SVG/CSS static fallback remains available for reduced motion or unsupported WebGL.
- CSS Modules own component styles; Mantine provides accessible primitives where useful.
- No giant page files, universal flag-heavy cards, inline theme colors, or backend business logic.

---

### Task 1: Application foundation and test harness

**Files:** `package.json`, Vite config, Vitest setup, `src/main.jsx`, `src/app/App.jsx`.

**Interfaces:** Produces the React application root, aliases, test runtime, and provider insertion point used by every later task.

- [ ] Create package/config files and install dependencies.
- [ ] Add a failing smoke test that expects the app shell to render.
- [ ] Run the smoke test and confirm the expected failure.
- [ ] Implement the minimal app shell and providers entry point.
- [ ] Run tests and commit.

### Task 2: Theme and localization foundations

**Files:** `src/app/providers/*`, `src/styles/*`, `src/i18n/*`, locale utilities/tests.

**Interfaces:** Produces `useAppTheme()`, `useLocale()`, locale route helpers, semantic CSS tokens, and persistence behavior.

- [ ] Write failing tests for locale normalization/path swapping and theme resolution.
- [ ] Implement utilities/providers with localStorage + system theme fallback.
- [ ] Add EN/FR dictionaries for global UI copy.
- [ ] Verify tests in both themes/locales.
- [ ] Commit.

### Task 3: Mock domain data, repositories, and query hooks

**Files:** `src/data/*`, `src/repositories/*`, `src/queries/*`, repository tests.

**Interfaces:** Produces normalized `Capability`, `Solution`, `CaseStudy`, `Platform`, `Insight`, `Client`, and `ProcessStep` arrays plus query hooks used by pages.

- [ ] Write failing repository contract tests.
- [ ] Implement localized mock datasets and repository functions.
- [ ] Implement TanStack Query hooks with stable query keys.
- [ ] Verify no presentation component imports raw mock modules directly.
- [ ] Commit.

### Task 4: Shared layout and feedback components

**Files:** `src/components/layout/*`, `src/components/common/*`, `src/components/feedback/*` and component tests.

**Interfaces:** Produces `SiteHeader`, `SiteFooter`, `PageContainer`, `Section`, `SectionHeader`, `ThemeSwitcher`, `LocaleSwitcher`, `PageLoader`, `SectionSkeleton`, `ErrorState`, `EmptyState`.

- [ ] Write failing accessibility/interaction tests for header theme/locale controls.
- [ ] Implement desktop navigation and mobile Mantine drawer.
- [ ] Implement reusable containers, buttons, labels, metrics, tags, loaders, errors.
- [ ] Verify keyboard/focus behavior and tests.
- [ ] Commit.

### Task 5: Reusable domain components

**Files:** `src/components/expertise/*`, `case-study/*`, `platform/*`, `insight/*`, `company/*` and tests.

**Interfaces:** Produces reusable mapped cards/previews that accept normalized model objects only.

- [ ] Write failing tests for mapped labels/metrics and accessible links.
- [ ] Implement `CapabilityCard`, `SolutionCard`, `CaseStudyCard`, `CaseStudyMetric`, `PlatformCard`, `InsightCard`, `ClientMark`, `ProcessStep`.
- [ ] Ensure variants are semantic components, not boolean-heavy universal cards.
- [ ] Verify tests and commit.

### Task 6: Motion primitives and Three.js orchestration scene

**Files:** `src/motion/*`, `src/three/*`, motion tests.

**Interfaces:** Produces `RevealText`, `RevealGroup`, `StickyScene`, `AnimatedCounter`, `OrchestrationCanvas`, `SystemNode3D`, `ConnectionLine3D`, `DataParticles`, `CameraRig`.

- [ ] Write failing state tests for reduced-motion/static fallback and orchestration state transitions.
- [ ] Implement GSAP context hooks with cleanup.
- [ ] Implement lazy R3F scene with bounded particles/DPR and theme-aware materials.
- [ ] Implement SVG/CSS fallback for reduced motion and non-WebGL environments.
- [ ] Verify cleanup/state tests and commit.

### Task 7: Homepage

**Files:** `src/pages/Home/*`, `src/sections/home/*` and tests.

**Interfaces:** Produces `/en` and `/fr` cinematic homepage using repository/query data and shared motion/domain components.

- [ ] Write failing homepage content/route tests.
- [ ] Build hero + fragmented/orchestrated story.
- [ ] Build capabilities, NetSuite ecosystem, integration ecosystem, case study, metrics, approach, leadership preview, CTA.
- [ ] Add desktop scroll choreography and intentionally simpler mobile choreography.
- [ ] Verify both themes/locales and tests; commit.

### Task 8: Expertise and Solutions routes

**Files:** `src/pages/Expertise*`, `src/pages/Solutions*` plus route tests.

**Interfaces:** Produces localized indexes and detail pages driven by slug repository lookups.

- [ ] Write failing valid/missing-slug tests.
- [ ] Implement index/detail page composition and related content.
- [ ] Verify route-level loading/not-found behavior.
- [ ] Commit.

### Task 9: Work and case studies

**Files:** `src/pages/Work/*`, `src/pages/CaseStudy/*`, `ArchitectureComparison`.

**Interfaces:** Produces editorial work index and case-study detail pages with before/after architecture.

- [ ] Write failing case-study route/metric tests.
- [ ] Implement work previews and case-study narrative sections.
- [ ] Implement responsive architecture comparison visual.
- [ ] Verify and commit.

### Task 10: Approach, About, Insights, Article, Contact

**Files:** page/section modules for each route.

**Interfaces:** Completes all planned routes, including local-only contact form behavior.

- [ ] Write failing page/route tests.
- [ ] Implement approach timeline, company/leadership, insight index/detail, local contact form.
- [ ] Add error/empty states where appropriate.
- [ ] Verify and commit.

### Task 11: SEO, routing polish, accessibility and performance

**Files:** router, metadata utilities, app shell, style/motion refinements.

**Interfaces:** Produces lazy route chunks, locale-preserving 404 behavior, metadata helpers, robust reduced-motion/performance behavior.

- [ ] Write failing route/metadata utility tests.
- [ ] Add route lazy loading and document metadata updates.
- [ ] Validate keyboard navigation, contrast, focus, reduced motion.
- [ ] Validate mobile breakpoints and bound R3F cost.
- [ ] Commit.

### Task 12: Production verification and delivery

**Files:** no new feature scope; verification only plus README.

**Interfaces:** Produces a reproducible install/run/build guide and verified deliverable.

- [ ] Run full unit/component test suite.
- [ ] Run `npm run build` and lint/type/static checks.
- [ ] Inspect production bundle warnings and fix actionable issues.
- [ ] Add README with architecture and CMS migration instructions.
- [ ] Create deliverable archive.
