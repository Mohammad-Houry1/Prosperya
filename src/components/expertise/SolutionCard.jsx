import {
  ArrowRight,
  Boxes,
  ChartNoAxesCombined,
  Landmark,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./SolutionCard.module.css";
const icons = {
  landmark: Landmark,
  workflow: Workflow,
  boxes: Boxes,
  chart: ChartNoAxesCombined,
};
export default function SolutionCard({ solution, locale }) {
  const Icon = icons[solution.icon] ?? Workflow;
  return (
    <article className={styles.card}>
      <div className={styles.icon}>
        <Icon size={22} />
      </div>
      <h3>{solution.title}</h3>
      <p>{solution.description}</p>
      <ul>
        {solution.outcomes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Link to={`/${locale}/solutions/${solution.slug}`}>
        {locale === "fr" ? "Explorer la solution" : "Explore solution"}{" "}
        <ArrowRight size={16} />
      </Link>
    </article>
  );
}
