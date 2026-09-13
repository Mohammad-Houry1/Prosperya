# Prosperya Frontend Design Specification

## 1. Goal

Build a production-grade React frontend for Prosperya, a Paris-based enterprise systems transformation consultancy with strong NetSuite expertise. The site should feel premium, minimal, and highly polished, using Apple-style storytelling principles without copying Apple’s branding or UI verbatim.

The frontend will be visually ambitious but technically conservative: motion must explain business transformation, page structure must remain accessible, and the codebase must be maintainable by another senior developer without reverse-engineering one-off animation code.

## 2. Scope

### Included

- React frontend only.
- Responsive desktop, tablet, and mobile layouts.
- Dark and light themes.
- Prosperya accent color: `#3B9B71`.
- English and French routing/content architecture.
- Apple-inspired information hierarchy and scroll storytelling.
- Reusable UI and motion primitives.
- Hardcoded local arrays/objects as temporary content sources.
- Repository/data-access layer so local data can later be replaced by CMS APIs without rewriting presentation components.
- CMS-ready normalized frontend data contracts.
- SEO-ready route structure and metadata interfaces.
- Accessibility, reduced-motion behavior, and keyboard usability.
- Performance-conscious animation and media loading.

### Explicitly excluded from V1

- Backend development.
- CMS implementation.
- CMS API integration beyond preparing adapters/repositories and contracts.
- Authentication.
- Client portal functionality.
- Unbounded or decorative WebGL. V1 explicitly includes a bounded React Three Fiber/Three.js orchestration scene for the signature hero, with mobile/reduced-motion fallback.
- Free-form visual page builder behavior.

## 3. Technology Choices

- React.
- React Router.
- Mantine for accessible UI primitives where it adds value.
- CSS Modules for component styling.
- Global semantic CSS variables for design tokens and theme switching.
- GSAP + ScrollTrigger for high-complexity scroll choreography.
- Three.js + React Three Fiber for the signature orchestration scene only; Drei may be used for focused helpers.
- TanStack Query prepared for later CMS server-state integration; local repositories will return mock data initially.
- i18n routing/content architecture for English and French.
- Vite as the application build tool unless the target repository already uses another compatible React build setup.

## 4. Design Direction

### Core positioning

Prosperya is presented as an enterprise systems architecture and transformation company, with NetSuite as a core platform expertise rather than the entire brand identity.

Primary positioning concept:

**Complexity. Orchestrated.**

### Visual principles

- One primary message per viewport/section.
- Large editorial typography.
- Strong whitespace and disciplined spacing.
- Minimal decorative UI.
- High-contrast neutral palette with restrained use of `#3B9B71`.
- System diagrams, data flows, and architecture visuals that directly communicate Prosperya’s work.
- Motion that communicates a state change: fragmented → connected → automated → optimized.
- No generic cyberpunk, glowing-dashboard, or SaaS-template aesthetic.
- No stock imagery unless deliberately approved.

### Theme model

Light and dark modes use the same semantic tokens rather than separate component styles.

Examples:

- `--color-brand-primary`
- `--color-bg-primary`
- `--color-bg-secondary`
- `--color-text-primary`
- `--color-text-secondary`
- `--color-border`
- `--color-surface-elevated`

Prosperya green remains `#3B9B71` in both modes and is used sparingly for actions, active states, system health, and selected architectural connections.

## 5. Routing

Locale is part of the URL.

Examples:

- `/en`
- `/fr`
- `/en/expertise`
- `/fr/expertise`
- `/en/expertise/:slug`
- `/fr/expertise/:slug`
- `/en/solutions`
- `/fr/solutions`
- `/en/solutions/:slug`
- `/fr/solutions/:slug`
- `/en/work`
- `/fr/work`
- `/en/work/:slug`
- `/fr/work/:slug`
- `/en/approach`
- `/fr/approach`
- `/en/about`
- `/fr/about`
- `/en/insights`
- `/fr/insights`
- `/en/insights/:slug`
- `/fr/insights/:slug`
- `/en/contact`
- `/fr/contact`

The language switcher preserves the current semantic route when an equivalent localized route exists.

## 6. Page Architecture

### Home

1. Header / navigation.
2. Hero: `Complexity. Orchestrated.`
3. Fragmented enterprise system scene.
4. Orchestration transformation scene.
5. Prosperya capabilities: Transform / Connect / Automate / Optimize.
6. NetSuite core-platform story.
7. Integration ecosystem.
8. Featured case study.
9. Business outcomes / metrics.
10. Approach preview.
11. Leadership/authority preview if approved.
12. Final project CTA.
13. Footer.

### Expertise index

- Editorial hero.
- Large sequential capability stories.
- Compact overview/navigation after the cinematic content.
- Related case studies and platforms.

