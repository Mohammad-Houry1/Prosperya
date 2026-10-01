import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import styles from "./Newsletter.module.css";

// The Close of Insights and Article pages. Sign-up is not connected yet:
// validate, then say so plainly.
export default function Newsletter() {
  const fr = useLocale().locale === "fr";
  const [state, setState] = useState("idle");
  const submit = (event) => {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get("email")?.toString().trim() ?? "";
    setState(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "done" : "invalid");
  };
  return (
    <div className={styles.newsletter} data-reveal>
      <Mail size={44} strokeWidth={1} aria-hidden="true" />
      <div>
        <h2>{fr ? "Restez informé. Gardez une longueur d’avance." : "Stay informed. Stay ahead."}</h2>
        <p>
          {fr
            ? "Des analyses choisies sur l’ERP, NetSuite et la transformation, directement dans votre boîte."
            : "Curated insights on ERP, NetSuite and enterprise transformation, delivered to your inbox."}
        </p>
      </div>
      <form onSubmit={submit} noValidate className={styles.form}>
        <label htmlFor="newsletter-email" className="visuallyHidden">
          {fr ? "Email professionnel" : "Work email"}
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={fr ? "Votre email professionnel" : "Enter your work email"}
          aria-invalid={state === "invalid"}
          aria-describedby="newsletter-status"
          onChange={() => state !== "idle" && setState("idle")}
        />
        <button type="submit">
          {fr ? "S’abonner" : "Subscribe"}
          <ArrowRight size={16} strokeWidth={1.6} aria-hidden="true" />
        </button>
        <p id="newsletter-status" role="status" className={styles.status} data-state={state}>
          {state === "done"
            ? fr
              ? "Merci. Les inscriptions ouvrent bientôt — rien n’a été enregistré pour l’instant."
              : "Thank you. Sign-ups open soon — nothing has been stored yet."
            : state === "invalid"
              ? fr
                ? "Saisissez une adresse email valide."
                : "Enter a valid email address."
              : fr
                ? "Pas de spam. Désinscription à tout moment."
                : "No spam. Unsubscribe anytime."}
        </p>
      </form>
    </div>
  );
}
