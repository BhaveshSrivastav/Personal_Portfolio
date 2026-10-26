import { skills, techMarquee } from "../data.js";
import useInView from "../hooks/useInView.js";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";

function Bar({ name, level, group, delay }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className="skill">
      <div className="skill__head">
        <span>{name}</span>
        <em>{group}</em>
        <b>{inView ? level : 0}%</b>
      </div>
      <div className="skill__track">
        <div
          className="skill__fill"
          style={{ width: inView ? `${level}%` : "0%", transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const items = [...techMarquee, ...techMarquee];
  return (
    <section id="skills" className="section">
      <SectionTitle index="02" title="Skills" />

      <div className="skills">
        {skills.map((s, i) => (
          <Reveal key={s.name} delay={i * 70}>
            <Bar {...s} delay={i * 70} />
          </Reveal>
        ))}
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {items.map((t, i) => (
            <span key={i}>{t} <i>✦</i></span>
          ))}
        </div>
      </div>
    </section>
  );
}