### Expertise detail

- Hero.
- Problem/context.
- Prosperya capability narrative.
- Relevant system architecture visual.
- Delivery process.
- Outcomes.
- Related platforms.
- Related work.
- CTA.

### Solutions index/detail

Business-value oriented rather than technical-service oriented. Initial domains: Finance, Operations, Supply Chain, Data & Analytics.

### Work / Case Studies

Work index uses large editorial case-study previews instead of a generic grid as the primary experience.

Case-study detail structure:

1. Organization context.
2. Challenge.
3. Existing system landscape.
4. Complexity.
5. Prosperya architecture.
6. Implementation/transformation.
7. Outcome and metrics.
8. Before/after architecture.
9. Relevant expertise/platforms.
10. CTA.

### Approach

A narrative process around Discover → Architect → Build → Migrate → Validate → Launch → Optimize.

### About

Company positioning first, leadership second. Avoid freelancer-portfolio framing.

### Insights

Editorial article index, categories, featured article, and article detail.

### Contact / Start a Project

Enterprise-oriented inquiry flow. V1 may be visually implemented with local form handling only until a CMS endpoint is available.

## 7. Signature Motion System

### Hero orchestration scene

The signature homepage sequence demonstrates Prosperya’s value visually.

State 1: Fragmented

- Independent enterprise systems occupy an irregular network.
- Connections are inconsistent, indirect, and visually noisy.
- Data packets move in fragmented paths.

State 2: Intervention

- Prosperya becomes the orchestration layer.
- Network begins reorganizing.
- Irrelevant connections fade.
- Core flows become clearer.

State 3: Orchestrated

- Systems align into a coherent architecture.
- Connections become deliberate.
- Data movement becomes smooth.
- Final message resolves to `Complexity. Orchestrated.`

### Motion rules

- GSAP timelines belong to the scene/component that owns them.
- No document-global animation scripts.
- All GSAP contexts and ScrollTriggers are cleaned up on unmount.
- `prefers-reduced-motion` must provide a complete static experience.
- Mobile choreography is intentionally simpler and vertically structured rather than a scaled-down desktop canvas.
- Motion must never block navigation or reading.

## 8. Component Architecture

### Layout primitives

- `SiteHeader`
- `SiteFooter`
- `PageContainer`
- `Section`
- `SectionHeader`
- `LocaleSwitcher`
- `ThemeSwitcher`

### Common components

- `PrimaryButton`
- `TextLink`
- `Eyebrow`
- `Metric`
- `ResponsiveImage`
- `TagList`
- `LogoMark`
- `EmptyState`

### Domain components

#### Expertise

- `CapabilityCard`
- `ExpertisePreview`
- `ExpertiseList`

#### Case studies

- `CaseStudyCard`
- `CaseStudyMetric`
- `CaseStudyHero`
- `ArchitectureComparison`

#### Platforms

- `PlatformCard`
- `PlatformNode`
- `IntegrationEcosystem`

#### Insights

- `InsightCard`
- `FeaturedInsight`

### Motion primitives

- `RevealText`
- `RevealGroup`
- `StickyScene`
- `ParallaxElement`
- `AnimatedCounter`
- `SystemNetwork`
- `SystemNode`
- `SystemConnection`
- `DataPacket`

Reusable primitives should remain narrowly scoped. Avoid a universal card component with many feature flags.

## 9. Data-Driven Rendering

V1 content comes from local JS data modules.

Example layout:

```text
src/data/
  home.data.js
  expertise.data.js
  solutions.data.js
  caseStudies.data.js
  platforms.data.js
  clients.data.js
  insights.data.js
```

Lists are rendered with `.map()` into reusable domain components.

Data objects must be shaped as if they were already normalized CMS responses. Presentation components must not know whether data came from local objects or an API.

## 10. Repository / Data Access Boundary

Pages and sections do not import mock data directly unless the abstraction becomes unnecessary overhead for a truly local-only primitive.

Preferred flow:

```text
Local mock data (V1)
        ↓
Repository
        ↓
Normalized domain model
        ↓
Page/section/component
```

Future flow:

```text
CMS REST API
     ↓
API client
     ↓
Mapper/adapter
     ↓
Repository
     ↓
Same normalized domain model
     ↓
Existing page/section/component
```

Switching to CMS APIs must not require rewriting UI components.

## 11. Mock Data Contracts

### Capability

```js
{
  id,
  slug,
  number,
  title,
  description,
  services: [],
  relatedPlatformIds: [],
  relatedCaseStudyIds: []
}
```

### Platform

```js
{
  id,
  slug,
  name,
  category,
  logo,
  shortDescription,
  featured
}
```

### Case Study

```js
{
  id,
  slug,
  category,
  title,
  description,
  metrics: [{ id, value, label }],
  platformIds: [],
  expertiseIds: [],
  featured
}
```

