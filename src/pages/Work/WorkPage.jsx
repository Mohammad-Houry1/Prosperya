import EditorialHero from "../../components/common/EditorialHero.jsx";
import Section from "../../components/common/Section.jsx";
import CaseStudyCard from "../../components/case-study/CaseStudyCard.jsx";
import PageLoader from "../../components/feedback/PageLoader.jsx";
import { useCaseStudies } from "../../queries/useContentQueries.js";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import { useDocumentMeta } from "../../hooks/useDocumentMeta.js";
import styles from "../shared/PageStyles.module.css";
export default function WorkPage(){const{locale}=useLocale();const fr=locale==="fr";const{data=[],isLoading}=useCaseStudies(locale);useDocumentMeta({title:fr?"Prosperya — Projets":"Prosperya — Work",description:fr?"Structures de cas de transformation des systèmes d’entreprise.":"Enterprise systems transformation case-study structures."});if(isLoading)return <PageLoader/>;return <><EditorialHero eyebrow={fr?"Projets":"Work"} title={fr?"La transformation, montrée comme une architecture.":"Transformation, shown as architecture."} description={fr?"Le V1 utilise des cas illustratifs structurés comme les futurs cas clients approuvés du CMS.":"V1 uses illustrative cases structured exactly like future approved CMS case studies."}/><Section tone="soft"><div className={styles.workStack}>{data.map((study,index)=><CaseStudyCard key={study.id} study={study} locale={locale} index={index}/>)}</div></Section></>}
