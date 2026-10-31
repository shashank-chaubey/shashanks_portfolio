import Image from "next/image";

export const Hero = () => (
  <section id="about" className="page-section about-section">
    <h1>Hey, I’m Shashank!</h1>
    <p className="lead">Aspiring software developer passionate about building useful applications, exploring emerging technologies, and turning ideas into working products.</p>
    <div className="intro-grid">
      <div>
        <h2 className="subheading">A brief overview</h2>
        <ul className="timeline">
          <li><span className="timeline-date">In progress</span><span><strong>Code Monitor:</strong> building a workspace for reviewing code and monitoring GitHub repositories, with automated reviews and repository insights.</span></li>
          <li><span className="timeline-date">Jan–Jun 2026</span><span><strong>Flutter Developer Intern</strong> at Arora Solutions Leads, building authentication, reusable responsive screens, and REST API integrations for an EdTech app.</span></li>
          <li><span className="timeline-date">2025–present</span><span><strong>AI Voice &amp; Video Meeting Platform:</strong> developing secure meetings with protected routes, role-based access, recordings, transcription, and AI transcript search.</span></li>
          <li><span className="timeline-date">Focus</span><span>React, Next.js, TypeScript, Node.js/Express, REST APIs, authentication, and database-driven features.</span></li>
        </ul>
        <p className="chai-note"><span aria-hidden="true">☕</span> One cup of masala chai away from either a breakthrough or a breakdown.</p>
      </div>
      <figure className="profile-figure">
        <Image src="/profilepic.jpg" alt="Portrait of Shashank Chaubey" width={250} height={333} priority className="profile-image" />
        <figcaption>Bengaluru, India</figcaption>
      </figure>
    </div>
  </section>
);
