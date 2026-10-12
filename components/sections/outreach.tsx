"use client"

import { ArrowUpRightIcon } from "lucide-react"

import { useLocale } from "@/components/locale-provider"
import { Photo } from "@/components/photo"
import { ReadMore } from "@/components/read-more"
import { ComingSoon, Section, Subheading } from "@/components/section"
import { buttonVariants } from "@/components/ui/button"
import { events, publicTalks, type OutreachEvent } from "@/content/outreach"
import { ui } from "@/content/ui"

function EventArticle({ event }: { event: OutreachEvent }) {
  const { t } = useLocale()

  return (
    <article
      id={event.id}
      className="grid gap-8 border-t pt-10 md:grid-cols-[1fr_2fr] md:gap-12"
    >
      <div>
        <h4 className="text-xl font-medium">{event.title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {t(event.summary)}
        </p>
        <dl className="mt-6 text-sm">
          <dt className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            {t(ui.outreach.audience)}
          </dt>
          <dd className="mt-1 leading-relaxed">{t(event.audience)}</dd>
        </dl>
      </div>

      <div className="space-y-6 text-sm leading-relaxed">
        {event.photos && event.photos.length > 0 && (
          <figure>
            <div className="grid grid-cols-2 gap-2">
              {event.photos.map((photo) => (
                <Photo
                  key={photo.src}
                  src={photo.src}
                  alt={t(photo.alt)}
                  focus={photo.focus}
                  sizes="(min-width: 768px) 320px, 50vw"
                  className="aspect-4/3"
                />
              ))}
            </div>
            {event.photoCredit && (
              <figcaption className="mt-2 text-xs text-muted-foreground">
                {t(ui.photoCredit)} : {event.photoCredit}
              </figcaption>
            )}
          </figure>
        )}

        <ReadMore collapsedHeight="11rem">
          <div className="space-y-6">
            {event.blocks.map((block, index) => (
              <div key={index} className="space-y-3">
                {block.heading && (
                  <h5 className="font-medium">{t(block.heading)}</h5>
                )}
                {block.paragraphs?.map((paragraph, i) => (
                  <p key={i}>{t(paragraph)}</p>
                ))}
                {block.items && (
                  <ul className="list-disc space-y-1.5 pl-5 marker:text-muted-foreground">
                    {block.items.map((item, i) => (
                      <li key={i}>{t(item)}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {event.articles && (
              <div className="space-y-3">
                <h5 className="font-medium">{t(ui.outreach.articles)}</h5>
                <ul className="space-y-1.5">
                  {event.articles.map((article) => (
                    <li key={article.href}>
                      <a
                        href={article.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-0.5 underline underline-offset-4 hover:text-muted-foreground"
                      >
                        {article.label}
                        <ArrowUpRightIcon className="size-3.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </ReadMore>

        <div className="flex flex-col items-start gap-3 bg-muted p-5 sm:flex-row sm:items-center sm:justify-between">
          <p>{t(ui.outreach.cta)}</p>
          <a
            href="#contact"
            className={buttonVariants({ variant: "default", size: "sm" })}
          >
            {t(ui.outreach.contactUs)}
          </a>
        </div>
      </div>
    </article>
  )
}

function Outreach() {
  const { t } = useLocale()

  return (
    <Section id="outreach" title={t(ui.sections.outreach)}>
      <div className="space-y-16">
        <div>
          <Subheading>{t(ui.outreach.publicTalks)}</Subheading>
          {publicTalks.length > 0 ? (
            <ul className="space-y-2 text-sm">
              {publicTalks.map((talk) => (
                <li key={`${talk.date}-${talk.place}`}>
                  <span className="font-medium">{t(talk.title)}</span>
                  <span className="text-muted-foreground">
                    {" "}
                    · {talk.place} · {talk.date}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <ComingSoon>{t(ui.comingSoon)}</ComingSoon>
          )}
        </div>

        <div>
          <Subheading>{t(ui.outreach.events)}</Subheading>
          <div className="space-y-14">
            {events.map((event) => (
              <EventArticle key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export { Outreach }
