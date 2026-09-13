import { useRef } from "react";
import { useGsapContext } from "../hooks/useGsapContext.js";
import styles from "./RevealText.module.css";

export default function RevealText({
  children,
  as: Component = "div",
  className = "",
}) {
  const ref = useRef(null);
  useGsapContext(
    ref,
    ({ gsap }) => {
      gsap.fromTo(
        ref.current,
        { y: 34, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 88%", once: true },
        },
      );
    },
    [],
  );
  return (
    <Component ref={ref} className={`${styles.reveal} ${className}`}>
      {children}
    </Component>
  );
}
