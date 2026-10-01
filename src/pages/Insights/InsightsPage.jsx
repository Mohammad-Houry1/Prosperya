import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import PageHero from "../../components/common/PageHero.jsx";
import PageContainer from "../../components/common/PageContainer.jsx";
import Section from "../../components/common/Section.jsx";
import Eyebrow from "../../components/common/Eyebrow.jsx";
import CTASection from "../../components/common/CTASection.jsx";
import InsightCard from "../../components/insight/InsightCard.jsx";
import PageLoader from "../../components/feedback/PageLoader.jsx";
import ErrorState from "../../components/feedback/ErrorState.jsx";
import EmptyState from "../../components/feedback/EmptyState.jsx";
import { useInsights } from "../../queries/useContentQueries.js";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import { useDocumentMeta } from "../../hooks/useDocumentMeta.js";
import { dragScroll } from "../../motion/gestures.js";
import styles from "./InsightsPage.module.css";

// Newsletter sign-up is not connected yet: validate, then say so plainly.
function Newsletter({ fr }) {
  const [state, setState] = useState("idle");
  const submit = (event) => {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get("email")?.toString().trim() ?? "";
    setState(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "done" : "invalid");
  };
  return (
    <div className={styles.newsletter} data-reveal>
      <Mail size={44} strokeWidth={1} aria-hidden="true" />
      <div>
        <h2>{fr ? "Restez informé. Gardez une longueur d’avance." : "Stay informed. Stay ahead."}</h2>
        <p>
          {fr
            ? "Des analyses choisies sur l’ERP, NetSuite et la transformation, directement dans votre boîte."
            : "Curated insights on ERP, NetSuite and enterprise transformation — delivered to your inbox."}
        </p>
      </div>
      <form onSubmit={submit} noValidate className={styles.form}>
        <label htmlFor="newsletter-email" className="visuallyHidden">
          {fr ? "Email professionnel" : "Work email"}
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={fr ? "Votre email professionnel" : "Enter your work email"}
          aria-invalid={state === "invalid"}
          aria-describedby="newsletter-status"
          onChange={() => state !== "idle" && setState("idle")}
        />
        <button type="submit">
          {fr ? "S’abonner" : "Subscribe"}
          <ArrowRight size={16} strokeWidth={1.6} aria-hidden="true" />
        </button>
        <p id="newsletter-status" role="status" className={styles.status} data-state={state}>
          {state === "done"
            ? fr
              ? "Merci. Les inscriptions ouvrent bientôt — rien n’a été enregistré pour l’instant."
              : "Thank you. Sign-ups open soon — nothing has been stored yet."
            : state === "invalid"
              ? fr
                ? "Saisissez une adresse email valide."
                : "Enter a valid email address."
              : fr
                ? "Pas de spam. Désinscription à tout moment."
                : "No spam. Unsubscribe anytime."}
        </p>
      </form>
    </div>
  );
}

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
        <Newsletter fr={fr} />
      </Section>
      <CTASection
        variant="split"
        eyebrow={fr ? "Prêt pour la suite ?" : "Ready to take the next step?"}
        title={fr ? "Des idées à l’impact." : "Let’s turn insights into impact."}
        description={
          fr
            ? "Travaillons ensemble à concevoir, déployer et optimiser des solutions aux résultats mesurables."
            : "Partner with Prosperya to design, implement and optimize solutions that drive measurable results."
        }
      />
    </>
  );
}
