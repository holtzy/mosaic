import Image from "next/image"
import { MountainIcon } from "lucide-react"

import { withBasePath } from "@/lib/base-path"
import { cn } from "@/lib/utils"

type PhotoProps = {
  /** Path inside `public/`. A neutral placeholder is shown when missing. */
  src?: string
  alt: string
  /** Passed to next/image so the right size is served for the layout. */
  sizes: string
  /** CSS object-position, to keep the subject in frame when cropped. */
  focus?: string
  preload?: boolean
  className?: string
  style?: React.CSSProperties
}

function Photo({
  src,
  alt,
  sizes,
  focus,
  preload,
  className,
  style,
}: PhotoProps) {
  return (
    <div
      className={cn("relative overflow-hidden bg-muted", className)}
      style={style}
    >
      {src ? (
        <Image
          src={withBasePath(src)}
          alt={alt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover"
          style={focus ? { objectPosition: focus } : undefined}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex items-center justify-center text-muted-foreground/40"
        >
          <MountainIcon className="size-8" strokeWidth={1.25} />
        </div>
      )}
    </div>
  )
}

export { Photo }
