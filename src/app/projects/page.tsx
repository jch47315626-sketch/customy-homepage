import type { Metadata } from "next";
import ProjectCards from "@/components/ProjectCards";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "프로젝트",
  description: "커스토미가 지금 만들고 있는 보드게임 원소연희와 성장 앱 자람.",
};

export default function ProjectsPage() {
  return (
    <Section eyebrow="Projects" eyebrowClass="text-red" title="커스토미의 프로젝트" lead="보드게임 하나, 앱 하나. 두 프로젝트가 한창 자라는 중이에요.">
      <ProjectCards />
    </Section>
  );
}
