import React, { useState } from 'react';
import './GraphicElements.css';

const STREET_ICONS = [
  {
    code: 'CARE-01',
    name: 'Lavado en Frío 30°',
    desc: 'Protege las fibras de algodón pesado y evita la decoloración del cian neón.',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" className="street-icon-svg">
        <path d="M6 14 C12 18, 16 10, 22 14 C28 18, 32 10, 34 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M6 16 L10 32 L30 32 L34 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="24" r="1.5" fill="currentColor" />
        <circle cx="20" cy="24" r="1.5" fill="currentColor" />
        <circle cx="24" cy="24" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    code: 'CARE-02',
    name: 'No Usar Cloro',
    desc: 'Preserva la formulación química del tinte Abyssal Petrol sin corrosión.',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" className="street-icon-svg">
        <polygon points="20,8 34,32 6,32" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <line x1="14" y1="18" x2="26" y2="30" stroke="var(--color-19D1E6)" strokeWidth="2" strokeLinecap="round" />
        <line x1="26" y1="18" x2="14" y2="30" stroke="var(--color-19D1E6)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    code: 'CARE-03',
    name: 'Planchar al Revés',
    desc: 'Protege las serigrafías de tinta inflable y los detalles en relieve.',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" className="street-icon-svg">
        <path d="M8 26 L30 26 C33 26 34 23 32 17 L30 14 L12 14 C9 14 8 16 8 19 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="18" cy="21" r="1.5" fill="currentColor" />
        <line x1="10" y1="30" x2="28" y2="30" stroke="var(--color-19D1E6)" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    code: 'CARE-04',
    name: 'Secado en Plano',
    desc: 'Evita que la gravedad deforme hoodies de más de 400 GSM de peso.',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" className="street-icon-svg">
        <rect x="7" y="7" width="26" height="26" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <line x1="12" y1="20" x2="28" y2="20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="20" cy="14" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    code: 'SPEC-05',
    name: 'Algodón Heavyweight',
    desc: 'Hilatura densa peinada 460 GSM para siluetas con caída rígida.',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" className="street-icon-svg">
        <circle cx="20" cy="17" r="7" stroke="currentColor" strokeWidth="1.8" />
        <path d="M20 24 C20 28, 16 32, 13 32" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M20 26 C20 30, 24 32, 27 32" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="20" cy="17" r="2" fill="var(--color-19D1E6)" />
      </svg>
    ),
  },
  {
    code: 'SPEC-06',
    name: 'Tirada Limitada Seriada',
    desc: 'Certificado de lote restringido a 100 piezas numeradas por cápsula.',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" className="street-icon-svg">
        <polygon points="20,6 33,14 33,28 20,35 7,28 7,14" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="20" cy="20.5" r="3" fill="var(--color-19D1E6)" />
      </svg>
    ),
  },
];

