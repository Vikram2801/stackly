import { ArrowUpRight, Blocks, BookOpen, Compass } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  { icon: Blocks, tag: "Design system", title: "A consistent brand kit", text: "A practical set of reusable visual building blocks for a more consistent digital presence." },
  { icon: Compass, tag: "Digital strategy", title: "A clearer next step", text: "A focused roadmap that helps your team prioritize the right opportunities." },
  { icon: BookOpen, tag: "Learning", title: "React, made approachable", text: "Friendly learning resources for building confidence with modern web development." },
];

export default function Product() {
  return (
    <section className="page">
      <div className="products-grid">
        {products.map(({ icon: Icon, tag, title, text }) => (
          <article className="product-card" key={title}>
            <div className="product-icon"><Icon size={21} /></div>
            <p className="eyebrow">{tag}</p>
            <h3>{title}</h3>
            <p>{text}</p>
            <Link className="secondary-btn" to="/contact">Ask us about it <ArrowUpRight size={15} /></Link>
          </article>
        ))}
      </div>
    </section>
  );
}
