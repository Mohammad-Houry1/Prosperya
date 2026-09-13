import styles from "./TagList.module.css";
export default function TagList({ items }) {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
