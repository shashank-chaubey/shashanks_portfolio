const groups = [
  { title: "Frontend", icon: "</>", items: [["React", "⚛"], ["Next.js", "N"], ["TypeScript", "TS"], ["JavaScript", "JS"], ["HTML", "5"], ["CSS", "#"], ["Tailwind CSS", "≋"]] },
  { title: "Backend & data", icon: "⌘", items: [["Node.js", "N"], ["Express", "E"], ["REST APIs", "↔"], ["JWT", "◈"], ["PostgreSQL", "P"], ["MySQL", "M"], ["SQL", "▤"]] },
  { title: "Languages & mobile", icon: "⌁", items: [["Python", "Py"], ["Java", "☕"], ["Dart", "D"], ["Flutter", "F"]] },
  { title: "Tools & practice", icon: "⚙", items: [["Git", "⑂"], ["GitHub", "◉"], ["VS Code", "<>"], ["Postman", "●"], ["Vercel", "▲"], ["Agile / Scrum", "↗"]] },
];

export const Stack = () => (
  <section id="stack" className="page-section tools-section">
    <div className="section-heading"><h2><span aria-hidden="true">✳</span> Skills &amp; tools</h2></div>
    <div className="tool-groups">{groups.map((group) => <section className="tool-group" key={group.title} aria-label={group.title}>
      <h3><span className="tool-group-icon" aria-hidden="true">{group.icon}</span>{group.title}</h3>
      <ul className="skill-list">{group.items.map(([item, icon]) => <li key={item}><span aria-hidden="true">{icon}</span>{item}</li>)}</ul>
    </section>)}</div>
  </section>
);
