import React, { useEffect, useRef } from "react";
import "../styles/Header.css";

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    requestAnimationFrame(() => el?.classList.add("is-loaded"));
  }, []);

  useEffect(() => {
    const el = headerRef.current;
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!el || prefersReduced) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;

      el.style.setProperty("--parallax-x", `${dx * 10}px`);
      el.style.setProperty("--parallax-y", `${dy * 8}px`);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <header className="hero-header" ref={headerRef}>
      <span className="orb orb-1" aria-hidden="true" />
      <span className="orb orb-2" aria-hidden="true" />
      <span className="orb orb-3" aria-hidden="true" />

      <div className="overlay">
        {/* Contenedor flex: logo + texto */}
        <div className="title-with-logo">
          <img src="/ac.svg" alt="AC Logo" className="logo-round" />
          <div className="title-text">
            <h1 className="hero-title">ALEJANDRO DEVELOPER</h1>
            <p className="hero-subtitle">
              Web & Mobile Development • Creative Solutions
            </p>
          </div>
        </div>
      </div>

      <svg
        className="wave"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,64L80,69.3C160,75,320,85,480,90.7C640,96,800,96,960,85.3C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
      </svg>
    </header>
  );
};

export default Header;
