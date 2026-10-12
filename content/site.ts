import type { Localized } from "@/lib/i18n"

export type Photo = {
  /** Path inside `public/`, e.g. "/images/home/lake-cover-1.webp". Leave undefined to show a placeholder. */
  src?: string
  alt: Localized
  credit?: string
  /** CSS object-position, to keep the subject in frame when the photo is cropped. */
  focus?: string
}

export type Link = {
  label: string
  href: string
}

export type Partner = {
  name: string
  href: string
  /** Shown in a tooltip: how this organisation relates to the team. */
  description: Localized
  /** Path inside `public/` and intrinsic size of the logo file. */
  logo: { src: string; width: number; height: number }
}

type Site = {
  name: string
  /** The uppercase letters spell out the acronym and are highlighted on the page. */
  expansion: string
  description: Localized
  heroPhoto: Photo
  fieldPhoto: Photo
  fieldCaption: Localized
  address: string[]
  email?: string
  partners: Partner[]
}

export const site: Site = {
  name: "MOSAIC",
  expansion: "MOuntains Systems AnalysIs with Chemistry",
  description: {
    fr: "Nous étudions les lacs de montagne et leur réponse aux activités humaines et au changement climatique, en suivant les nutriments de l'atmosphère jusqu'aux sédiments.",
    en: "We study mountain lakes and how they respond to human activities and climate change, tracing nutrients from the atmosphere down to the sediments.",
  },
  heroPhoto: {
    src: "/images/home/lac-du-pontet.webp",
    alt: {
      fr: "Le lac du Pontet et les sommets des Écrins en été",
      en: "Lac du Pontet and the surrounding peaks in summer",
    },
    credit: "Thibaut Blais",
  },
  fieldPhoto: {
    src: "/images/field/lac-cornu-2024-04.webp",
    alt: {
      fr: "L'équipe effectue des prélèvements sur le lac Cornu gelé et enneigé",
      en: "The team sampling on the frozen, snow-covered Lac Cornu",
    },
    focus: "50% 62%",
  },
  fieldCaption: {
    fr: "L'équipe sur le terrain · Lac Cornu, avril 2024",
    en: "The team in the field · Lac Cornu, April 2024",
  },
  address: [
    "Université Savoie Mont Blanc",
    "UFR Sciences et Montagne",
    "CARRTEL INRAE UMR 42",
    "73376 Le Bourget-du-Lac cedex",
  ],
  email: "ilann.bourgeois@univ-smb.fr",
  partners: [
    {
      name: "INRAE",
      description: {
        fr: "Institut national de recherche pour l'agriculture, l'alimentation et l'environnement, tutelle du CARRTEL.",
        en: "France's national research institute for agriculture, food and the environment, parent institution of CARRTEL.",
      },
      href: "https://www.inrae.fr",
      logo: { src: "/images/partners/inrae.webp", width: 230, height: 80 },
    },
    {
      name: "CARRTEL",
      description: {
        fr: "Notre laboratoire : le Centre alpin de recherche sur les réseaux trophiques et écosystèmes limniques (UMR INRAE – USMB).",
        en: "Our lab: the Alpine research centre on food webs and lake ecosystems (joint INRAE – USMB unit).",
      },
      href: "https://fr-carrtel.lyon-grenoble.hub.inrae.fr/",
      logo: { src: "/images/partners/carrtel.webp", width: 116, height: 60 },
    },
    {
      name: "Université Savoie Mont Blanc",
      description: {
        fr: "Co-tutelle du CARRTEL. L'équipe est basée sur le campus du Bourget-du-Lac.",
        en: "CARRTEL's other parent institution. The team is based on the Le Bourget-du-Lac campus.",
      },
      href: "https://www.univ-smb.fr",
      logo: { src: "/images/partners/usmb.webp", width: 142, height: 60 },
    },
    {
      name: "Pôle R&D ECLA",
      description: {
        fr: "Pôle de recherche et développement sur les écosystèmes lacustres (OFB – INRAE – USMB), dont le CARRTEL est partenaire.",
        en: "Research and development centre on lake ecosystems (OFB – INRAE – USMB), with CARRTEL as a partner.",
      },
      href: "https://ofb.gouv.fr/les-poles-recherche-developpement-de-ofb",
      logo: { src: "/images/partners/pole-ecla.webp", width: 57, height: 59 },
    },
    {
      name: "Carnot Eau & Environnement",
      description: {
        fr: "Réseau de recherche partenariale sur l'eau et l'environnement, dont l'Université Savoie Mont Blanc est membre.",
        en: "Partnership research network on water and the environment, of which Université Savoie Mont Blanc is a member.",
      },
      href: "https://carnot-eau-environnement.fr/",
      logo: {
        src: "/images/partners/carnot-eau-environnement.webp",
        width: 235,
        height: 60,
      },
    },
  ],
}
