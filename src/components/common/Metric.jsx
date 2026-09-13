import AnimatedCounter from "../../motion/components/AnimatedCounter.jsx";
import styles from "./Metric.module.css";
export default function Metric({ metric, inverse = false }) {
  return (
    <div className={`${styles.metric} ${inverse ? styles.inverse : ""}`}>
      <strong>
        <AnimatedCounter value={metric.value} />
      </strong>
      <span>{metric.label}</span>
    </div>
  );
}
