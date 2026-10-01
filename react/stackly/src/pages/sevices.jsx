import { AppWindow, ArrowRight, Braces, Layers3 } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

const services = [
  { to: "web-development", label: "Web development", icon: Braces },
  { to: "ui-ux-design", label: "UI / UX design", icon: Layers3 },
  { to: "app-development", label: "App development", icon: AppWindow },
];

export default function Services() {
  return (
    <section className="page">
      <div className="nested-layout">
        <aside className="nested-sidebar" aria-label="Services">
          <h3>Explore services</h3>
          {services.map(({ to, label, icon: Icon }) => (
            <NavLink
              className={({ isActive }) =>
                `nested-link${isActive ? " active" : ""}`
              }
              to={to}
              key={to}
            >
              <Icon size={16} /> {label}
            </NavLink>
          ))}
          <NavLink className="nested-link" to="/contact">
            <ArrowRight size={16} /> Start a project
          </NavLink>
        </aside>
        <div className="nested-content">
          <Outlet />
        </div>
      </div>
    </section>
  );
}
