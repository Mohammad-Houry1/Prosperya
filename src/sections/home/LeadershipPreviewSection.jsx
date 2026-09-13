import Section from "../../components/common/Section.jsx";
import SectionHeader from "../../components/common/SectionHeader.jsx";
import LeadershipCard from "../../components/company/LeadershipCard.jsx";
import { useLeadership } from "../../queries/useContentQueries.js";
import { useLocale } from "../../i18n/LocaleContext.jsx";
export default function LeadershipPreviewSection() {
  const { locale } = useLocale();
  const fr = locale === "fr";
  const { data = [] } = useLeadership(locale);
  return (
    <Section>
      <SectionHeader
        eyebrow={fr ? "Direction" : "Leadership"}
        title={
          fr
            ? "Une expérience entreprise directement impliquée dans l’architecture."
            : "Built on hands-on enterprise experience."
        }
        description={
          fr
            ? "Prosperya est présenté comme une société, avec une expertise senior proche des décisions d’architecture et de delivery qui comptent."
            : "Prosperya is positioned as a company, with senior expertise close to the architecture and delivery decisions that matter."
        }
      />
      {data[0] && <LeadershipCard person={data[0]} />}
    </Section>
  );
}
