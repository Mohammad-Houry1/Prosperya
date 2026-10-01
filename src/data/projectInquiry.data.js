export const projectTypes = [
  {
    value: "erp_transformation",
    label: { en: "ERP transformation", fr: "Transformation ERP" },
  },
  {
    value: "netsuite_implementation",
    label: { en: "NetSuite implementation", fr: "Implémentation NetSuite" },
  },
  {
    value: "systems_integration",
    label: { en: "Systems integration", fr: "Intégration des systèmes" },
  },
  {
    value: "erp_audit_rescue",
    label: { en: "ERP audit / rescue", fr: "Audit / redressement ERP" },
  },
  { value: "automation", label: { en: "Automation", fr: "Automatisation" } },
];
export const projectStages = [
  {
    value: "exploring",
    label: { en: "Exploring options", fr: "Exploration des options" },
  },
  {
    value: "planning",
    label: { en: "Planning a project", fr: "Préparation du projet" },
  },
  {
    value: "in_progress",
    label: { en: "Project in progress", fr: "Projet en cours" },
  },
  {
    value: "improving",
    label: {
      en: "Improving an existing system",
      fr: "Amélioration d’un système existant",
    },
  },
];
export const inquiryFields = [
  {
    name: "name",
    label: { en: "Name", fr: "Nom" },
    autoComplete: "name",
    required: true,
    maxLength: 120,
  },
  {
    name: "company",
    label: { en: "Company", fr: "Entreprise" },
    autoComplete: "organization",
    required: true,
    maxLength: 160,
  },
  {
    name: "email",
    label: { en: "Work email", fr: "Email professionnel" },
    type: "email",
    autoComplete: "email",
    required: true,
    maxLength: 254,
  },
  {
    name: "phone",
    label: { en: "Phone (optional)", fr: "Téléphone (facultatif)" },
    type: "tel",
    autoComplete: "tel",
    maxLength: 40,
  },
  {
    name: "country",
    label: { en: "Country", fr: "Pays" },
    autoComplete: "country-name",
    required: true,
    maxLength: 100,
  },
  {
    name: "currentErp",
    label: { en: "Current ERP (optional)", fr: "ERP actuel (facultatif)" },
    maxLength: 120,
  },
  {
    name: "projectType",
    label: { en: "Project type", fr: "Type de projet" },
    options: projectTypes,
    required: true,
  },
  {
    name: "projectStage",
    label: { en: "Project stage", fr: "Étape du projet" },
    options: projectStages,
    required: true,
  },
  {
    name: "message",
    label: { en: "What needs to change?", fr: "Qu’est-ce qui doit changer ?" },
    multiline: true,
    required: true,
    maxLength: 5000,
  },
];
