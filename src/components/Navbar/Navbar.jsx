import React, { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { id: 'hero', label: 'Inicio', num: '01' },
  { id: 'concepto', label: 'Concepto', num: '02' },
  { id: 'logotipo', label: 'Logotipo', num: '03' },
  { id: 'colores', label: 'Colores', num: '04' },
  { id: 'tipografia', label: 'Tipografía', num: '05' },
  { id: 'elementos', label: 'Elementos', num: '06' },
  { id: 'aplicaciones', label: 'Aplicaciones', num: '07' },
  { id: 'guia', label: 'Guía de Uso', num: '08' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setIsMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`street-navbar ${isScrolled ? 'is-scrolled' : ''}`}>

      <div className="container">
        <div className="row align-items-center justify-content-between navbar-row">
          {/* Identidad de marca / Logo */}
          <div className="col-auto">
            <a
              href="#hero"
              className="navbar-brand-link"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('hero');
              }}
            >
              <div className="brand-logo-icon">
                <svg viewBox="0 0 100 100" fill="none" className="brand-stencil-svg" aria-hidden="true">
                  <polygon points="50,82 18,22 34,22 50,52 66,22 82,22" fill="#19D1E6" />
                  <circle cx="50" cy="22" r="4.5" fill="#B3CDD7" />
                  {/* Spray drip mark */}
                  <path d="M 50,82 Q 52,90 50,96 Q 48,90 50,82" fill="#19D1E6" />
                </svg>
              </div>
              <div className="brand-naming">
                <span className="brand-title">VÉRTICE</span>
                <span className="brand-subtitle">STREETWEAR &amp; GRAFFITI</span>
              </div>
            </a>
          </div>

          {/* Enlaces de Navegación en la pagina de inicio */}
          <div className="col-auto d-none d-xl-block">
            <nav className="navbar-nav-desktop" aria-label="Navegación principal">
              <ul className="nav-pills-list">
                {NAV_LINKS.map((link) => (
                  <li key={link.id} className="nav-item">
                    <a
                      href={`#${link.id}`}
                      className={`nav-link-item ${activeSection === link.id ? 'is-active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.id);
                      }}
                    >
                      <span className="nav-link-dot" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="col-auto d-flex align-items-center gap-3">
            <div className="navbar-badge d-none d-md-flex">
              <span className="badge-spray-dot" />
              <span className="badge-text">BOOTSTRAP GRID // v1.0</span>
            </div>

            <button
              className={`navbar-hamburger d-xl-none ${isMobileMenuOpen ? 'is-open' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="hamburger-bar bar-1" />
              <span className="hamburger-bar bar-2" />
              <span className="hamburger-bar bar-3" />
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-street-drawer ${isMobileMenuOpen ? 'is-open' : ''}`}>
        <div className="container">
          <div className="drawer-header">
            <span className="drawer-tag">VÉRTICE // BRAND BOOK STREET</span>
            <span className="drawer-spec">10 SECCIONES OFICIALES</span>
          </div>
          <nav className="drawer-nav">
            <ul className="drawer-list">
              {NAV_LINKS.map((link) => (
                <li key={link.id} className="drawer-item">
                  <a
                    href={`#${link.id}`}
                    className={`drawer-link ${activeSection === link.id ? 'is-active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.id);
                    }}
                  >
                    <span className="drawer-num">{link.num}</span>
                    <span className="drawer-label">{link.label}</span>
                    <span className="drawer-arrow">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="drawer-footer">
            <p className="drawer-motto">“Del Muro al Textil // Estilo Callejero &amp; Forma Brutal”</p>
            <span className="drawer-copyright">© 2026 VÉRTICE STREETWEAR</span>
          </div>
        </div>
      </div>
    </header>
  );
}
