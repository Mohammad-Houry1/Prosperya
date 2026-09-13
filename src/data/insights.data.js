export const insightsData = [
  {
    id: "erp-transformations-fail",
    slug: "why-erp-transformations-fail",
    category: "ERP Transformation",
    publishedAt: "2026-08-26",
    readTime: 7,
    featured: true,
    copy: {
      en: { title: "Why ERP transformations fail before implementation begins.", excerpt: "The architecture mistakes hidden inside requirements, ownership and operating-model decisions.", body: ["ERP programs rarely fail because a configuration screen was difficult. They fail when the operating model is unclear before configuration begins.", "The most resilient programs make ownership, process boundaries, system-of-record decisions and exception handling explicit early."] },
      fr: { title: "Pourquoi les transformations ERP échouent avant même l’implémentation.", excerpt: "Les erreurs d’architecture cachées dans les besoins, la gouvernance et les décisions de modèle opérationnel.", body: ["Les programmes ERP échouent rarement à cause d’un écran de configuration. Ils échouent quand le modèle opérationnel n’est pas clair avant le paramétrage.", "Les programmes les plus robustes clarifient tôt la responsabilité, les frontières de processus, les systèmes de référence et la gestion des exceptions."] },
    },
  },
  {
    id: "netsuite-rescue",
    slug: "when-to-restructure-netsuite",
    category: "NetSuite",
    publishedAt: "2026-08-14",
    readTime: 6,
    featured: false,
    copy: {
      en: { title: "When NetSuite needs restructuring—not another workaround.", excerpt: "Five signals that configuration debt has become an operating problem.", body: ["Workarounds become dangerous when each new request depends on the last exception.", "An audit should separate process problems from configuration, integration and data problems before remediation starts."] },
      fr: { title: "Quand NetSuite a besoin d’être restructuré — pas d’un contournement de plus.", excerpt: "Cinq signes que la dette de configuration est devenue un problème opérationnel.", body: ["Les contournements deviennent dangereux lorsque chaque nouvelle demande dépend de l’exception précédente.", "Un audit doit distinguer les problèmes de processus, de configuration, d’intégration et de données avant toute remédiation."] },
    },
  },
  {
    id: "integration-contracts",
    slug: "integration-contracts-enterprise-systems",
    category: "Integration",
    publishedAt: "2026-07-30",
    readTime: 8,
    featured: false,
    copy: {
      en: { title: "Treat integrations like products, not cables.", excerpt: "Reliable enterprise integration starts with explicit contracts, ownership and observability.", body: ["Connecting two systems is the easy part. Operating that connection safely for years is the real engineering problem.", "A durable integration defines ownership, source of truth, retries, reconciliation and failure visibility before launch."] },
      fr: { title: "Traiter les intégrations comme des produits, pas comme des câbles.", excerpt: "Une intégration fiable commence par des contrats explicites, une responsabilité claire et de l’observabilité.", body: ["Connecter deux systèmes est la partie facile. Exploiter cette connexion de façon fiable pendant des années est le vrai problème d’ingénierie.", "Une intégration durable définit avant le lancement la responsabilité, la source de vérité, les reprises, la réconciliation et la visibilité des échecs."] },
    },
  },
  {
    id: "multi-entity-design",
    slug: "multi-entity-finance-architecture",
    category: "Finance",
    publishedAt: "2026-07-12",
    readTime: 9,
    featured: false,
    copy: {
      en: { title: "Designing ERP for multi-entity finance without multiplying complexity.", excerpt: "Standardize what should be common and preserve what must stay local.", body: ["Multi-entity design is a governance problem before it is a configuration problem.", "The best architecture centralizes shared controls and reporting while making local statutory differences explicit rather than hiding them in workarounds."] },
      fr: { title: "Concevoir l’ERP multi-entités sans multiplier la complexité.", excerpt: "Standardiser ce qui doit être commun et préserver ce qui doit rester local.", body: ["La conception multi-entités est un problème de gouvernance avant d’être un problème de configuration.", "Une architecture saine centralise les contrôles et le reporting communs tout en rendant explicites les différences réglementaires locales."] },
    },
  },
];
