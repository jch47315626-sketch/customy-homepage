import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  eyebrowClass?: string;
  className?: string;
  children?: ReactNode;
};

export default function Section({ eyebrow, title, lead, eyebrowClass = "text-blue", className = "", children }: Props) {
  return (
    <section className={`mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 ${className}`}>
      {eyebrow && <p className={`eyebrow mb-3 ${eyebrowClass}`}>{eyebrow}</p>}
      <h2 className="font-display text-3xl leading-tight sm:text-[2.6rem]">{title}</h2>
      {lead && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-navy-soft">{lead}</p>}
      {children && <div className="mt-10 sm:mt-12">{children}</div>}
    </section>
  );
}
