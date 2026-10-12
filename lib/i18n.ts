export const locales = ["fr", "en"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "fr"

/** A value provided in every supported language. */
export type Localized<T = string> = Record<Locale, T>
