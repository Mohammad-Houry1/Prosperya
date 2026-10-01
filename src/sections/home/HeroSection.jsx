import { useRef } from "react";
import PageContainer from "../../components/common/PageContainer.jsx";
import Eyebrow from "../../components/common/Eyebrow.jsx";
import PrimaryLink from "../../components/common/PrimaryLink.jsx";
import OrchestrationExperience from "../../components/system/OrchestrationExperience.jsx";
import SystemNetworkFallback from "../../components/system/SystemNetworkFallback.jsx";
import SystemIcon from "../../components/system/SystemIcon.jsx";
import RevealText from "../../motion/components/RevealText.jsx";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import { useGsapContext } from "../../motion/hooks/useGsapContext.js";
import { useReducedMotion } from "../../hooks/useReducedMotion.js";
import { useMediaQuery } from "../../hooks/useMediaQuery.js";
import { heroCopy } from "./heroStory.copy.js";
import styles from "./HomeHero.module.css";

function HeroCopy({ copy, locale }) {
  return (
    <>
      <div data-reveal style={{ "--i": 0 }}>
        <Eyebrow>{copy.eyebrow}</Eyebrow>
      </div>
      <RevealText as="h1" onLoad delay={0.1} className={styles.title}>
        {copy.lines[0]}
        <span className={styles.resolved}>{copy.lines[1]}</span>
      </RevealText>
      <p className={styles.lead} data-reveal style={{ "--i": 3 }}>
        {copy.lead}
      </p>
      <div className={styles.actions} data-reveal style={{ "--i": 4 }}>
        <PrimaryLink to={`/${locale}/approach`}>{copy.primary}</PrimaryLink>
        <PrimaryLink to={`/${locale}/contact`} variant="ghost">
          {copy.secondary}
        </PrimaryLink>
      </div>
      <div className={styles.audiences} data-reveal style={{ "--i": 6 }}>
        <span>{copy.audienceLabel}</span>
        <ul>
          {copy.audiences.map(([icon, label]) => (
            <li key={label}>
              <SystemIcon name={icon} size={15} />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function Chapter({ chapter, index, className = "", ...rest }) {
  const [label, title, text] = chapter;
  return (
    <li className={`${styles.chapter} ${className}`} {...rest}>
      <span className={styles.chapterLabel}>
        <b>{String(index + 1).padStart(2, "0")}</b>
        {label}
      </span>
      <h2>{title}</h2>
      <p>{text}</p>
    </li>
  );
}

/*
  Home signature. Desktop: a pinned split stage. The narrative column tells
  four beats while the WebGL architecture, framed in its own panel so it never
  sits under text, moves from fragmented to orchestrated, then the claim
  returns. Phones: a sticky 2D diagram with the beats scrolling beneath.
  Reduced motion: the finished state.
*/
export default function HeroSection() {
  const { locale } = useLocale();
  const copy = heroCopy[locale] ?? heroCopy.en;
  const reduced = useReducedMotion();
  const compact = useMediaQuery("(max-width: 980px)");
  const phone = useMediaQuery("(max-width: 640px)");
  const mode = reduced ? "static" : compact ? "mobile" : "story";
  const section = useRef(null);
  const copyBlock = useRef(null);
  const progress = useRef(reduced ? 1 : 0);
  const view = useRef({ tilt: -0.36, zoom: 0, yaw: 0.14 });
  // The scene owns its own framed panel, so it can use nearly all of it.
  const layout = useRef({ left: 0.06, right: 0.94 });

  useGsapContext(
    section,
    ({ gsap }) => {
      const root = section.current;
      if (mode === "mobile") {
        gsap.to(progress, {
          current: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.querySelector("[data-track]"),
            start: "top 20%",
            end: "bottom 85%",
            scrub: 0.5,
          },
        });
        gsap.to(root, {
          "--resolve": 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.querySelector("[data-track]"),
            start: "bottom 110%",
            end: "bottom 80%",
            scrub: true,
          },
        });
        return;
      }
      const q = gsap.utils.selector(root);
      const chapters = q("[data-chapter]");
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root,
          start: "top top+=64",
          end: "bottom bottom",
          scrub: 0.9,
        },
      });
      // Scene: fragmented → connected → automated → optimized.
      tl.to(progress, { current: 0.06, duration: 0.16 }, 0.12)
        .to(progress, { current: 0.46, duration: 0.19 }, 0.3)
        .to(progress, { current: 0.72, duration: 0.19 }, 0.49)
        .to(progress, { current: 1, duration: 0.18 }, 0.68);
      // Framing: a tilted, deep landscape settles into a frontal, calm composition.
      tl.to(view.current, { tilt: -0.2, zoom: 0.4, yaw: 0.05, duration: 0.3, ease: "sine.inOut" }, 0.08)
        .to(view.current, { tilt: 0, zoom: 0.12, yaw: 0, duration: 0.42, ease: "sine.inOut" }, 0.44);
      // Typography.
      tl.to(copyBlock.current, { autoAlpha: 0, y: -48, duration: 0.07, ease: "power1.in" }, 0.07)
        .fromTo(q("[data-rail]"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.04 }, 0.13)
        .fromTo(q("[data-rail-fill]"), { scaleX: 0 }, { scaleX: 1, duration: 0.76 }, 0.14);
      chapters.forEach((chapter, index) => {
        const start = 0.14 + index * 0.19;
        tl.fromTo(chapter, { opacity: 0, y: 56 }, { opacity: 1, y: 0, duration: 0.05, ease: "power2.out" }, start)
          .to(chapter, { opacity: 0, y: -56, duration: 0.05, ease: "power2.in" }, start + 0.14)
          .fromTo(q(`[data-rail-step="${index}"]`), { opacity: 0.4 }, { opacity: 1, duration: 0.02 }, start)
          .to(q(`[data-rail-step="${index}"]`), { opacity: 0.4, duration: 0.02 }, start + 0.17);
      });
      // Resolution: the claim returns, now true — and ORCHESTRATED. lights up.
      tl.to(q("[data-rail]"), { autoAlpha: 0, duration: 0.04 }, 0.9)
        .to(q("[data-status='before']"), { autoAlpha: 0, duration: 0.03 }, 0.84)
        .fromTo(q("[data-status='after']"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.03 }, 0.86)
        .to(copyBlock.current, { autoAlpha: 1, y: 0, duration: 0.07, ease: "power2.out" }, 0.9)
        .to(root, { "--resolve": 1, duration: 0.06 }, 0.93);
    },
    [mode],
  );

  const chapterList = (className, reveal) =>
    copy.chapters.map((chapter, index) => (
      <Chapter
        key={chapter[0]}
        chapter={chapter}
        index={index}
        className={className}
        data-chapter
        data-reveal={reveal ? "" : undefined}
        style={reveal ? { "--i": index } : undefined}
      />
    ));

  if (mode === "static")
    return (
      <section ref={section} className={`${styles.hero} ${styles.static}`}>
        <PageContainer className={styles.staticGrid}>
          <div ref={copyBlock} className={styles.copy}>
            <HeroCopy copy={copy} locale={locale} />
          </div>
          <div className={styles.staticVisual}>
            <SystemNetworkFallback reduced compact={phone} />
          </div>
        </PageContainer>
        <PageContainer>
          <ol className={styles.chapterGrid}>{chapterList("", false)}</ol>
        </PageContainer>
      </section>
    );

  if (mode === "mobile")
    return (
      <section ref={section} className={`${styles.hero} ${styles.mobile}`}>
        <PageContainer>
          <div ref={copyBlock} className={styles.copy}>
            <HeroCopy copy={copy} locale={locale} />
          </div>
        </PageContainer>
        <div className={styles.track} data-track>
          <div className={styles.mobileVisual}>
            <OrchestrationExperience progressRef={progress} />
          </div>
          <PageContainer>
            <ol className={styles.mobileChapters}>{chapterList("", true)}</ol>
          </PageContainer>
        </div>
      </section>
    );

  return (
    <section ref={section} className={`${styles.hero} ${styles.story}`}>
      <div className={styles.stage}>
        <PageContainer className={styles.inner}>
          <div className={styles.narrative}>
            <div ref={copyBlock} className={styles.copy}>
              <HeroCopy copy={copy} locale={locale} />
            </div>
            <ol className={styles.chapters}>{chapterList(styles.floating, false)}</ol>
            <div className={styles.rail} data-rail aria-hidden="true">
              <div className={styles.railSteps}>
                {copy.chapters.map(([label], index) => (
                  <span key={label} data-rail-step={index}>
                    <b>{String(index + 1).padStart(2, "0")}</b>
                    {label}
                  </span>
                ))}
              </div>
              <div className={styles.railTrack}>
                <i data-rail-fill />
              </div>
            </div>
          </div>
          <div className={styles.panel}>
            <div className={styles.visual}>
              <OrchestrationExperience progressRef={progress} viewRef={view} layoutRef={layout} />
            </div>
            <div className={styles.status} aria-hidden="true">
              <span data-status="before">
                <i />
                {copy.status[0]}
              </span>
              <span data-status="after" className={styles.statusAfter}>
                <i />
                {copy.status[1]}
              </span>
            </div>
          </div>
        </PageContainer>
      </div>
    </section>
  );
}
