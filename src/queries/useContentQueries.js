import { useQuery } from "@tanstack/react-query";
import { getCapabilities, getCapabilityBySlug } from "../repositories/expertise.repository.js";
import { getSolutions, getSolutionBySlug } from "../repositories/solutions.repository.js";
import { getCaseStudies, getCaseStudyBySlug } from "../repositories/caseStudies.repository.js";
import { getPlatforms } from "../repositories/platforms.repository.js";
import { getInsights, getInsightBySlug } from "../repositories/insights.repository.js";
import { getClientMarks, getHomeMetrics, getLeadership, getProcess } from "../repositories/company.repository.js";
import { queryKeys } from "./queryKeys.js";

const common = { placeholderData: (previous) => previous };

export const useCapabilities = (locale) => useQuery({ queryKey: queryKeys.capabilities(locale), queryFn: () => getCapabilities(locale), ...common });
export const useCapability = (locale, slug) => useQuery({ queryKey: queryKeys.capability(locale, slug), queryFn: () => getCapabilityBySlug(locale, slug), enabled: Boolean(slug), ...common });
export const useSolutions = (locale) => useQuery({ queryKey: queryKeys.solutions(locale), queryFn: () => getSolutions(locale), ...common });
export const useSolution = (locale, slug) => useQuery({ queryKey: queryKeys.solution(locale, slug), queryFn: () => getSolutionBySlug(locale, slug), enabled: Boolean(slug), ...common });
export const useCaseStudies = (locale) => useQuery({ queryKey: queryKeys.caseStudies(locale), queryFn: () => getCaseStudies(locale), ...common });
export const useCaseStudy = (locale, slug) => useQuery({ queryKey: queryKeys.caseStudy(locale, slug), queryFn: () => getCaseStudyBySlug(locale, slug), enabled: Boolean(slug), ...common });
export const usePlatforms = (locale) => useQuery({ queryKey: queryKeys.platforms(locale), queryFn: () => getPlatforms(locale), ...common });
export const useInsights = (locale) => useQuery({ queryKey: queryKeys.insights(locale), queryFn: () => getInsights(locale), ...common });
export const useInsight = (locale, slug) => useQuery({ queryKey: queryKeys.insight(locale, slug), queryFn: () => getInsightBySlug(locale, slug), enabled: Boolean(slug), ...common });
export const useProcess = (locale) => useQuery({ queryKey: queryKeys.process(locale), queryFn: () => getProcess(locale), ...common });
export const useLeadership = (locale) => useQuery({ queryKey: queryKeys.leadership(locale), queryFn: () => getLeadership(locale), ...common });
export const useHomeMetrics = (locale) => useQuery({ queryKey: queryKeys.homeMetrics(locale), queryFn: () => getHomeMetrics(locale), ...common });
export const useClientMarks = () => useQuery({ queryKey: queryKeys.clients, queryFn: getClientMarks, staleTime: Infinity });
