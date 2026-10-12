"use client"

import Image from "next/image"

import { useLocale } from "@/components/locale-provider"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { site } from "@/content/site"
import { ui } from "@/content/ui"
import { withBasePath } from "@/lib/base-path"

/** Quiet row of institution logos, greyed out until hovered. */
function Partners() {
  const { t } = useLocale()

  return (
    <section aria-label={t(ui.partners)} className="border-b">
      <TooltipProvider delay={150}>
        <ul className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-6 px-6 py-8">
          {site.partners.map((partner) => (
            <li key={partner.name}>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <a
                      href={partner.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={partner.name}
                    />
                  }
                  className="block opacity-50 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 focus-visible:opacity-100 focus-visible:grayscale-0 dark:rounded-sm dark:bg-white dark:p-1.5"
                >
                  <Image
                    src={withBasePath(partner.logo.src)}
                    alt=""
                    width={partner.logo.width}
                    height={partner.logo.height}
                    className="h-10 w-auto"
                  />
                </TooltipTrigger>
                <TooltipContent className="block max-w-64 py-2 leading-relaxed">
                  <span className="block font-semibold">{partner.name}</span>
                  {t(partner.description)}
                </TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
      </TooltipProvider>
    </section>
  )
}

export { Partners }
