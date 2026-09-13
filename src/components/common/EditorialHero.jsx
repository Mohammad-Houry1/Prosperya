import Section from "./Section.jsx";
import Eyebrow from "./Eyebrow.jsx";
import styles from "./EditorialHero.module.css";
export default function EditorialHero({ eyebrow, title, description, aside }) {
  return (
    <Section className={styles.hero}>
      <div className={styles.grid}>
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </div>
        {aside && <aside>{aside}</aside>}
      </div>
    </Section>
  );
}
