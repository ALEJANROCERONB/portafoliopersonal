import { useEffect, useRef, useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import MySkills from "./components/MySkills";
import Work from "./views/work";
import Contact from "./views/contact";
import Header from "./components/Header";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 👈 móvil: hamburguesa
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    requestAnimationFrame(() => el?.classList.add("is-loaded"));
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <>
            <AboutMe />
            <Services />
            <MySkills />
          </>
        );
      case "work":
        return <Work />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  const handleNav = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false); // cerrar menú móvil al elegir
  };

  const navItemStyle = (tab) => ({
    padding: "10px 20px",
    width: "100%",
    cursor: "pointer",
    borderBottom: `4px solid ${activeTab === tab ? "#C2A072" : "#253846"}`,
    color: activeTab === tab ? "#C2A072" : "#ffffff",
    transition: "border-bottom 0.3s, color 0.3s",
    fontWeight: "bold",
    backgroundColor: "#06141b",
    backgroundImage: "none",
    textAlign: "center",
  });

  // Indicador activo (desktop)
  const activeIndex = ["home", "work", "contact"].indexOf(activeTab);

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
          <div onClick={() => handleNav("home")} style={navItemStyle("home")}>
            H O M E
          </div>
          <div onClick={() => handleNav("work")} style={navItemStyle("work")}>
            W O R K
          </div>
          <div
            onClick={() => handleNav("contact")}
            style={navItemStyle("contact")}
          >
            C O N T A C T
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      <div className={`mobile-drawer ${isMenuOpen ? "open" : ""}`}>
        <div onClick={() => handleNav("home")} className="mobile-item">
          H O M E
        </div>
        <div onClick={() => handleNav("work")} className="mobile-item">
          W O R K
        </div>
        <div onClick={() => handleNav("contact")} className="mobile-item">
          C O N T A C T
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="lower-container fade-swap" key={activeTab}>
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
