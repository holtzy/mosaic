import type { Localized } from "@/lib/i18n"

/** Interface labels that are not tied to a specific piece of content. */
export const ui = {
  nav: {
    research: { fr: "Recherche", en: "Research" },
    team: { fr: "Équipe", en: "Team" },
    outreach: { fr: "Médiation", en: "Outreach" },
    publications: { fr: "Publications", en: "Publications" },
    contact: { fr: "Contact", en: "Contact" },
  },
  sections: {
    research: { fr: "Projets de recherche", en: "Research projects" },
    team: { fr: "L'équipe", en: "The team" },
    outreach: { fr: "Médiation scientifique", en: "Science outreach" },
    publications: {
      fr: "Production scientifique",
      en: "Scientific output",
    },
    contact: { fr: "Contact", en: "Contact" },
  },
  outreach: {
    publicTalks: { fr: "Conférences grand public", en: "Public talks" },
    events: { fr: "Évènements", en: "Events" },
    audience: { fr: "Public", en: "Audience" },
    articles: { fr: "Articles associés", en: "Related articles" },
    cta: {
      fr: "Intéressé.e pour organiser cet évènement au sein de votre structure ?",
      en: "Interested in hosting this event at your organisation?",
    },
    contactUs: { fr: "Contactez-nous", en: "Contact us" },
  },
  publications: {
    articles: { fr: "Articles", en: "Articles" },
    conferences: {
      fr: "Conférences et ateliers",
      en: "Conferences and workshops",
    },
  },
  contact: {
    address: { fr: "Adresse", en: "Address" },
    email: { fr: "E-mail", en: "E-mail" },
    emailPending: {
      fr: "Adresse e-mail à venir",
      en: "E-mail address coming soon",
    },
  },
  hero: {
    research: { fr: "Nos recherches", en: "Our research" },
    contact: { fr: "Nous contacter", en: "Get in touch" },
  },
  readMore: { fr: "Lire la suite", en: "Read more" },
  readLess: { fr: "Réduire", en: "Show less" },
  partners: { fr: "Tutelles et partenaires", en: "Institutions and partners" },
  photoCredit: { fr: "Crédit photo", en: "Photo credit" },
  comingSoon: { fr: "À venir", en: "Coming soon" },
  languageSwitcher: { fr: "Langue du site", en: "Site language" },
} satisfies Record<string, Record<string, Localized> | Localized>
