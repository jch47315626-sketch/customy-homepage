"use client";

import { useState } from "react";
import Plant from "./Plant";

const habits = [
  { id: "water", emoji: "💧", label: "물 한 잔 마시기" },
  { id: "walk", emoji: "🚶", label: "10분 걷기" },
  { id: "read", emoji: "📖", label: "책 5쪽 읽기" },
  { id: "thanks", emoji: "🙏", label: "감사한 일 한 줄" },
];

const messages = ["오늘의 씨앗을 심었어요", "새싹이 돋았어요!", "잎이 무성해지고 있어요", "작은 나무가 됐어요", "열매가 맺혔어요! 오늘도 잘 자랐어요 🎉"];

// 자람의 핵심 경험(기록하면 자란다)을 체험하는 개념 데모 — 실제 앱 화면은 아님
export default function JaramDemo() {
  const [done, setDone] = useState<string[]>([]);
  const level = done.length;

  const toggle = (id: string) =>
    setDone((prev) => (prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]));

  return (
    <div className="sticker mx-auto w-full max-w-sm bg-paper p-5">
      <div className="flex items-center justify-between text-sm font-bold">
        <span>오늘의 자람</span>
        <span className="rounded-full bg-green-soft px-3 py-1 text-green">
          {level}/{habits.length}
        </span>
      </div>
      <div className="mt-3 rounded-2xl bg-[linear-gradient(#e3f0fa,#f2f8fd)] px-6 pt-4">
        <Plant level={level} className="mx-auto h-52" />
      </div>
      <p className="mt-3 min-h-6 text-center font-semibold text-green" aria-live="polite">
        {messages[level]}
      </p>
      <ul className="mt-3 space-y-2">
        {habits.map((h) => {
          const on = done.includes(h.id);
          return (
            <li key={h.id}>
              <button
                type="button"
                onClick={() => toggle(h.id)}
                aria-pressed={on}
                className={`flex w-full items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left font-semibold transition active:scale-[.98] ${
                  on ? "border-green bg-green-soft" : "border-line bg-cream hover:border-green/50"
                }`}
              >
                <span className="text-xl" aria-hidden>
                  {h.emoji}
                </span>
                <span className="flex-1">{h.label}</span>
                <span
                  className={`grid size-6 place-items-center rounded-full border-2 text-xs text-white ${
                    on ? "border-green bg-green" : "border-line"
                  }`}
                  aria-hidden
                >
                  {on && "✓"}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-center text-xs text-muted">눌러 보세요 · 실제 앱 화면이 아닌 개념 예시예요</p>
    </div>
  );
}
