import Section from "../../components/common/Section.jsx";
import PrimaryLink from "../../components/common/PrimaryLink.jsx";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import styles from "../shared/PageStyles.module.css";
export default function NotFoundPage(){const{locale}=useLocale();return <Section className={styles.notFound}><div><strong>404</strong><h1>{locale==="fr"?"Cette route n’existe pas.":"This route does not exist."}</h1><p>{locale==="fr"?"Le système fonctionne. C’est juste cette URL qui n’est reliée à rien.":"The system is fine. This URL simply is not connected to anything."}</p><PrimaryLink to={`/${locale}`}>Return home</PrimaryLink></div></Section>}
