import EditorialHero from "../../components/common/EditorialHero.jsx";
import Section from "../../components/common/Section.jsx";
import SectionHeader from "../../components/common/SectionHeader.jsx";
import ProcessStep from "../../components/company/ProcessStep.jsx";
import PrimaryLink from "../../components/common/PrimaryLink.jsx";
import PageLoader from "../../components/feedback/PageLoader.jsx";
import ErrorState from "../../components/feedback/ErrorState.jsx";
import { useProcess } from "../../queries/useContentQueries.js";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import styles from "../shared/PageStyles.module.css";
export default function ApproachPage(){const{locale}=useLocale();const fr=locale==="fr";const process=useProcess(locale);if(process.isLoading)return <PageLoader/>;if(process.isError)return <ErrorState title={fr?"Impossible de charger l’approche":"Could not load the approach"} onRetry={process.refetch}/>;const data=process.data??[];return <><EditorialHero eyebrow={fr?"Approche":"Approach"} title={fr?"Transformer sans introduire un nouveau chaos.":"Transform without introducing new chaos."} description={fr?"Une méthode structurée qui réduit l’ambiguïté à chaque étape.":"A structured method that removes ambiguity at every stage."}/><Section tone="soft"><div className={styles.detailIntro}><h2>{fr?"Architecture avant activité.":"Architecture before activity."}</h2><p>{fr?"Le volume de tâches ne prouve pas l’avancement. Prosperya clarifie d’abord le modèle cible, les responsabilités et les règles de données, puis exécute contre ces décisions.":"Task volume is not progress. Prosperya first clarifies the target model, ownership and data rules, then executes against those decisions."}</p></div></Section><Section><SectionHeader eyebrow={fr?"Sept étapes":"Seven stages"} title={fr?"Une transformation contrôlée de bout en bout.":"A controlled transformation end to end."}/>{data.map((step)=><ProcessStep key={step.id} step={step}/>)}</Section><Section tone="soft"><PrimaryLink to={`/${locale}/contact`}>{fr?"Commencer par la découverte":"Start with discovery"}</PrimaryLink></Section></>}
