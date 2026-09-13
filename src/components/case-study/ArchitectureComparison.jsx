import styles from "./ArchitectureComparison.module.css";
const before = ["CRM", "Sheets", "ERP", "Warehouse", "Finance"];
const after = ["CRM", "Commerce", "NetSuite", "Finance", "Analytics"];
function Diagram({ items, afterMode }) {
  return (
    <div className={`${styles.diagram} ${afterMode ? styles.after : ""}`}>
      <div className={styles.core}>
        {afterMode ? "PROSPERYA" : "FRAGMENTED"}
      </div>
      {items.map((item, index) => (
        <div className={styles.node} key={item} style={{ "--i": index }}>
          {item}
        </div>
      ))}
      <div className={styles.lines} aria-hidden="true" />
    </div>
  );
}
export default function ArchitectureComparison({ locale = "en" }) {
  const fr = locale === "fr";
  return (
    <div className={styles.wrap}>
      <article>
        <span>{fr ? "Avant" : "Before"}</span>
        <h3>
          {fr
            ? "Des connexions construites autour des exceptions."
            : "Connections evolved around exceptions."}
        </h3>
        <Diagram items={before} />
      </article>
      <article>
        <span>{fr ? "Après" : "After"}</span>
        <h3>
          {fr
            ? "Des systèmes alignés autour de responsabilités explicites."
            : "Systems aligned around explicit ownership."}
        </h3>
        <Diagram items={after} afterMode />
      </article>
    </div>
  );
}
