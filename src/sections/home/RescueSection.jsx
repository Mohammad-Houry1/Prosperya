import Section from "../../components/common/Section.jsx";
import Eyebrow from "../../components/common/Eyebrow.jsx";
import PrimaryLink from "../../components/common/PrimaryLink.jsx";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import styles from "./HomeSections.module.css";
export default function RescueSection() {
  const { locale } = useLocale();
  const fr = locale === "fr";
  const rows = fr
    ? [
        ["Processus lents", "Cause racine isolée"],
        ["Travail manuel", "Flux automatisé"],
        ["Intégrations cassées", "Contrats observables"],
        ["Reporting non fiable", "Données contrôlées"],
      ]
    : [
        ["Slow processes", "Root cause isolated"],
        ["Manual work", "Automated flow"],
        ["Broken integrations", "Observable contracts"],
        ["Untrusted reporting", "Controlled data"],
      ];
  return (
    <Section>
      <div className={styles.rescue}>
        <div className={styles.rescueCopy}>
          <Eyebrow>ERP Rescue</Eyebrow>
          <h2>
            {fr
              ? "Parfois, l’implémentation est le problème."
              : "Sometimes the implementation is the problem."}
          </h2>
          <p>
            {fr
              ? "Prosperya audite l’architecture avant d’ajouter un nouveau contournement, puis priorise la remédiation selon le risque métier, la fiabilité financière et la maintenabilité."
              : "Prosperya audits the architecture before adding another workaround—then sequences remediation around business risk, financial trust and maintainability."}
          </p>
          <PrimaryLink to={`/${locale}/expertise/erp-optimization`}>
            {fr ? "Diagnostiquer le système" : "Diagnose the system"}
          </PrimaryLink>
        </div>
        <div className={styles.rescuePanel}>
          {rows.map(([before, after]) => (
            <div key={before}>
              <span>{before}</span>
              <strong>→ {after}</strong>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
