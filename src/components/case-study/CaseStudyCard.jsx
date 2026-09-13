import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import CaseStudyMetric from "./CaseStudyMetric.jsx";
import styles from "./CaseStudyCard.module.css";
export default function CaseStudyCard({ study, locale, index = 0 }) {
  return (
    <article className={styles.card}>
      <div className={styles.visual} aria-hidden="true">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <div className={styles.orbit} />
        <div className={styles.orbitSmall} />
        <i />
      </div>
      <div className={styles.content}>
        <span className={styles.category}>{study.category}</span>
        <h3>{study.title}</h3>
        <p>{study.description}</p>
        <div className={styles.metrics}>
          {study.metrics.slice(0, 3).map((metric) => (
            <CaseStudyMetric key={metric.id} metric={metric} />
          ))}
        </div>
        <Link to={`/${locale}/work/${study.slug}`}>
          {locale === "fr" ? "Voir la transformation" : "View transformation"}{" "}
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
