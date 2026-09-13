import Section from "../../components/common/Section.jsx";
import SectionHeader from "../../components/common/SectionHeader.jsx";
import Metric from "../../components/common/Metric.jsx";
import {
  useClientMarks,
  useHomeMetrics,
} from "../../queries/useContentQueries.js";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import styles from "./HomeSections.module.css";
export default function MetricsSection() {
  const { locale } = useLocale();
  const fr = locale === "fr";
  const { data: metrics = [] } = useHomeMetrics(locale);
  const { data: clients = [] } = useClientMarks();
  return (
    <Section>
      <SectionHeader
        eyebrow={fr ? "Conçu pour la complexité" : "Built for complexity"}
        title={
          fr
            ? "La discipline d’un grand programme. Sans le théâtre corporate."
            : "Enterprise discipline without enterprise theatre."
        }
        description={
          fr
            ? "Implication senior, architecture explicite et vision système tout au long du cycle de transformation."
            : "Senior involvement, explicit architecture and systems thinking across the full transformation lifecycle."
        }
      />
      <div className={styles.metricsGrid}>
        {metrics.map((metric) => (
          <Metric key={metric.id} metric={metric} />
        ))}
      </div>
      <div className={styles.clientStrip}>
        {clients.map((client) => (
          <span key={client.id}>{client.label}</span>
        ))}
      </div>
    </Section>
  );
}
