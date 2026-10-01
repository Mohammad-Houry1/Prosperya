import FrequentlyAskedQuestions from "../../components/company/FrequentlyAskedQuestions.jsx";
import { useRef, useState } from "react";
import { ArrowRight, CircleCheck, ShieldCheck } from "lucide-react";
import RevealText from "../../motion/components/RevealText.jsx";
import Section from "../../components/common/Section.jsx";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import { useDocumentMeta } from "../../hooks/useDocumentMeta.js";
import { inquiryFields } from "../../data/projectInquiry.data.js";
import {
  normalizeProjectInquiry,
  validateProjectInquiry,
} from "../../repositories/projectInquiry.repository.js";
import { useProjectInquiry } from "../../queries/useProjectInquiry.js";
import styles from "./ContactPage.module.css";

export default function ContactPage() {
  const { locale } = useLocale();
  const fr = locale === "fr";
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});
  const submission = useProjectInquiry();
  useDocumentMeta({
    title: `${fr ? "Démarrer un projet" : "Start a project"} — Prosperya`,
    description: fr
      ? "Préparez votre projet de transformation ERP, d’intégration ou d’automatisation avec Prosperya."
      : "Outline your ERP transformation, integration or automation project with Prosperya.",
  });
  const errorCopy = fr
    ? {
        required: "Ce champ est obligatoire.",
        invalid_email: "Saisissez une adresse email valide.",
        invalid_option: "Choisissez une option de la liste.",
        too_long: "Le texte dépasse la longueur autorisée.",
      }
    : {
        required: "This field is required.",
        invalid_email: "Enter a valid email address.",
        invalid_option: "Choose an option from the list.",
        too_long: "The text exceeds the allowed length.",
      };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (submission.isPending) return;
    const payload = normalizeProjectInquiry(
      Object.fromEntries(new FormData(event.currentTarget)),
      locale,
    );
    const nextErrors = validateProjectInquiry(payload);
    setErrors(nextErrors);
    submission.reset();
    if (Object.keys(nextErrors).length) {
      formRef.current.elements.namedItem(Object.keys(nextErrors)[0])?.focus();
      return;
    }
    submission.mutate(payload);
  };
  const renderField = (field, index) => {
    const attributes = {
      id: field.name,
      name: field.name,
      required: field.required,
      autoComplete: field.autoComplete,
      maxLength: field.maxLength,
      "aria-invalid": Boolean(errors[field.name]),
      "aria-describedby": errors[field.name] ? `${field.name}-error` : undefined,
    };
    return (
      <div
        className={`${styles.field} ${field.multiline ? styles.wide : ""}`}
        key={field.name}
        data-reveal
        style={{ "--i": index + 2 }}
      >
        <label htmlFor={field.name}>
          {field.label[locale] ?? field.label.en}
        </label>
        {field.options ? (
          <select {...attributes} defaultValue="">
            <option value="" disabled>
              {fr ? "Sélectionnez" : "Select one"}
            </option>
            {field.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label[locale] ?? option.label.en}
              </option>
            ))}
          </select>
        ) : field.multiline ? (
          <textarea {...attributes} rows={5} />
        ) : (
          <input {...attributes} type={field.type ?? "text"} />
        )}
        {errors[field.name] && (
          <p className={styles.error} id={`${field.name}-error`}>
            {errorCopy[errors[field.name]]}
          </p>
        )}
      </div>
    );
  };
  // Two parts to the brief: who you are, then what needs to change.
  const split = inquiryFields.findIndex((field) => field.name === "currentErp");
  const groups = [
    [fr ? "Vous" : "About you", inquiryFields.slice(0, split)],
    [fr ? "Votre projet" : "Your project", inquiryFields.slice(split)],
  ];
  const steps = fr
    ? [
        ["Votre brief", "Contexte, objectifs, contraintes — en quelques minutes."],
        ["Une première conversation", "Avec un architecte, pas un commercial."],
        ["Une suite claire", "Ce qui mérite d’être changé, et dans quel ordre."],
      ]
    : [
        ["Your brief", "Context, goals and constraints — in a few minutes."],
        ["A first conversation", "With an architect, not a sales script."],
        ["A clear next step", "What is worth changing, and in what order."],
      ];
  return (
    <>
      <Section className={styles.contactSection}>
        <div className={styles.layout}>
          <div className={styles.intro}>
            <p className={styles.eyebrow} data-reveal>
              {fr ? "Démarrer un projet" : "Start a project"}
            </p>
            <RevealText as="h1" onLoad key={locale}>
              {fr ? "Architecturons la suite." : "Let’s architect what comes next."}
            </RevealText>
            <p className={styles.lead} data-reveal style={{ "--i": 2 }}>
              {fr
                ? "Dites-nous où vous en êtes, ce que vous voulez atteindre et les contraintes qui comptent."
                : "Tell us where you are today, what you want to achieve and the constraints that matter."}
            </p>
            <ol className={styles.steps}>
              {steps.map(([title, text], index) => (
                <li key={title} data-reveal style={{ "--i": index + 3 }}>
                  <span className={styles.stepIndex}>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </div>
                </li>
              ))}
            </ol>
            <p className={styles.notice} data-reveal style={{ "--i": 6 }}>
              <ShieldCheck size={16} strokeWidth={1.5} aria-hidden="true" />
              {fr
                ? "Formulaire de démonstration : vous pouvez vérifier votre brief, mais aucun message n’est envoyé ni enregistré."
                : "Preview form: you can check your brief, but no message is sent or saved."}
            </p>
          </div>
          <form
            ref={formRef}
            className={styles.form}
            noValidate
            onSubmit={handleSubmit}
            onChange={() => {
              if (submission.isSuccess || submission.isError) submission.reset();
            }}
            aria-busy={submission.isPending}
            data-reveal="scale"
          >
            {groups.map(([legend, fields], groupIndex) => (
              <fieldset key={legend} className={styles.group}>
                <legend>
                  <span>{String(groupIndex + 1).padStart(2, "0")}</span>
                  {legend}
                </legend>
                <div className={styles.fields}>{fields.map(renderField)}</div>
              </fieldset>
            ))}
            <div className={styles.actions}>
              <button type="submit" className={styles.submit} disabled={submission.isPending}>
                {submission.isPending
                  ? fr
                    ? "Vérification…"
                    : "Checking…"
                  : fr
                    ? "Vérifier mon brief"
                    : "Review project brief"}
                <ArrowRight size={16} strokeWidth={1.6} aria-hidden="true" />
              </button>
              <span>{fr ? "Environ 3 minutes" : "About 3 minutes"}</span>
            </div>
            {submission.isSuccess && (
              <p className={styles.success} role="status">
                <CircleCheck size={18} strokeWidth={1.5} aria-hidden="true" />
                {fr
                  ? "Votre brief est prêt. Cette démonstration n’a envoyé ni enregistré vos informations."
                  : "Your brief is ready. This preview has not sent or saved your information."}
              </p>
            )}
            {submission.isError && (
              <p className={styles.error} role="alert">
                {fr
                  ? "Le brief n’a pas pu être vérifié. Vos informations restent dans le formulaire ; vous pouvez réessayer."
                  : "The brief could not be checked. Your information is still in the form; please try again."}
              </p>
            )}
          </form>
        </div>
      </Section>
      <FrequentlyAskedQuestions topic="contact" />
    </>
  );
}
