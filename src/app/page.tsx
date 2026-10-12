import Image from "next/image";
import Link from "next/link";
import { DiceIcon, PuzzleIcon, StarIcon, TabletIcon } from "@/components/Icons";
import Plant from "@/components/Plant";
import ProjectCards from "@/components/ProjectCards";
import Section from "@/components/Section";

const makes = [
  {
    Icon: TabletIcon,
    title: "앱",
    en: "Apps",
    body: "손안에서 매일 만나는 작은 즐거움. 기록하고, 모으고, 자라는 걸 눈으로 확인해요.",
    tint: "bg-blue-soft",
  },
  {
    Icon: DiceIcon,
    title: "보드게임",
    en: "Board Games",
    body: "한 테이블에 둘러앉아 웃고 겨루는 시간. 화면 밖에서 함께하는 놀이를 만들어요.",
    tint: "bg-red-soft",
  },
  {
    Icon: PuzzleIcon,
    title: "교육 게임",
    en: "Educational Games",
    body: "외우라고 하지 않아도 남는 배움. 규칙을 따라 놀다 보면 개념이 몸에 익어요.",
    tint: "bg-green-soft",
  },
];

const steps = [
  { level: 0, title: "놀이", body: "일단 재밌어야 해요. 하고 싶어서 펼치는 게임." },
  { level: 1, title: "발견", body: "노는 동안 저절로 눈에 들어오는 규칙과 개념." },
  { level: 3, title: "습관", body: "또 하고 싶어서 반복하면, 그게 곧 연습이 돼요." },
  { level: 4, title: "성장", body: "어느새 자라 있는 나. 그 변화를 눈으로 보여 줘요." },
];

const audiences = [
  { emoji: "👨‍👩‍👧", title: "아이와 부모", body: "주말 저녁, 같은 판에서 진심으로 겨루는 가족 놀이 시간." },
  { emoji: "🏫", title: "교실과 선생님", body: "단원 도입이나 모둠 활동에 바로 쓰는, 수업이 되는 게임." },
  { emoji: "🌱", title: "스스로 자라고 싶은 누구나", body: "작은 습관을 하루하루 쌓아 어제보다 나은 나를 키우는 사람." },
];

export default function Home() {
  return (
    <>
      {/* 히어로 */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,#e3f0fa_0,transparent_40%),radial-gradient(circle_at_85%_30%,#fef3dc_0,transparent_35%),radial-gradient(circle_at_60%_90%,#e8f4e5_0,transparent_40%)]" />
        <StarIcon className="absolute top-24 left-[6%] hidden w-10 animate-float sm:block [--r:-12deg]" />
        <DiceIcon className="absolute top-40 right-[7%] hidden w-14 animate-float [animation-delay:-1.5s] sm:block [--r:10deg]" />
        <PuzzleIcon className="absolute bottom-24 left-[10%] hidden w-12 animate-float [animation-delay:-2.5s] md:block [--r:8deg]" />
        <TabletIcon className="absolute right-[12%] bottom-20 hidden w-12 animate-float [animation-delay:-0.8s] md:block [--r:-6deg]" />

        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pt-10 pb-20 text-center sm:px-6 sm:pt-16 sm:pb-28">
          <Image
            src="/brand/logo-full.png"
            alt="커스토미 Customy — Apps, Board Games, Educational Games"
            width={1267}
            height={723}
            priority
            className="w-full max-w-xl animate-pop-in"
          />
          <h1 className="font-display mt-8 animate-fade-up text-4xl leading-tight [animation-delay:.2s] sm:text-6xl">
            놀다 보면 <span className="text-green">자라는</span>,
            <br />
            나만의 게임을 만듭니다
          </h1>
          <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-navy-soft [animation-delay:.35s]">
            커스토미는 앱과 보드게임에 배움을 섞어, 재미있게 놀다 보면 저절로 자라는 경험을 만드는 회사예요.
          </p>
          <div className="mt-9 flex animate-fade-up flex-wrap justify-center gap-3 [animation-delay:.5s]">
            <Link href="#projects" className="sticker bg-yellow px-7 py-3.5 text-lg font-bold transition hover:-translate-y-0.5">
              만들고 있는 것 보기
            </Link>
            <Link href="/about/" className="rounded-[1.75rem] border-3 border-navy bg-paper px-7 py-3.5 text-lg font-bold transition hover:bg-navy hover:text-white">
              커스토미 이야기
            </Link>
          </div>
        </div>
      </section>

      {/* 우리가 만드는 것 */}
      <Section eyebrow="What we make" title="우리는 이런 걸 만들어요" lead="화면 안과 밖, 어디서든 놀이가 배움이 되도록. 세 가지 방식으로 만들어요.">
        <div className="grid gap-6 md:grid-cols-3">
          {makes.map(({ Icon, title, en, body, tint }) => (
            <div key={title} className={`sticker p-7 ${tint}`}>
              <Icon className="w-16" />
              <h3 className="font-display mt-5 text-3xl">{title}</h3>
              <p className="text-sm font-semibold tracking-wide text-navy-soft/70">{en}</p>
              <p className="mt-3 leading-relaxed text-navy-soft">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 진행 중 프로젝트 */}
      <div id="projects" className="scroll-mt-16 bg-paper">
        <Section eyebrow="Now making" eyebrowClass="text-red" title="지금 만들고 있어요" lead="보드게임 하나, 앱 하나. 두 프로젝트가 한창 자라는 중이에요.">
          <ProjectCards />
        </Section>
      </div>

      {/* 우리의 방식 */}
      <Section eyebrow="How we design" eyebrowClass="text-green" title={<>놀이가 성장이 되기까지</>} lead="커스토미의 모든 게임은 같은 순서로 설계해요. 새싹이 자라듯이요.">
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-[1.75rem] bg-paper p-6 text-center shadow-[0_2px_0_#ebe5da]">
              <span className="absolute top-5 left-5 grid size-8 place-items-center rounded-full bg-navy text-sm font-bold text-white">
                {i + 1}
              </span>
              <Plant level={s.level} className="mx-auto h-36" />
              <h3 className="font-display mt-3 text-2xl">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-navy-soft">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 누구를 위해 */}
      <div className="bg-yellow-soft">
        <Section eyebrow="For whom" eyebrowClass="text-[#c98a12]" title="누구와 함께하나요?">
          <div className="grid gap-6 md:grid-cols-3">
            {audiences.map((a) => (
              <div key={a.title} className="rounded-[1.75rem] bg-paper p-7">
                <span className="text-4xl" aria-hidden>
                  {a.emoji}
                </span>
                <h3 className="font-display mt-4 text-2xl">{a.title}</h3>
                <p className="mt-2 leading-relaxed text-navy-soft">{a.body}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* 마무리 */}
      <section className="mx-auto max-w-4xl px-4 pt-20 text-center sm:px-6">
        <Image src="/brand/mascot.png" alt="" width={450} height={460} className="mx-auto w-32 animate-float" />
        <h2 className="font-display mt-6 text-3xl leading-snug sm:text-4xl">
          상자를 열면, 새로운 놀이가 자라나요
        </h2>
        <p className="mt-4 text-lg text-navy-soft">커스토미의 다음 게임도 곧 소개할게요.</p>
      </section>
    </>
  );
}
