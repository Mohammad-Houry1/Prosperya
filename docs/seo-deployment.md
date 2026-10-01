# Search and sharing configuration

Set VITE_PUBLIC_ORIGIN to the confirmed public origin (for example the company-approved HTTPS domain) in the deployment environment, then rebuild. Without it, the frontend intentionally omits canonical URLs and absolute Open Graph URLs rather than inventing a company domain. All content pages can pass title, description, canonicalPath, ogTitle, ogDescription, ogImage and robots to useDocumentMeta.

The four legal pages are editorial drafts and use noindex until business/legal approval. Confirm all company claims and demonstration metrics before publishing.

## Sitemap
At deployment, generate sitemap.xml from the public origin and the normalized repository route inventory: EN/FR home and listing pages, expertise/solution/case-study/article slugs, and only approved legal pages. Include paired EN/FR alternate links using replaceLocaleInPath. Exclude unknown routes, drafts and any private previews. Save the result into public/sitemap.xml before building and add its absolute URL to public/robots.txt. Regenerate when CMS content changes. Do not use a fabricated domain or modification timestamps.

The Vite host must rewrite application routes to index.html. Client-side metadata is a baseline: add prerendering or server-rendered metadata if reliable social previews or search indexing of rich content is a launch requirement. The manifest uses display: browser; there is no service worker or offline/PWA claim.
