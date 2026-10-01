import { useRef } from "react";
import { SplitText } from "../gsap.js";
import { useGsapContext } from "../hooks/useGsapContext.js";

/*
  Headings rise line by line out of a mask. `onLoad` plays as the page opens
  (hero titles); otherwise once when the heading scrolls into view. Text is
  never hidden without JS or under reduced motion: the split only happens here.
*/
export default function RevealText({
  as: Tag = "h2",
  children,
  className = "",
  onLoad = false,
  delay = 0,
  ...rest
}) {
  const ref = useRef(null);
  useGsapContext(
    ref,
    ({ gsap }) => {
      SplitText.create(ref.current, {
        type: "lines",
        mask: "lines",
        linesClass: "split-line",
        autoSplit: true,
        onSplit: (self) =>
          gsap.from(self.lines, {
            yPercent: 110,
            duration: 1.1,
            ease: "out",
            stagger: 0.09,
            delay,
            scrollTrigger: onLoad ? undefined : { trigger: ref.current, start: "top 88%", once: true },
          }),
      });
    },
    [onLoad, delay],
  );
  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
