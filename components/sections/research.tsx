"use client"

import { useLocale } from "@/components/locale-provider"
import { ComingSoon, Section } from "@/components/section"
import { projects } from "@/content/projects"
import { ui } from "@/content/ui"

function Research() {
  const { t } = useLocale()

  return (
    <Section id="research" title={t(ui.sections.research)}>
      <div className="grid gap-px bg-border sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="bg-background py-6 sm:p-8 sm:first:pl-0"
          >
            <h3 className="text-lg font-medium tracking-wide">
              {project.name}
            </h3>
            <div className="mt-3">
              {project.summary ? (
                <p className="text-sm leading-relaxed">{t(project.summary)}</p>
              ) : (
                <ComingSoon>{t(ui.comingSoon)}</ComingSoon>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

export { Research }
