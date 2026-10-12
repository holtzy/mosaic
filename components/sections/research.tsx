"use client"

import { useLocale } from "@/components/locale-provider"
import { Photo } from "@/components/photo"
import { ComingSoon, Section } from "@/components/section"
import { projects } from "@/content/projects"
import { ui } from "@/content/ui"

function Research() {
  const { t } = useLocale()

  return (
    <Section id="research" title={t(ui.sections.research)}>
      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
        {projects.map((project) => (
          <article key={project.name}>
            {project.photo && (
              <Photo
                src={project.photo.src}
                alt={t(project.photo.alt)}
                focus={project.photo.focus}
                sizes="(min-width: 640px) 480px, 100vw"
                className="mb-5 aspect-4/3"
              />
            )}
            <h3 className="text-lg font-medium tracking-wide">
              {project.name}
            </h3>
            <div className="mt-2">
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
