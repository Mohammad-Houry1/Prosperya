import { Link } from "react-router-dom";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import styles from "./BrandMark.module.css";
export default function BrandMark() {
  const { locale } = useLocale();
  return (
    <Link
      to={`/${locale}`}
      className={styles.brand}
      aria-label="Prosperya home"
    >
      <span className={styles.symbol}>
        <i />
        <i />
        <i />
      </span>
      <strong>PROSPERYA</strong>
    </Link>
  );
}
