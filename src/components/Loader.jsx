import { useEffect, useState } from "react";

export default function Loader({ onDone }) {
  const [count, setCount] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => {
        if (c >= 100) {
          clearInterval(id);
          return 100;
        }
        return c + 2;
      });
    }, 25);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (count >= 100) {
      onDone();
      const t = setTimeout(() => setGone(true), 900);
      return () => clearTimeout(t);
    }
  }, [count, onDone]);

  if (gone) return null;

  return (
    <div className={`loader ${count >= 100 ? "loader--exit" : ""}`}>
      <div className="loader__logo glitch" data-text="&lt;/&gt;">&lt;/&gt;</div>
      <div className="loader__bar">
        <span style={{ width: `${count}%` }} />
      </div>
      <p className="loader__count">{count}%</p>
    </div>
  );
}
