"use client"

import { useLocale } from "@/components/locale-provider"
import { ui } from "@/content/ui"
import { locales } from "@/lib/i18n"
import { cn } from "@/lib/utils"

function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale()

  return (
    <div
      role="group"
      aria-label={t(ui.languageSwitcher)}
      className="flex items-center text-xs font-semibold tracking-widest"
    >
      {locales.map((option, index) => (
        <span key={option} className="flex items-center">
          {index > 0 && (
            <span aria-hidden className="px-1.5 text-border">
              /
            </span>
          )}
          <button
            type="button"
            lang={option}
            aria-pressed={locale === option}
            onClick={() => setLocale(option)}
            className={cn(
              "cursor-pointer uppercase transition-colors hover:text-foreground",
              locale === option ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {option}
          </button>
        </span>
      ))}
    </div>
  )
}

export { LanguageSwitcher }
