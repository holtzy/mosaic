import type { Localized } from "@/lib/i18n"

import type { Photo } from "./site"

export type Project = {
  name: string
  summary?: Localized
  photo?: Photo
}

export const projects: Project[] = [
  {
    name: "ISOLAKE",
    photo: {
      src: "/images/projects/isolake.webp",
      alt: {
        fr: "Prélèvements à travers la neige sur le lac du Brévent, avril 2024",
        en: "Sampling through the snow on Lac du Brévent, April 2024",
      },
    },
  },
  {
    name: "PLOUF",
    photo: {
      src: "/images/projects/plouf.webp",
      alt: {
        fr: "Lac d'altitude au pied de massifs glaciaires",
        en: "High-altitude lake below glaciated peaks",
      },
      focus: "50% 72%",
    },
  },
]
