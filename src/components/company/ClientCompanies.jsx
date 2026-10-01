import Section from "../common/Section.jsx";
import Eyebrow from "../common/Eyebrow.jsx";
import ErrorState from "../feedback/ErrorState.jsx";
import { useCompanyStories } from "../../queries/useCompanyStories.js";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import styles from "./CompanyStories.module.css";

/*
  The client wall as one endless strip drifting left to right. Each half of
  the track holds the list twice so it always outruns the viewport; the
  loop is seamless at -50%. Screen readers get a plain list instead.
*/
export default function ClientCompanies() {
  const { locale } = useLocale();
  const fr = locale === "fr";
  const query = useCompanyStories(locale);
  if (query.isError) return <Section><ErrorState onRetry={query.refetch} /></Section>;
  if (query.isLoading) return <Section><div className={styles.placeholder} aria-busy="true" aria-label={fr ? "Chargement des entreprises" : "Loading companies"} /></Section>;
  const clients = query.data?.clients ?? [];
  if (!clients.length) return null;
  const half = (copy) => (
    <ul>
      {[0, 1].flatMap((round) =>
        clients.map((client) => (
          <li key={`${copy}-${round}-${client.id}`} className={styles.mark} data-mark={client.id}>
            <span className={styles.monogram}>{client.name.replace(/[^A-Za-z]/g, "")[0]}</span>
            {client.name}
          </li>
        )),
      )}
    </ul>
  );
  return (
    <Section className={styles.clients}>
      <div className={styles.intro}>
        <Eyebrow>{fr ? "À leurs côtés" : "In good company"}</Eyebrow>
        {query.data.isDemo && <p>{fr ? "Entreprises fictives · Aperçu de présentation" : "Fictional companies · Layout preview"}</p>}
      </div>
      <ul className="visuallyHidden">
        {clients.map((client) => (
          <li key={client.id}>{client.name}</li>
        ))}
      </ul>
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {half("a")}
          {half("b")}
        </div>
      </div>
    </Section>
  );
}
