import Section from "../../components/common/Section.jsx";
import Eyebrow from "../../components/common/Eyebrow.jsx";
import ProcessStep from "../../components/company/ProcessStep.jsx";
import PrimaryLink from "../../components/common/PrimaryLink.jsx";
import { useProcess } from "../../queries/useContentQueries.js";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import styles from "./HomeSections.module.css";
export default function ApproachPreviewSection() {
  const { locale } = useLocale();
  const fr = locale === "fr";
  const { data = [] } = useProcess(locale);
  return (
    <Section tone="soft">
      <div className={styles.processGrid}>
        <div className={styles.processSticky}>
          <Eyebrow>{fr ? "Approche" : "Approach"}</Eyebrow>
          <h2>
            {fr ? "Transformer sans chaos." : "Transformation without chaos."}
          </h2>
          <p>
            {fr
              ? "Chaque étape rend l’architecture, les responsabilités et le risque plus explicites — pas plus compliqués."
              : "Every phase makes architecture, ownership and risk more explicit—not more complicated."}
          </p>
          <PrimaryLink to={`/${locale}/approach`} variant="ghost">
            {fr ? "Explorer l’approche" : "Explore the approach"}
          </PrimaryLink>
        </div>
        <div>
          {data.slice(0, 5).map((step) => (
            <ProcessStep key={step.id} step={step} />
          ))}
        </div>
      </div>
    </Section>
  );
}
