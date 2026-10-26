import { experience } from "../data.js";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionTitle index="04" title="Education" />
      <div className="timeline">
        {experience.map((e, i) => (
          <Reveal key={e.title} direction={i % 2 ? "right" : "left"} delay={i * 100} className="timeline__item">
            <span className="timeline__dot" />
            <div className="timeline__card">
              <span className="timeline__period">{e.period}</span>
              <h3>{e.title}</h3>
              <h4>{e.University}</h4>
              <h4>{e.board}</h4>
              <h4>{e.place}</h4>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
