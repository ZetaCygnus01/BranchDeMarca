import React, { useState } from 'react';
import './UsageGuide.css';

const STREET_RULES = [
  {
    id: 'proportions',
    title: 'Proporciones del Tag & Stencil',
    doText: 'Mantener siempre la relación de aspecto bloqueada al escalar el isotipo y el logotipo.',
    dontText: 'Nunca estirar, comprimir ni deformar la silueta angular del vértice stencil.',
    doVisual: (
      <div className="rule-visual-box do-visual">
        <svg viewBox="0 0 160 50" fill="none" className="rule-svg">
          <polygon points="20,38 6,10 12,10 20,24 28,10 34,10" fill="#19D1E6" />
          <circle cx="20" cy="10" r="2.2" fill="#B3CDD7" />
          <text x="44" y="30" fontFamily="Syne, sans-serif" fontSize="18" fontWeight="800" letterSpacing="4" fill="#FFFFFF">
            VÉRTICE
          </text>
        </svg>
      </div>
    ),
    dontVisual: (
      <div className="rule-visual-box dont-visual">
        <svg viewBox="0 0 160 50" fill="none" className="rule-svg">
          <g transform="scale(1.4, 0.6) translate(-10, 15)">
            <polygon points="20,38 6,10 12,10 20,24 28,10 34,10" fill="#19D1E6" />
            <circle cx="20" cy="10" r="2.2" fill="#B3CDD7" />
            <text x="44" y="30" fontFamily="Syne, sans-serif" fontSize="18" fontWeight="800" letterSpacing="4" fill="#FFFFFF">
              VÉRTICE
            </text>
          </g>
        </svg>
      </div>
    ),
  },
  {
    id: 'palette',
    title: 'Cromatismo Oficial Gecko',
    doText: 'Utilizar únicamente los 5 tonos autorizados: #052A3D, #117192, #19D1E6, #614943 y #B3CDD7.',
    dontText: 'No aplicar colores ajenos, tintas fucsias, degradados arcoíris ni tonos no reglamentarios.',
    doVisual: (
      <div className="rule-visual-box do-visual">
        <svg viewBox="0 0 160 50" fill="none" className="rule-svg">
          <polygon points="20,38 6,10 12,10 20,24 28,10 34,10" fill="#19D1E6" />
          <circle cx="20" cy="10" r="2.2" fill="#614943" />
          <text x="44" y="30" fontFamily="Syne, sans-serif" fontSize="18" fontWeight="800" letterSpacing="4" fill="#B3CDD7">
            VÉRTICE
          </text>
        </svg>
      </div>
    ),
    dontVisual: (
      <div className="rule-visual-box dont-visual">
        <svg viewBox="0 0 160 50" fill="none" className="rule-svg">
          <defs>
            <linearGradient id="badRainbow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF0080" />
              <stop offset="50%" stopColor="#7928CA" />
              <stop offset="100%" stopColor="#FF4D4D" />
            </linearGradient>
          </defs>
          <polygon points="20,38 6,10 12,10 20,24 28,10 34,10" fill="url(#badRainbow)" />
          <circle cx="20" cy="10" r="2.2" fill="#FFEB3B" />
          <text x="44" y="30" fontFamily="Syne, sans-serif" fontSize="18" fontWeight="800" letterSpacing="4" fill="url(#badRainbow)">
            VÉRTICE
          </text>
        </svg>
      </div>
    ),
  },
  {
    id: 'effects',
    title: 'Acabados & Sombras 3D',
    doText: 'Mantener tintas planas de serigrafía o bajo relieves táctiles sin artificios digitales.',
    dontText: 'No añadir sombras paralelas estridentes, biseles cromados ni resplandores no calibrados.',
    doVisual: (
      <div className="rule-visual-box do-visual">
        <svg viewBox="0 0 160 50" fill="none" className="rule-svg">
          <polygon points="20,38 6,10 12,10 20,24 28,10 34,10" fill="#19D1E6" />
          <circle cx="20" cy="10" r="2.2" fill="#B3CDD7" />
          <text x="44" y="30" fontFamily="Syne, sans-serif" fontSize="18" fontWeight="800" letterSpacing="4" fill="#FFFFFF">
            VÉRTICE
          </text>
        </svg>
      </div>
    ),
    dontVisual: (
      <div className="rule-visual-box dont-visual">
        <svg viewBox="0 0 160 50" fill="none" className="rule-svg">
          <defs>
            <filter id="streetGlowBad" x="-20%" y="-20%" width="160%" height="160%">
              <feDropShadow dx="4" dy="5" stdDeviation="4" floodColor="#FF0000" floodOpacity="0.9" />
            </filter>
          </defs>
          <g filter="url(#streetGlowBad)">
            <polygon points="20,38 6,10 12,10 20,24 28,10 34,10" fill="#19D1E6" />
            <circle cx="20" cy="10" r="2.2" fill="#B3CDD7" />
            <text x="44" y="30" fontFamily="Syne, sans-serif" fontSize="18" fontWeight="800" letterSpacing="4" fill="#FFFFFF">
              VÉRTICE
            </text>
          </g>
        </svg>
      </div>
    ),
  },
  {
    id: 'rotation',
    title: 'Rotación & Orientación',
    doText: 'Respetar la orientación horizontal a 0° o vertical en la variante stacked aprobada.',
    dontText: 'No rotar el logotipo en diagonales oblicuas no oficiales ni invertir su orientación.',
    doVisual: (
      <div className="rule-visual-box do-visual">
        <svg viewBox="0 0 160 50" fill="none" className="rule-svg">
          <polygon points="20,38 6,10 12,10 20,24 28,10 34,10" fill="#19D1E6" />
          <circle cx="20" cy="10" r="2.2" fill="#B3CDD7" />
          <text x="44" y="30" fontFamily="Syne, sans-serif" fontSize="18" fontWeight="800" letterSpacing="4" fill="#FFFFFF">
            VÉRTICE
          </text>
        </svg>
      </div>
    ),
    dontVisual: (
      <div className="rule-visual-box dont-visual">
        <svg viewBox="0 0 160 50" fill="none" className="rule-svg">
          <g transform="rotate(-22, 80, 25)">
            <polygon points="20,38 6,10 12,10 20,24 28,10 34,10" fill="#19D1E6" />
            <circle cx="20" cy="10" r="2.2" fill="#B3CDD7" />
            <text x="44" y="30" fontFamily="Syne, sans-serif" fontSize="18" fontWeight="800" letterSpacing="4" fill="#FFFFFF">
              VÉRTICE
            </text>
          </g>
        </svg>
      </div>
    ),
  },
  {
    id: 'backgrounds',
    title: 'Fondos & Legibilidad',
    doText: 'Aplicar sobre fondos lisos de alto contraste (#052A3D, #19D1E6, #614943 o #B3CDD7).',
    dontText: 'No estampar sobre fondos con exceso de ruido fotográfico que dificulten la lectura.',
    doVisual: (
      <div className="rule-visual-box do-visual" style={{ backgroundColor: '#052A3D' }}>
        <svg viewBox="0 0 160 50" fill="none" className="rule-svg">
          <polygon points="20,38 6,10 12,10 20,24 28,10 34,10" fill="#19D1E6" />
          <circle cx="20" cy="10" r="2.2" fill="#B3CDD7" />
          <text x="44" y="30" fontFamily="Syne, sans-serif" fontSize="18" fontWeight="800" letterSpacing="4" fill="#FFFFFF">
            VÉRTICE
          </text>
        </svg>
      </div>
    ),
    dontVisual: (
      <div className="rule-visual-box dont-visual noisy-pattern-box">
        <svg viewBox="0 0 160 50" fill="none" className="rule-svg">
          <polygon points="20,38 6,10 12,10 20,24 28,10 34,10" fill="#052A3D" opacity="0.4" />
          <text x="44" y="30" fontFamily="Syne, sans-serif" fontSize="18" fontWeight="800" letterSpacing="4" fill="#052A3D" opacity="0.4">
            VÉRTICE
          </text>
        </svg>
      </div>
    ),
  },
  {
    id: 'clearspace',
    title: 'Invasión del Perímetro (Clear Space)',
    doText: 'Respetar el área libre de 1.5X alrededor de todo el conjunto del logotipo.',
    dontText: 'No adosar tags ajenos, eslóganes ni gráficos dentro del perímetro de seguridad.',
    doVisual: (
      <div className="rule-visual-box do-visual">
        <div className="safe-boundary-outline">
          <svg viewBox="0 0 160 50" fill="none" className="rule-svg">
            <polygon points="20,38 6,10 12,10 20,24 28,10 34,10" fill="#19D1E6" />
            <circle cx="20" cy="10" r="2.2" fill="#B3CDD7" />
            <text x="44" y="30" fontFamily="Syne, sans-serif" fontSize="18" fontWeight="800" letterSpacing="4" fill="#FFFFFF">
              VÉRTICE
            </text>
          </svg>
        </div>
      </div>
    ),
    dontVisual: (
      <div className="rule-visual-box dont-visual">
        <svg viewBox="0 0 160 50" fill="none" className="rule-svg">
          <polygon points="20,38 6,10 12,10 20,24 28,10 34,10" fill="#19D1E6" />
          <circle cx="20" cy="10" r="2.2" fill="#B3CDD7" />
          <text x="44" y="30" fontFamily="Syne, sans-serif" fontSize="18" fontWeight="800" letterSpacing="4" fill="#FFFFFF">
            VÉRTICE
          </text>
          <text x="20" y="44" fontFamily="Permanent Marker, cursive" fontSize="10" fill="#E65A4B">
            TAG INVADIDO // ERROR
          </text>
        </svg>
      </div>
    ),
  },
];

