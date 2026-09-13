import Eyebrow from "./Eyebrow.jsx";
import RevealText from "../../motion/components/RevealText.jsx";
import styles from "./SectionHeader.module.css";
export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  return (
    <header className={`${styles.header} ${styles[align]}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <RevealText as="h2">{title}</RevealText>
      {description && <RevealText as="p">{description}</RevealText>}
    </header>
  );
}
