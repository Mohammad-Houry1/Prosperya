import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";
import ReadingProgress from "./ReadingProgress.jsx";
import styles from "./ArticlePage.module.css";
import PageContainer from "../../components/common/PageContainer.jsx";
import SectionHeader from "../../components/common/SectionHeader.jsx";
import Section from "../../components/common/Section.jsx";
import ResponsiveImage from "../../components/common/ResponsiveImage.jsx";
import CoverArt from "../../components/visuals/CoverArt.jsx";
import InsightCard from "../../components/insight/InsightCard.jsx";
import Newsletter from "../../components/insight/Newsletter.jsx";
import ErrorState from "../../components/feedback/ErrorState.jsx";
import EmptyState from "../../components/feedback/EmptyState.jsx";
import PageLoader from "../../components/feedback/PageLoader.jsx";
import { useInsight, useInsights } from "../../queries/useContentQueries.js";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import { useDocumentMeta } from "../../hooks/useDocumentMeta.js";

// Typed body blocks: strings are paragraphs; { h2 } / { quote } / { list }.
function Block({ block }) {
  if (typeof block === "string") return <p>{block}</p>;
  if (block.h2) return <h2>{block.h2}</h2>;
  if (block.quote)
    return (
      <blockquote>
        <p>{block.quote}</p>
      </blockquote>
    );
  if (block.list)
    return (
      <ul>
        {block.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  return null;
}

export default function ArticlePage() {
  const articleRef = useRef(null);
  const { slug } = useParams();
  const { locale } = useLocale();
  const fr = locale === "fr";
  const insight = useInsight(locale, slug);
  const all = useInsights(locale);
  const item = insight.data;
  useDocumentMeta({
    title: item ? `${item.title} — Prosperya` : fr ? "Prosperya — Analyses" : "Prosperya — Insights",
    description: item?.excerpt,
  });
  if (insight.isLoading) return <PageLoader />;
  if (insight.isError)
    return (
      <Section>
        <ErrorState onRetry={() => insight.refetch()} />
      </Section>
    );
  if (!item)
    return (
      <Section>
        <EmptyState title={fr ? "Analyse introuvable" : "Insight not found"} />
      </Section>
    );
  const others = (all.data ?? []).filter((entry) => entry.id !== item.id);
  const related = [
    ...others.filter((entry) => entry.categoryId === item.categoryId),
    ...others.filter((entry) => entry.categoryId !== item.categoryId),
  ].slice(0, 3);
  return (
    <>
      <ReadingProgress articleRef={articleRef} />
      <header className={styles.masthead}>
        <Link to={`/${locale}/insights`} className={styles.back}>
          <ArrowLeft size={15} strokeWidth={1.6} aria-hidden="true" />
          {fr ? "Toutes les analyses" : "All insights"}
        </Link>
        <p className={styles.category} data-reveal>
          {item.category}
        </p>
        <h1 data-reveal style={{ "--i": 1 }}>
          {item.title}
        </h1>
        <p className={styles.dek} data-reveal style={{ "--i": 2 }}>
          {item.excerpt}
        </p>
        <p className={styles.meta} data-reveal style={{ "--i": 3 }}>
          <span>
            <CalendarDays size={14} strokeWidth={1.5} aria-hidden="true" />
            <time dateTime={item.publishedAt}>
              {new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(new Date(item.publishedAt))}
            </time>
          </span>
          <span>
            <Clock3 size={14} strokeWidth={1.5} aria-hidden="true" />
            {item.readTime} min {fr ? "de lecture" : "read"}
          </span>
          <span>{fr ? "Par l’équipe Prosperya" : "By the Prosperya team"}</span>
        </p>
      </header>
      <PageContainer>
        <figure className={styles.cover} data-reveal="image" aria-hidden="true">
          {item.image ? (
            <ResponsiveImage {...item.image} alt="" priority />
          ) : (
            <CoverArt variant={item.cover} seed={item.id.length * 3} />
          )}
        </figure>
      </PageContainer>
      <article ref={articleRef} className={styles.body}>
        {item.body.map((block, index) => (
          <Block key={index} block={block} />
        ))}
      </article>
      {related.length > 0 && (
        <Section>
          <SectionHeader
            eyebrow={fr ? "À lire ensuite" : "Keep reading"}
            title={fr ? "Analyses liées" : "Related insights"}
            align="split"
            action={{ to: `/${locale}/insights`, label: fr ? "Toutes les analyses" : "All insights" }}
          />
          <div className={styles.related}>
            {related.map((entry, index) => (
              <InsightCard key={entry.id} insight={entry} locale={locale} index={index} />
            ))}
          </div>
        </Section>
      )}
      <Section>
        <Newsletter />
      </Section>
    </>
  );
}
