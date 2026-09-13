import { useRef, useState } from "react";
import PageContainer from "../../components/common/PageContainer.jsx";
import Eyebrow from "../../components/common/Eyebrow.jsx";
import PrimaryLink from "../../components/common/PrimaryLink.jsx";
import OrchestrationExperience from "../../components/system/OrchestrationExperience.jsx";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import { useGsapContext } from "../../motion/hooks/useGsapContext.js";
import styles from "./HomeSections.module.css";
export default function HeroSection() {
  const sectionRef = useRef(null);
  const copyRef = useRef(null);
  const [orchestrated, setOrchestrated] = useState(false);
  const stateRef = useRef(false);
  const { locale } = useLocale();
  const fr = locale === "fr";
  useGsapContext(
    sectionRef,
    ({ gsap }) => {
      gsap.to(copyRef.current, {
        y: -22,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.7,
          onUpdate: (self) => {
            const next = self.progress > 0.45;
            if (next !== stateRef.current) {
              stateRef.current = next;
              setOrchestrated(next);
            }
          },
        },
      });
    },
    [],
  );
  const unresolved = fr ? "Non résolue." : "Unresolved.";
  const resolved = fr ? "Orchestrée." : "Orchestrated.";
  return (
    <section ref={sectionRef} className={styles.hero}>
      <div className={styles.heroStage}>
        <PageContainer>
          <div className={styles.heroGrid}>
            <div ref={copyRef} className={styles.heroCopy}>
              <Eyebrow>
                {fr
                  ? "Systèmes d’entreprise · Paris"
                  : "Enterprise systems · Paris"}
              </Eyebrow>
              <h1>
                {fr ? "Complexité." : "Complexity."}
                <span className={orchestrated ? styles.orchestrated : ""}>
                  {orchestrated ? resolved : unresolved}
                </span>
              </h1>
              <p>
                {orchestrated
                  ? fr
                    ? "Une architecture opérationnelle connectée. Des flux clairs. Moins de transferts manuels. Des systèmes conçus pour avancer ensemble."
                    : "One connected operating architecture. Clear data flows. Fewer manual handoffs. Systems designed to move together."
                  : fr
                    ? "ERP, finance, CRM, supply chain et analytics ne démarrent presque jamais comme un seul système. Prosperya transforme cette fragmentation en un modèle opérationnel cohérent."
                    : "ERP, finance, CRM, supply chain and analytics rarely start as one system. Prosperya turns fragmented enterprise architecture into one coherent operating model."}
              </p>
              <div className={styles.heroActions}>
                <PrimaryLink to={`/${locale}/contact`}>
                  {fr
                    ? "Démarrer une transformation"
                    : "Start a transformation"}
                </PrimaryLink>
                <PrimaryLink to={`/${locale}/expertise`} variant="ghost">
                  {fr ? "Explorer l’expertise" : "Explore expertise"}
                </PrimaryLink>
              </div>
              <div className={styles.heroMeta}>
                <div>
                  <strong>{orchestrated ? "31" : "17"}</strong>
                  {fr ? "Connexions" : "Connections"}
                </div>
                <div>
                  <strong>8</strong>
                  {fr ? "Systèmes clés" : "Core systems"}
                </div>
                <div>
                  <strong>1</strong>
                  {fr ? "Modèle opérationnel" : "Operating model"}
                </div>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <OrchestrationExperience orchestrated={orchestrated} />
            </div>
          </div>
        </PageContainer>
        <div className={styles.scrollHint}>
          {fr ? "Faites défiler pour orchestrer" : "Scroll to orchestrate"}
        </div>
      </div>
    </section>
  );
}
