import { expertiseData } from "../data/expertise.data.js";
import { bySlug, localizeEntity } from "./localize.js";

export async function getCapabilities(locale) {
  return localizeEntity(expertiseData, locale);
}

export async function getCapabilityBySlug(locale, slug) {
  return bySlug(await getCapabilities(locale), slug);
}
