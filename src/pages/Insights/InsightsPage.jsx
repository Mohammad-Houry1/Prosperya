import { useState } from "react";
import PageHero from "../../components/common/PageHero.jsx";
import PageContainer from "../../components/common/PageContainer.jsx";
import Section from "../../components/common/Section.jsx";
import Eyebrow from "../../components/common/Eyebrow.jsx";
import InsightCard from "../../components/insight/InsightCard.jsx";
import Newsletter from "../../components/insight/Newsletter.jsx";
import PageLoader from "../../components/feedback/PageLoader.jsx";
import ErrorState from "../../components/feedback/ErrorState.jsx";
import EmptyState from "../../components/feedback/EmptyState.jsx";
import { useInsights } from "../../queries/useContentQueries.js";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import { useDocumentMeta } from "../../hooks/useDocumentMeta.js";
import { dragScroll } from "../../motion/gestures.js";
import styles from "./InsightsPage.module.css";

export default function InsightsPage() {
  const { locale } = useLocale();
  const fr = locale === "fr";
  const query = useInsights(locale);
  const [category, setCategory] = useState("all");
  useDocumentMeta({
    title: `${fr ? "Analyses" : "Insights"} — Prosperya`,
    description: fr
      ? "Perspectives sur la transformation ERP, NetSuite, l’intégration et les opérations financières."
      : "Perspectives on ERP transformation, NetSuite, integration and finance operations.",
  });
  if (query.isLoading) return <PageLoader />;
  if (query.isError)
    return (
      <Section>
        <ErrorState onRetry={() => query.refetch()} />
      </Section>
    );
  const data = query.data ?? [];
  const categories = [...new Map(data.map((item) => [item.categoryId, item.category]))];
  const featured = data.find((item) => item.featured);
  const list = data.filter(
    (item) => (category === "all" ? item.id !== featured?.id : item.categoryId === category),
  );
  return (
    <>
      <PageHero
        eyebrow={fr ? "Analyses" : "Insights"}
        title={fr ? "Idées et regards venus du terrain." : "Ideas and perspectives from the field."}
        titleClassName={styles.title}
        lead={
          <p>
            {fr
              ? "Des analyses pratiques sur l’ERP, NetSuite et la transformation d’entreprise — nourries par l’expérience, mesurées par l’impact."
              : "Practical insights on ERP, NetSuite and enterprise transformation — shaped by experience, measured by impact."}
          </p>
        }
        layout="stacked"
        className={styles.masthead}
        extra={<span className={styles.rule} data-reveal="line" aria-hidden="true" />}
      />
      <PageContainer>
        {featured && category === "all" && (
          <div className={styles.featured}>
            <Eyebrow>{fr ? "À la une" : "Featured article"}</Eyebrow>
            <InsightCard insight={featured} locale={locale} featured />
          </div>
        )}
        <div ref={dragScroll} className={styles.tabs} role="group" aria-label={fr ? "Filtrer les analyses" : "Filter insights"}>
          {[["all", fr ? "Toutes les analyses" : "All insights"], ...categories].map(([id, label]) => (
            <button key={id} type="button" aria-pressed={category === id} onClick={() => setCategory(id)}>
              {label}
            </button>
          ))}
        </div>
        <p className={styles.count} role="status">
          {list.length} {fr ? "analyse(s)" : list.length === 1 ? "article" : "articles"}
        </p>
        {list.length ? (
          <div key={category} className={styles.grid}>
            {list.map((insight, index) => (
              <InsightCard key={insight.id} insight={insight} locale={locale} index={index} large={index === 0 && list.length > 2} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </PageContainer>
      <Section>
        <Newsletter />
      </Section>
    </>
  );
}
