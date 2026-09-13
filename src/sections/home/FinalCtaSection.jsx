import Section from "../../components/common/Section.jsx";
import PrimaryLink from "../../components/common/PrimaryLink.jsx";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import styles from "./HomeSections.module.css";
export default function FinalCtaSection() {
  const { locale } = useLocale();
  const fr = locale === "fr";
  return (
    <Section className={styles.finalCta}>
      <h2>
        {fr ? "Architecturons la suite." : "Let’s architect what comes next."}
      </h2>
      <p>
        {fr
          ? "Si le paysage système ralentit l’entreprise, la prochaine étape doit commencer par l’architecture — pas par un patch supplémentaire."
          : "If the system landscape is slowing the business down, the next move should start with the architecture—not another patch."}
      </p>
      <div className={styles.finalCtaActions}>
        <PrimaryLink to={`/${locale}/contact`}>
          {fr ? "Démarrer un projet" : "Start a project"}
        </PrimaryLink>
        <PrimaryLink to={`/${locale}/work`} variant="ghost">
          {fr ? "Explorer les projets" : "Explore the work"}
        </PrimaryLink>
      </div>
    </Section>
  );
}
