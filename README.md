# Prosperya Frontend

Production-oriented React frontend for Prosperya, a Paris-based enterprise systems transformation consultancy. The V1 is intentionally frontend-only: content is served from normalized local mock repositories today and can be switched to the existing CMS APIs later without rewriting the visual components.

## Stack

- React + Vite
- React Router with `/en` and `/fr` localized routes
- Mantine for accessible behavioral primitives
- CSS Modules + semantic CSS variables
- TanStack Query for repository-backed content state
- GSAP + ScrollTrigger for scroll storytelling
- Three.js + React Three Fiber + Drei for the signature orchestration hero
- Vitest + Testing Library for component tests
- Node's built-in test runner for dependency-free repository/utility tests

## Run locally

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run test
npm run lint
npm run build
```

Dependency-free checks that can run even before `npm install`:

```bash
npm run test:core
npm run verify:syntax
node scripts/verify-css.mjs
```

## Architecture

```text
CMS later / Local mock data now
            ↓
       Repository
            ↓
   TanStack Query hook
            ↓
 Normalized domain model
            ↓
 Reusable React component
```

The visual components do not import `src/data/*`. Repositories own the source of content. When the CMS is ready, replace a repository implementation with the API client + mapper while preserving its return contract.

### Example: current V1

```js
// src/repositories/expertise.repository.js
export async function getCapabilities(locale) {
  return localizeEntity(expertiseData, locale);
}
```

### Later: CMS-backed

```js
import { apiRequest } from "@/api/client";
import { CMS_ENDPOINTS } from "@/api/endpoints";
import { normalizeCmsCollection } from "@/api/mappers/normalizeCmsEntity";

export async function getCapabilities(locale) {
  const payload = await apiRequest(CMS_ENDPOINTS.expertise, { locale });
  return normalizeCmsCollection(payload);
}
```

`useCapabilities(locale)`, `CapabilityCard`, the Expertise pages, animations, dark/light theme, and responsive behavior do not need to change.

## Content editing during V1

Edit these files until the CMS endpoints are ready:

```text
src/data/expertise.data.js
src/data/solutions.data.js
src/data/caseStudies.data.js
src/data/platforms.data.js
src/data/insights.data.js
src/data/company.data.js
src/data/home.data.js
```

The arrays are mapped into reusable domain components. Keep IDs and slugs stable because relationships use IDs.

## Theme system

The brand accent is `#3B9B71`. Components use semantic tokens from `src/styles/tokens.css` instead of hardcoded theme backgrounds/text colors.

The initial theme is applied inline in `index.html` before React boots to avoid a light/dark flash. React then owns persistence via `prosperya-theme` in local storage. The system theme is used when no explicit preference exists.

## Localization

Locale is URL-driven:

```text
/en
/fr
/en/expertise
/fr/expertise
/en/work/global-retail-core
/fr/work/global-retail-core
```

Global UI messages live in `src/i18n/messages.js`. Domain content carries EN/FR copy in the mock source and is normalized by the repositories before reaching UI components.

When CMS localized slugs are introduced, extend the repository/route mapping rather than teaching cards how CMS translations work.

## Motion and Three.js

The signature hero has one state contract:

```text
fragmented → orchestrated
```

Desktop with WebGL and normal motion uses lazy React Three Fiber. Small screens, reduced-motion users, or browsers without WebGL use `SystemNetworkFallback` instead.

Performance safeguards already present:

- R3F bundle lazy-loaded behind `React.lazy`
- max DPR 1.5
- bounded node/particle count
- Canvas pauses when outside the viewport
- mobile uses the 2D fallback
- `prefers-reduced-motion` uses the 2D fallback
- GSAP contexts revert on unmount
- route chunks are lazy-loaded

## Main routes

```text
/:locale
/:locale/expertise
/:locale/expertise/:slug
/:locale/solutions
/:locale/solutions/:slug
/:locale/work
/:locale/work/:slug
/:locale/approach
/:locale/about
/:locale/insights
/:locale/insights/:slug
/:locale/contact
```

## Important V1 note about case studies

The included case studies are illustrative mock content used to build the final UI/data shape. Replace them with approved Prosperya/client evidence before a public production launch. The frontend intentionally does not publish unverified Nike/Zara/Foot Locker claims by default.

## Directory guide

```text
src/app/            application shell, routing, providers
src/components/     reusable common and domain components
src/sections/       page-specific composition units
src/pages/          route-level pages
src/data/           temporary normalized mock content
src/repositories/   content-source boundary
src/queries/        TanStack Query hooks and keys
src/api/            future CMS client/endpoints/mappers
src/motion/         GSAP motion primitives
src/three/          bounded R3F orchestration scene
src/i18n/           locale routing and global UI messages
src/theme/          theme state/persistence
src/styles/         global tokens/base animation rules
```

## CMS migration checklist

1. Add the real CMS base URL to `VITE_CMS_API_URL`.
2. Match CMS endpoint paths in `src/api/endpoints.js`.
3. Add mappers that convert raw CMS payloads into the existing normalized contracts.
4. Replace repository internals one domain at a time.
5. Keep query hook signatures and component props unchanged.
6. Connect the contact form submit handler to the CMS lead endpoint.
7. Replace illustrative case studies with approved content.

No scattered page-level `useEffect()` fetching is needed.
