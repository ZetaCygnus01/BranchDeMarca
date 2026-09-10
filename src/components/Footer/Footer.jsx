import React from 'react';
import './Footer.css';

const SECTIONS = [
  { id: 'hero', label: 'Inicio' },
  { id: 'concepto', label: 'Concepto' },
  { id: 'logotipo', label: 'Logotipo' },
  { id: 'colores', label: 'Colores' },
  { id: 'tipografia', label: 'Tipografía' },
  { id: 'elementos', label: 'Elementos' },
  { id: 'aplicaciones', label: 'Aplicaciones' },
  { id: 'guia', label: 'Guía de Uso' },
];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-street-container">
      <div className="container">
        {/* Top Grid using Bootstrap */}
        <div className="row g-4 mb-5">
          {/* Brand Info Col */}
          <div className="col-12 col-lg-5">
            <div className="d-flex align-items-center gap-3 mb-3">
              <svg viewBox="0 0 100 100" fill="none" className="f-logo-stencil" aria-hidden="true">
                <polygon points="50,82 18,22 34,22 50,52 66,22 82,22" fill="#19D1E6" />
                <circle cx="50" cy="22" r="4" fill="#B3CDD7" />
                <path d="M 50,82 Q 52,90 50,96 Q 48,90 50,82" fill="#19D1E6" />
              </svg>
              <div>
                <span className="f-brand-title">VÉRTICE</span>
                <span className="f-brand-sub">STREETWEAR &amp; GRAFFITI LAB</span>
              </div>
            </div>

            <p className="f-tagline-quote mb-2">
              “Del Muro al Textil // Estilo Callejero &amp; Forma Brutal”
            </p>

            <p className="f-desc-text">
              Manual técnico de identidad visual para marca de indumentaria urbana contemporánea.
              Diseño estructurado bajo el sistema de grillas de Bootstrap con 10 secciones completas.
            </p>
          </div>

          {/* Enlaces rapidos */}
          <div className="col-12 col-sm-6 col-lg-3">
            <span className="f-col-header">ÍNDICE DE SECCIONES</span>
            <ul className="f-nav-links-list">
              {SECTIONS.map((sec, idx) => (
                <li key={sec.id} className="f-nav-link-item">
                  <a
                    href={`#${sec.id}`}
                    className="f-link-anchor"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(sec.id);
                    }}
                  >
                    <span className="f-idx">0{idx + 1}.</span>
                    <span>{sec.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Evaluacion tecnica */}
          <div className="col-12 col-sm-6 col-lg-4">
            <span className="f-col-header">FICHA TÉCNICA DE EVALUACIÓN</span>
            <div className="f-specs-box mb-3">
              <div className="d-flex justify-content-between">
                <span>ESTRUCTURA:</span>
                <strong>10 Secciones Oficiales</strong>
              </div>
              <div className="d-flex justify-content-between">
                <span>GRID SYSTEM:</span>
                <strong>Bootstrap 5 Integrado</strong>
              </div>
              <div className="d-flex justify-content-between">
                <span>PALETA GECKO:</span>
                <strong>5 Códigos Oficiales</strong>
              </div>
              <div className="d-flex justify-content-between">
                <span>ESTÉTICA:</span>
                <strong>Streetwear &amp; Graffiti</strong>
              </div>
            </div>

            <button
              className="f-back-top-btn w-100"
              onClick={scrollToTop}
              aria-label="Volver arriba"
            >
              <span>Volver arriba</span>
              <span className="f-arrow">↑</span>
            </button>
          </div>
        </div>

        {/* Barra legal inferior */}
        <div className="f-bottom-bar d-flex justify-content-between align-items-center flex-wrap gap-2 pt-4">
          <p className="f-copyright mb-0">
            © 2026 VÉRTICE STREETWEAR ARCHIVE. Todos los derechos reservados.
          </p>

          <div className="d-flex gap-2 flex-wrap">
            <span className="f-pill">BOOTSTRAP GRID</span>
            <span className="f-pill">STREETWEAR IDENTITY</span>
            <span className="f-pill">GRAFFITI LAB</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
