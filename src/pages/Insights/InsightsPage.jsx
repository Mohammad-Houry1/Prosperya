import EditorialHero from "../../components/common/EditorialHero.jsx";
import Section from "../../components/common/Section.jsx";
import InsightCard from "../../components/insight/InsightCard.jsx";
import PageLoader from "../../components/feedback/PageLoader.jsx";
import { useInsights } from "../../queries/useContentQueries.js";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import styles from "../shared/PageStyles.module.css";
export default function InsightsPage(){const{locale}=useLocale();const fr=locale==="fr";const{data=[],isLoading}=useInsights(locale);if(isLoading)return <PageLoader/>;const featured=data.find((item)=>item.featured);const rest=data.filter((item)=>item.id!==featured?.id);return <><EditorialHero eyebrow={fr?"Analyses":"Insights"} title={fr?"Penser au-delà de l’implémentation.":"Thinking beyond implementation."} description={fr?"Architecture ERP, intégrations, finance et décisions qui déterminent la qualité du système longtemps après le go-live.":"ERP architecture, integrations, finance and the decisions that determine system quality long after go-live."}/><Section tone="soft">{featured&&<InsightCard insight={featured} locale={locale} featured/>}<div className={styles.articleGrid}>{rest.map((insight)=><InsightCard key={insight.id} insight={insight} locale={locale}/>)}</div></Section></>}
