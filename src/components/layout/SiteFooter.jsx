import { Link } from "react-router-dom";
import BrandMark from "./BrandMark.jsx";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import styles from "./SiteFooter.module.css";
export default function SiteFooter() {
  const { locale, t } = useLocale();
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <BrandMark />
            <p>{t("footer.statement")}</p>
          </div>
          <div className={styles.links}>
            <Link to={`/${locale}/expertise`}>{t("nav.expertise")}</Link>
            <Link to={`/${locale}/work`}>{t("nav.work")}</Link>
            <Link to={`/${locale}/insights`}>{t("nav.insights")}</Link>
            <Link to={`/${locale}/contact`}>{t("nav.contact")}</Link>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>{t("footer.location")}</span>
          <span>
            © {year} Prosperya. {t("footer.rights")}
          </span>
        </div>
      </div>
    </footer>
  );
}