export default function GraphicElements() {
  const [patternMode, setPatternMode] = useState('asphalt');

  return (
    <section id="elementos" className="graphic-elements-street-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">05 // RECURSOS VISUALES &amp; GRAFFITI</span>
          <h2 className="section-title">Elementos Gráficos Complementarios</h2>
          <p className="section-description">
            Texturas de salpicadura de aerosol, calcomanías de vinilo callejero (*slap stickers*),
            cintas de advertencia urbana y pictogramas técnicos que refuerzan el imaginario de VÉRTICE.
          </p>
        </div>

        {/* Salpicaduras de spray y marcas de plantilla */}
        <div className="street-block mb-5">
          <div className="block-header-strip mb-4">
            <span className="b-num">01</span>
            <div>
              <h3 className="b-title">Salpicaduras de Aerosol &amp; Goteos de Tinta (Spray Drips)</h3>
              <p className="b-desc">
                Elementos vectoriales de pintura proyectada que simulan la presión de boquillas fat cap
                sobre muros de hormigón. Se aplican como acento en fondos, bordes de fotos y serigrafías.
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="mark-card-street h-100">
                <svg viewBox="0 0 100 80" className="drip-sample-svg">
                  {/* Vector de Goteo */}
                  <path d="M 10,15 L 90,15 C 80,15 75,35 72,45 C 70,55 74,65 72,70 C 70,72 68,70 68,60 C 68,45 60,15 50,15 C 40,15 38,30 35,40 C 33,48 35,58 33,62 C 31,64 30,60 30,48 C 30,30 20,15 10,15 Z" fill="#19D1E6" />
                  <circle cx="72" cy="76" r="2.5" fill="#19D1E6" />
                  <circle cx="33" cy="68" r="2" fill="#19D1E6" />
                </svg>
                <span className="mark-street-title">GOTEO DE AEROSOL</span>
                <span className="mark-street-desc">Efecto Fat-Cap Canónico</span>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="mark-card-street h-100">
                <svg viewBox="0 0 100 80" className="drip-sample-svg">
                  {/* Puntos con Salpicadura */}
                  <circle cx="50" cy="40" r="14" fill="#19D1E6" opacity="0.9" />
                  <circle cx="70" cy="25" r="4" fill="#19D1E6" />
                  <circle cx="78" cy="38" r="2" fill="#19D1E6" />
                  <circle cx="68" cy="58" r="3.5" fill="#19D1E6" />
                  <circle cx="32" cy="22" r="3" fill="#19D1E6" />
                  <circle cx="22" cy="38" r="4.5" fill="#19D1E6" />
                  <circle cx="30" cy="56" r="2.5" fill="#19D1E6" />
                  <circle cx="50" cy="68" r="3" fill="#19D1E6" />
                  <circle cx="50" cy="14" r="2" fill="#19D1E6" />
                </svg>
                <span className="mark-street-title">SALPICADURA SPRAY</span>
                <span className="mark-street-desc">Aerosol de Presión Media</span>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="mark-card-street h-100">
                <div className="stencil-bracket-box">
                  <span>◤ ◥</span>
                  <span className="bracket-mid">STENCIL</span>
                  <span>◣ ◢</span>
                </div>
                <span className="mark-street-title">CORNERS DE PLANTILLA</span>
                <span className="mark-street-desc">Encuadres Angulares 45°</span>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="mark-card-street h-100">
                <div className="caution-tape-mini">
                  <span className="tape-stripe-text">/// VÉRTICE ARCHIVE ///</span>
                </div>
                <span className="mark-street-title">CINTA DE ADVERTENCIA</span>
                <span className="mark-street-desc">Franja Diagonal Urbana</span>
              </div>
            </div>
          </div>
        </div>

        {/* Estampados textiles y de pared */}
        <div className="street-block mb-5">
          <div className="block-header-strip mb-4">
            <span className="b-num">02</span>
            <div>
              <h3 className="b-title">Trama Textil &amp; Malla de Hormigón (Woven Grid)</h3>
              <p className="b-desc">
                Patrón modular en repetición infinita compuesto por vértices de aerosol y puntos de retícula.
                Ideal para forros de prendas de abrigo, papel de seda de unboxing y cinta adhesiva de empaque.
              </p>
            </div>
          </div>

          <div className="pattern-street-container">
            <div className="pattern-toolbar-bar">
              <span className="p-title">PATRÓN MODULAR REPETITIVO // MÓDULO 40×40px</span>
              <div className="d-flex gap-2">
                <button
                  className={`p-toggle-btn ${patternMode === 'asphalt' ? 'is-active' : ''}`}
                  onClick={() => setPatternMode('asphalt')}
                >
                  Asfalto Nocturno
                </button>
                <button
                  className={`p-toggle-btn ${patternMode === 'ice' ? 'is-active' : ''}`}
                  onClick={() => setPatternMode('ice')}
                >
                  Hormigón Hielo
                </button>
              </div>
            </div>

            <div className={`pattern-stage pattern-mode-${patternMode}`}>
              <svg width="100%" height="220" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern
                    id={`streetGrid-${patternMode}`}
                    width="44"
                    height="44"
                    patternUnits="userSpaceOnUse"
                  >
                    {/* Puntos */}
                    <circle
                      cx="22"
                      cy="22"
                      r="1.2"
                      fill={patternMode === 'asphalt' ? '#117192' : '#614943'}
                      opacity="0.4"
                    />
                    {/* Forma de plantilla */}
                    <polygon
                      points="22,32 14,14 18,14 22,23 26,14 30,14"
                      fill={patternMode === 'asphalt' ? '#19D1E6' : '#052A3D'}
                      opacity="0.85"
                    />
                    <circle
                      cx="22"
                      cy="14"
                      r="1.3"
                      fill={patternMode === 'asphalt' ? '#B3CDD7' : '#19D1E6'}
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#streetGrid-${patternMode})`} />
              </svg>
            </div>
          </div>
        </div>

        {/* Iconografía Técnica de Cuidado Textil */}
        <div className="street-block mb-5">
          <div className="block-header-strip mb-4">
            <span className="b-num">03</span>
            <div>
              <h3 className="b-title">Iconografía Técnica de Cuidado Textil</h3>
              <p className="b-desc">
                Sistema iconográfico angular con trazo continuo (stroke 1.8px) diseñado para etiquetas
                cosidas interiores y recomendaciones de lavado de prendas pesadas de streetwear.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {STREET_ICONS.map((icon, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4">
                <div className="street-icon-card h-100">
                  <div className="icon-badge-box">{icon.svg}</div>
                  <div className="icon-data-box">
                    <span className="icon-code-label">{icon.code}</span>
                    <h4 className="icon-heading">{icon.name}</h4>
                    <p className="icon-description">{icon.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calcomanías Callejeras & Sellos de Taller */}
        <div className="street-block">
          <div className="block-header-strip mb-4">
            <span className="b-num">04</span>
            <div>
              <h3 className="b-title">Calcomanías Callejeras &amp; Sellos de Taller (Slap Stickers)</h3>
              <p className="b-desc">
                Elementos de difusión de guerrilla urbana: el clásico sticker postal de graffiti
                y el sello de control de calidad de cada tirada seriada.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {/* Slap Sticker */}
            <div className="col-12 col-md-6">
              <div className="slap-sticker-card">
                <div className="sticker-header-red">
                  <span>HELLO</span>
                  <small>MY NAME IS</small>
                </div>
                <div className="sticker-body-white">
                  <span className="sticker-tag-signature">VÉRTICE</span>
                  <span className="sticker-sub-tag">// STREETWEAR LAB #001</span>
                </div>
                <div className="sticker-footer-strip">
                  <span>STREET ARCHIVE // BCNA</span>
                  <span>100% RAW APPAREL</span>
                </div>
              </div>
            </div>

            {/* Sello de Taller */}
            <div className="col-12 col-md-6">
              <div className="workshop-stamp-card">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="stamp-k-title">INSPECCIÓN DE PRENDA</span>
                  <span className="stamp-k-pill">LOTE LIMITADO</span>
                </div>
                <div className="stamp-data-stripes">
                  <div className="d-flex justify-content-between">
                    <span>CÁPSULA:</span>
                    <strong>ED. 01 GECKO STREET</strong>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>PALETA:</span>
                    <strong>#052A3D / #19D1E6</strong>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>GRAMAJE:</span>
                    <strong>460 GSM FRENCH TERRY</strong>
                  </div>
                </div>
                <div className="barcode-render text-center mt-3">
                  <svg viewBox="0 0 220 40" className="barcode-vector">
                    <line x1="10" y1="0" x2="10" y2="35" stroke="currentColor" strokeWidth="2" />
                    <line x1="16" y1="0" x2="16" y2="35" stroke="currentColor" strokeWidth="3" />
                    <line x1="24" y1="0" x2="24" y2="35" stroke="currentColor" strokeWidth="1" />
                    <line x1="32" y1="0" x2="32" y2="35" stroke="currentColor" strokeWidth="2.5" />
                    <line x1="42" y1="0" x2="42" y2="35" stroke="currentColor" strokeWidth="1" />
                    <line x1="48" y1="0" x2="48" y2="35" stroke="currentColor" strokeWidth="3.5" />
                    <line x1="58" y1="0" x2="58" y2="35" stroke="currentColor" strokeWidth="1" />
                    <line x1="66" y1="0" x2="66" y2="35" stroke="currentColor" strokeWidth="2" />
                    <line x1="76" y1="0" x2="76" y2="35" stroke="currentColor" strokeWidth="3" />
                    <line x1="86" y1="0" x2="86" y2="35" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="96" y1="0" x2="96" y2="35" stroke="currentColor" strokeWidth="2" />
                    <line x1="106" y1="0" x2="106" y2="35" stroke="currentColor" strokeWidth="4" />
                    <line x1="118" y1="0" x2="118" y2="35" stroke="currentColor" strokeWidth="1" />
                    <line x1="126" y1="0" x2="126" y2="35" stroke="currentColor" strokeWidth="2.5" />
                    <line x1="136" y1="0" x2="136" y2="35" stroke="currentColor" strokeWidth="3" />
                    <line x1="148" y1="0" x2="148" y2="35" stroke="currentColor" strokeWidth="1" />
                    <line x1="158" y1="0" x2="158" y2="35" stroke="currentColor" strokeWidth="3.5" />
                    <line x1="170" y1="0" x2="170" y2="35" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="180" y1="0" x2="180" y2="35" stroke="currentColor" strokeWidth="2" />
                    <line x1="192" y1="0" x2="192" y2="35" stroke="currentColor" strokeWidth="3" />
                    <line x1="204" y1="0" x2="204" y2="35" stroke="currentColor" strokeWidth="1" />
                  </svg>
                  <span className="barcode-legend">VT-052A3D-19D1E6</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
