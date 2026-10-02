import { companyData } from "../data/company.data.js";
import { homeData } from "../data/home.data.js";
import { localizeEntity } from "./localize.js";

export async function getLeadership(locale) {
  return localizeEntity(companyData.leadership, locale);
}

export async function getProcess(locale) {
  return localizeEntity(companyData.process, locale);
}

export async function getHomeMetrics(locale) {
  return localizeEntity(homeData.metrics, locale);
}

export async function getClientMarks() {
  return homeData.clientMarks.filter((client) => client.public);
}