export default function UsageGuide() {
  const [filter, setFilter] = useState('both');

  return (
    <section id="guia" className="usage-street-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">07 // GUÍA DE USO &amp; NORMATIVA</span>
          <h2 className="section-title">Normas de Aplicación: Do &amp; Don't</h2>
          <p className="section-description">
            Criterios de uso estricto para preservar la autenticidad, la fuerza visual y la consistencia
            de la marca VÉRTICE en cualquier soporte urbano o digital.
          </p>
        </div>

        {/* Barra de filtros */}
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
          <div className="d-flex gap-2">
            <button
              className={`rule-filter-btn ${filter === 'both' ? 'is-active' : ''}`}
              onClick={() => setFilter('both')}
            >
              Comparativa Completa
            </button>
            <button
              className={`rule-filter-btn ${filter === 'do' ? 'is-active' : ''}`}
              onClick={() => setFilter('do')}
            >
              Solo Correcto (Do)
            </button>
            <button
              className={`rule-filter-btn ${filter === 'dont' ? 'is-active' : ''}`}
              onClick={() => setFilter('dont')}
            >
              Solo Incorrecto (Don't)
            </button>
          </div>
          <span className="rules-count-meta">6 REGLAS CANÓNICAS // STREET GUIDELINES</span>
        </div>

        {/* Cuadricula de reglas con Bootstrap Grid */}
        <div className="row g-4">
          {STREET_RULES.map((rule, index) => (
            <div key={rule.id} className="col-12 col-lg-6">
              <div className="rule-comparison-card h-100">
                <div className="rule-top-bar">
                  <span className="rule-index-pill">NORMA 0{index + 1}</span>
                  <h3 className="rule-card-name">{rule.title}</h3>
                </div>

                <div className="row g-3 flex-grow-1">
                  {/* Columna de "DO" */}
                  {(filter === 'both' || filter === 'do') && (
                    <div className={`col-${filter === 'both' ? '6' : '12'}`}>
                      <div className="d-flex flex-column h-100">
                        <div className="status-label status-do mb-2">
                          <span>✓ USO CORRECTO (DO)</span>
                        </div>
                        {rule.doVisual}
                        <p className="rule-explanation-p mt-2">{rule.doText}</p>
                      </div>
                    </div>
                  )}

                  {/* Columna de "DON'T" */}
                  {(filter === 'both' || filter === 'dont') && (
                    <div className={`col-${filter === 'both' ? '6' : '12'}`}>
                      <div className="d-flex flex-column h-100">
                        <div className="status-label status-dont mb-2">
                          <span>✕ INCORRECTO (DON'T)</span>
                        </div>
                        {rule.dontVisual}
                        <p className="rule-explanation-p mt-2">{rule.dontText}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
