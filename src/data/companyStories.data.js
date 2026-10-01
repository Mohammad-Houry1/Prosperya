// Fictional demonstration content requested for layout review. Replace with approved client material.
export const companyStories = {
  isDemo: true,
  clients: [
    {
      id: "northline",
      name: "Northline",
      sector: { en: "Retail", fr: "Commerce" },
    },
    {
      id: "aster",
      name: "ASTER & CO.",
      sector: { en: "Professional services", fr: "Services professionnels" },
    },
    {
      id: "forma",
      name: "forma",
      sector: { en: "Manufacturing", fr: "Industrie" },
    },
    {
      id: "meridian",
      name: "MERIDIAN",
      sector: { en: "Logistics", fr: "Logistique" },
    },
    {
      id: "vale",
      name: "Vale Studio",
      sector: { en: "Design & commerce", fr: "Design et commerce" },
    },
  ],
  testimonials: [
    {
      id: "northline-operations",
      company: "Northline",
      name: "Alex Morgan",
      copy: {
        en: {
          role: "Operations Director",
          quote:
            "For the first time, our teams could see how their decisions connected. The system finally supported the way we wanted to work.",
        },
        fr: {
          role: "Direction des opérations",
          quote:
            "Pour la première fois, nos équipes voyaient comment leurs décisions étaient liées. Le système soutenait enfin notre façon de travailler.",
        },
      },
    },
    {
      id: "aster-finance",
      company: "ASTER & CO.",
      name: "Camille Laurent",
      copy: {
        en: {
          role: "Finance Director",
          quote:
            "What stood out was the clarity. We understood what needed to change, why it mattered and what the next step would be.",
        },
        fr: {
          role: "Direction financière",
          quote:
            "Ce qui nous a marqués, c’est la clarté. Nous comprenions ce qui devait changer, pourquoi et quelle serait la prochaine étape.",
        },
      },
    },
    {
      id: "meridian-technology",
      company: "MERIDIAN",
      name: "Sam Rivera",
      copy: {
        en: {
          role: "Technology Director",
          quote:
            "The handover was part of the design from day one. We gained an architecture our own team could understand and keep improving.",
        },
        fr: {
          role: "Direction technologique",
          quote:
            "La transmission faisait partie de la conception dès le premier jour. Notre équipe pouvait comprendre l’architecture et continuer à l’améliorer.",
        },
      },
    },
  ],
};

export const frequentlyAskedQuestions = [
  {
    id: "start",
    topics: ["general", "approach", "contact"],
    copy: {
      en: {
        question: "Where does an engagement start?",
        answer:
          "With a conversation about the business, the current systems and the change you need. Discovery then clarifies scope, responsibilities and priorities before implementation decisions are made.",
      },
      fr: {
        question: "Par où commence une mission ?",
        answer:
          "Par un échange sur votre entreprise, vos systèmes et le changement recherché. La découverte précise ensuite le périmètre, les responsabilités et les priorités avant les décisions de mise en œuvre.",
      },
    },
  },
  {
    id: "existing",
    topics: ["general", "expertise", "solutions"],
    copy: {
      en: {
        question: "Do we need to replace our existing ERP?",
        answer:
          "Not necessarily. An assessment can distinguish configuration issues, broken integrations and process problems from genuine platform limitations. The right answer may be to improve what you already have.",
      },
      fr: {
        question: "Faut-il remplacer notre ERP actuel ?",
        answer:
          "Pas nécessairement. Un diagnostic permet de distinguer les problèmes de configuration, d’intégration et de processus des véritables limites de la plateforme. La bonne réponse peut être d’améliorer l’existant.",
      },
    },
  },
  {
    id: "timing",
    topics: ["general", "approach", "contact"],
    copy: {
      en: {
        question: "How long does a transformation take?",
        answer:
          "Timing depends on scope, data readiness, integrations and the availability of your teams. A phased roadmap should make dependencies and decision points visible before a delivery date is committed.",
      },
      fr: {
        question: "Combien de temps dure une transformation ?",
        answer:
          "La durée dépend du périmètre, de la qualité des données, des intégrations et de la disponibilité de vos équipes. Une feuille de route progressive doit clarifier les dépendances et les décisions avant de fixer une date de livraison.",
      },
    },
  },
  {
    id: "team",
    topics: ["general", "approach", "expertise"],
    copy: {
      en: {
        question: "Can you work with our internal team and partners?",
        answer:
          "Yes. The engagement can be organized around your existing team, with explicit ownership for architecture, implementation, testing and ongoing operations. Responsibilities and access are agreed at the outset.",
      },
      fr: {
        question: "Pouvez-vous travailler avec nos équipes et partenaires ?",
        answer:
          "Oui. La mission peut s’organiser autour de vos équipes, avec des responsabilités explicites pour l’architecture, la mise en œuvre, les tests et l’exploitation. Les rôles et les accès sont définis dès le départ.",
      },
    },
  },
  {
    id: "support",
    topics: ["general", "approach", "solutions"],
    copy: {
      en: {
        question: "What happens after go-live?",
        answer:
          "The roadmap should include stabilization, documentation and knowledge transfer. Any ongoing support or optimization arrangement is defined with you as part of the engagement scope.",
      },
      fr: {
        question: "Que se passe-t-il après la mise en production ?",
        answer:
          "La feuille de route doit inclure la stabilisation, la documentation et le transfert de connaissances. L’accompagnement et l’optimisation dans la durée sont définis avec vous dans le périmètre de la mission.",
      },
    },
  },
  {
    id: "prepare",
    topics: ["contact"],
    copy: {
      en: {
        question: "What should I prepare for the first conversation?",
        answer:
          "A short description of your business, the systems you use, the main source of friction and any timing constraints is enough to start. You do not need a finished specification.",
      },
      fr: {
        question: "Que préparer pour le premier échange ?",
        answer:
          "Une courte description de votre entreprise, de vos systèmes, des principales difficultés et des contraintes de calendrier suffit. Un cahier des charges finalisé n’est pas nécessaire.",
      },
    },
  },
];
