import Image from 'next/image';
import { Mail, Linkedin } from 'lucide-react';
import type { TeamMember } from '@/data/team';

/** Carte d'un membre de l'équipe. Les champs absents ne s'affichent pas. */
export function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="rounded-xl border border-line bg-white p-7 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(18,22,28,.10)]">
      {member.photo ? (
        <Image
          src={member.photo}
          alt={member.photoAlt ?? `${member.name}, ${member.role} chez KONFORTECH BÉNIN`}
          width={128}
          height={128}
          className="mx-auto mb-4 h-28 w-28 rounded-full object-cover"
        />
      ) : (
        <div
          className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-fog-200 font-display text-2xl font-bold text-brand-blue"
          aria-hidden
        >
          {member.name.charAt(0)}
        </div>
      )}

      <h3 className="text-lg font-semibold">{member.name}</h3>
      <p className="mt-1 text-sm font-medium text-brand-blue">{member.role}</p>

      {member.bio && <p className="mt-3 text-sm text-slate-600">{member.bio}</p>}

      {member.expertise && member.expertise.length > 0 && (
        <ul className="mt-4 flex flex-wrap justify-center gap-2">
          {member.expertise.map((e) => (
            <li key={e} className="rounded-full bg-fog-100 px-3 py-1.5 text-xs text-slate-600">
              {e}
            </li>
          ))}
        </ul>
      )}

      {(member.email || member.linkedin) && (
        <div className="mt-5 flex justify-center gap-2.5">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              aria-label={`Écrire à ${member.name}`}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-fog-100 text-slate-600 transition-colors hover:bg-brand-blue hover:text-white"
            >
              <Mail className="h-4 w-4" aria-hidden />
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} sur LinkedIn`}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-fog-100 text-slate-600 transition-colors hover:bg-brand-blue hover:text-white"
            >
              <Linkedin className="h-4 w-4" aria-hidden />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
