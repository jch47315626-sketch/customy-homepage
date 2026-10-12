import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DiceIcon, PuzzleIcon, TabletIcon } from "@/components/Icons";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "소개",
  description: "놀다 보면 자라는 게임을 만드는 회사, 커스토미를 소개합니다.",
};

const values = [
  { Icon: DiceIcon, title: "재미가 먼저", body: "배움을 위해 억지로 하는 게임은 만들지 않아요. 하고 싶어서 다시 펼치는 게임이 먼저예요.", tint: "bg-red-soft" },
  { Icon: PuzzleIcon, title: "배움은 자연스럽게", body: "규칙 속에 개념을 녹여요. 외우라고 하지 않아도 놀다 보면 남아요.", tint: "bg-green-soft" },
  { Icon: TabletIcon, title: "화면 안과 밖을 잇다", body: "앱과 보드게임, 그리고 현실의 나. 어디서든 이어지는 성장을 만들어요.", tint: "bg-blue-soft" },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-14 pb-6 sm:px-6 sm:pt-20 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="eyebrow text-blue">About Customy</p>
          <h1 className="font-display mt-3 text-4xl leading-tight sm:text-6xl">
            상자를 열면,
            <br />
            놀이가 자라나요
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy-soft">
            커스토미(Customy)는 <strong className="text-navy">Custom</strong>과 <strong className="text-navy">my</strong>를 더한 이름이에요.
            한 사람 한 사람에게 꼭 맞는 놀이, 나를 위한 배움을 만들고 싶다는 마음을 담았어요.
          </p>
        </div>
        <Image src="/brand/mascot.png" alt="상자에서 튀어나온 커스토미 마스코트" width={450} height={460} className="mx-auto w-64 animate-float sm:w-80" />
      </section>

      <Section eyebrow="Our story" title="식탁 위에서 시작한 회사">
        <div className="max-w-3xl space-y-5 text-lg leading-loose text-navy-soft">
          <p>
            커스토미의 첫 게임은 우리 집 식탁에서 시작했어요. 화학 교사인 엄마, 그리고 아빠가 딸에게 화학을 더 재미있게 만나게 해 주고 싶었거든요.
            원소 기호를 외우게 하는 대신, 원소마다 얼굴과 성격을 붙여 함께 노는 게임을 만들었어요. 그게{" "}
            <Link href="/projects/wonso-yeonhui/" className="font-bold text-navy underline decoration-yellow decoration-4 underline-offset-4">
              원소연희
            </Link>
            예요.
          </p>
          <p>
            아이가 즐겁게 놀면서 자라는 모습을 보며 깨달았어요. 좋은 배움은 재미에서 시작하고, 성장은 눈에 보일 때 계속된다는 것. 그래서 매일의 좋은 습관으로 현실의 나를 키우는 앱{" "}
            <Link href="/projects/jaram/" className="font-bold text-navy underline decoration-green decoration-4 underline-offset-4">
              자람
            </Link>
            도 만들고 있어요.
          </p>
        </div>
      </Section>

      <div className="bg-paper">
        <Section eyebrow="What we believe" title="커스토미가 지키는 세 가지">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map(({ Icon, title, body, tint }) => (
              <div key={title} className={`sticker p-7 ${tint}`}>
                <Icon className="w-14" />
                <h3 className="font-display mt-4 text-2xl">{title}</h3>
                <p className="mt-2 leading-relaxed text-navy-soft">{body}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <section className="mx-auto max-w-3xl px-4 pt-20 text-center sm:px-6">
        <h2 className="font-display text-3xl sm:text-4xl">마스코트의 머리 위 새싹처럼</h2>
        <p className="mt-4 text-lg leading-relaxed text-navy-soft">
          커스토미의 게임을 만난 모든 사람이 조금씩 자라기를 바라요.
        </p>
      </section>
    </>
  );
}
