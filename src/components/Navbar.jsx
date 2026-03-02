import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const serviceLinks = [
  { label: "Cloud", path: "/services/cloud" },
  { label: "DevOps", path: "/services/devops" },
  { label: "Infrastructure Management", path: "/services/provision" },
  { label: "Enterprise Monitoring", path: "/services/monitor" },
  { label: "Red Hat OpenShift", path: "/services/openshift" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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
    setServicesOpen(false);
  }, [location]);

  // Close desktop dropdown when clicking outside (only when desktop menu is visible)
  useEffect(() => {
    const closeDropdown = (e) => {
      const inDesktopDropdown = e.target.closest(".navbar__dropdown-wrap");
      const inMobileDropdown = e.target.closest(".navbar__side-menu-dropdown");
      if (servicesOpen && !inDesktopDropdown && !inMobileDropdown) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, [servicesOpen]);

  const navLinks = [
    { label: "About", path: "/about" },
    { label: "Services", path: "/services/cloud", dropdown: serviceLinks },
    { label: "Benefits", path: "/benefits" },
    { label: "Portfolio", path: "/casestudies" },
    { label: "Roadmap", path: "/roadmap" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="/" className="navbar__logo">
          <img src={`${process.env.PUBLIC_URL || ''}/CloudLit.webp`} alt="Cloudlit logo" />
        </a>

        {/* Desktop links */}
        <div className="navbar__links">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="navbar__dropdown-wrap"
                onMouseEnter={() => setServicesOpen(true)}
              >
                <button
                  className={`navbar__link ${
                    location.pathname.startsWith("/services") ? "navbar__link--active" : ""
                  }`}
                  onClick={() => {
                    setServicesOpen(!servicesOpen);
                    navigate("/services/cloud");
                  }}
                  aria-expanded={servicesOpen}
                >
                  {link.label}
                  <svg
                    className={`navbar__dropdown-chevron ${servicesOpen ? "navbar__dropdown-chevron--open" : ""}`}
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className={`navbar__dropdown ${servicesOpen ? "navbar__dropdown--open" : ""}`}>
                  {link.dropdown.map((sub) => (
                    <button
                      key={sub.path}
                      className={`navbar__dropdown-link ${location.pathname === sub.path ? "navbar__dropdown-link--active" : ""}`}
                      onClick={() => {
                        navigate(sub.path);
                        setServicesOpen(false);
                      }}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <button
                key={link.label}
                className={`navbar__link ${location.pathname === link.path ? "navbar__link--active" : ""}`}
                onClick={() => navigate(link.path)}
              >
                {link.label}
              </button>
            )
          )}
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
        onClick={() => {
          setMenuOpen(false);
          setServicesOpen(false);
        }}
        aria-hidden="true"
      />

      {/* Mobile dropdown menu */}
      <div className={`navbar__side-menu ${menuOpen ? "navbar__side-menu--open" : ""}`}>
        <div className="navbar__side-menu-links">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="navbar__side-menu-dropdown">
                <button
                  className={`navbar__side-menu-link navbar__side-menu-link--parent ${
                    servicesOpen ? "navbar__side-menu-link--expanded" : ""
                  }`}
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  {link.label}
                  <svg
                    className={`navbar__side-menu-chevron ${servicesOpen ? "navbar__side-menu-chevron--open" : ""}`}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className={`navbar__side-menu-sub ${servicesOpen ? "navbar__side-menu-sub--open" : ""}`}>
                  <div>
                    {link.dropdown.map((sub) => (
                      <button
                        key={sub.path}
                        className="navbar__side-menu-sublink"
                        onClick={() => {
                          navigate(sub.path);
                          setMenuOpen(false);
                          setServicesOpen(false);
                        }}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <button
                key={link.label}
                className="navbar__side-menu-link"
                onClick={() => navigate(link.path)}
              >
                {link.label}
              </button>
            )
          )}
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