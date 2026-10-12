import type { Localized } from "@/lib/i18n"

import type { Link, Photo } from "./site"

export type OutreachBlock = {
  heading?: Localized
  paragraphs?: Localized[]
  items?: Localized[]
}

export type OutreachEvent = {
  id: string
  title: string
  summary: Localized
  audience: Localized
  blocks: OutreachBlock[]
  photos?: Photo[]
  photoCredit?: string
  articles?: Link[]
}

export type PublicTalk = {
  title: Localized
  place: string
  date: string
}

export const publicTalks: PublicTalk[] = []

export const events: OutreachEvent[] = [
  {
    id: "lac-ademie",
    title: "Lac'Adémie",
    summary: {
      fr: "Une journée de formation et d'échanges dédiée aux lacs de montagne et spécialement pensée pour les socio-professionnels de la montagne.",
      en: "A day of training and exchange dedicated to mountain lakes, designed specifically for mountain professionals.",
    },
    audience: {
      fr: "Les socio-professionnels de la montagne tels que les accompagnateurs en montagne ou les guides, les chargés de mission tourisme et/ou environnement des communes ou collectivités territoriales, les offices de tourisme, les animateur.trices nature.",
      en: "Mountain professionals such as mountain leaders and guides, tourism and/or environment officers in municipalities and local authorities, tourist offices, and nature educators.",
    },
    blocks: [
      {
        heading: {
          fr: "Objectif pédagogique général",
          en: "Learning objective",
        },
        paragraphs: [
          {
            fr: "L'objectif général de la formation est de permettre aux participant.es de mieux connaître les écosystèmes des lacs d'altitude et les enjeux associés (biodiversité, changement climatique, contaminations) et de co-construire les messages clés adéquats à délivrer sur le terrain, en s'appuyant sur les connaissances scientifiques actuelles et les retours des situations vécues par les socio-professionnels.",
            en: "The overall aim of the training is to help participants better understand high-altitude lake ecosystems and the issues at stake (biodiversity, climate change, contamination), and to co-design the key messages to share in the field, drawing on current scientific knowledge and on the first-hand experience of mountain professionals.",
          },
        ],
      },
      {
        heading: { fr: "Déroulé de la journée", en: "Programme" },
        paragraphs: [
          {
            fr: "La journée s'articule autour de 3 temps forts :",
            en: "The day is built around three highlights:",
          },
        ],
        items: [
          {
            fr: "Des présentations scientifiques des chercheurs de l'Université Savoie Mont Blanc autour des lacs de montagne et du réseau Lacs Sentinelles",
            en: "Scientific talks by Université Savoie Mont Blanc researchers on mountain lakes and the Lacs Sentinelles network",
          },
          {
            fr: "Un escape game pédagogique pour explorer les spécificités des lacs d'altitude de manière ludique",
            en: "An educational escape game to explore what makes high-altitude lakes special, in a playful way",
          },
          {
            fr: "Des mises en situation favorisant une réflexion collective et la co-construction de messages adaptés aux réalités du terrain",
            en: "Role-play scenarios that encourage collective reflection and the co-design of messages suited to real field situations",
          },
        ],
      },
    ],
    articles: [
      {
        label: "Université Savoie Mont Blanc (2024)",
        href: "https://www.univ-smb.fr/2024/10/29/lacacademie-une-journee-dediee-aux-lacs-daltitude/",
      },
      {
        label: "Institut Transitions – USMB (2026)",
        href: "https://www.univ-smb.fr/institut-transitions/2026/04/23/comprendre-ressentir-transmettre-la-montagne-au-coeur-dun-cycle-de-sensibilisation/",
      },
      {
        label: "Lacs Sentinelles",
        href: "https://www.lacs-sentinelles.org/fr/ressources/journ%C3%A9e-lac-ad%C3%A9mie-formation-discussions-lacs-altitude-2%C3%A8me-%C3%A9dition",
      },
      {
        label: "Hello Djay",
        href: "https://www.hellodjay.design/projets/lacacadmie-facilitation-graphique-pour-une-journe-ddie-aux-lacs-daltitude",
      },
    ],
    photos: [
      {
        src: "/images/outreach/lac-ademie/2.webp",
        alt: {
          fr: "Présentations scientifiques devant les participant·es",
          en: "Scientific talks in front of the participants",
        },
      },
      {
        src: "/images/outreach/lac-ademie/1.webp",
        alt: {
          fr: "Participant·es autour de l'escape game pédagogique",
          en: "Participants around the educational escape game",
        },
      },
    ],
  },
  {
    id: "balade-qui-c-lac",
    title: "Une balade qui c'LAC",
    summary: {
      fr: "Un spectacle pour découvrir autrement les lacs de montagne.",
      en: "A show to discover mountain lakes in a different way.",
    },
    audience: {
      fr: "Scolaires et public familial à partir de 7 ans.",
      en: "School groups and families, ages 7 and up.",
    },
    blocks: [
      {
        paragraphs: [
          {
            fr: "« Une balade qui c'LAC », c'est un projet original de médiation scientifique co-créé par Marine Souchier, ingénieure de recherche au CARRTEL, et Mathilde Gorisse, circassienne acrobate de la compagnie Kaoukafela en 2026.",
            en: "“Une balade qui c'LAC” is an original science-outreach project co-created in 2026 by Marine Souchier, research engineer at CARRTEL, and Mathilde Gorisse, circus acrobat with the Kaoukafela company.",
          },
          {
            fr: "Pensé comme une déambulation au bord d'un lac de montagne, ce dispositif mêle spectacle vivant, expérimentation scientifique participative et découverte in situ des écosystèmes lacustres.",
            en: "Designed as a walk along the shore of a mountain lake, it combines live performance, participatory science experiments and on-site discovery of lake ecosystems.",
          },
          {
            fr: "L'ambition du projet est de rendre accessibles les connaissances scientifiques produites par les chercheurs travaillant sur les lacs de montagne au sein de l'Université Savoie Mont Blanc (USMB), tout en favorisant l'appropriation de ces savoirs par les participant.es. Le public n'est pas simple spectateur : il devient acteur des expériences scientifiques (réalisation de carottes de sédiment, analyses physicochimiques), il manipule des outils pédagogiques et est invité à questionner son propre attachement au lac à travers l'utilisation d'outils artistiques et poétiques tels qu'un tableau acrobatique (corde aérienne suspendue au-dessus de l'eau), une mise en scène humoristique incluant un personnage comique de médiatrice scientifique, des passages musicaux (chanson revisitée pour la balade ou lecture d'une sélection de textes philosophiques sur fond musical).",
            en: "The project aims to make the scientific knowledge produced by researchers working on mountain lakes at Université Savoie Mont Blanc (USMB) accessible, while helping participants make it their own. The audience does not just watch: they take part in the experiments (taking sediment cores, physico-chemical analyses), handle teaching tools, and are invited to question their own attachment to the lake through artistic and poetic means, such as an acrobatic act (an aerial rope suspended above the water), a humorous staging featuring a comic science-communicator character, and musical interludes (a song rewritten for the walk, or readings of philosophical texts set to music).",
          },
          {
            fr: "Le projet a été créé et adapté pour le lac de la Thuile situé dans les Bauges mais il peut s'adapter à d'autres lacs d'altitude, en prenant en compte les contraintes du terrain et les spécificités du lac.",
            en: "The project was created for Lac de la Thuile in the Bauges massif, but it can be adapted to other high-altitude lakes, taking into account the constraints of the site and the specific features of each lake.",
          },
        ],
      },
    ],
    photos: [
      {
        src: "/images/outreach/balade-qui-c-lac/1.webp",
        alt: {
          fr: "Carottage de sédiment dans le lac avec le public",
          en: "Taking a sediment core in the lake with the audience",
        },
      },
      {
        src: "/images/outreach/balade-qui-c-lac/4.webp",
        alt: {
          fr: "Présentation de la balade à un groupe d'enfants",
          en: "Introducing the walk to a group of children",
        },
      },
      {
        src: "/images/outreach/balade-qui-c-lac/3.webp",
        alt: {
          fr: "Tableau acrobatique sur une corde suspendue au-dessus du lac",
          en: "Acrobatic act on a rope suspended above the lake",
        },
        focus: "50% 75%",
      },
      {
        src: "/images/outreach/balade-qui-c-lac/2.webp",
        alt: {
          fr: "Groupe d'enfants en déambulation au bord du lac",
          en: "Group of children walking along the lake",
        },
      },
    ],
    photoCredit: "Romain Bidaud & Alice Nikolli",
  },
  {
    id: "lac-ordee",
    title: "Lac'Ordée",
    summary: {
      fr: "Un programme pédagogique dédié aux lacs de montagne et spécialement pensé pour les scolaires.",
      en: "An educational programme on mountain lakes, designed specifically for schools.",
    },
    audience: {
      fr: "Scolaires (collégien.nes et lycéen.nes).",
      en: "Middle- and high-school students.",
    },
    blocks: [
      {
        heading: {
          fr: "Objectif pédagogique général",
          en: "Learning objectives",
        },
        items: [
          {
            fr: "Former et sensibiliser les citoyens de demain aux enjeux associés à des territoires de montagne en mutation à travers l'exemple des lacs de montagne.",
            en: "Train and raise awareness among tomorrow's citizens about the challenges facing changing mountain regions, through the example of mountain lakes.",
          },
          {
            fr: "Créer un espace de rencontre entre professionnels (chercheurs/gestionnaires d'espaces naturels) et scolaires pouvant éveiller chez ces derniers de nouvelles vocations.",
            en: "Create a meeting space between professionals (researchers, nature-area managers) and students that may spark new vocations.",
          },
        ],
      },
      {
        heading: { fr: "Déroulé du programme", en: "Programme" },
        paragraphs: [
          {
            fr: "Une journée en classe de formation et d'échange entre des chercheurs de l'USMB et les lycéens pour développer leurs connaissances sur les lacs de montagne et leurs enjeux, avec au menu :",
            en: "A day in the classroom where USMB researchers and students meet and exchange, to build knowledge about mountain lakes and the issues they face. On the menu:",
          },
        ],
        items: [
          {
            fr: "Des présentations portant sur des thématiques diverses associées aux lacs d'altitude : botanique aquatique, pédologie, chimie de l'environnement et paléolimnologie.",
            en: "Talks on a range of topics related to high-altitude lakes: aquatic botany, soil science, environmental chemistry and palaeolimnology.",
          },
          {
            fr: "Une découverte ludique de l'écosystème « lac de montagne » à travers l'Escape Game développé par Asters_CEN74.",
            en: "A playful discovery of the mountain-lake ecosystem through the escape game developed by Asters_CEN74.",
          },
          {
            fr: "La co-construction avec les élèves d'un plan d'actions possibles pour protéger ces écosystèmes dans le futur.",
            en: "Co-designing with the students a plan of possible actions to protect these ecosystems in the future.",
          },
        ],
      },
      {
        paragraphs: [
          {
            fr: "Une journée de sortie terrain sur le lac de la Thuile, situé à la Thuile, avec :",
            en: "A field day at Lac de la Thuile, with:",
          },
        ],
        items: [
          {
            fr: "La présentation et le test des protocoles chimiques et biologiques déployés sur le terrain",
            en: "Demonstration and hands-on testing of the chemical and biological field protocols",
          },
          { fr: "Une lecture de paysages", en: "Landscape reading" },
          {
            fr: "L'identification de plantes aquatiques",
            en: "Identifying aquatic plants",
          },
        ],
      },
    ],
    articles: [
      {
        label: "Le Dauphiné Libéré (2025)",
        href: "https://www.ledauphine.com/environnement/2025/09/29/la-recherche-comme-levier-pour-faire-bouger-les-choses-comment-l-universite-savoie-mont-blanc-occupe-le-terrain",
      },
      {
        label: "Université Savoie Mont Blanc (2025)",
        href: "https://www.univ-smb.fr/2025/10/15/lacordee-un-programme-pedagogique-construit-par-des-chercheurs-pour-former-et-sensibiliser-des-lyceens-aux-enjeux-associes-aux-lacs-de-montagne/",
      },
      {
        label: "LinkedIn – Marine Souchier",
        href: "https://www.linkedin.com/posts/marine-souchier-79043163_lacs-paezdagogie-lacthuile-share-7404543965317775360-QKFq/",
      },
    ],
    photos: [
      {
        src: "/images/outreach/lac-ordee/1.webp",
        alt: {
          fr: "Élèves testant les protocoles de terrain dans le lac de la Thuile",
          en: "Students testing field protocols in Lac de la Thuile",
        },
      },
      {
        src: "/images/outreach/lac-ordee/2.webp",
        alt: {
          fr: "Élèves en classe autour de l'escape game",
          en: "Students in class around the escape game",
        },
      },
    ],
  },
]
