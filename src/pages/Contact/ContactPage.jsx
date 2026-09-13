import { useState } from "react";
import EditorialHero from "../../components/common/EditorialHero.jsx";
import Eyebrow from "../../components/common/Eyebrow.jsx";
import Section from "../../components/common/Section.jsx";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import styles from "../shared/PageStyles.module.css";

const PROJECT_TYPES = [
  {
    value: "erp-transformation",
    label: { en: "ERP transformation", fr: "Transformation ERP" },
  },
  {
    value: "netsuite-implementation",
    label: { en: "NetSuite implementation", fr: "Implémentation NetSuite" },
  },
  {
    value: "systems-integration",
    label: { en: "Systems integration", fr: "Intégration des systèmes" },
  },
  {
    value: "erp-audit-rescue",
    label: { en: "ERP audit / rescue", fr: "Audit / redressement ERP" },
  },
  {
    value: "automation",
    label: { en: "Automation", fr: "Automatisation" },
  },
];

export default function ContactPage() {
  const { locale } = useLocale();
  const isFrench = locale === "fr";
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <EditorialHero
        eyebrow={isFrench ? "Démarrer un projet" : "Start a project"}
        title={
          isFrench
            ? "Commencez par la complexité réelle."
            : "Start with the real complexity."
        }
        description={
          isFrench
            ? "Parlez-nous du système actuel, des contraintes et de ce qui ne fonctionne plus."
            : "Tell us about the current system, the constraints and what is no longer working."
        }
      />

      <Section tone="soft">
        <div className={styles.contactGrid}>
          <div className={styles.contactCopy}>
            <Eyebrow>{isFrench ? "Brief projet" : "Project brief"}</Eyebrow>
            <h2>
              {isFrench
                ? "Pas un formulaire commercial générique."
                : "Not a generic sales form."}
            </h2>
            <p>
              {isFrench
                ? "Le formulaire V1 reste local jusqu’à disponibilité de l’endpoint CMS. Sa structure est déjà prête pour un payload API propre."
                : "The V1 form stays local until your CMS endpoint exists. Its structure is already ready for a clean API payload."}
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="name">{isFrench ? "Nom" : "Name"}</label>
              <input id="name" name="name" required autoComplete="name" />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">
                {isFrench ? "Email professionnel" : "Work email"}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="company">
                {isFrench ? "Entreprise" : "Company"}
              </label>
              <input
                id="company"
                name="company"
                autoComplete="organization"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="projectType">
                {isFrench ? "Type de projet" : "Project type"}
              </label>
              <select id="projectType" name="projectType" defaultValue="">
                <option value="" disabled>
                  {isFrench ? "Sélectionnez" : "Select one"}
                </option>
                {PROJECT_TYPES.map((projectType) => (
                  <option key={projectType.value} value={projectType.value}>
                    {projectType.label[locale] ?? projectType.label.en}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="message">
                {isFrench ? "Qu’est-ce qui doit changer ?" : "What needs to change?"}
              </label>
              <textarea id="message" name="message" required />
            </div>

            <button className={styles.submit} type="submit">
              {isFrench ? "Envoyer le brief" : "Send project brief"}
            </button>

            {submitted ? (
              <div className={styles.success} role="status">
                {isFrench
                  ? "Démo V1 : le formulaire est valide. Connectez ce handler à l’endpoint leads du CMS lorsqu’il sera prêt."
                  : "V1 demo: your form is valid. Connect this submit handler to the CMS lead endpoint when it is ready."}
              </div>
            ) : null}
          </form>
        </div>
      </Section>
    </>
  );
}
