import { Link } from "react-router-dom";
import { useDocumentMeta } from "../../hooks/useDocumentMeta.js";
import PageContainer from "../../components/common/PageContainer.jsx";
import PrimaryLink from "../../components/common/PrimaryLink.jsx";
import HubDiagram, { hubStyles } from "../../components/visuals/HubDiagram.jsx";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import styles from "./NotFoundPage.module.css";

// A lost connection: the hub still works, so its nodes lead back in.
export default function NotFoundPage() {
  const { locale } = useLocale();
  const fr = locale === "fr";
  useDocumentMeta({
    title: fr ? "Page introuvable — Prosperya" : "Page not found — Prosperya",
    description: fr ? "Cette page n’est pas disponible." : "This page is not available.",
    robots: "noindex, follow",
  });
  const routes = [
    ["expertise", fr ? "Expertises" : "Expertise"],
    ["solutions", "Solutions"],
    ["work", fr ? "Réalisations" : "Work"],
    ["approach", fr ? "Approche" : "Approach"],
    ["insights", fr ? "Analyses" : "Insights"],
    ["about", fr ? "À propos" : "About"],
  ];
  return (
    <PageContainer>
      <div className={styles.page}>
        <div className={styles.copy}>
          <p className={styles.code} data-reveal>
            404
          </p>
          <h1 data-reveal style={{ "--i": 1 }}>
            {fr ? "Ce lien ne mène nulle part." : "This connection leads nowhere."}
          </h1>
          <p data-reveal style={{ "--i": 2 }}>
            {fr
              ? "La page a peut-être été déplacée. Le reste du système fonctionne — choisissez une destination."
              : "The page may have moved. The rest of the system is running — pick a destination."}
          </p>
          <div data-reveal style={{ "--i": 3 }}>
            <PrimaryLink to={`/${locale}`}>{fr ? "Retour à l’accueil" : "Return home"}</PrimaryLink>
          </div>
        </div>
        <HubDiagram
          seed={404}
          rays={14}
          compactLabels="keep"
          nodes={routes.map(([id, label]) => ({ id, label }))}
          renderNode={(node) => (
            <Link to={`/${locale}/${node.id}`} className={hubStyles.label}>
              {node.label}
            </Link>
          )}
        />
      </div>
    </PageContainer>
  );
}
