import type { Localized } from "@/lib/i18n"

export type Project = {
  name: string
  summary?: Localized
}

export const projects: Project[] = [{ name: "ISOLAKE" }, { name: "PLOUF" }]
