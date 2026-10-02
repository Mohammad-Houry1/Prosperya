# Prompts for the CMS chat, in three passes

Run them in order in the CMS chat. Review each output before sending the next pass.

---

## Pass A: audit the CMS (then stop)

```text
We are designing, over three passes, the content model that lets the Prosperya website (React + Vite, English and French) take every text, image, label and list from this CMS (project slug `prosperya`, cms.prosperya.com). Animations, layouts, diagram geometry and which visual a section uses stay in the website code.

The content export is the folder C:\Users\houry\OneDrive\Desktop\Prosperya\docs\cms-content. For Pass A read only: README.md, PAGE-MAP.md, SECTION-TYPES.md, everything under source/src/repositories/, and source/src/api/mappers/normalizeCmsEntity.js. The rest of the export is for Pass B.

Settled facts, do not reopen:
- Translatable `name` uses a scalar plus a `translations` sidecar (Option A, owner-confirmed). Page's `description`, `content`, `meta_title` and `meta_description` use locale-keyed maps on the field itself, a separate system. Do not propose merging the two, and do not propose changes to the Translations screen, `ProjectSnapshotService` or the `name` lifecycle. How the site's other translated fields (including those inside list items) should be stored is open: report what each system can and cannot hold, and list the gap as an upgrade. The export's `copy: { en: {...}, fr: {...} }` is only the website's local file format; it is not a storage proposal.
- Page modules will have fixed fields, not a block builder. That way the site rules in PAGE-MAP.md (one Hero and one Close per page, the Hub graphic at most once per page, the Marquee on Home only) hold by construction. The only open-ended typed lists are the expertise detail sections (9 types, SECTION-TYPES.md) and the article body blocks (paragraph, h2, quote, list).
- "Page module" here means one single-record module per website page; it is not necessarily the CMS's existing `Page` model. Whether to reuse that model is a Pass B question; in Pass A only report what it is and how it stores data.

Safety, for the whole pass:
- Read the code only. Read-only file search is fine (grep, ls, reading files). Run no command that touches a database (no artisan, tinker, migrations or seeders), and send no request to cms.prosperya.com or any live service. The bare .env points at the live database.
- Do not commit and do not switch branches. Write the one output file and leave it uncommitted.

Output shape: one heading per item, 1 to 13. Each heading opens with a one-line verdict (yes / partial / no / not found), then the evidence.

Evidence: back every answer with file:line. "Not found" is an acceptable answer; do not infer a capability you cannot point to. For items 2, 7 and 8, say for each check whether it runs on the backend (enforced) or only in the admin UI (a form control, not enforced).

Pass A is an audit only. Inspect this CMS codebase and report:
1. How a module is defined (backend and admin) and the steps to add one.
2. Field types available today (text, rich text, media, enum/select, relation, ordered list/repeater, boolean, date) and whether per-field length limits and enums are enforced.
3. Whether single-record modules exist (like settings).
4. Both translation systems: which fields use each, what the sidecar keys look like per model (by language _id or by locale code), and what `normalizeTranslations()` does to entries that are not `name`. Whether either system can hold text inside repeater items and polymorphic list items (most of this site's text lives there: stages, FAQs, section bodies). What the read side returns when the French value is missing: the English value, an empty value, or nothing.
5. Slugs: unique per project or per language, and whether a per-language slug can live in the translations sidecar (the legal pages use a different slug per language).
6. Media: alt text, sizes/variants, focal point, width and height.
7. Polymorphic ordered lists (one list whose items each have a type and a different set of fields): possible today, yes or no, and how.
8. Whether a check can span modules (for example "no two pages share a Close title"), or whether an admin warning is the realistic option.
9. Relations between modules: one/many, ordered, how they are expanded on read.
10. Locked fields and workflow: can a field be read-only, or editable only by certain roles (for flags such as preview form, draft, illustrative)? What publish states exist (draft, published), and can a draft be previewed on the website?
11. Publish events: any hook, event or webhook fired on publish or update that the website could use to invalidate a cache.
12. The public read endpoint today, if any, and exactly how it is scoped: project, published records only, no draft leakage through relation expansion, authentication, rate limits, cache headers.
13. The `prosperya` project: how a project is created and scoped. Whether it already exists is a database question; answer from seeders or fixtures if they show it, otherwise mark it "to confirm by the owner".

End with a list of required CMS upgrades, each with a one-line reason, the website need that drives it, and a tag: "blocks Pass B" (module design cannot proceed without a decision on it) or "later" (needed before launch, not before design).

Carry into Pass B (do not solve now): English labels with several French translations; the Solution detail Close title built with title.toLowerCase(); the length-limit formula; contact form field names versus their labels.

Write it to docs/prosperya-content-model/A-cms-audit.md in this repo. Do not design modules yet. Stop after Pass A and wait for my review.
```

