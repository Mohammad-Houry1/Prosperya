import styles from "./ProcessStep.module.css";
export default function ProcessStep({ step }) {
  return (
    <article className={styles.step}>
      <span>{step.number}</span>
      <div>
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </div>
    </article>
  );
}
