"use client"

import { LanguageSwitcher } from "@/components/language-switcher"
import { useLocale } from "@/components/locale-provider"
import { site } from "@/content/site"
import { ui } from "@/content/ui"

const navItems = [
  { id: "research", label: ui.nav.research },
  { id: "team", label: ui.nav.team },
  { id: "outreach", label: ui.nav.outreach },
  { id: "publications", label: ui.nav.publications },
  { id: "contact", label: ui.nav.contact },
]

function SiteHeader() {
  const { t } = useLocale()

  const links = navItems.map((item) => (
    <a
      key={item.id}
      href={`#${item.id}`}
      className="whitespace-nowrap transition-colors hover:text-foreground"
    >
      {t(item.label)}
    </a>
  ))

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-6 px-6">
        <a href="#top" className="font-semibold tracking-[0.2em]">
          {site.name}
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {links}
        </nav>
        <LanguageSwitcher />
      </div>
      <nav className="flex gap-5 overflow-x-auto px-6 pb-3 text-sm text-muted-foreground md:hidden">
        {links}
      </nav>
    </header>
  )
}

export { SiteHeader }
