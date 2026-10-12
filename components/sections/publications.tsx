"use client"

import { useLocale } from "@/components/locale-provider"
import { ComingSoon, Section, Subheading } from "@/components/section"
import { articles, conferences, type Publication } from "@/content/publications"
import { team } from "@/content/team"
import { ui } from "@/content/ui"

const teamNames = new Set(team.map((member) => member.name))

function PublicationList({ items }: { items: Publication[] }) {
  const { t } = useLocale()

  if (items.length === 0) {
    return <ComingSoon>{t(ui.comingSoon)}</ComingSoon>
  }

  const sorted = [...items].sort((a, b) => b.year - a.year)

  return (
    <ol className="space-y-6">
      {sorted.map((item) => (
        <li
          key={`${item.year}-${item.title}`}
          className="grid gap-1 text-sm leading-relaxed sm:grid-cols-[4rem_1fr]"
        >
          <span className="text-muted-foreground tabular-nums">
            {item.year}
          </span>
          <div>
            <p>
              {item.authors.map((author, index) => (
                <span key={author}>
                  {index > 0 && ", "}
                  <span
                    className={
                      teamNames.has(author) ? "font-semibold" : undefined
                    }
                  >
                    {author}
                  </span>
                </span>
              ))}
            </p>
            <p className="font-medium">
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4"
                >
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </p>
            <p className="text-muted-foreground">
              {[item.venue, item.location].filter(Boolean).join(", ")}
            </p>
          </div>
        </li>
      ))}
    </ol>
  )
}

function Publications() {
  const { t } = useLocale()

  return (
    <Section id="publications" title={t(ui.sections.publications)}>
      <div className="space-y-16">
        <div>
          <Subheading>{t(ui.publications.articles)}</Subheading>
          <PublicationList items={articles} />
        </div>
        <div>
          <Subheading>{t(ui.publications.conferences)}</Subheading>
          <PublicationList items={conferences} />
        </div>
      </div>
    </Section>
  )
}

export { Publications }
