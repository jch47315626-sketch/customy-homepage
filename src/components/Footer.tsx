import Link from "next/link";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import Wordmark from "./Wordmark";

export default function Footer() {
  return (
    <footer className="mt-24 bg-navy text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <span className="inline-block rounded-2xl bg-cream px-3 py-2">
            <Wordmark className="text-3xl" />
          </span>
          <p className="mt-4 text-sm leading-relaxed">
            {site.name} · {site.tagline}
            <br />
            Apps | Board Games | Educational Games
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-bold text-white">프로젝트</p>
          <ul className="space-y-2 text-sm">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link href={p.href} className="hover:text-white">
                  {p.name} <span className="text-white/50">· {p.kind}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-bold text-white">커스토미</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about/" className="hover:text-white">
                회사 소개
              </Link>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                문의 · {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-white/50 sm:px-6">
          © 2026 {site.name} {site.nameEn}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
