import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import logo2 from "../assets/white2.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Benefits", path: "/benefits" },
    { label: "Portfolio", path: "/casestudies" },
    { label: "Roadmap", path: "/roadmap" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="/home" className="navbar__logo">
          <img src={logo2} alt="Cloudlit logo" />
        </a>

        {/* Desktop links */}
        <div className="navbar__links">
          {navLinks.map((link) => (
            <button
              key={link.label}
              className={`navbar__link ${
                location.pathname === link.path ? "navbar__link--active" : ""
              }`}
              onClick={() => navigate(link.path)}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA button */}
        <button
          className="navbar__cta"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu backdrop */}
      <div
        className={`navbar__side-menu-backdrop ${menuOpen ? "navbar__side-menu-backdrop--open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile dropdown menu */}
      <div className={`navbar__side-menu ${menuOpen ? "navbar__side-menu--open" : ""}`}>
        <div className="navbar__side-menu-links">
          {navLinks.map((link) => (
            <button
              key={link.label}
              className="navbar__side-menu-link"
              onClick={() => navigate(link.path)}
            >
              {link.label}
            </button>
          ))}
        </div>
        <button
          className="navbar__side-menu-cta"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
}