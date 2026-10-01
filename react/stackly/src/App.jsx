import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import About from "./pages/about";
import HomePage from "./pages/home";
import Services from "./pages/sevices";
import Product from "./pages/product";
import Contact from "./pages/contact";
import WebDevelopment from "./sevices/webDevelopement";
import UiUxDesign from "./sevices/uiuxDesign";
import AppDevelopment from "./sevices/appDevelopement";
import "./App.css";
import TicTacToe from "./components/tictactoe/TicTacToe";

function ServicesOverview() {
  return (
    <div className="content-card">
      <div>
        <p className="eyebrow">What we do</p>
        <h2>Thoughtful digital services</h2>
        <p>Choose a service to see how we can help turn your next idea into a polished, dependable product.</p>
      </div>
      <div className="stats">
        <div><strong>01</strong><span>Discover</span></div>
        <div><strong>02</strong><span>Design</span></div>
        <div><strong>03</strong><span>Deliver</span></div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />}>
          <Route index element={<ServicesOverview />} />
          <Route path="web-development" element={<WebDevelopment />} />
          <Route path="ui-ux-design" element={<UiUxDesign />} />
          <Route path="app-development" element={<AppDevelopment />} />
        </Route>
        <Route path="products" element={<Product />} />
        <Route path="contact" element={<Contact />} />
        <Route path="tictactoe" element={<TicTacToe/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
