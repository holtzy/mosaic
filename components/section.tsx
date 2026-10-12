import { cn } from "@/lib/utils"

type SectionProps = {
  id: string
  title: string
  children: React.ReactNode
  className?: string
}

function Section({ id, title, children, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("scroll-mt-24 border-t py-16 md:py-24", className)}
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2
          id={`${id}-title`}
          className="mb-10 text-2xl font-medium tracking-tight md:mb-14 md:text-3xl"
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}

function Subheading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-6 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
      {children}
    </h3>
  )
}

function ComingSoon({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-muted-foreground italic">{children}</p>
}

export { ComingSoon, Section, Subheading }
