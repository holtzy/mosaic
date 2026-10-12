"use client"

import { ArrowUpRightIcon } from "lucide-react"

import { useLocale } from "@/components/locale-provider"
import { Photo } from "@/components/photo"
import { ReadMore } from "@/components/read-more"
import { Section } from "@/components/section"
import { team, type TeamMember } from "@/content/team"
import { ui } from "@/content/ui"

function MemberCard({ member }: { member: TeamMember }) {
  const { t } = useLocale()

  return (
    <article className="flex flex-col">
      <Photo
        src={member.photo}
        alt={member.name}
        focus={member.photoFocus}
        sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 100vw"
        className="aspect-4/5"
      />
      <h3 className="mt-4 font-medium">{member.name}</h3>
      {member.role && (
        <p className="text-sm text-muted-foreground">{t(member.role)}</p>
      )}
      {member.bio && (
        <ReadMore collapsedHeight="5.75rem" className="mt-3">
          <div className="space-y-3 text-sm leading-relaxed">
            {t(member.bio).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </ReadMore>
      )}
      {member.links && (
        <ul className="mt-3 flex gap-4 text-sm">
          {member.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-0.5 underline underline-offset-4 hover:text-muted-foreground"
              >
                {link.label}
                <ArrowUpRightIcon className="size-3.5" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

function Team() {
  const { t } = useLocale()

  return (
    <Section id="team" title={t(ui.sections.team)}>
      <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
    </Section>
  )
}

export { Team }
