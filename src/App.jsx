import { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import MySkills from "./components/MySkills";
import Work from "./views/work";
import Contact from "./views/contact";
import Header from "./components/Header";

const TABS = [
  { key: "home", path: "/", label: "H O M E" },
  { key: "work", path: "/work", label: "W O R K" },
  { key: "contact", path: "/contact", label: "C O N T A C T" },
];

function Home() {
  return (
    <>
      <AboutMe />
      <Services />
      <MySkills />
    </>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 👈 móvil: hamburguesa
  const rootRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const el = rootRef.current;
    requestAnimationFrame(() => el?.classList.add("is-loaded"));
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [location.pathname]);

  const activeTab =
    TABS.find((t) => t.path === location.pathname)?.key ?? "home";

  const handleNav = (path) => {
    navigate(path);
    setIsMenuOpen(false); // cerrar menú móvil al elegir
  };

  const navItemStyle = (key) => ({
    padding: "10px 20px",
    width: "100%",
    cursor: "pointer",
    borderBottom: `4px solid ${activeTab === key ? "#C2A072" : "#253846"}`,
    color: activeTab === key ? "#C2A072" : "#ffffff",
    transition: "border-bottom 0.3s, color 0.3s",
    fontWeight: "bold",
    backgroundColor: "#06141b",
    backgroundImage: "none",
    textAlign: "center",
  });

  // Indicador activo (desktop)
  const activeIndex = TABS.findIndex((t) => t.key === activeTab);

  return (
    <div ref={rootRef} className="content">
      <Header />

      {/* NAVBAR */}
      <div
        className="top-nav"
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#06141b",
          borderBottom: "1px solid #253846",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Botón hamburguesa (solo se ve en móvil via CSS) */}
        <button
          className={`hamburger ${isMenuOpen ? "is-open" : ""}`}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Indicador activo (oculto en móvil via CSS) */}
        <div
          className="active-indicator"
          style={{
            width: "33.3333%",
            transform: `translateX(${activeIndex * 100}%)`,
          }}
          aria-hidden="true"
        />

        {/* Items desktop */}
        <div className="top-nav-items">
          {TABS.map((tab) => (
            <div
              key={tab.key}
              onClick={() => handleNav(tab.path)}
              style={navItemStyle(tab.key)}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>

      {/* Menú móvil desplegable */}
      <div className={`mobile-drawer ${isMenuOpen ? "open" : ""}`}>
        {TABS.map((tab) => (
          <div
            key={tab.key}
            onClick={() => handleNav(tab.path)}
            className="mobile-item"
          >
            {tab.label}
          </div>
        ))}
      </div>

      {/* CONTENIDO */}
      <div className="lower-container fade-swap" key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
