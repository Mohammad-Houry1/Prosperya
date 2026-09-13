import Section from "../../components/common/Section.jsx";
import RevealText from "../../motion/components/RevealText.jsx";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import styles from "./HomeSections.module.css";
export default function StatementSection() {
  const { locale } = useLocale();
  const fr = locale === "fr";
  const systems = fr
    ? [
        "Finance",
        "CRM",
        "ERP",
        "Commerce",
        "Trésorerie",
        "Planification",
        "Supply chain",
        "Analytics",
      ]
    : [
        "Finance",
        "CRM",
        "ERP",
        "Commerce",
        "Treasury",
        "Planning",
        "Supply chain",
        "Analytics",
      ];
  return (
    <Section className={styles.statement}>
      <div className={styles.statementInner}>
        <RevealText as="h2">
          {fr
            ? "Votre entreprise n’est pas un seul système."
            : "Your business is not one system."}
          <br />
          <em>
            {fr
              ? "Elle devrait fonctionner comme un seul."
              : "It should behave like one."}
          </em>
        </RevealText>
        <RevealText>
          <p>
            {fr
              ? "Prosperya travaille sur l’architecture globale pour aligner les systèmes, processus et données qui font avancer les opérations."
              : "Prosperya works across the architecture—not inside one isolated module—to align the systems, processes and data that keep enterprise operations moving."}
          </p>
        </RevealText>
        <div className={styles.systemChips}>
          {systems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </Section>
  );
}
