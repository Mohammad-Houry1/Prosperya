import { platformsData } from "../data/platforms.data.js";
import { localizeEntity } from "./localize.js";

export async function getPlatforms(locale) {
  return localizeEntity(platformsData, locale);
}
