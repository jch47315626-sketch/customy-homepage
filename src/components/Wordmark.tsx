// 로고의 알록달록한 글자색을 그대로 옮긴 텍스트 워드마크
const letters: [string, string][] = [
  ["C", "text-navy"],
  ["u", "text-blue"],
  ["s", "text-green"],
  ["t", "text-yellow"],
  ["o", "text-red"],
  ["m", "text-navy"],
  ["y", "text-navy"],
];

export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display leading-none ${className}`} aria-label="Customy">
      {letters.map(([ch, color], i) => (
        <span key={i} className={color} aria-hidden>
          {ch}
        </span>
      ))}
    </span>
  );
}
