import { useLocale } from "../../i18n/LocaleContext.jsx";
import { useDocumentMeta } from "../../hooks/useDocumentMeta.js";
import HeroSection from "../../sections/home/HeroSection.jsx";
import StatementSection from "../../sections/home/StatementSection.jsx";
import CapabilitiesSection from "../../sections/home/CapabilitiesSection.jsx";
import PlatformStorySection from "../../sections/home/PlatformStorySection.jsx";
import IntegrationSection from "../../sections/home/IntegrationSection.jsx";
import RescueSection from "../../sections/home/RescueSection.jsx";
import FeaturedWorkSection from "../../sections/home/FeaturedWorkSection.jsx";
import MetricsSection from "../../sections/home/MetricsSection.jsx";
import ApproachPreviewSection from "../../sections/home/ApproachPreviewSection.jsx";
import LeadershipPreviewSection from "../../sections/home/LeadershipPreviewSection.jsx";
import FinalCtaSection from "../../sections/home/FinalCtaSection.jsx";
export default function HomePage(){const{locale}=useLocale();useDocumentMeta({title:locale==="fr"?"Prosperya — Complexité. Orchestrée.":"Prosperya — Complexity. Orchestrated.",description:locale==="fr"?"Architecture et transformation des systèmes d’entreprise à Paris.":"Enterprise systems architecture and transformation in Paris."});return <><HeroSection/><StatementSection/><CapabilitiesSection/><PlatformStorySection/><IntegrationSection/><RescueSection/><FeaturedWorkSection/><MetricsSection/><ApproachPreviewSection/><LeadershipPreviewSection/><FinalCtaSection/></>}
