import {
  companyStories,
  frequentlyAskedQuestions,
} from "../data/companyStories.data.js";
import { localizeEntity } from "./localize.js";
export async function getCompanyStories(locale) {
  return {
    isDemo: companyStories.isDemo,
    clients: companyStories.clients.map((client) => ({
      ...client,
      sector: client.sector[locale] ?? client.sector.en,
    })),
    testimonials: localizeEntity(companyStories.testimonials, locale),
  };
}
export async function getFrequentlyAskedQuestions(locale, topic) {
  return localizeEntity(
    frequentlyAskedQuestions.filter((item) => item.topics.includes(topic)),
    locale,
  );
}
