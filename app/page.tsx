import { SiteHeader } from "@/components/site-header"
import { Contact, SiteFooter } from "@/components/sections/contact"
import { FieldBanner } from "@/components/sections/field-banner"
import { Hero } from "@/components/sections/hero"
import { Outreach } from "@/components/sections/outreach"
import { Partners } from "@/components/sections/partners"
import { Publications } from "@/components/sections/publications"
import { Research } from "@/components/sections/research"
import { Team } from "@/components/sections/team"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Partners />
        <Research />
        <Team />
        <FieldBanner />
        <Outreach />
        <Publications />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
