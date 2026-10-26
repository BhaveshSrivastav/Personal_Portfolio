import useInView from "../hooks/useInView.js";

export default function SectionTitle({ index, title }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={`section-title ${inView ? "in" : ""}`}>
      <span className="section-title__num">{index}</span>
      <h2>{title}</h2>
      <span className="section-title__line" />
    </div>
  );
}
