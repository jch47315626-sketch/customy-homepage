import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "원소연희 — 주기율표 보드게임",
  description: "원소 60명이 친구가 되는 주기율표 보드게임. 외우는 주기율표가 아니라 만나는 주기율표.",
};

const facts = ["2~4명", "40~60분", "10세 이상"];

const series = [
  ["알칼리 금속", "#e5484d"],
  ["알칼리 토금속", "#f76b15"],
  ["전이 금속", "#d4a10f"],
  ["전이후 금속", "#9a7b62"],
  ["준금속", "#12a594"],
  ["비금속", "#30a46c"],
  ["할로젠", "#0090ff"],
  ["비활성 기체", "#8e4ec6"],
  ["란타넘족", "#d6409f"],
];

const components = [
  { name: "게임판", count: "1장", note: "약 50×30cm, 반으로 접어 상자에 들어가요" },
  { name: "원소 카드", count: "60장", note: "1~60번 원소 캐릭터, 63×88mm" },
  { name: "연구 과제 카드", count: "16장", note: "게임 시작 때 몰래 고르는 비밀 목표" },
  { name: "플레이어 큐브", count: "4색 × 30개", note: "빨강 · 파랑 · 초록 · 노랑" },
  { name: "중립 큐브", count: "3개", note: "게임 시작 때 중립 칸 3곳에 놓아요" },
  { name: "점수 기록지", count: "1권", note: "게임 끝 점수 계산용" },
  { name: "규칙서와 상자", count: "", note: "상자 약 31×26×7cm" },
];

const turn = [
  {
    title: "놓기",
    body: "손에서 원소 1~3장을 내고 이름을 말하며 그 칸에 내 큐브를 놓아요. 2장 이상이면 같은 줄에 이어지게.",
    img: { src: "/wonso/step-place.webp", w: 800, h: 142, alt: "탄소, 질소, 산소 카드를 내고 판의 같은 줄에 큐브를 놓는 모습" },
  },
  {
    title: "점수",
    body: "놓은 칸에서 가로·세로로 2칸 이상 이어진 줄마다 그 칸 수만큼 점수를 받아요. 한 줄 최대 6점, 어디에도 안 이어지면 1점.",
    img: { src: "/wonso/step-score.webp", w: 671, h: 148, alt: "붕소부터 산소까지 가로로 4칸이 이어져 4점을 받는 모습" },
  },
  {
    title: "채우기",
    body: "손이 다시 5장이 되도록 광장(앞면 4장)이나 덱에서 가져와요. 놓기 대신 손 카드 1~3장을 바꿀 수도 있어요.",
    img: { src: "/wonso/step-fill.webp", w: 748, h: 200, alt: "손에 카드 3장이 남고 빈 자리 2칸을 채우는 모습" },
  },
];

const learning = [
  {
    term: "족 (세로줄)",
    meaning: "성질이 비슷한 가족",
    body: "같은 세로줄의 원소는 성질이 닮았어요. 알칼리 금속 형제들은 모두 물과 만나면 반응하고, 아래로 갈수록 더 세져요.",
    chips: ["Li", "Na", "K", "Rb"],
    color: "#e5484d",
  },
  {
    term: "주기 (가로줄)",
    meaning: "같은 반 친구",
    body: "같은 가로줄은 전자 껍질 수가 같은 친구들. 2주기 반에는 리튬부터 네온까지 8명이 있어요.",
    chips: ["Li", "Be", "B", "C", "N", "O", "F", "Ne"],
    color: "#30a46c",
  },
  {
    term: "계열 (같은 색)",
    meaning: "같은 색 팀",
    body: "할로젠 4명은 모두 파란 테두리. 게임 끝에 같은 색 팀을 가장 많이 모은 사람이 대표가 돼요.",
    chips: ["F", "Cl", "Br", "I"],
    color: "#0090ff",
  },
];

