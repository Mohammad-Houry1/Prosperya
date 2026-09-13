import { useParams } from "react-router-dom";
import EditorialHero from "../../components/common/EditorialHero.jsx";
import Section from "../../components/common/Section.jsx";
import SectionHeader from "../../components/common/SectionHeader.jsx";
import CapabilityCard from "../../components/expertise/CapabilityCard.jsx";
import EmptyState from "../../components/feedback/EmptyState.jsx";
import PageLoader from "../../components/feedback/PageLoader.jsx";
import PrimaryLink from "../../components/common/PrimaryLink.jsx";
import { useCapabilities, useSolution } from "../../queries/useContentQueries.js";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import styles from "../shared/PageStyles.module.css";
export default function SolutionDetailPage(){const{slug}=useParams();const{locale}=useLocale();const fr=locale==="fr";const solution=useSolution(locale,slug);const capabilities=useCapabilities(locale);if(solution.isLoading)return <PageLoader/>;if(!solution.data)return <Section><EmptyState title={fr?"Solution introuvable":"Solution not found"}/></Section>;const item=solution.data;const related=(capabilities.data??[]).filter((cap)=>item.expertiseIds.includes(cap.id));return <><EditorialHero eyebrow="Solution" title={item.title} description={item.description} aside={item.outcomes.join(" · ")}/><Section><SectionHeader eyebrow={fr?"Résultats":"Outcomes"} title={fr?"Conçu autour de ce qui doit changer.":"Designed around what actually needs to change."}/><div className={styles.detailList}>{item.outcomes.map((outcome,index)=><div key={outcome} className={styles.detailRow}><span>{String(index+1).padStart(2,"0")}</span><div><h3>{outcome}</h3><p>{fr?"Architecture, contrôle et automatisation alignés sur un résultat opérationnel explicite.":"Architecture, controls and automation aligned to an explicit operational outcome."}</p></div></div>)}</div></Section><Section tone="soft"><SectionHeader eyebrow={fr?"Expertises":"Capabilities"} title={fr?"Les expertises qui soutiennent la solution.":"The capabilities behind the solution."}/><div className={styles.cardGrid}>{related.map((cap)=><CapabilityCard key={cap.id} capability={cap} locale={locale} compact/>)}</div></Section><Section><PrimaryLink to={`/${locale}/contact`}>{fr?"Discuter de cette solution":"Discuss this solution"}</PrimaryLink></Section></>}
