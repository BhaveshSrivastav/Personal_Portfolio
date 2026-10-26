import { useState } from "react";
import { profile } from "../data.js";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";

// No form — visitors reach out directly by email (mailto link).
export default function Contact() {
  const [copied, setCopied] = useState(false);

  const subject = encodeURIComponent("Let's work together");
  const body = encodeURIComponent("Hi,\n\nI came across your portfolio and would love to talk about...\n\n");
  const mailto = `mailto:${profile.email}?subject=${subject}&body=${body}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = mailto;
    }
  };

  return (
    <section id="contact" className="section contact">
      <SectionTitle index="05" title="Get In Touch" />
      <Reveal>
        <p className="contact__lead">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
      </Reveal>
      <Reveal delay={150}>
        <a className="contact__mail" href={mailto}>{profile.email}</a>
      </Reveal>
      <Reveal delay={300}>
        <div className="contact__actions">
          <a className="btn" href={mailto}>Send me an email</a>
          <button className="btn btn--ghost" onClick={copy}>
            {copied ? "Copied ✓" : "Copy email"}
          </button>
        </div>
      </Reveal>
      <Reveal delay={450}>
        <ul className="socials">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a href={s.url} target="_blank" rel="noreferrer">{s.label} ↗</a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
