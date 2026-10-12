export type Project = {
  slug: string;
  name: string;
  nameEn: string;
  kind: string;
  summary: string;
  status: string;
  accent: "red" | "green";
  href: string;
};

export const projects: Project[] = [
  {
    slug: "wonso-yeonhui",
    name: "원소연희",
    nameEn: "Periodic Table Board Game",
    kind: "보드게임",
    summary: "원소 60명이 친구가 되는 주기율표 보드게임. 외우는 표가 아니라 만나는 표예요.",
    status: "제작 중",
    accent: "red",
    href: "/projects/wonso-yeonhui/",
  },
  {
    slug: "jaram",
    name: "자람",
    nameEn: "Grow Your Real Self",
    kind: "앱",
    summary: "매일의 좋은 습관을 기록하면, 현실의 내가 눈에 보이게 자라는 성장 앱.",
    status: "개발 중",
    accent: "green",
    href: "/projects/jaram/",
  },
];
