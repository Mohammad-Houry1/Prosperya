import Section from "../../components/common/Section.jsx";
import SectionHeader from "../../components/common/SectionHeader.jsx";
import CapabilityCard from "../../components/expertise/CapabilityCard.jsx";
import SectionSkeleton from "../../components/feedback/SectionSkeleton.jsx";
import ErrorState from "../../components/feedback/ErrorState.jsx";
import { useCapabilities } from "../../queries/useContentQueries.js";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import styles from "./HomeSections.module.css";
export default function CapabilitiesSection() {
  const { locale } = useLocale();
  const fr = locale === "fr";
  const { data = [], isLoading, isError, refetch } = useCapabilities(locale);
  return (
    <Section tone="soft">
      <SectionHeader
        eyebrow={fr ? "Ce que nous faisons" : "What we do"}
        title={
          fr
            ? "Un partenaire. De l’architecture aux opérations."
            : "One partner. From architecture to operation."
        }
        description={
          fr
            ? "Prosperya combine transformation, intégration, automatisation et optimisation pour préserver un modèle opérationnel cohérent de la conception à la production."
            : "Prosperya combines transformation, integration, automation and optimization so the operating model stays coherent from design through production."
        }
      />
      {isLoading ? (
        <SectionSkeleton rows={4} />
      ) : isError ? (
        <ErrorState
          title={
            fr
              ? "Impossible de charger l’expertise"
              : "Could not load expertise"
          }
          onRetry={refetch}
        />
      ) : (
        <div className={styles.capabilityGrid}>
          {data.map((item) => (
            <CapabilityCard key={item.id} capability={item} locale={locale} />
          ))}
        </div>
      )}
    </Section>
  );
}
