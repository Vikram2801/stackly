import { ArrowUpRight, Gamepad, Home, Layers3, Package, Sparkles, User, UserRound } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import "./navBar.css";

const navigation = [
  { to: "/", label: "Home", icon: Home, end: true },
  { to: "/about", label: "About", icon: UserRound },
  { to: "/services", label: "Services", icon: Layers3 },
  { to: "/products", label: "Products", icon: Package },
  { to: "/contact", label: "contact", icon: User },
  { to: "/tictactoe", label: "TicTacToe Game", icon: Gamepad },
];

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo" aria-label="VK Studio home">
          <span className="logo-icon" aria-hidden="true"><Sparkles size={20} strokeWidth={2.2} /></span>
          <div>
            <strong>VK Study Platform</strong>
            <span>Learn for React</span>
          </div>
        </Link>

        <nav className="nav-menu" aria-label="Main navigation">
          {navigation.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            >
              <Icon size={16} strokeWidth={1.9} aria-hidden="true" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
