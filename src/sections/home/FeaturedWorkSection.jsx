import Section from "../../components/common/Section.jsx";
import SectionHeader from "../../components/common/SectionHeader.jsx";
import CaseStudyCard from "../../components/case-study/CaseStudyCard.jsx";
import SectionSkeleton from "../../components/feedback/SectionSkeleton.jsx";
import { useCaseStudies } from "../../queries/useContentQueries.js";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import styles from "./HomeSections.module.css";
export default function FeaturedWorkSection() {
  const { locale } = useLocale();
  const fr = locale === "fr";
  const { data = [], isLoading } = useCaseStudies(locale);
  const featured = data.filter((item) => item.featured).slice(0, 2);
  return (
    <Section tone="soft">
      <SectionHeader
        eyebrow={
          fr ? "Transformations sélectionnées" : "Selected transformations"
        }
        title={
          fr
            ? "L’architecture n’a de valeur que si l’entreprise fonctionne mieux."
            : "Architecture is only useful when the business moves better."
        }
        description={
          fr
            ? "Le V1 utilise des structures de projets illustratives, prêtes à être remplacées par les cas clients Prosperya approuvés depuis le CMS."
            : "Illustrative project structures are used in this V1 and can be replaced with approved Prosperya case studies from the CMS."
        }
      />
      {isLoading ? (
        <SectionSkeleton rows={2} />
      ) : (
        <div className={styles.workList}>
          {featured.map((study, index) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              locale={locale}
              index={index}
            />
          ))}
        </div>
      )}
    </Section>
  );
}
