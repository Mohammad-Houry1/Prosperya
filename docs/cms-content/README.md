# Prosperya website content export, for the CMS content model

Everything the Prosperya website shows in text, lists and images, exported from branch `redesign-no-repeat`
so the CMS modules can be designed from the real content. Nothing here is new content.

- `PAGE-MAP.md`: every page, its sections in order, and where each section's content comes from. Start here.
- `INLINE-TEXT.md`: 236 EN/FR pairs written directly in page and component code, by file and line.
- `SECTION-TYPES.md`: the typed section blocks used by detail pages.
- `FILES.md`: the files under `source/`, grouped by role, plus the images in use.
- `source/`: copies of the content files, keeping their paths from the website repo:
  - `src/data/*`: structured content (capabilities, solutions, case studies, insights, company, clients, testimonials, FAQ, legal, contact form);
  - page copy files and `src/i18n/messages.js`;
  - components that carry their own EN/FR labels;
  - the data contract: `src/repositories/*` (the shapes pages read) and `src/api/*` (the CMS client and mapper stubs).
- `PROMPT.md`: the prompts for the CMS chat, in three passes (A audit, B modules, C mapping).

Content conventions in the data files: translated fields sit under `copy: { en: {...}, fr: {...} }`; everything
outside `copy` is language-neutral (ids, slugs, enums, relations, numbers). `localizeEntity` in
`source/src/repositories/localize.js` flattens one language for the page.
