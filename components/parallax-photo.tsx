"use client"

import * as React from "react"
import Image from "next/image"

import { withBasePath } from "@/lib/base-path"
import { cn } from "@/lib/utils"

type ParallaxPhotoProps = {
  src: string
  alt: string
  sizes: string
  /** CSS object-position, to keep the subject in frame when cropped. */
  focus?: string
  /** How far the image drifts, as a fraction of the container height. */
  strength?: number
  className?: string
  children?: React.ReactNode
}

/**
 * A cropped photo that scrolls slightly slower than the page. The effect is
 * skipped for visitors who prefer reduced motion.
 */
function ParallaxPhoto({
  src,
  alt,
  sizes,
  focus,
  strength = 0.15,
  className,
  children,
}: ParallaxPhotoProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const layerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const container = containerRef.current
    const layer = layerRef.current
    if (
      !container ||
      !layer ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return
    }

    let frame = 0

    const update = () => {
      frame = 0
      const rect = container.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      if (rect.bottom < 0 || rect.top > viewportHeight) {
        return
      }
      // 0 when the photo enters at the bottom of the screen, 1 when it leaves at the top.
      const progress =
        (viewportHeight - rect.top) / (viewportHeight + rect.height)
      const offset = (progress - 0.5) * 2 * strength * rect.height
      layer.style.transform = `translate3d(0, ${offset}px, 0)`
    }

    const schedule = () => {
      if (!frame) {
        frame = requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
    }
  }, [strength])

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
    >
      <div
        ref={layerRef}
        className="absolute inset-x-0 will-change-transform"
        style={{
          top: `${-strength * 100}%`,
          height: `${100 + 2 * strength * 100}%`,
        }}
      >
        <Image
          src={withBasePath(src)}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
          style={focus ? { objectPosition: focus } : undefined}
        />
      </div>
      {children}
    </div>
  )
}

export { ParallaxPhoto }
