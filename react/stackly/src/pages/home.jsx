import {
  ArrowDownRight,
  ArrowRight,
  Braces,
  LayoutDashboard,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  {
    icon: Braces,
    title: "Web development",
    text: "Fast, accessible websites built to grow with your business.",
  },
  {
    icon: LayoutDashboard,
    title: "UI / UX design",
    text: "Clear, considered interfaces that make every step feel natural.",
  },
  {
    icon: Smartphone,
    title: "App development",
    text: "Useful mobile experiences, designed around real people.",
  },
];

export default function HomePage() {
  return (
    <div className="page">
      <section aria-labelledby="home-services-title">
    
        <div className="features">
          {highlights.map(({ icon: Icon, title, text }, index) => (
            <article className="feature-card" key={title}>
              <div className="feature-icon">
                <Icon size={21} />
              </div>
              <p className="eyebrow">0{index + 1}</p>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