---

## Pass B: modules and shared field groups

```text
Pass B. Using A-cms-audit.md (as I approved it) and the export folder C:\Users\houry\OneDrive\Desktop\Prosperya\docs\cms-content, write docs/prosperya-content-model/B-modules.md.

1. Module list: collection modules (many records) and single-record page modules: Home, Expertise, Solutions, Work, Approach, About, Insights, Contact, 404, and Site settings (header, footer, shared labels). Reuse an existing module where one fits.
2. Per module: purpose; each field with key, type, translated or language-neutral, required, limit, validation and default; enums with the exact values used in the website code (solution `metaphor`, `cover`, expertise `scene`, icon names, Close `variant`, FAQ topic, detail section `type`); relations (target, one or many, ordered or not); admin tabs or groups, and help text for editors.
3. Shared field groups: Close (title, description, primary and secondary button labels and targets), SEO (title, description, social image, noindex), Image (file, alt EN/FR, focal point, width, height), Metric (value as text such as "−42%" or "5d", label, illustrative flag), Link (label, internal target).
4. Limits: max(EN, FR) current length × 1.25, rounded up to the nearest 10 characters, unless a design cap applies: Hero headline at most 2 lines (state the character cap you derive and how), Hero lead about 20 words, button labels 1 to 3 words. Give each limit's derivation.
5. Strings built by code: the Solution detail Close title is built today from the solution title (SolutionDetailPage.jsx L189), which breaks French grammar. Choose between a per-solution `closeTitle` field and a template with a placeholder, and justify the choice. Accessibility strings assembled from fragments (ClientCompanies.jsx L45, "Relancer les" + label) stay in code as whole strings and are not CMS content.
6. State-tied notices: the contact form's "nothing is sent" notice, the newsletter's "nothing has been stored" message and the legal "Draft" banner. Their wording may live in the CMS, but whether they show must follow code or config state, never an editor toggle. The `demo` flags on fictional clients and testimonials, and `illustrative` on metrics, are ordinary per-record fields.
7. Contact form: field `name`, `type` and option values stay in code (validation depends on them). Only labels, help text and option labels move to the CMS.
8. Identical English labels with different French translations must not be resolved silently. List each as an open question with the places it appears: "Start a conversation" (Démarrer une conversation / Parlons de votre projet), "Work" (Projets / Réalisations), "Capabilities" (Expertises / Capacités), "Explore" (Découvrir / Explorer), "Featured work" (Projets), plus any others you find. For each, the choice is one shared label or one field per place.
9. Legal pages: translated slugs from source/src/i18n/legalRoutes.js.
10. Public read API for the website: endpoints per module (list, by slug, single record), query parameters (locale, published only), the JSON response for each, matching the shapes in source/src/repositories and source/src/api/mappers/normalizeCmsEntity.js, relation expansion, image URLs and sizes, and the scoping rules from Pass A (project `prosperya` only, published only, no draft leakage through relations, rate limits, cache headers).
11. Build order, so the website can switch over page by page, starting with the collections already behind repositories.

Rules: invent no content, pages or features the export doesn't show; anything ambiguous goes in an Open questions section at the end. No code yet.
```

---

## Pass C: the mapping table (its own file)

```text
Pass C. Write docs/prosperya-content-model/C-mapping.md: a table that maps every source in the export to its destination in B-modules.md, or to "stays in code" with the reason.

Cover, in this order: every line of INLINE-TEXT.md (grouped by page and section), every key in the page copy files, every component label set, every data file's fields, and src/i18n/messages.js and legalRoutes.js.

Columns: source (file:line or file:key), EN, FR, destination (module.field, shared label, or stays in code), notes (limit, open question reference).

End with a count check: INLINE-TEXT.md lists 236 pairs. State how many rows you mapped from it, and list by file:line any pair you did not map and why. Do not summarise or skip rows to save space; split the file into parts if needed.
```
