import { useEffect, useState } from "react";
import { profile } from "../data.js";
import useInView from "../hooks/useInView.js";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";

function Counter({ to, suffix }) {
  const [ref, inView] = useInView();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setN(Math.floor((1 - Math.pow(1 - p, 3)) * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <strong ref={ref}>{n}{suffix}</strong>;
}

export default function About() {
  return (
    <section id="about" className="section">
      <SectionTitle index="01" title="About Me" />
      <div className="about">
        <Reveal direction="left" className="about__avatar-wrap">
          <div className="avatar">
            <div className="avatar__inner">
              <span>{profile.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}</span>
            </div>
            <div className="avatar__tag avatar__tag--1">React</div>
            <div className="avatar__tag avatar__tag--2">CSS</div>
            <div className="avatar__tag avatar__tag--3">JS</div>
          </div>
        </Reveal>

        <div className="about__text">
          {profile.about.map((p, i) => (
            <Reveal key={i} delay={i * 150}><p>{p}</p></Reveal>
          ))}
          <Reveal delay={300}>
            <ul className="about__facts">
              <li><b>Location:</b> {profile.location}</li>
              <li><b>Email:</b> <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li><b>Status:</b> Open to opportunities</li>
            </ul>
            {profile.resumeUrl && (
              <a className="btn btn--ghost" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                Download Résumé
              </a>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
