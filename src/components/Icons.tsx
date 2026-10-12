// 로고 주변 소품(태블릿 · 주사위 · 퍼즐)을 단순화한 아이콘
const S = "#1e3256";

export function TabletIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect x="12" y="6" width="40" height="52" rx="7" fill="#4396d6" stroke={S} strokeWidth="3.5" />
      <rect x="18" y="12" width="28" height="36" rx="3" fill={S} />
      <rect x="22" y="34" width="5" height="10" rx="2" fill="#6aae5e" />
      <rect x="29.5" y="28" width="5" height="16" rx="2" fill="#f6b342" />
      <rect x="37" y="22" width="5" height="22" rx="2" fill="#e45a43" />
    </svg>
  );
}

export function DiceIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect x="10" y="10" width="44" height="44" rx="10" fill="#e45a43" stroke={S} strokeWidth="3.5" transform="rotate(-8 32 32)" />
      <g fill="#fff" transform="rotate(-8 32 32)">
        <circle cx="22" cy="22" r="4" />
        <circle cx="32" cy="32" r="4" />
        <circle cx="42" cy="42" r="4" />
      </g>
    </svg>
  );
}

export function PuzzleIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path
        d="M12 18 h12 a7 7 0 1 1 14 0 h12 v12 a7 7 0 1 1 0 14 v12 h-12 a7 7 0 1 0 -14 0 h-12 v-12 a7 7 0 1 0 0 -14 z"
        fill="#6aae5e"
        stroke={S}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path d="M32 6 l7.6 16 17.4 2.2 -12.8 12 3.4 17.3 -15.6 -8.6 -15.6 8.6 3.4 -17.3 -12.8 -12 17.4 -2.2 z" fill="#f6b342" stroke={S} strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}
