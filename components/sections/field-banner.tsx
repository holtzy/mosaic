"use client"

import { useLocale } from "@/components/locale-provider"
import { ParallaxPhoto } from "@/components/parallax-photo"
import { site } from "@/content/site"

/** Wide photo break between sections, showing the team at work in the field. */
function FieldBanner() {
  const { t } = useLocale()
  const { fieldPhoto } = site

  if (!fieldPhoto.src) {
    return null
  }

  return (
    <figure className="pb-8">
      <ParallaxPhoto
        src={fieldPhoto.src}
        alt={t(fieldPhoto.alt)}
        focus={fieldPhoto.focus}
        sizes="100vw"
        className="h-64 md:h-[26rem]"
      />
      <figcaption className="mx-auto max-w-5xl px-6 pt-3 text-right text-xs text-muted-foreground">
        {t(site.fieldCaption)}
      </figcaption>
    </figure>
  )
}

export { FieldBanner }
