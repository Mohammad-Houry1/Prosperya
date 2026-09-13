import { insightsData } from "../data/insights.data.js";
import { bySlug, localizeEntity } from "./localize.js";

export async function getInsights(locale) {
  return localizeEntity(insightsData, locale);
}

export async function getInsightBySlug(locale, slug) {
  return bySlug(await getInsights(locale), slug);
}
