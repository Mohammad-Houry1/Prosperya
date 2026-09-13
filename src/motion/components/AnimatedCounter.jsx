import { useRef } from "react";
import { useGsapContext } from "../hooks/useGsapContext.js";

function splitMetric(value) {
  const match = String(value).match(/^([−-]?\d+(?:\.\d+)?)(.*)$/);
  return match
    ? { number: Number(match[1].replace("−", "-")), suffix: match[2] }
    : null;
}

export default function AnimatedCounter({ value }) {
  const ref = useRef(null);
  useGsapContext(
    ref,
    ({ gsap }) => {
      const parsed = splitMetric(value);
      if (!parsed) return;
      const state = { value: 0 };
      gsap.to(state, {
        value: parsed.number,
        duration: 1.15,
        ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 88%", once: true },
        onUpdate: () => {
          if (ref.current)
            ref.current.textContent = `${parsed.number < 0 ? "−" : ""}${Math.abs(Math.round(state.value))}${parsed.suffix}`;
        },
      });
    },
    [value],
  );
  return <span ref={ref}>{value}</span>;
}
