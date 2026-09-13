import styles from "./PlatformCard.module.css";
export default function PlatformCard({ platform }) {
  return (
    <article className={styles.card}>
      <div className={styles.logo}>
        {platform.name.slice(0, 2).toUpperCase()}
      </div>
      <div>
        <span>{platform.category}</span>
        <h3>{platform.name}</h3>
        <p>{platform.shortDescription}</p>
      </div>
    </article>
  );
}
