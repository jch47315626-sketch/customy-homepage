import Image from "next/image";
import Link from "next/link";
import { nav } from "@/data/site";
import Wordmark from "./Wordmark";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-cream/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="커스토미 홈">
          <Image src="/brand/mascot.png" alt="" width={450} height={460} className="h-10 w-auto" priority />
          <Wordmark className="text-3xl" />
        </Link>
        <nav className="flex items-center gap-1 text-[15px] font-semibold sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-navy-soft transition hover:bg-navy/5 hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
