import EditorialHero from "../../components/common/EditorialHero.jsx";
import Section from "../../components/common/Section.jsx";
import SolutionCard from "../../components/expertise/SolutionCard.jsx";
import PageLoader from "../../components/feedback/PageLoader.jsx";
import { useSolutions } from "../../queries/useContentQueries.js";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import { useDocumentMeta } from "../../hooks/useDocumentMeta.js";
import styles from "../shared/PageStyles.module.css";
export default function SolutionsPage(){const{locale}=useLocale();const{data=[],isLoading}=useSolutions(locale);useDocumentMeta({title:"Prosperya — Solutions",description:"Finance, operations, supply chain and data solutions."});if(isLoading)return <PageLoader/>;return <><EditorialHero eyebrow="Solutions" title={locale==="fr"?"La valeur métier avant le jargon système.":"Business value before system jargon."} description={locale==="fr"?"Prosperya relie les décisions ERP aux fonctions qui doivent réellement mieux fonctionner.":"Prosperya connects ERP decisions to the business functions that actually need to work better."}/><Section tone="soft"><div className={styles.solutionGrid}>{data.map((solution)=><SolutionCard key={solution.id} solution={solution} locale={locale}/>)}</div></Section></>}
