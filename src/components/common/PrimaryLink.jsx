import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./PrimaryLink.module.css";
export default function PrimaryLink({ to, children, variant = "solid" }) {
  return (
    <Link className={`${styles.link} ${styles[variant]}`} to={to}>
      {children}
      <ArrowUpRight size={16} />
    </Link>
  );
}
