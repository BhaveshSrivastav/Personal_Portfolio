import useInView from "../hooks/useInView.js";

// Wrap anything to fade/slide it in when it scrolls into view.
export default function Reveal({ children, delay = 0, direction = "up", className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`reveal reveal--${direction} ${inView ? "reveal--in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
