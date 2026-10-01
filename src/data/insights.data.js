/*
  Journal entries. body: strings are paragraphs; objects are typed blocks
  ({ h2 }, { quote }, { list: [] }) so a CMS rich-text field maps directly.
  cover: generative CoverArt variant when there is no photograph.
*/
export const insightsData = [
  {
    id: "erp-transformations-fail",
    slug: "why-erp-transformations-fail",
    categoryId: "erp",
    publishedAt: "2026-08-26",
    featured: true,
    image: { src: "/images/paris-editorial.webp", width: 1200, height: 800 },
    cover: "flow",
    copy: {
      en: {
        category: "ERP Transformation",
        title: "Why ERP transformations fail before implementation begins.",
        excerpt: "The architecture mistakes hidden inside requirements, ownership and operating-model decisions — and how to catch them early.",
        body: [
          "ERP programs rarely fail because a configuration screen was difficult. They fail when the operating model is unclear before configuration begins.",
          { h2: "The decisions nobody wrote down" },
          "Every ERP encodes hundreds of decisions: who owns a customer record, when revenue is recognized, which system is the source of truth for stock. When those decisions stay implicit, the implementation team makes them by default — one ticket at a time.",
          { quote: "Configuration is where decisions become permanent. Make them on purpose." },
          "The most resilient programs make ownership, process boundaries, system-of-record decisions and exception handling explicit early — before the first sprint.",
          { h2: "Three questions to ask in week one" },
          { list: ["Which process is this system the owner of — and which is it only a participant in?", "Where does each critical record originate, and who may change it?", "What happens when something fails at 2 a.m., and who finds out?"] },
          "None of these are technical questions. All of them decide whether the technology will work.",
        ],
      },
      fr: {
        category: "Transformation ERP",
        title: "Pourquoi les transformations ERP échouent avant même l’implémentation.",
        excerpt: "Les erreurs d’architecture cachées dans les besoins, la gouvernance et le modèle opérationnel — et comment les repérer tôt.",
        body: [
          "Les programmes ERP échouent rarement à cause d’un écran de paramétrage. Ils échouent quand le modèle opérationnel n’est pas clair avant le paramétrage.",
          { h2: "Les décisions que personne n’a écrites" },
          "Chaque ERP encode des centaines de décisions : qui porte la fiche client, quand le chiffre d’affaires est reconnu, quel système fait foi pour les stocks. Quand ces décisions restent implicites, l’équipe projet les prend par défaut — ticket après ticket.",
          { quote: "Le paramétrage est l’endroit où les décisions deviennent définitives. Prenez-les délibérément." },
          "Les programmes les plus robustes clarifient tôt la responsabilité, les frontières de processus, les systèmes de référence et la gestion des exceptions — avant le premier sprint.",
          { h2: "Trois questions à poser dès la première semaine" },
          { list: ["De quel processus ce système est-il responsable — et duquel n’est-il que participant ?", "Où naît chaque enregistrement critique, et qui peut le modifier ?", "Que se passe-t-il quand quelque chose échoue à 2 h du matin, et qui le sait ?"] },
          "Aucune n’est une question technique. Toutes décident si la technologie fonctionnera.",
        ],
      },
    },
  },
  {
    id: "netsuite-rescue",
    slug: "when-to-restructure-netsuite",
    categoryId: "netsuite",
    publishedAt: "2026-08-14",
    cover: "grid",
    copy: {
      en: {
        category: "NetSuite",
        title: "When NetSuite needs restructuring — not another workaround.",
        excerpt: "Five signals that configuration debt has become an operating problem.",
        body: [
          "Workarounds become dangerous when each new request depends on the last exception.",
          { h2: "Signals worth taking seriously" },
          { list: ["Month-end numbers are rebuilt outside the system", "Nobody can explain what a script does", "Saved searches time out at the worst moment", "Roles grant more than anyone intended", "Every change needs the same one person"] },
          "An audit should separate process problems from configuration, integration and data problems before remediation starts.",
          { quote: "Restructuring is not a rewrite. It is removing the reasons workarounds were needed." },
        ],
      },
      fr: {
        category: "NetSuite",
        title: "Quand NetSuite a besoin d’être restructuré — pas d’un contournement de plus.",
        excerpt: "Cinq signes que la dette de configuration est devenue un problème opérationnel.",
        body: [
          "Les contournements deviennent dangereux lorsque chaque nouvelle demande dépend de l’exception précédente.",
          { h2: "Des signaux à prendre au sérieux" },
          { list: ["Les chiffres de clôture sont refaits hors du système", "Personne ne sait expliquer ce que fait un script", "Les recherches enregistrées échouent au pire moment", "Les rôles donnent plus de droits que prévu", "Chaque changement dépend de la même personne"] },
          "Un audit doit distinguer les problèmes de processus, de configuration, d’intégration et de données avant toute remédiation.",
          { quote: "Restructurer n’est pas réécrire. C’est supprimer les raisons qui rendaient les contournements nécessaires." },
        ],
      },
    },
  },
  {
    id: "integration-contracts",
    slug: "integration-contracts-enterprise-systems",
    categoryId: "integration",
    publishedAt: "2026-07-30",
    cover: "network",
    copy: {
      en: {
        category: "Integration",
        title: "Treat integrations like products, not cables.",
        excerpt: "Reliable enterprise integration starts with explicit contracts, ownership and observability.",
        body: [
          "Connecting two systems is the easy part. Operating that connection safely for years is the real engineering problem.",
          { h2: "What a contract contains" },
          { list: ["The source of truth for every field", "What happens on retry, and what counts as a duplicate", "Who is alerted, and how fast, when a flow fails", "How the two sides reconcile, and how often"] },
          "A durable integration defines ownership, source of truth, retries, reconciliation and failure visibility before launch.",
          { quote: "If nobody owns an integration, the customer eventually does." },
        ],
      },
      fr: {
        category: "Intégration",
        title: "Traiter les intégrations comme des produits, pas comme des câbles.",
        excerpt: "Une intégration fiable commence par des contrats explicites, une responsabilité claire et de l’observabilité.",
        body: [
          "Connecter deux systèmes est la partie facile. Exploiter cette connexion de façon fiable pendant des années est le vrai problème d’ingénierie.",
          { h2: "Ce que contient un contrat" },
          { list: ["La source de vérité de chaque champ", "Le comportement en cas de reprise, et ce qui compte comme doublon", "Qui est alerté, et en combien de temps, quand un flux échoue", "Comment les deux côtés se rapprochent, et à quelle fréquence"] },
          "Une intégration durable définit avant le lancement la responsabilité, la source de vérité, les reprises, la réconciliation et la visibilité des échecs.",
          { quote: "Si personne ne porte une intégration, c’est le client qui finit par la porter." },
        ],
      },
    },
  },
  {
    id: "multi-entity-design",
    slug: "multi-entity-finance-architecture",
    categoryId: "finance",
    publishedAt: "2026-07-12",
    cover: "ledger",
    copy: {
      en: {
        category: "Finance operations",
        title: "Designing ERP for multi-entity finance without multiplying complexity.",
        excerpt: "Standardize what should be common and preserve what must stay local.",
        body: [
          "Multi-entity design is a governance problem before it is a configuration problem.",
          { h2: "Common by default, local by exception" },
          "The best architecture centralizes shared controls and reporting while making local statutory differences explicit rather than hiding them in workarounds.",
          { quote: "Every local exception should have a name, an owner and a reason." },
        ],
      },
      fr: {
        category: "Opérations financières",
        title: "Concevoir l’ERP multi-entités sans multiplier la complexité.",
        excerpt: "Standardiser ce qui doit être commun et préserver ce qui doit rester local.",
        body: [
          "La conception multi-entités est un problème de gouvernance avant d’être un problème de configuration.",
          { h2: "Commun par défaut, local par exception" },
          "Une architecture saine centralise les contrôles et le reporting communs tout en rendant explicites les différences réglementaires locales.",
          { quote: "Chaque exception locale devrait avoir un nom, un responsable et une raison." },
        ],
      },
    },
  },
  {
    id: "automation-that-works",
    slug: "automation-that-works",
    categoryId: "automation",
    publishedAt: "2026-06-24",
    cover: "stabilize",
    copy: {
      en: {
        category: "Automation",
        title: "Automation that works: from tasks to operating model.",
        excerpt: "Why automating a messy process makes it faster — and messier — and what to simplify first.",
        body: [
          "Most automation projects start with a task: copy this, approve that. The ones that last start with the process the task belongs to.",
          { h2: "Simplify, then automate" },
          "Automating a process with five handoffs gives you five automated handoffs. Removing three first gives you a system people can understand and maintain.",
          { list: ["Every automation has an owner", "Every failure has a visible state", "Every rule lives where the next person will look for it"] },
          { quote: "The goal is not fewer clicks. It is fewer places where work waits." },
        ],
      },
      fr: {
        category: "Automatisation",
        title: "Une automatisation qui fonctionne : de la tâche au modèle opérationnel.",
        excerpt: "Pourquoi automatiser un processus confus le rend plus rapide — et plus confus — et quoi simplifier d’abord.",
        body: [
          "La plupart des projets d’automatisation commencent par une tâche : copier ceci, valider cela. Ceux qui durent commencent par le processus auquel la tâche appartient.",
          { h2: "Simplifier, puis automatiser" },
          "Automatiser un processus à cinq transferts donne cinq transferts automatisés. En supprimer trois d’abord donne un système compréhensible et maintenable.",
          { list: ["Chaque automatisation a un responsable", "Chaque échec a un état visible", "Chaque règle vit là où la prochaine personne la cherchera"] },
          { quote: "Le but n’est pas moins de clics. C’est moins d’endroits où le travail attend." },
        ],
      },
    },
  },
  {
    id: "data-quality",
    slug: "data-quality-is-an-operating-decision",
    categoryId: "data",
    publishedAt: "2026-06-10",
    cover: "bars",
    copy: {
      en: {
        category: "Data & analytics",
        title: "Data quality is an operating decision.",
        excerpt: "Trusted reporting starts where data is created, not where it is displayed.",
        body: [
          "When two reports disagree, the problem is rarely the dashboard. It is a definition nobody agreed, or a record created in two places.",
          { h2: "Fix it at the source" },
          "Clean-up projects decay. Ownership and validation at the point of entry do not.",
          { quote: "A metric without a single definition is an opinion with a chart." },
        ],
      },
      fr: {
        category: "Données et analyses",
        title: "La qualité des données est une décision opérationnelle.",
        excerpt: "Un reporting fiable commence là où la donnée est créée, pas là où elle est affichée.",
        body: [
          "Quand deux rapports divergent, le problème vient rarement du tableau de bord. Il vient d’une définition jamais arrêtée, ou d’un enregistrement créé à deux endroits.",
          { h2: "Corriger à la source" },
          "Les projets de nettoyage s’érodent. La responsabilité et la validation à la saisie, non.",
          { quote: "Un indicateur sans définition unique est une opinion avec un graphique." },
        ],
      },
    },
  },
  {
    id: "hidden-cost",
    slug: "hidden-cost-of-bad-erp-architecture",
    categoryId: "strategy",
    publishedAt: "2026-05-27",
    cover: "stabilize",
    copy: {
      en: {
        category: "Strategy",
        title: "The hidden cost of bad ERP architecture.",
        excerpt: "What poor architecture costs you every month — and why it rarely shows up in the budget.",
        body: [
          "Bad architecture does not arrive as a line item. It arrives as overtime at month-end, as reports rebuilt by hand, as projects that take twice as long as they should.",
          { h2: "Where the cost hides" },
          { list: ["Reconciliation work that should not exist", "Change requests that touch five places", "Decisions delayed while numbers are checked"] },
          { quote: "The most expensive system is the one your team has learned to work around." },
        ],
      },
      fr: {
        category: "Stratégie",
        title: "Le coût caché d’une mauvaise architecture ERP.",
        excerpt: "Ce qu’une architecture fragile coûte chaque mois — et pourquoi cela apparaît rarement au budget.",
        body: [
          "Une mauvaise architecture n’arrive pas comme une ligne budgétaire. Elle arrive en heures supplémentaires à la clôture, en rapports refaits à la main, en projets deux fois plus longs que prévu.",
          { h2: "Là où le coût se cache" },
          { list: ["Des rapprochements qui ne devraient pas exister", "Des demandes de changement qui touchent cinq endroits", "Des décisions retardées le temps de vérifier les chiffres"] },
          { quote: "Le système le plus coûteux est celui que vos équipes ont appris à contourner." },
        ],
      },
    },
  },
  {
    id: "suiteapps",
    slug: "suiteapps-or-customization",
    categoryId: "netsuite",
    publishedAt: "2026-05-13",
    cover: "grid",
    copy: {
      en: {
        category: "NetSuite",
        title: "SuiteApps or customization: making the right call.",
        excerpt: "How to balance agility, cost and maintainability in your NetSuite environment.",
        body: [
          "Every extension is a commitment you will maintain long after the project team has left.",
          { h2: "A simple test" },
          "Buy what is common, build what differentiates, and write down why — for both.",
          { quote: "The cheapest customization is the one you did not need." },
        ],
      },
      fr: {
        category: "NetSuite",
        title: "SuiteApps ou développement sur mesure : faire le bon choix.",
        excerpt: "Équilibrer agilité, coût et maintenabilité dans votre environnement NetSuite.",
        body: [
          "Chaque extension est un engagement que vous maintiendrez longtemps après le départ de l’équipe projet.",
          { h2: "Un test simple" },
          "Acheter ce qui est commun, construire ce qui différencie, et écrire pourquoi — dans les deux cas.",
          { quote: "Le développement le moins cher est celui dont vous n’aviez pas besoin." },
        ],
      },
    },
  },
  {
    id: "calmer-close",
    slug: "designing-a-calmer-month-end",
    categoryId: "finance",
    publishedAt: "2026-04-29",
    cover: "bars",
    copy: {
      en: {
        category: "Finance operations",
        title: "Designing a calmer month-end.",
        excerpt: "Close faster by moving work out of the last five days, not by working harder in them.",
        body: [
          "A fast close is designed during the month, not during the close.",
          { h2: "Continuous, not heroic" },
          { list: ["Reconcile daily where volume allows", "Automate accruals that follow rules", "Make exceptions visible the day they happen"] },
          { quote: "When the close is calm, the numbers are usually right." },
        ],
      },
      fr: {
        category: "Opérations financières",
        title: "Concevoir une clôture plus sereine.",
        excerpt: "Clôturer plus vite en sortant le travail des cinq derniers jours, pas en travaillant plus dur pendant.",
        body: [
          "Une clôture rapide se conçoit pendant le mois, pas pendant la clôture.",
          { h2: "Continue, pas héroïque" },
          { list: ["Rapprocher chaque jour quand le volume le permet", "Automatiser les provisions qui suivent des règles", "Rendre les exceptions visibles le jour même"] },
          { quote: "Quand la clôture est calme, les chiffres sont généralement justes." },
        ],
      },
    },
  },
];

// Reading time from the English body (≈200 words per minute).
for (const insight of insightsData) {
  const words = insight.copy.en.body
    .map((block) => (typeof block === "string" ? block : (block.h2 ?? block.quote ?? block.list.join(" "))))
    .join(" ")
    .split(/\s+/).length;
  insight.readTime = Math.max(2, Math.ceil(words / 200) + 2);
}
