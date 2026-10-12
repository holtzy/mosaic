/**
 * Path prefix the site is served under, e.g. "/mosaic" on GitHub Pages.
 * Empty in local development. Set at build time through NEXT_PUBLIC_BASE_PATH.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

/** Prefixes a file from `public/` with the base path. */
export function withBasePath(path: string) {
  return `${basePath}${path}`
}
