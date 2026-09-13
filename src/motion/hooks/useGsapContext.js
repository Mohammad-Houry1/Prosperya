import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "../../hooks/useReducedMotion.js";

gsap.registerPlugin(ScrollTrigger);

export function useGsapContext(scopeRef, setup, dependencies = []) {
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion || !scopeRef.current) return undefined;
    const context = gsap.context(
      () => setup({ gsap, ScrollTrigger }),
      scopeRef,
    );
    return () => context.revert();
    // setup is intentionally owned by the caller and captured with explicit dependencies.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion, scopeRef, ...dependencies]);
}
