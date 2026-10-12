// 로고 마스코트 머리 위 새싹에서 출발해 나무가 되기까지, 5단계 성장 일러스트
type Props = { level: number; className?: string };

const STROKE = "#1e3256";

function Leaf({ x, y, r, s = 1, fill = "#8cc63f" }: { x: number; y: number; r: number; s?: number; fill?: string }) {
  return (
    <path
      d="M0 0 C 10 -14, 32 -16, 40 -4 C 30 8, 10 10, 0 0 Z"
      transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}
      fill={fill}
      stroke={STROKE}
      strokeWidth={3 / s}
      strokeLinejoin="round"
    />
  );
}

export default function Plant({ level, className = "" }: Props) {
  const lv = Math.max(0, Math.min(4, level));
  return (
    <svg viewBox="0 0 200 220" className={className} role="img" aria-label={`성장 ${lv + 1}단계`}>
      {/* 화분 */}
      <path d="M52 168 h96 l-10 44 h-76 z" fill="#4396d6" stroke={STROKE} strokeWidth="4" strokeLinejoin="round" />
      <rect x="44" y="156" width="112" height="18" rx="6" fill="#f6b342" stroke={STROKE} strokeWidth="4" />
      {/* 화분 얼굴 */}
      <circle cx="86" cy="190" r="3.5" fill={STROKE} />
      <circle cx="114" cy="190" r="3.5" fill={STROKE} />
      <path d="M93 197 q7 6 14 0" stroke={STROKE} strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="78" cy="198" r="4" fill="#f4a6a0" opacity=".7" />
      <circle cx="122" cy="198" r="4" fill="#f4a6a0" opacity=".7" />

      {lv === 0 && <ellipse cx="100" cy="150" rx="12" ry="8" fill="#a8743f" stroke={STROKE} strokeWidth="3" />}

      {lv >= 1 && (
        <g key={`stem-${lv}`} className="origin-[100px_156px] animate-grow">
          <path
            d={lv === 1 ? "M100 156 V128" : lv === 2 ? "M100 156 V104" : lv === 3 ? "M100 156 V78" : "M100 156 V60"}
            stroke={lv >= 3 ? "#8a5a32" : "#5c9e3f"}
            strokeWidth={lv >= 3 ? 9 : 5}
            strokeLinecap="round"
          />
          {lv === 1 && (
            <>
              <Leaf x={100} y={130} r={-150} s={0.75} fill="#6aae5e" />
              <Leaf x={100} y={130} r={-30} s={0.75} fill="#8cc63f" />
            </>
          )}
          {lv === 2 && (
            <>
              <Leaf x={100} y={134} r={-160} s={0.8} fill="#6aae5e" />
              <Leaf x={100} y={122} r={-20} s={0.8} fill="#8cc63f" />
              <Leaf x={100} y={106} r={-140} s={0.9} fill="#8cc63f" />
              <Leaf x={100} y={106} r={-40} s={0.9} fill="#6aae5e" />
            </>
          )}
          {lv >= 3 && (
            <>
              <circle cx="100" cy={lv === 3 ? 70 : 58} r={lv === 3 ? 44 : 56} fill="#6aae5e" stroke={STROKE} strokeWidth="4" />
              <circle cx={lv === 3 ? 82 : 76} cy={lv === 3 ? 60 : 44} r={lv === 3 ? 16 : 20} fill="#8cc63f" />
              {lv === 4 && (
                <>
                  <circle cx="72" cy="78" r="8" fill="#e45a43" stroke={STROKE} strokeWidth="3" />
                  <circle cx="122" cy="40" r="8" fill="#f6b342" stroke={STROKE} strokeWidth="3" />
                  <circle cx="128" cy="84" r="8" fill="#e45a43" stroke={STROKE} strokeWidth="3" />
                  <path d="M160 24 l4 9 9 1 -7 6 2 9 -8 -5 -8 5 2 -9 -7 -6 9 -1 z" fill="#f6b342" stroke={STROKE} strokeWidth="2" />
                </>
              )}
            </>
          )}
        </g>
      )}
    </svg>
  );
}
