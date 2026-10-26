import { projects } from "../data.js";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";

// 3D tilt + spotlight effect following the mouse
function handleMove(e) {
  const card = e.currentTarget;
  const r = card.getBoundingClientRect();
  const x = e.clientX - r.left;
  const y = e.clientY - r.top;
  const rx = ((y / r.height) - 0.5) * -10;
  const ry = ((x / r.width) - 0.5) * 10;
  card.style.setProperty("--mx", `${x}px`);
  card.style.setProperty("--my", `${y}px`);
  card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
}
function handleLeave(e) {
  e.currentTarget.style.transform = "";
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle index="03" title="Projects" />
      <div className="projects">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 120}>
            <article className="project-card" onMouseMove={handleMove} onMouseLeave={handleLeave}>
              <div className="project-card__top">
                <span className="project-card__num">{String(i + 1).padStart(2, "0")}</span>
                <div className="project-card__links">
                  <a href={p.live} target="_blank" rel="noreferrer">Live ↗</a>
                </div>
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
