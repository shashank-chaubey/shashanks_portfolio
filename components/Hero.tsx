import Image from "next/image";

export const Hero = () => (
  <section id="about" className="page-section about-section">
    <h1>Hey, I’m Shashank!</h1>
    <p className="lead">Aspiring software developer passionate about building useful applications, exploring emerging technologies, and turning ideas into working products.</p>
    <div className="intro-grid">
      <div>
        <h2 className="subheading">Experience &amp; education</h2>
        <ul className="timeline">
          <li><span className="timeline-date">Jan–Jun 2026</span><span><strong>Flutter Developer Intern</strong> at Arora Solutions Leads, building authentication, reusable responsive screens, and REST API integrations for an EdTech app.</span></li>
          <li><span className="timeline-date">2022–2026</span><span><strong>B.Tech</strong> in Computer Science &amp; Engineering</span></li>
        </ul>
      </div>
      <figure className="profile-figure">
        <Image src="/profilepic.jpg" alt="Portrait of Shashank Chaubey" width={250} height={333} priority className="profile-image" />
        <blockquote className="chai-note profile-quote">“One cup of masala chai away from either a breakthrough or a breakdown.”</blockquote>
        <figcaption>Location · Bengaluru, India</figcaption>
      </figure>
    </div>
  </section>
);
