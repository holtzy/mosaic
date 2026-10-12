"use client"

import { useLocale } from "@/components/locale-provider"
import { Section, Subheading } from "@/components/section"
import { site } from "@/content/site"
import { ui } from "@/content/ui"

function Contact() {
  const { t } = useLocale()

  return (
    <Section
      id="contact"
      title={t(ui.sections.contact)}
      className="bg-muted/40"
    >
      <div className="grid gap-12 text-sm leading-relaxed sm:grid-cols-2">
        <div>
          <Subheading>{t(ui.contact.address)}</Subheading>
          <address className="not-italic">
            {site.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>
        <div>
          <Subheading>{t(ui.contact.email)}</Subheading>
          {site.email ? (
            <a
              href={`mailto:${site.email}`}
              className="underline underline-offset-4"
            >
              {site.email}
            </a>
          ) : (
            <p className="text-muted-foreground italic">
              {t(ui.contact.emailPending)}
            </p>
          )}
        </div>
      </div>
    </Section>
  )
}

function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="flex flex-wrap justify-between gap-2 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {site.name} · CARRTEL INRAE –
            Université Savoie Mont Blanc
          </p>
          <p>{site.expansion}</p>
        </div>
      </div>
    </footer>
  )
}

export { Contact, SiteFooter }
