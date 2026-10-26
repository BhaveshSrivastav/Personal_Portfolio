import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with <span className="text-red">♥</span> using React, HTML, CSS &amp; JS.
      </p>
      <button
        className="footer__top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
}
