import { ArrowUpRight } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../navBar/navBar";
import "./layout.css";

export default function Layout() {
  return (
    <div className="app-layout">
      <NavBar />
      <main className="main-content" id="main-content" tabIndex="-1">
        <Outlet />
      </main>
    </div>
  );
}
