import type { SimpleIcon } from "simple-icons";
import {
  siCss, siExpress, siGit, siGithub, siHtml5, siJavascript,
  siJsonwebtokens, siMysql, siNextdotjs, siNodedotjs, siOpenapiinitiative,
  siPostgresql, siPostman, siPython, siReact, siTailwindcss,
  siTypescript, siVercel,
} from "simple-icons";

type SkillIcon = SimpleIcon | "database" | "workflow" | "vscode" | "java";
type ToolGroup = { title: string; items: [string, SkillIcon][] };

const groups: ToolGroup[] = [
  { title: "Frontend", items: [["React", siReact], ["Next.js", siNextdotjs], ["TypeScript", siTypescript], ["JavaScript", siJavascript], ["HTML", siHtml5], ["CSS", siCss], ["Tailwind CSS", siTailwindcss]] },
  { title: "Backend & data", items: [["Node.js", siNodedotjs], ["Express", siExpress], ["REST APIs", siOpenapiinitiative], ["JWT", siJsonwebtokens], ["PostgreSQL", siPostgresql], ["MySQL", siMysql], ["SQL", "database"]] },
  { title: "Languages", items: [["Python", siPython], ["Java", "java"]] },
  { title: "Tools & practice", items: [["Git", siGit], ["GitHub", siGithub], ["VS Code", "vscode"], ["Postman", siPostman], ["Vercel", siVercel], ["Agile / Scrum", "workflow"]] },
];

const SkillMark = ({ icon }: { icon: SkillIcon }) => {
  if (icon === "database") {
    return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></svg>;
  }
  if (icon === "workflow") {
    return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="6" rx="1.5" /><rect x="14" y="15" width="7" height="6" rx="1.5" /><path d="M10 6h3a3 3 0 0 1 3 3v6M14 18h-3a3 3 0 0 1-3-3v-2" /></svg>;
  }
  if (icon === "vscode") {
    return <svg viewBox="0 0 24 24" role="img" aria-label="Visual Studio Code logo"><path fill="#007ACC" d="M17.5 2 8 11 3.5 7.5 2 9l4.5 3L2 15l1.5 1.5L8 13l9.5 9L22 20V4l-4.5-2Zm.5 4v12l-7-6 7-6Z" /></svg>;
  }
  if (icon === "java") {
    return <svg viewBox="0 0 24 24" role="img" aria-label="Java coffee cup logo"><path d="M10 2.5c2 1.3-2.2 2.5-.1 4" fill="none" stroke="#e76f00" strokeWidth="1.4" strokeLinecap="round" /><path d="M14 2c2.2 1.7-2.6 3-.2 4.6" fill="none" stroke="#e76f00" strokeWidth="1.4" strokeLinecap="round" /><path d="M5 9h12v5.3a5.4 5.4 0 0 1-5.4 5.4h-1.2A5.4 5.4 0 0 1 5 14.3V9Z" fill="#5382a1" /><path d="M17 10h1.4a2.4 2.4 0 0 1 0 4.8H17M4 22h15" fill="none" stroke="#5382a1" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  }
  return <svg viewBox="0 0 24 24" role="img" aria-label={`${icon.title} logo`}><path fill={`#${icon.hex}`} d={icon.path} /></svg>;
};

export const Stack = () => (
  <section id="stack" className="page-section tools-section">
    <div className="section-heading"><h2><span aria-hidden="true">✳</span> Skills &amp; tools</h2></div>
    <div className="tool-groups">{groups.map((group) => <section className="tool-group" key={group.title} aria-label={group.title}>
      <h3>{group.title}</h3>
      <ul className="skill-list">{group.items.map(([item, icon]) => <li key={item}><span className="skill-icon"><SkillMark icon={icon} /></span>{item}</li>)}</ul>
    </section>)}</div>
  </section>
);