export default function WonsoPage() {
  return (
    <>
      {/* 히어로 — 원소연희 상세페이지의 밤하늘 톤 */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,#2b3f86_0%,#14214a_65%)] text-white">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(1.5px_1.5px_at_10%_20%,#fff_50%,transparent_51%),radial-gradient(1px_1px_at_30%_70%,#fff_50%,transparent_51%),radial-gradient(1.5px_1.5px_at_70%_15%,#fff_50%,transparent_51%),radial-gradient(1px_1px_at_85%_60%,#fff_50%,transparent_51%),radial-gradient(1px_1px_at_55%_40%,#fff_50%,transparent_51%),radial-gradient(1.5px_1.5px_at_92%_88%,#fff_50%,transparent_51%)]" />
        <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-16 text-center sm:px-6 sm:pt-20">
          <p className="eyebrow text-gold sm:text-base sm:tracking-[0.4em]">Periodic Table Board Game</p>
          <h1 className="mt-4 animate-pop-in text-6xl font-black tracking-tight text-[#fdf1d0] drop-shadow-[0_0_24px_rgba(253,241,208,.35)] sm:text-8xl">
            원소연희
          </h1>
          <p className="mt-5 text-xl font-semibold sm:text-2xl">원소 60명이 친구가 되는 주기율표 보드게임</p>
          <Image
            src="/wonso/cards-fan.webp"
            alt="수소, 탄소, 철, 산소, 은, 네오디뮴 캐릭터 카드"
            width={1400}
            height={516}
            priority
            className="mx-auto mt-10 w-full max-w-4xl animate-fade-up mask-x-from-90% mask-y-from-88% [animation-delay:.2s]"
          />
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {facts.map((f) => (
              <li key={f} className="rounded-full border-2 border-gold/80 px-6 py-2 text-lg font-bold">
                {f}
              </li>
            ))}
          </ul>
          <span className="mt-6 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/80">현재 제작 중</span>
        </div>
      </section>

      {/* 이야기 */}
      <Section eyebrow="Our story" eyebrowClass="text-gold" title={<>외우는 주기율표가 아니라<br />만나는 주기율표</>}>
        <figure className="rounded-[1.75rem] bg-paper p-7 shadow-[0_8px_30px_rgba(30,50,86,.06)] sm:p-10">
          <span className="block h-10 font-serif text-7xl leading-none font-black text-gold" aria-hidden>“</span>
          <blockquote className="mt-2 text-xl leading-relaxed sm:text-2xl">
            화학 교사인 아내와 제가, 딸에게
            <br />
            <strong className="font-bold">화학을 더 재미있게 만나게 해 주고 싶어</strong> 시작한 프로젝트입니다.
          </blockquote>
          <p className="mt-6 leading-loose text-navy-soft">
            원소 기호를 외우라고 하면 아이는 금방 지루해합니다. 그런데 원소마다 얼굴과 성격이 있다면, 이름을 부르며
            함께 놀 수 있다면 어떨까요? 그렇게 1번 수소부터 60번 네오디뮴까지, 원소 60명이 캐릭터가 되었습니다.
          </p>
          <figcaption className="mt-6 text-right text-sm text-muted">— 원소연희를 만든 가족</figcaption>
        </figure>
        <Image
          src="/wonso/story-before-after.webp"
          alt="외워야 하는 원소 기호 표가 만나고 싶은 캐릭터 친구들로 바뀌는 모습"
          width={1400}
          height={349}
          className="mt-10 w-full"
        />
        <div className="mt-2 grid grid-cols-2 text-center text-sm font-bold sm:text-base">
          <span className="text-muted">외워야 하는 표</span>
          <span>만나고 싶은 친구들</span>
        </div>
      </Section>

      {/* 캐릭터 */}
      <div className="bg-paper">
        <Section
          eyebrow="Characters"
          eyebrowClass="text-gold"
          title={<>1번 수소부터 60번 네오디뮴까지,<br />원소 60명이 모두 캐릭터예요</>}
          lead="캐릭터는 주기율표 제자리에 서 있어요. 테두리 색은 계열, 같은 색끼리는 성질이 비슷한 친구들이에요."
        >
          <Image
            src="/wonso/periodic-characters.webp"
            alt="주기율표 자리마다 원소 캐릭터 얼굴이 들어간 표"
            width={1400}
            height={769}
            className="w-full"
          />
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
            {series.map(([name, color]) => (
              <li key={name} className="flex items-center gap-2">
                <span className="size-3.5 rounded" style={{ background: color }} />
                {name}
              </li>
            ))}
          </ul>
          <h3 className="font-display mt-16 text-2xl sm:text-3xl">카드로 만나면 이런 모습</h3>
          <Image
            src="/wonso/cards-three.webp"
            alt="수소, 탄소, 산소 원소 카드. 주기와 족, 한 줄 설명이 적혀 있다"
            width={1200}
            height={528}
            className="mx-auto mt-6 w-full max-w-3xl"
          />
        </Section>
      </div>

      {/* 구성품 */}
      <Section eyebrow="What's in the box" eyebrowClass="text-gold" title="상자 안에 들어 있는 것" lead="게임판 한 장과 카드, 큐브만 있으면 바로 시작할 수 있어요.">
        <div className="rounded-[1.75rem] bg-paper p-5 sm:p-8">
          <Image src="/wonso/board.webp" alt="원소연희 게임판. 주기율표 자리 찾기와 점수표, 차례 안내가 있다" width={1400} height={774} className="w-full rounded-xl" />
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-[1fr_240px]">
          <ul className="grid gap-3 sm:grid-cols-2">
            {components.map((c) => (
              <li key={c.name} className="rounded-2xl bg-paper px-5 py-4">
                <p className="text-lg font-bold">
                  {c.name} <span className="text-gold">{c.count}</span>
                </p>
                <p className="mt-1 text-sm text-navy-soft">{c.note}</p>
              </li>
            ))}
          </ul>
          <Image src="/wonso/box-art.webp" alt="원소연희 상자 표지" width={362} height={303} className="w-full self-start rounded-2xl" />
        </div>
      </Section>

      {/* 노는 법 */}
      <div className="bg-paper">
        <Section eyebrow="How to play" eyebrowClass="text-gold" title="내 차례는 이렇게 흘러가요" lead="놓고, 점수 받고, 채우면 끝. 한 차례가 1분이면 충분해요.">
          <ol className="space-y-5">
            {turn.map((t, i) => (
              <li key={t.title} className="grid items-center gap-6 rounded-[1.75rem] bg-cream p-6 sm:p-8 md:grid-cols-[1fr_1.3fr]">
                <div>
                  <p className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-full bg-navy text-lg font-bold text-white">{i + 1}</span>
                    <span className="text-2xl font-black">{t.title}</span>
                  </p>
                  <p className="mt-3 leading-relaxed text-navy-soft">{t.body}</p>
                </div>
                <Image src={t.img.src} alt={t.img.alt} width={t.img.w} height={t.img.h} className="mx-auto w-full max-w-lg" />
              </li>
            ))}
          </ol>
          <p className="mt-8 text-center font-bold">60칸이 모두 차면 게임 끝 → 계열 대표와 비밀 연구 과제 점수를 더해요</p>
        </Section>
      </div>

      {/* 배움 */}
      <Section eyebrow="Learning" eyebrowClass="text-gold" title={<>외우라고 하지 않아도<br />자리가 외워져요</>} lead="칸을 두고 다투다 보면 족과 주기, 계열이 몸에 익어요.">
        <div className="grid gap-6 lg:grid-cols-3">
          {learning.map((l) => (
            <div key={l.term} className="rounded-[1.75rem] bg-paper p-7">
              <h3 className="text-xl font-black">
                {l.term} <span className="block text-gold">= {l.meaning}</span>
              </h3>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {l.chips.map((c) => (
                  <span
                    key={c}
                    className="grid h-11 min-w-11 place-items-center rounded-lg border-2 px-1 font-bold"
                    style={{ borderColor: l.color, background: `${l.color}14` }}
                  >
                    {c}
                  </span>
                ))}
              </div>
              <p className="mt-5 leading-relaxed text-navy-soft">{l.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center font-bold">한 판이 끝날 때마다 아이 손으로 주기율표 60칸을 한 번 채우는 셈이에요.</p>
      </Section>

      {/* 누구와 */}
      <div className="bg-paper">
        <Section eyebrow="For whom" eyebrowClass="text-gold" title="누구와 함께 하나요?">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.75rem] bg-cream p-7">
              <h3 className="text-2xl font-black">가족 보드게임</h3>
              <p className="mt-3 leading-relaxed text-navy-soft">
                주말 저녁, 부모와 아이가 같은 판에서 겨뤄요. 어른도 진지해지는 눈치싸움이라 아이에게 일부러 져 줄 필요가 없어요.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-cream p-7">
              <h3 className="text-2xl font-black">교실에서</h3>
              <p className="mt-3 leading-relaxed text-navy-soft">
                주기율표를 처음 배우는 단원 도입에. 4명씩 한 모둠이 한 판을 하면 칸 위치를 자연스럽게 익혀요.
              </p>
            </div>
          </div>
          <Image src="/wonso/avatars.webp" alt="" width={1300} height={104} className="mx-auto mt-12 w-full max-w-4xl" />
          <p className="mt-10 text-center text-sm text-muted">이미지는 제작 중인 예시로, 실제 제품과 다를 수 있습니다.</p>
        </Section>
      </div>
    </>
  );
}
