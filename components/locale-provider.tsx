"use client"

import * as React from "react"

import { defaultLocale, type Locale, type Localized } from "@/lib/i18n"

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: <T>(value: Localized<T>) => T
}

const LocaleContext = React.createContext<LocaleContextValue | null>(null)

function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = React.useState<Locale>(defaultLocale)

  React.useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const value = React.useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, t: (value) => value[locale] }),
    [locale]
  )

  return <LocaleContext value={value}>{children}</LocaleContext>
}

function useLocale() {
  const context = React.useContext(LocaleContext)

  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }

  return context
}

export { LocaleProvider, useLocale }
