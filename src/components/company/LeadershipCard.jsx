import { Linkedin } from "lucide-react";
import styles from "./LeadershipCard.module.css";
export default function LeadershipCard({ person }) {
  return (
    <article className={styles.card}>
      <div className={styles.portrait} aria-hidden="true">
        <span>{person.initials}</span>
        <i />
      </div>
      <div className={styles.copy}>
        <span>{person.role}</span>
        <h3>{person.name}</h3>
        <p>{person.bio}</p>
        <a
          href={person.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label={`${person.name} on LinkedIn`}
        >
          <Linkedin size={17} />
        </a>
      </div>
    </article>
  );
}
