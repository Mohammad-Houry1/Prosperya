import { useQuery } from "@tanstack/react-query";
import {
  getCompanyStories,
  getFrequentlyAskedQuestions,
} from "../repositories/companyStories.repository.js";
export function useCompanyStories(locale) {
  return useQuery({
    queryKey: ["company-stories", locale],
    queryFn: () => getCompanyStories(locale),
  });
}
export function useFrequentlyAskedQuestions(locale, topic) {
  return useQuery({
    queryKey: ["faq", locale, topic],
    queryFn: () => getFrequentlyAskedQuestions(locale, topic),
  });
}
