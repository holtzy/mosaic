import type { Localized } from "@/lib/i18n"

import type { Link } from "./site"

export type TeamMember = {
  name: string
  role?: Localized
  /** One string per paragraph. */
  bio?: Localized<string[]>
  /** Path inside `public/`, e.g. "/images/team/marine-souchier.webp". */
  photo?: string
  /** CSS object-position, to keep the face in frame when the photo is cropped. */
  photoFocus?: string
  links?: Link[]
}

const researchEngineer: Localized = {
  fr: "Ingénieure de recherche",
  en: "Research engineer",
}

const phdStudent: Localized = {
  fr: "Doctorante",
  en: "PhD student",
}

// TODO: replace with real bios.
const placeholderBio: Localized<string[]> = {
  fr: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  ],
  en: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  ],
}

export const team: TeamMember[] = [
  { name: "Ilann Bourgeois", bio: placeholderBio },
  {
    name: "Marine Souchier",
    photo: "/images/team/marine-souchier.webp",
    photoFocus: "50% 20%",
    role: researchEngineer,
    bio: {
      fr: [
        "Ingénieure de recherche au CARRTEL et accompagnatrice en montagne, j'utilise des approches biogéochimiques et de chimie environnementale pour étudier l'impact des activités humaines sur les écosystèmes lacustres de montagne.",
      ],
      en: [
        "Research engineer at CARRTEL and mountain leader, I use biogeochemical and environmental chemistry approaches to study the impact of human activities on mountain lake ecosystems.",
      ],
    },
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/marine-souchier-79043163/",
      },
    ],
  },
  {
    name: "Maria Page",
    photo: "/images/team/maria-page.webp",
    role: phdStudent,
    bio: {
      fr: [
        "Doctorante au CARRTEL, j'étudie le cycle de l'azote, un nutriment essentiel qui constitue une base des écosystèmes, dans le contexte des lacs alpins. Je m'intéresse surtout à l'origine de ce nutriment et à quel point les activités humaines, à proximité et à distance, l'impactent.",
      ],
      en: [
        "PhD student at CARRTEL, I study the nitrogen cycle, an essential nutrient at the base of ecosystems, in alpine lakes. I am particularly interested in where this nutrient comes from and how strongly human activities, both nearby and far away, affect it.",
      ],
    },
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/maria-page-a95382206",
      },
    ],
  },
  { name: "Clara Garyga", bio: placeholderBio },
  {
    name: "Joanna Dyson",
    photo: "/images/team/joanna-dyson.webp",
    photoFocus: "80% 50%",
    role: researchEngineer,
    bio: {
      fr: [
        "Ingénieure de recherche au CARRTEL, je suis spécialisée en chimie atmosphérique et en science des aérosols. Je développe actuellement un instrument laser de très haute sensibilité pour mesurer le NO en phase gazeuse sur le terrain, capable de distinguer les différents isotopologues du NO à des niveaux de l'ordre du pptv.",
      ],
      en: [
        "I am a research engineer in CARRTEL specialising in atmospheric chemistry and aerosol science. Currently my work involves developing a highly sensitive laser-based instrument to measure gas-phase NO in the field, with the ability to speciate between different isotopologues of NO at pptv levels.",
      ],
    },
    links: [{ label: "ORCID", href: "https://orcid.org/0009-0000-1798-2846" }],
  },
  { name: "Jean-Christophe Clément", bio: placeholderBio },
  { name: "Florent Arthaud", bio: placeholderBio },
  {
    name: "Léa Maupetit",
    photo: "/images/team/lea-maupetit.webp",
    photoFocus: "50% 80%",
    role: phdStudent,
    bio: {
      fr: [
        "Doctorante au CARRTEL, je cherche à comprendre l'impact du réchauffement des lacs d'altitude sur le relargage des nutriments depuis les sédiments, dans un contexte de proliférations algales observées dans des lacs oligotrophes.",
        "L'objectif de ma thèse est de quantifier les flux d'azote et de phosphore en fonction de la température et d'identifier les mécanismes physico-chimiques et/ou biologiques impliqués à l'interface eau-sédiments. Ces résultats permettront d'alimenter un modèle prévisionnel afin de mieux comprendre et anticiper les conditions favorisant les proliférations algales.",
      ],
      en: [
        "PhD student at CARRTEL, I am trying to understand how the warming of high-altitude lakes affects the release of nutrients from sediments, in a context of algal blooms observed in oligotrophic lakes.",
        "The aim of my PhD is to quantify nitrogen and phosphorus fluxes as a function of temperature and to identify the physico-chemical and/or biological mechanisms at work at the water–sediment interface. These results will feed a predictive model to better understand and anticipate the conditions that favour algal blooms.",
      ],
    },
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/l%C3%A9a-maupetit",
      },
    ],
  },
  { name: "Lilou Veret", bio: placeholderBio },
]
