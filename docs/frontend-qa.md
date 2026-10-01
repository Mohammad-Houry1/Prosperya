# Prosperya frontend verification

Verified 15 September 2026 against the local Vite application using Playwright.

## Route and layout coverage

60 EN/FR content routes (home, all listings, six expertise details, four solution details, four case studies, four articles and four legal documents per locale).

All routes checked at 1440, 1280, 1024, 768, 430, 390 and 375 CSS pixels in both dark and light themes: 840 route/viewport/theme checks. Checks covered route rendering, one h1, horizontal document overflow and broken images that had loaded. Lazy images were additionally inspected by scrolling representative Work/Home pages. These DOM checks are not a claim of pixel-level review of all 840 combinations.

Rendered screenshots were reviewed across main page templates, detail templates, legal pages and the 404, including desktop, tablet and phone layouts and both themes. Supplied reference images guided typography, spacing, rectangular cards, restrained accent color, network visuals and CTA composition. Current mock content is shorter than the reference designs and is deliberately identified as illustrative.

## Interaction checks

- Mobile drawer: dark/light surfaces, Escape dismissal and focus return.
- Language selection: case-study detail remains equivalent and drawer closes; translated privacy-policy slug verified.
- Work and Insights filters: selected category returns one relevant result; all-results control restores content.
- Contact: required errors focus the first invalid field; valid example data produces local-preview success without sending or storing a message.
- Homepage: lazy WebGL canvas renders, scroll changes orchestration state, both themes inspected; no console warnings/errors during these checks.
- French unknown route: localized 404, html language and noindex metadata.
- Theme persists across page navigation and reload.

## Automated checks

Run npm test, npm run lint, npm run build and npm run verify. The suite currently contains 11 core tests and 8 UI tests, including reduced-motion home rendering in EN/FR, locale routing and contact validation/retry. Reduced-motion behavior is tested in the component suite; an OS-level browser reduced-motion preference was not changed during QA.

The production build retains Vite's size warning for the shared application chunk and lazy Three.js chunk. The 3D scene is loaded separately, uses capped DPR, is replaced on mobile/reduced-motion/unsupported WebGL and pauses when outside the viewport. This is not a measured real-device performance certification.

## Before public launch

- Supply approved case studies, metrics, article copy, leadership portrait and any authorized client/partner marks.
- Approve and replace legal drafts, company details and publication dates; remove draft noindex only after approval.
- Implement the contact repository's real submission adapter; the current form intentionally does not send messages.
- Configure VITE_PUBLIC_ORIGIN and hosting route rewrites. Follow seo-deployment.md for canonical URLs, sitemap and social-preview deployment considerations.

## Image asset

public/images/enterprise-warehouse.webp is an original AI-generated illustrative warehouse image, not a client photograph. Generated with image_gen from a premium architectural warehouse prompt: precise shelving, central aisle, natural overhead light, muted enterprise palette, no people, logos or text. The 1536x1024 source was converted to a 1200x800 WebP (163,532 bytes) for delivery. The original is retained outside the project in the Codex generated-images directory.
