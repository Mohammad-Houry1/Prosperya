import { caseStudiesData } from "../data/caseStudies.data.js";
import { bySlug, localizeEntity } from "./localize.js";

export async function getCaseStudies(locale) {
  return localizeEntity(caseStudiesData, locale);
}

export async function getCaseStudyBySlug(locale, slug) {
  return bySlug(await getCaseStudies(locale), slug);
}
