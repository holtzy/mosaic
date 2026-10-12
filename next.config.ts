import type { NextConfig } from "next"

import { basePath } from "./lib/base-path"

const nextConfig: NextConfig = {
  // Build to a static site in `out/`, served by GitHub Pages.
  output: "export",
  basePath,
  // Image optimization needs a server, so images are served as they are in `public/`.
  images: { unoptimized: true },
}

export default nextConfig
