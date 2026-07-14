import Image from "next/image";
import { Twitter, Linkedin, BadgeCheck } from "lucide-react";
import type { Author } from "@/types/content";

export function AuthorBio({ author }: { author: Author }) {
  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-6 dark:border-ink-800 dark:bg-ink-900 sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
          <Image src={author.avatar} alt={author.name} fill sizes="64px" className="object-cover" />
        </div>
        <div>
          <p className="flex items-center gap-1.5 font-semibold text-ink-950 dark:text-white">
            {author.name}
            <BadgeCheck className="h-4 w-4 text-court-500" aria-label="Verified author" />
          </p>
          <p className="text-sm text-ink-400">{author.role}</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{author.bio}</p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-400">
            {author.credentials.map((c) => (
              <li key={c}>&bull; {c}</li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-3">
            {author.twitter && (
              <a href={author.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${author.name} on Twitter`}>
                <Twitter className="h-4 w-4 text-ink-400 hover:text-court-600" />
              </a>
            )}
            {author.linkedin && (
              <a href={author.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${author.name} on LinkedIn`}>
                <Linkedin className="h-4 w-4 text-ink-400 hover:text-court-600" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
