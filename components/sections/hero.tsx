"use client"

import { useLocale } from "@/components/locale-provider"
import { Photo } from "@/components/photo"
import { buttonVariants } from "@/components/ui/button"
import { site } from "@/content/site"
import { ui } from "@/content/ui"
import { cn } from "@/lib/utils"

/** Renders the acronym expansion with the letters of "MOSAIC" emphasised. */
function Expansion({ text }: { text: string }) {
  return (
    <>
      {[...text].map((char, index) =>
        char >= "A" && char <= "Z" ? (
          <span key={index} className="font-semibold text-white">
            {char}
          </span>
        ) : (
          char
        )
      )}
    </>
  )
}

function Hero() {
  const { t } = useLocale()
  const { heroPhoto } = site

  return (
    <section
      id="top"
      className="relative flex h-[calc(100svh-6rem)] max-h-[880px] min-h-[520px] items-end md:h-[calc(100svh-3.5rem)]"
    >
      <Photo
        src={heroPhoto.src}
        alt={t(heroPhoto.alt)}
        sizes="100vw"
        focus="50% 70%"
        preload
        className="absolute inset-0"
      />
      {/* Two scrims: one darkens the bottom, the other the left side behind the text. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-r from-black/45 via-black/15 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-5xl px-6 pb-14 text-white [text-shadow:0_1px_12px_rgb(0_0_0/0.35)] md:pb-20">
        <p className="text-xs font-semibold tracking-widest text-white/85 uppercase">
          CARRTEL · INRAE – USMB
        </p>
        <h1 className="mt-3 text-5xl font-medium tracking-[0.15em] md:text-7xl">
          {site.name}
        </h1>
        <p className="mt-3 text-sm text-white/85">
          <Expansion text={site.expansion} />
        </p>
        <p className="mt-6 max-w-lg leading-relaxed text-white md:text-lg">
          {t(site.description)}
        </p>
        <div className="mt-8 flex flex-wrap gap-3 [text-shadow:none]">
          <a
            href="#research"
            className={cn(
              buttonVariants(),
              "bg-white text-black hover:bg-white/85"
            )}
          >
            {t(ui.hero.research)}
          </a>
          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-white/60 text-white hover:bg-white/10 hover:text-white"
            )}
          >
            {t(ui.hero.contact)}
          </a>
        </div>
      </div>

      {heroPhoto.credit && (
        <p className="absolute right-4 bottom-3 text-[11px] text-white/70">
          {t(ui.photoCredit)} : {heroPhoto.credit}
        </p>
      )}
    </section>
  )
}

export { Hero }
