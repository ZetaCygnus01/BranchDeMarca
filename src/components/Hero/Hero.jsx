import React from 'react';
import './Hero.css';

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="street-hero-section">
      {/* Street Stencil Corner Markers */}
      <div className="hero-corner-mark top-left" aria-hidden="true">
        <span className="corner-tag">[TAG // 01]</span>
        <span className="corner-sym">◤</span>
      </div>
      <div className="hero-corner-mark top-right" aria-hidden="true">
        <span className="corner-sym">◥</span>
        <span className="corner-tag">STREET ARCHIVE</span>
      </div>
      <div className="hero-corner-mark bottom-left" aria-hidden="true">
        <span className="corner-sym">◣</span>
        <span className="corner-tag">RAW GRAFFITI</span>
      </div>
      <div className="hero-corner-mark bottom-right" aria-hidden="true">
        <span className="corner-tag">BOOTSTRAP GRID // 5.3</span>
        <span className="corner-sym">◢</span>
      </div>

      {/* Contenedor */}
      <div className="container hero-inner-container">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-lg-10 col-xl-9">
            {/* Streetwear Pill Eyebrow */}
            <div className="hero-street-eyebrow">
              <span className="spray-indicator" />
              <span className="eyebrow-text">MANUAL DE IDENTIDAD VISUAL // STREETWEAR</span>
              <span className="eyebrow-badge">EDICIÓN GRAFFITI</span>
            </div>

            {/* Emblema de Plantilla */}
            <div className="hero-emblem-wrapper">
              <svg
                viewBox="0 0 120 120"
                className="hero-stencil-svg"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Isotipo Oficial Vértice"
              >
                { }
                <polygon
                  points="60,102 16,22 38,22 60,66 82,22 104,22"
                  fill="#19D1E6"
                  filter="drop-shadow(0 0 18px rgba(25, 209, 230, 0.55))"
                />
                <circle cx="60" cy="22" r="3.5" fill="#B3CDD7" />
              </svg>
            </div>

            <div className="hero-brand-block">
              <h1 className="hero-brand-name">
                VÉRTICE
              </h1>
              <div className="hero-tag-badge">
                <span className="tag-sticker">UNDERGROUND STREETWEAR</span>
              </div>
            </div>

            {/* Slogan */}
            <div className="hero-tagline-bar">
              <span className="tagline-street-quote">
                “Del Muro al Textil // Estilo Callejero &amp; Forma Brutal”
              </span>
            </div>

            {/* Manifiesto y objetivo de marca mejorado */}
            <p className="hero-manifesto-text">
              Indumentaria underground concebida para capturar la atención urbana a través de prendas
              de alto gramaje con logotipos fuera de lo normal. Una estética streetwear rebelde y experimental
              donde cada silueta rompe la monotonía del asfalto con identidad gráfica innegociable.
            </p>

            {/* CTAs */}
            <div className="hero-actions-group">
              <button
                className="street-btn street-btn-primary"
                onClick={() => scrollToSection('concepto')}
              >
                <span>Explorar Brand Book</span>
                <span className="btn-icon">↓</span>
              </button>
              <button
                className="street-btn street-btn-stencil"
                onClick={() => scrollToSection('logotipo')}
              >
                <span>Sistema de Logotipo</span>
                <span className="btn-icon">⚡</span>
              </button>
            </div>
          </div>
        </div>

        {/* Banda tecnica con Bootstrap */}
        <div className="row g-3 hero-specs-row justify-content-center">
          <div className="col-6 col-md-3">
            <div className="hero-spec-card">
              <span className="spec-label">ESTILO // CULTURA</span>
              <span className="spec-value">Streetwear &amp; Graffiti</span>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="hero-spec-card">
              <span className="spec-label">PALETA OFICIAL</span>
              <span className="spec-value">5 Tonos Gecko Neón</span>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="hero-spec-card">
              <span className="spec-label">SISTEMA REJILLA</span>
              <span className="spec-value">Bootstrap 5 Grid Ready</span>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="hero-spec-card">
              <span className="spec-label">ESTÁNDAR</span>
              <span className="spec-value">10 Secciones Oficiales</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
