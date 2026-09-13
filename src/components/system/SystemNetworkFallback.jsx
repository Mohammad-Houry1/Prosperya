import { SYSTEM_NODES } from "../../three/systemScene.data.js";
import styles from "./SystemNetworkFallback.module.css";
export default function SystemNetworkFallback({ orchestrated }) {
  return (
    <div
      className={`${styles.network} ${orchestrated ? styles.orchestrated : ""}`}
      aria-hidden="true"
    >
      <div className={styles.ring} />
      <div className={styles.ring2} />
      <div className={styles.core}>P</div>
      {SYSTEM_NODES.map((node, index) => (
        <div key={node.id} className={styles.node} style={{ "--i": index }}>
          {node.label}
        </div>
      ))}
    </div>
  );
}