### Insight

```js
{
  id,
  slug,
  title,
  excerpt,
  category,
  image,
  publishedAt,
  readTime,
  featured
}
```

## 12. Styling Rules

- Mantine is used for accessible primitives and behavior where useful.
- CSS Modules own component styling.
- Global CSS is limited to reset/base rules, semantic tokens, typography setup, and intentionally global utilities.
- No Tailwind.
- No Bootstrap.
- Avoid inline styles except for dynamic values that are legitimately runtime-driven.
- Avoid hardcoded theme colors inside component modules when a semantic token exists.
- Responsive behavior should use clear breakpoint strategy and content-driven layout decisions.

## 13. Accessibility

- Semantic HTML structure.
- Keyboard-accessible navigation, menus, drawers, theme controls, language controls, and forms.
- Visible focus states.
- Sufficient contrast in both themes.
- Meaningful image alt text.
- Decorative visualizations hidden from assistive technology where appropriate.
- Architecture visuals that communicate essential information must have text equivalents.
- Reduced-motion behavior.
- Touch targets sized appropriately for mobile.

## 14. Performance

- Route-level code splitting.
- Lazy load non-critical page media.
- Eager/high-priority loading only for critical hero assets.
- WebGL is limited to the approved signature orchestration scene and must be lazy-loaded, DPR-bounded, particle-bounded, paused off-screen, and replaced by the 2D fallback on mobile/reduced-motion paths.
- Prefer transform/opacity animation paths.
- Avoid layout-thrashing animation patterns.
- Keep the number of continuously animated elements bounded.
- Disable or simplify expensive effects for small devices when appropriate.
- Test Core Web Vitals before considering the visual implementation complete.

## 15. Error and Empty States

V1 local data should still model future API states.

Every page-level data boundary should have a defined strategy for:

- loading,
- error,
- empty result,
- missing detail route,
- unavailable media.

When API integration arrives, failures must degrade into usable content rather than blank screens.

## 16. Testing Strategy

- Unit tests for data mappers/adapters once CMS integration exists.
- Unit tests for repository behavior where logic exists.
- Component tests for reusable interactive components.
- Route tests for localized routing and not-found behavior.
- Accessibility checks for navigation and interactive controls.
- Motion components tested primarily for state/class behavior and cleanup, not pixel-perfect animation timing.
- Three.js scene behavior is tested through orchestration/fallback state boundaries rather than pixel snapshots.
- Manual responsive validation on representative desktop and mobile widths.
- Manual reduced-motion validation.

## 17. Initial Implementation Order

1. Application shell and routing.
2. Semantic design tokens and theme provider.
3. Locale routing and switcher.
4. Core layout primitives.
5. Mock data modules and repositories.
6. Reusable common/domain components.
7. Homepage static structure.
8. Signature orchestration scene using lazy React Three Fiber/Three.js plus a CSS/SVG fallback.
9. Remaining homepage GSAP/ScrollTrigger choreography.
10. Expertise pages.
11. Solutions pages.
12. Work/case-study pages.
13. Approach, About, Insights, and Contact.
14. Performance/accessibility pass.
15. Prepare API adapters for CMS connection.

## 18. Senior-Level Code Quality Rules

- Components have one clear responsibility.
- No giant page files.
- No duplicate markup for repeated content structures.
- No unnecessary abstraction merely to reduce line count.
- No universal components with dozens of boolean props.
- Domain-specific components are preferred over overly generic components.
- Network/system content is data-driven.
- Motion code is encapsulated and cleaned up.
- API/CMS shape never leaks into visual components.
- Derived data is computed rather than duplicated in state.
- Memoization is used only when profiling or component behavior justifies it.
- Naming favors intent over implementation detail.
- Public component APIs remain small and predictable.
- No backend logic is introduced into the frontend project.

## 19. CMS Migration Contract

When the CMS is ready, migration should be limited to the data layer:

```text
Mock repository
      ↓ replace with
CMS-backed repository + mapper
```

Page composition, reusable cards, system scenes, themes, locale routing, and animation behavior should remain unchanged unless CMS capabilities introduce a genuinely new product requirement.

## 20. Acceptance Criteria

The design implementation is successful when:

- The homepage feels premium and cinematic without sacrificing readability.
- The signature system orchestration sequence clearly communicates Prosperya’s value proposition.
- Desktop and mobile both feel intentionally designed.
- Light and dark modes are first-class experiences.
- English/French routing is structurally ready.
- Repeated UI is data-driven and reusable.
- Local hardcoded content can be replaced by CMS data without rewriting UI components.
- Animation cleanup, reduced-motion handling, and responsive performance are implemented correctly.
- The codebase remains understandable and extendable by another senior React developer.
