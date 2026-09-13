import Section from "../../components/common/Section.jsx";
import SectionHeader from "../../components/common/SectionHeader.jsx";
import PlatformCard from "../../components/platform/PlatformCard.jsx";
import SectionSkeleton from "../../components/feedback/SectionSkeleton.jsx";
import { usePlatforms } from "../../queries/useContentQueries.js";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import styles from "./HomeSections.module.css";
export default function IntegrationSection() {
  const { locale } = useLocale();
  const fr = locale === "fr";
  const { data = [], isLoading } = usePlatforms(locale);
  return (
    <Section tone="soft">
      <SectionHeader
        eyebrow={fr ? "Entreprise connectée" : "Connected enterprise"}
        title={
          fr
            ? "Votre ERP ne fonctionne jamais seul."
            : "Your ERP does not operate alone."
        }
        description={
          fr
            ? "Prosperya connecte les systèmes autour de responsabilités claires, de sources de vérité, de règles de réconciliation et d’échecs observables."
            : "Prosperya connects systems around ownership, source-of-truth decisions, reconciliation and observable failure states."
        }
      />
      {isLoading ? (
        <SectionSkeleton rows={4} />
      ) : (
        <div className={styles.integrationGrid}>
          {data.map((platform) => (
            <PlatformCard key={platform.id} platform={platform} />
          ))}
        </div>
      )}
    </Section>
  );
}
