import Section from "../../components/common/Section.jsx";
import Eyebrow from "../../components/common/Eyebrow.jsx";
import PrimaryLink from "../../components/common/PrimaryLink.jsx";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import styles from "./HomeSections.module.css";
export default function PlatformStorySection() {
  const { locale } = useLocale();
  const fr = locale === "fr";
  const modules = fr
    ? [
        "Finance",
        "Stocks",
        "Achats",
        "Commandes",
        "Reporting",
        "Automatisation",
      ]
    : [
        "Financials",
        "Inventory",
        "Procurement",
        "Order Mgmt",
        "Reporting",
        "Automation",
      ];
  return (
    <Section>
      <div className={styles.platformStory}>
        <div className={styles.platformCopy}>
          <Eyebrow>
            {fr ? "Expertise plateforme clé" : "Core platform expertise"}
          </Eyebrow>
          <h2>
            {fr
              ? "NetSuite, conçu autour de l’entreprise."
              : "NetSuite, engineered around the business."}
          </h2>
          <p>
            {fr
              ? "NetSuite devient puissant lorsque finance, opérations, intégrations et automatisation suivent un modèle opérationnel explicite — pas lorsque chaque équipe invente son propre contournement."
              : "NetSuite becomes powerful when finance, operations, integrations and automation are designed around one explicit operating model—not when every team invents its own workaround."}
          </p>
          <PrimaryLink
            to={`/${locale}/expertise/erp-transformation`}
            variant="ghost"
          >
            {fr
              ? "Explorer la transformation ERP"
              : "Explore ERP transformation"}
          </PrimaryLink>
        </div>
        <div
          className={styles.platformVisual}
          aria-label={
            fr
              ? "Diagramme du système NetSuite"
              : "NetSuite operating system diagram"
          }
        >
          <div className={styles.platformOrbit} />
          {modules.map((item) => (
            <span className={styles.platformModule} key={item}>
              {item}
            </span>
          ))}
          <div className={styles.platformCore}>NetSuite</div>
        </div>
      </div>
    </Section>
  );
}
