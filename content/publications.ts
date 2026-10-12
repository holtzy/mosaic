export type Publication = {
  authors: string[]
  title: string
  /** Journal for articles, meeting name for conferences. */
  venue: string
  location?: string
  year: number
  url?: string
}

export const articles: Publication[] = []

export const conferences: Publication[] = [
  {
    authors: [
      "Marine Souchier",
      "Maria Page",
      "Chiara Pistocchi",
      "Florent Arthaud",
      "Jean-Christophe Clément",
      "Federica Tamburini",
      "Ilann Bourgeois",
    ],
    title: "Tracing the sources of phosphorous in alpine lakes",
    venue: "ASLO",
    location: "Montréal, Canada",
    year: 2026,
  },
]
