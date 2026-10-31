import Image, { type StaticImageData } from "next/image";
import project1 from "@/assets/project1.png";
import tableau1 from "@/assets/tableau1.png";
import tableau2 from "@/assets/tableau2.png";
import tableau3 from "@/assets/tableau3.png";
import RProject1 from "@/assets/RProject1.png";

type Project = { category: string; title: string; description: string; image?: StaticImageData; link: string; technologies?: string };
const projects: Project[] = [
  { category: "Web development", title: "AI content generator", description: "An AI tool designed to help people write, innovate, and develop ideas.", technologies: "Next.js", image: project1, link: "https://github.com/sh4sh4nk-9/AI-content-generator" },
  { category: "Web development", title: "YouTube Sort Extension", description: "A browser extension created to make sorting YouTube content simpler and more convenient.", link: "https://github.com/shashank-chaubey/youtube_sort_extension" },
  { category: "Web development", title: "ChatAI", description: "A full-stack platform for video meetings with custom AI agents. Create an agent with its own instructions, run a recorded call, then revisit its transcript and AI-generated summary or chat with the agent using meeting context.", link: "https://github.com/shashank-chaubey/chatai" },
  { category: "Data analytics", title: "Ecommerce year-to-date sales analysis", description: "A Tableau dashboard showing sales and profit, order volumes, category distribution, and monthly customer acquisition across markets.", technologies: "Tableau", image: tableau1, link: "https://public.tableau.com/app/profile/shashank.chaubey4310/viz/ECOMMERCEANALYSIS_17236946835530/Dashboard1" },
  { category: "Data analytics", title: "Data science job market trends", description: "A global look at data science roles, salaries, and locations, built as an interactive Tableau dashboard.", technologies: "Tableau", image: tableau2, link: "https://public.tableau.com/app/profile/shashank.chaubey4310/viz/DataScienceJobMarketTrends/Dashboard1" },
  { category: "Data analytics", title: "Breaking Bad episode analytics", description: "A dashboard visualizing episode data, ratings, and viewership trends from Breaking Bad.", technologies: "Tableau", image: tableau3, link: "https://public.tableau.com/app/profile/shashank.chaubey4310/viz/BreakingBad_17353206913580/Dashboard1" },
  { category: "Data analytics", title: "Apple products visualization", description: "Explores a dataset of 60+ Apple products, including star ratings by RAM, sale prices, and the top 15 products by rating.", technologies: "R · ggplot2 · dplyr", image: RProject1, link: "https://www.linkedin.com/feed/update/urn:li:activity:7331397678754361345/" },
];

export const Portfolio = () => (
  <section id="projects" className="page-section projects-section">
    <div className="section-heading"><h2><span aria-hidden="true">👨🏻‍💻</span> Projects</h2><p>Data stories and applications built with curiosity.</p></div>
    <div className="project-grid">
      {projects.map((project) => (
        <article className="project-card" key={project.title}>
          {project.image ? <Image className="project-image" src={project.image} alt={`${project.title} preview`} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" /> : <div className="project-image project-placeholder" aria-hidden="true">{project.title === "ChatAI" ? "◉" : "↕"}</div>}
          <div className="project-copy"><p className="project-category">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p>{project.technologies && <p className="project-tech">{project.technologies}</p>}</div>
          <a className="text-link project-link" href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title}`}>View project <span aria-hidden="true">↗</span></a>
        </article>
      ))}
    </div>
  </section>
);
