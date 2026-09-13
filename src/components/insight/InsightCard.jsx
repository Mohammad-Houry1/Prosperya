import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./InsightCard.module.css";
export default function InsightCard({ insight, locale, featured = false }) {
  return (
    <article className={`${styles.card} ${featured ? styles.featured : ""}`}>
      <div className={styles.meta}>
        <span>{insight.category}</span>
        <span>{insight.readTime} min</span>
      </div>
      <h3>{insight.title}</h3>
      <p>{insight.excerpt}</p>
      <Link to={`/${locale}/insights/${insight.slug}`}>
        {locale === "fr" ? "Lire l’analyse" : "Read insight"}{" "}
        <ArrowUpRight size={16} />
      </Link>
    </article>
  );
}
