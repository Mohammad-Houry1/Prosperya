// Runs after `vite build`: writes dist/sitemap.xml and dist/robots.txt from the
// same data the pages render. Legal pages and the 404 are noindex, so left out.
import { writeFileSync } from "node:fs";
import { expertiseData } from "../src/data/expertise.data.js";
import { solutionsData } from "../src/data/solutions.data.js";
import { caseStudiesData } from "../src/data/caseStudies.data.js";
import { insightsData } from "../src/data/insights.data.js";

const origin = process.env.VITE_PUBLIC_ORIGIN
  ? new URL(process.env.VITE_PUBLIC_ORIGIN).origin
  : null;

if (!origin) {
  console.warn("VITE_PUBLIC_ORIGIN not set: skipping sitemap.xml");
} else {
  const pages = [
    "",
    "/expertise",
    "/solutions",
    "/work",
    "/approach",
    "/about",
    "/insights",
    "/contact",
    ...expertiseData.map((item) => `/expertise/${item.slug}`),
    ...solutionsData.map((item) => `/solutions/${item.slug}`),
    ...caseStudiesData.map((item) => `/work/${item.slug}`),
    ...insightsData.map((item) => `/insights/${item.slug}`),
  ];
  const lastmod = Object.fromEntries(
    insightsData.map((item) => [`/insights/${item.slug}`, item.publishedAt]),
  );
  const url = (locale, page) => `${origin}/${locale}${page}`;
  const entries = pages.flatMap((page) =>
    ["en", "fr"].map(
      (locale) => `  <url>
    <loc>${url(locale, page)}</loc>${lastmod[page] ? `\n    <lastmod>${lastmod[page]}</lastmod>` : ""}
    <xhtml:link rel="alternate" hreflang="en" href="${url("en", page)}"/>
    <xhtml:link rel="alternate" hreflang="fr" href="${url("fr", page)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${url("en", page)}"/>
  </url>`,
    ),
  );
  writeFileSync(
    "dist/sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`,
  );
  writeFileSync(
    "dist/robots.txt",
    `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`,
  );
  console.log(`sitemap.xml: ${entries.length} URLs`);
}
