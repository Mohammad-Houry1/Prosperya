import { lazy, Suspense } from "react";
import { useInViewport, useMediaQuery } from "@mantine/hooks";
import { useReducedMotion } from "../../hooks/useReducedMotion.js";
import { useWebGLSupport } from "../../hooks/useWebGLSupport.js";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import SystemNetworkFallback from "./SystemNetworkFallback.jsx";
import styles from "./OrchestrationExperience.module.css";
const OrchestrationCanvas = lazy(
  () => import("../../three/OrchestrationCanvas.jsx"),
);
export default function OrchestrationExperience({ orchestrated }) {
  const reduced = useReducedMotion();
  const small = useMediaQuery("(max-width: 760px)");
  const webgl = useWebGLSupport();
  const { ref, inViewport } = useInViewport();
  const { locale } = useLocale();
  const use3D = webgl && !reduced && !small;
  const status = orchestrated
    ? locale === "fr"
      ? "SYSTÈME ORCHESTRÉ"
      : "SYSTEM ORCHESTRATED"
    : locale === "fr"
      ? "ARCHITECTURE FRAGMENTÉE"
      : "FRAGMENTED ARCHITECTURE";
  return (
    <div ref={ref} className={styles.wrap}>
      {use3D ? (
        <Suspense
          fallback={<SystemNetworkFallback orchestrated={orchestrated} />}
        >
          <OrchestrationCanvas
            orchestrated={orchestrated}
            active={inViewport}
          />
        </Suspense>
      ) : (
        <SystemNetworkFallback orchestrated={orchestrated} />
      )}
      <div className={styles.status}>
        <i className={orchestrated ? styles.live : ""} />
        {status}
      </div>
    </div>
  );
}
