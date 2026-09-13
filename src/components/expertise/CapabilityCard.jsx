import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import TagList from "../common/TagList.jsx";
import styles from "./CapabilityCard.module.css";
export default function CapabilityCard({
  capability,
  locale,
  compact = false,
}) {
  const label =
    locale === "fr"
      ? `Explorer ${capability.title}`
      : `Explore ${capability.title}`;
  return (
    <article className={`${styles.card} ${compact ? styles.compact : ""}`}>
      <div className={styles.top}>
        <span className={styles.number}>{capability.number}</span>
        <span className={styles.eyebrow}>{capability.eyebrow}</span>
      </div>
      <h3>{capability.title}</h3>
      <p>{capability.description}</p>
      <TagList items={capability.services} />
      <Link
        className={styles.link}
        to={`/${locale}/expertise/${capability.slug}`}
      >
        {label}
        <ArrowUpRight size={16} />
      </Link>
    </article>
  );
}
