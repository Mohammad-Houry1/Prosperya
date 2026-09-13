import { useParams } from "react-router-dom";
import EditorialHero from "../../components/common/EditorialHero.jsx";
import Section from "../../components/common/Section.jsx";
import EmptyState from "../../components/feedback/EmptyState.jsx";
import PageLoader from "../../components/feedback/PageLoader.jsx";
import PrimaryLink from "../../components/common/PrimaryLink.jsx";
import { useInsight } from "../../queries/useContentQueries.js";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import { useDocumentMeta } from "../../hooks/useDocumentMeta.js";
import styles from "../shared/PageStyles.module.css";
export default function ArticlePage(){const{slug}=useParams();const{locale}=useLocale();const fr=locale==="fr";const insight=useInsight(locale,slug);const item=insight.data;useDocumentMeta({title:item?`${item.title} — Prosperya`:(fr?"Prosperya — Analyses":"Prosperya — Insights"),description:item?.excerpt});if(insight.isLoading)return <PageLoader/>;if(!item)return <Section><EmptyState title={fr?"Analyse introuvable":"Insight not found"}/></Section>;return <><EditorialHero eyebrow={item.category} title={item.title} description={item.excerpt} aside={`${item.readTime} min · ${item.publishedAt}`}/><Section narrow><div className={styles.articleBody}>{item.body.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}<p>{fr?"Dans un système d’entreprise, la qualité de l’architecture se mesure surtout dans les exceptions : ce qui se passe quand une intégration échoue, qu’une donnée est incohérente ou qu’un processus sort du chemin nominal.":"In enterprise systems, architecture quality is revealed in the exceptions: what happens when an integration fails, data disagrees or a process leaves the happy path."}</p><PrimaryLink to={`/${locale}/contact`} variant="ghost">{fr?"Discuter de l’architecture":"Discuss the architecture"}</PrimaryLink></div></Section></>}
