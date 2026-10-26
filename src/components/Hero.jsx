import { profile } from "../data.js";
import useTyping from "../hooks/useTyping.js";

export default function Hero() {
  const typed = useTyping(profile.roles);

  return (
    <section id="home" className="hero section">
      <div className="hero__content">
        <p className="hero__hello reveal-load" style={{ "--d": "0.1s" }}>
          <span className="dot-live" /> Available for work
        </p>
        <h1 className="hero__title reveal-load" style={{ "--d": "0.25s" }}>
          Hi, I'm <span className="text-red glitch" data-text={profile.name}>{profile.name}</span>
        </h1>
        <h2 className="hero__role reveal-load" style={{ "--d": "0.4s" }}>
          <span>{typed}</span>
          <i className="caret" />
        </h2>
        <p className="hero__tagline reveal-load" style={{ "--d": "0.55s" }}>
          {profile.tagline}
        </p>
        <div className="hero__cta reveal-load" style={{ "--d": "0.7s" }}>
          <a href="#projects" className="btn" onClick={(e) => { e.preventDefault(); document.getElementById("projects").scrollIntoView({ behavior: "smooth" }); }}>
            View My Work
          </a>
          <a href={`mailto:${profile.email}`} className="btn btn--ghost">Email Me</a>
        </div>
      </div>

      <div className="hero__visual reveal-load" style={{ "--d": "0.5s" }} aria-hidden="true">
        <div className="orb">
          <div className="orb__ring orb__ring--1" />
          <div className="orb__ring orb__ring--2" />
          <div className="orb__ring orb__ring--3" />
          <div className="orb__core">
            <pre>{`const dev = {
  stack: ["HTML","CSS",
          "JS","React"],
  passion: "UI",
  coffee: Infinity,
};`}</pre>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-hint" onClick={(e) => { e.preventDefault(); document.getElementById("about").scrollIntoView({ behavior: "smooth" }); }}>
        <span /> scroll
      </a>
    </section>
  );
}
