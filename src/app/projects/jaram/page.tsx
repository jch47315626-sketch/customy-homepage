import type { Metadata } from "next";
import JaramDemo from "@/components/JaramDemo";
import Plant from "@/components/Plant";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "자람 — 습관으로 나를 키우는 앱",
  description: "매일의 좋은 습관을 기록하면, 현실의 내가 눈에 보이게 자라는 성장 앱. 현재 개발 중이에요.",
};

const flow = [
  { level: 1, title: "기록해요", body: "오늘 해낸 좋은 습관을 가볍게 남겨요. 크든 작든, 해낸 건 모두 자람이 돼요." },
  { level: 2, title: "쌓여요", body: "하루하루의 기록이 모여 눈에 보이는 성장으로 바뀌어요." },
  { level: 4, title: "자라요", body: "기록 속의 내가 아니라, 현실의 내가 얼마나 자랐는지 한눈에 확인해요." },
];

export default function JaramPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-green-soft">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-green px-3 py-1 text-xs font-bold text-white">앱</span>
              <span className="rounded-full border border-navy/20 px-3 py-1 text-xs font-semibold text-navy-soft">현재 개발 중</span>
            </div>
            <p className="eyebrow mt-6 text-green">Grow Your Real Self</p>
            <h1 className="font-display mt-2 text-7xl sm:text-8xl">자람</h1>
            <p className="font-display mt-5 text-3xl leading-snug sm:text-4xl">
              오늘의 좋은 습관이 쌓이면,
              <br />
              <span className="text-green">진짜 내가</span> 자라요
            </p>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-navy-soft">
              자람은 매일의 긍정적인 습관을 기록하고, 그만큼 자란 현실의 나를 눈으로 볼 수 있게 해 주는 앱이에요.
            </p>
          </div>
          <JaramDemo />
        </div>
      </section>

      <Section eyebrow="Why" eyebrowClass="text-green" title={<>체크만 하고 끝나는 습관은<br />오래가지 않아요</>}>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.75rem] bg-paper p-7">
            <p className="text-sm font-bold text-muted">지금까지의 습관 기록</p>
            <p className="mt-3 text-xl font-bold">☑ ☑ ☐ ☑ ☐ ☐ ☐</p>
            <p className="mt-4 leading-relaxed text-navy-soft">
              체크 표시만 늘어날 뿐, 내가 얼마나 달라졌는지는 보이지 않아요. 그래서 며칠 지나면 쉽게 손을 놓게 돼요.
            </p>
          </div>
          <div className="rounded-[1.75rem] bg-green-soft p-7">
            <p className="text-sm font-bold text-green">자람의 습관 기록</p>
            <div className="mt-2 flex items-end gap-1">
              {[0, 1, 2, 3, 4].map((lv) => (
                <Plant key={lv} level={lv} className="h-16" />
              ))}
            </div>
            <p className="mt-4 leading-relaxed text-navy-soft">
              작은 습관 하나하나가 눈에 보이는 성장으로 쌓여요. 자라는 모습을 보는 즐거움이 내일도 다시 하게 만들어요.
            </p>
          </div>
        </div>
      </Section>

      <div className="bg-paper">
        <Section eyebrow="How it works" eyebrowClass="text-green" title="자람은 이렇게 자라요">
          <ol className="grid gap-6 md:grid-cols-3">
            {flow.map((f, i) => (
              <li key={f.title} className="rounded-[1.75rem] bg-cream p-7 text-center">
                <span className="mx-auto grid size-9 place-items-center rounded-full bg-green font-bold text-white">{i + 1}</span>
                <Plant level={f.level} className="mx-auto mt-4 h-36" />
                <h3 className="font-display mt-3 text-2xl">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-navy-soft">{f.body}</p>
              </li>
            ))}
          </ol>
        </Section>
      </div>

      <section className="mx-auto max-w-3xl px-4 pt-20 text-center sm:px-6">
        <h2 className="font-display text-3xl sm:text-4xl">자람은 지금 자라는 중이에요</h2>
        <p className="mt-4 text-lg text-navy-soft">열심히 만들고 있어요. 출시 소식은 이곳에서 가장 먼저 전할게요.</p>
      </section>
    </>
  );
}
