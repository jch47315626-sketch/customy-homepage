import Image from "next/image";
import Link from "next/link";
import Plant from "./Plant";

// 홈과 프로젝트 목록에서 함께 쓰는 진행 중 프로젝트 카드 2장
export default function ProjectCards() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <Link href="/projects/wonso-yeonhui/" className="group sticker flex flex-col overflow-hidden bg-space transition hover:-translate-y-1">
        <div className="relative flex-1 bg-[radial-gradient(ellipse_at_top,#2b3f86_0%,#14214a_70%)] px-6 pt-8 pb-4">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-space">보드게임</span>
            <span className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold text-white/80">제작 중</span>
          </div>
          <p className="eyebrow mt-5 text-gold">Periodic Table Board Game</p>
          <h3 className="font-display mt-1 text-5xl text-[#fdf1d0]">원소연희</h3>
          <p className="mt-3 text-white/80">원소 60명이 친구가 되는 주기율표 보드게임</p>
          <Image
            src="/wonso/cards-fan.webp"
            alt="수소, 탄소, 철, 산소, 은, 네오디뮴 캐릭터 카드"
            width={1400}
            height={516}
            className="mt-6 w-full mask-x-from-90% mask-y-from-88% transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex items-center justify-between bg-space px-6 py-4 text-sm font-semibold text-white">
          <span>2~4명 · 40~60분 · 10세 이상</span>
          <span className="text-gold transition group-hover:translate-x-1">자세히 보기 →</span>
        </div>
      </Link>

      <Link href="/projects/jaram/" className="group sticker flex flex-col overflow-hidden bg-green-soft transition hover:-translate-y-1">
        <div className="relative flex flex-1 flex-col px-6 pt-8 pb-6">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-green px-3 py-1 text-xs font-bold text-white">앱</span>
            <span className="rounded-full border border-navy/20 px-3 py-1 text-xs font-semibold text-navy-soft">개발 중</span>
          </div>
          <p className="eyebrow mt-5 text-green">Grow Your Real Self</p>
          <h3 className="font-display mt-1 text-5xl">자람</h3>
          <p className="mt-3 text-navy-soft">오늘의 좋은 습관이 쌓이면, 진짜 내가 자라요</p>
          <div className="mt-auto flex items-end justify-center gap-1 pt-8 sm:gap-3">
            {[0, 1, 2, 3, 4].map((lv) => (
              <Plant
                key={lv}
                level={lv}
                className="w-1/5 max-w-28 transition duration-500 group-hover:-translate-y-1"
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between bg-green px-6 py-4 text-sm font-semibold text-white">
          <span>매일의 습관 기록 · 성장 시각화</span>
          <span className="transition group-hover:translate-x-1">자세히 보기 →</span>
        </div>
      </Link>
    </div>
  );
}
