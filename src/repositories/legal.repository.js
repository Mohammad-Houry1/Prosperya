import { legalData } from "../data/legal.data.js";
import { normalizeLocale } from "../i18n/locale.js";
import { LEGAL_ROUTES } from "../i18n/legalRoutes.js";

export async function getLegalDocument(locale, id) {
  const language = normalizeLocale(locale);
  const document = legalData[id]?.[language];
  return document
    ? {
        id,
        ...document,
        lastUpdated: null,
        status: "draft",
        path: `/${language}/${LEGAL_ROUTES[id][language]}`,
      }
    : null;
}
