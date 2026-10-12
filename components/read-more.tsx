"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { useLocale } from "@/components/locale-provider"
import { ui } from "@/content/ui"
import { cn } from "@/lib/utils"

type ReadMoreProps = {
  children: React.ReactNode
  /** Height of the visible excerpt, as a CSS length. */
  collapsedHeight: string
  className?: string
}

/**
 * Clamps its content to `collapsedHeight` and shows a toggle only when the
 * content is actually taller than that.
 */
function ReadMore({ children, collapsedHeight, className }: ReadMoreProps) {
  const { t } = useLocale()
  const id = React.useId()
  const viewportRef = React.useRef<HTMLDivElement>(null)
  const contentRef = React.useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = React.useState(false)
  const [overflowing, setOverflowing] = React.useState(false)

  React.useEffect(() => {
    const viewport = viewportRef.current
    const content = contentRef.current
    if (!viewport || !content || expanded) {
      return
    }

    // The content element resizes when the text changes (e.g. switching language)
    // or the layout reflows, so re-check on both.
    const check = () =>
      setOverflowing(content.offsetHeight > viewport.clientHeight + 1)
    const observer = new ResizeObserver(check)
    observer.observe(content)
    observer.observe(viewport)
    check()

    return () => observer.disconnect()
  }, [expanded])

  const clamped = !expanded && overflowing

  return (
    <div className={className}>
      <div
        ref={viewportRef}
        id={id}
        className="overflow-hidden"
        style={{
          maxHeight: expanded ? undefined : collapsedHeight,
          maskImage: clamped
            ? "linear-gradient(to bottom, black 55%, transparent)"
            : undefined,
        }}
      >
        <div ref={contentRef}>{children}</div>
      </div>
      {overflowing && (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={id}
          onClick={() => setExpanded((value) => !value)}
          className="mt-2 inline-flex cursor-pointer items-center gap-1 text-xs font-semibold tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground"
        >
          {t(expanded ? ui.readLess : ui.readMore)}
          <ChevronDownIcon
            className={cn(
              "size-3.5 transition-transform",
              expanded && "rotate-180"
            )}
          />
        </button>
      )}
    </div>
  )
}

export { ReadMore }
