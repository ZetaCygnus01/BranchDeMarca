import React, { useState } from 'react';
import './LogoSection.css';

export default function LogoSection() {
  const [activeBg, setActiveBg] = useState('asphalt'); // 'asphalt', 'neon', 'brick', 'concrete'

  // Colores dinámicos para un lienzo interactivo basados en los 5 colores de referencia
  const getStageTheme = () => {
    switch (activeBg) {
      case 'neon':
        return {
          bgClass: 'theme-neon',
          bgColor: '#19D1E6',
          logoFill: '#052A3D',
          dotFill: '#614943',
          textMain: '#052A3D',
          textMuted: '#117192',
          label: 'FONDO NEÓN CIAN (#19D1E6)',
        };
      case 'brick':
        return {
          bgClass: 'theme-brick',
          bgColor: '#614943',
          logoFill: '#19D1E6',
          dotFill: '#B3CDD7',
          textMain: '#FFFFFF',
          textMuted: '#B3CDD7',
          label: 'FONDO LADRILLO ÓXIDO (#614943)',
        };
      case 'concrete':
        return {
          bgClass: 'theme-concrete',
          bgColor: '#B3CDD7',
          logoFill: '#052A3D',
          dotFill: '#19D1E6',
          textMain: '#052A3D',
          textMuted: '#117192',
          label: 'FONDO HORMIGÓN HIELO (#B3CDD7)',
        };
      default:
        return {
          bgClass: 'theme-asphalt',
          bgColor: '#052A3D',
          logoFill: '#19D1E6',
          dotFill: '#B3CDD7',
          textMain: '#FFFFFF',
          textMuted: '#B3CDD7',
          label: 'FONDO ASFALTO NOCTURNO (#052A3D - CANÓNICO)',
        };
    }
  };

  const theme = getStageTheme();

  return (
    <section id="logotipo" className="logo-street-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">02 // CONCEPCIÓN &amp; ELABORACIÓN</span>
          <h2 className="section-title">El Sistema de Logotipo VÉRTICE</h2>
          <p className="section-description">
            Estructurado a partir del ángulo de corte de un rotulador Posca de punta biselada y
            la plantilla stencil de graffiti, el logotipo combina geometría pura con espíritu de intervención callejera.
          </p>
        </div>

        {/* Origen conceptual y estructuración con Bootstrap */}
        <div className="row g-4 mb-5">
          <div className="col-12 col-md-4">
            <div className="concept-step-card h-100">
              <div className="step-badge">FASE 01</div>
              <h4 className="step-title">Concepción Callejera</h4>
              <p className="step-desc">
                Inspirado en los tags angulares de graffiti y las flechas de dirección del asfalto.
                El símbolo nace del encuentro de dos vigas estructurales que convergen en una punta de tensión rebelde.
              </p>
              <div className="step-visual">
                <span className="step-glyph">∠ 45°</span>
                <span className="step-tag-sub">Tensión Axial</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="concept-step-card h-100">
              <div className="step-badge">FASE 02</div>
              <h4 className="step-title">Estructuración Stencil</h4>
              <p className="step-desc">
                Cortes transversales de 3.5mm diseñados para que el logotipo funcione como plantilla de aerosol
                sobre muros y telas, permitiendo el paso limpio de la pintura sin perder su rigidez.
              </p>
              <div className="step-visual">
                <span className="step-glyph">[ = ]</span>
                <span className="step-tag-sub">Puentes Stencil</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="concept-step-card h-100">
              <div className="step-badge">FASE 03</div>
              <h4 className="step-title">Elaboración Vectorial</h4>
              <p className="step-desc">
                Perfeccionamiento con proporciones matemáticas áureas (1:1.618), kerning tipográfico expansivo
                en Syne y un punto axial de color contraste que sella la firma de la marca.
              </p>
              <div className="step-visual">
                <span className="step-glyph">Φ 1.618</span>
                <span className="step-tag-sub">Métrica Canónica</span>
              </div>
            </div>
          </div>
        </div>

        {/* Logo interactivo con Canva */}
        <div className="logo-preview-box mb-5">
          <div className="canvas-toolbar">
            <div className="toolbar-info">
              <span className="toolbar-dot" />
              <span className="toolbar-title">VISUALIZADOR CROMÁTICO EN VIVO:</span>
              <strong className="toolbar-state">{theme.label}</strong>
            </div>

            <div className="toolbar-buttons">
              <button
                className={`theme-btn ${activeBg === 'asphalt' ? 'is-active' : ''}`}
                onClick={() => setActiveBg('asphalt')}
                title="Modo Asfalto #052A3D"
              >
                <span className="swatch-disc" style={{ backgroundColor: '#052A3D' }} />
                <span>Asfalto</span>
              </button>
              <button
                className={`theme-btn ${activeBg === 'neon' ? 'is-active' : ''}`}
                onClick={() => setActiveBg('neon')}
                title="Modo Neón #19D1E6"
              >
                <span className="swatch-disc" style={{ backgroundColor: '#19D1E6' }} />
                <span>Neón</span>
              </button>
              <button
                className={`theme-btn ${activeBg === 'brick' ? 'is-active' : ''}`}
                onClick={() => setActiveBg('brick')}
                title="Modo Ladrillo #614943"
              >
                <span className="swatch-disc" style={{ backgroundColor: '#614943' }} />
                <span>Ladrillo</span>
              </button>
              <button
                className={`theme-btn ${activeBg === 'concrete' ? 'is-active' : ''}`}
                onClick={() => setActiveBg('concrete')}
                title="Modo Hormigón #B3CDD7"
              >
                <span className="swatch-disc" style={{ backgroundColor: '#B3CDD7' }} />
                <span>Hormigón</span>
              </button>
            </div>
          </div>

          {/* Escenario interactivo */}
          <div className={`canvas-stage ${theme.bgClass}`} style={{ backgroundColor: theme.bgColor }}>
            
            <div className="stage-card primary-card">
              <div className="stage-card-meta">
                <span className="v-tag">VERSIÓN 01 // LOGOTIPO HORIZONTAL PRINCIPAL</span>
                <span className="v-pill">USO CANÓNICO EN CABECERAS Y PACKAGING</span>
              </div>
              <div className="svg-display-box">
                <svg viewBox="0 0 400 75" fill="none" className="logo-svg-main">
                  
                  <g transform="translate(10, 8)">
                    <polygon points="32,54 6,12 18,12 32,36 46,12 58,12" fill={theme.logoFill} />
                    <circle cx="32" cy="12" r="3" fill={theme.dotFill} />
                    <path d="M 30,54 Q 32,60 30,64 Q 28,60 30,54" fill={theme.logoFill} />
                  </g>
                  
                  <line x1="82" y1="14" x2="82" y2="60" stroke={theme.textMuted} strokeWidth="1.2" strokeOpacity="0.4" />
                  
                  <text
                    x="102"
                    y="40"
                    fontFamily="Syne, sans-serif"
                    fontSize="28"
                    fontWeight="800"
                    letterSpacing="6"
                    fill={theme.textMain}
                  >
                    VÉRTICE
                  </text>
                  <text
                    x="104"
                    y="55"
                    fontFamily="Space Mono, monospace"
                    fontSize="9"
                    letterSpacing="2.5"
                    fill={theme.textMuted}
                  >
                    STREETWEAR // GRAFFITI LAB
                  </text>
                </svg>
              </div>
            </div>

            {/* Version 2 y 3 en fila */}
            <div className="row g-4 mt-2">
              <div className="col-12 col-lg-7">
                <div className="stage-card h-100">
                  <div className="stage-card-meta">
                    <span className="v-tag">VERSIÓN 02 // STACKED VERTICAL</span>
                    <span className="v-pill">SERIGRAFÍA EN ESPALDA DE HOODIES</span>
                  </div>
                  <div className="svg-display-box py-4">
                    <svg viewBox="0 0 220 140" fill="none" className="logo-svg-stacked">
                      <g transform="translate(80, 10)">
                        <polygon points="30,52 6,12 18,12 30,34 42,12 54,12" fill={theme.logoFill} />
                        <circle cx="30" cy="12" r="3" fill={theme.dotFill} />
                        <path d="M 28,52 Q 30,58 28,62 Q 26,58 28,52" fill={theme.logoFill} />
                      </g>
                      <text
                        x="110"
                        y="98"
                        fontFamily="Syne, sans-serif"
                        fontSize="22"
                        fontWeight="800"
                        letterSpacing="5"
                        textAnchor="middle"
                        fill={theme.textMain}
                      >
                        VÉRTICE
                      </text>
                      <text
                        x="110"
                        y="118"
                        fontFamily="Permanent Marker, cursive"
                        fontSize="12"
                        letterSpacing="2"
                        textAnchor="middle"
                        fill={theme.textMuted}
                      >
                        STREET APPAREL
                      </text>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-5">
                <div className="stage-card h-100">
                  <div className="stage-card-meta">
                    <span className="v-tag">VERSIÓN 03 // ISOTIPO TAG</span>
                    <span className="v-pill">ETIQUETAS &amp; SLAP STICKERS</span>
                  </div>
                  <div className="svg-display-box py-4">
                    <svg viewBox="0 0 120 120" fill="none" className="logo-svg-symbol">
                      <polygon points="60,94 20,24 38,24 60,60 82,24 100,24" fill={theme.logoFill} />
                      <circle cx="60" cy="24" r="4.5" fill={theme.dotFill} />
                      <circle cx="60" cy="24" r="2" fill={theme.bgColor} />
                      <path d="M 57,94 Q 60,104 57,110 Q 54,104 57,94" fill={theme.logoFill} />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Área de protección y tamaños mínimos con Bootstrap */}
        <div className="row g-4">
          {/* Área de protección */}
          <div className="col-12 col-lg-6">
            <div className="specs-street-card h-100">
              <div className="specs-card-top">
                <span className="specs-badge">NORMA 01</span>
                <h4 className="specs-heading">Área de Protección (Clear Space 1.5X)</h4>
              </div>
              <p className="specs-explanation">
                Para salvaguardar el impacto del logotipo frente a tags ajenos, graffitis circundantes
                o estampados adyacentes, debe mantenerse un margen de seguridad libre de <strong>1.5X</strong>
                (donde X equivale al grosor del brazo del vértice).
              </p>

              <div className="protection-street-diagram">
                <div className="diagram-box">
                  <span className="dim-c dim-t">1.5X</span>
                  <span className="dim-c dim-b">1.5X</span>
                  <span className="dim-c dim-l">1.5X</span>
                  <span className="dim-c dim-r">1.5X</span>

                  <svg viewBox="0 0 220 55" fill="none" className="diagram-inner-logo">
                    <polygon points="24,42 8,12 16,12 24,28 32,12 40,12" fill="#19D1E6" />
                    <circle cx="24" cy="12" r="2.2" fill="#B3CDD7" />
                    <text x="52" y="34" fontFamily="Syne, sans-serif" fontSize="18" fontWeight="800" letterSpacing="4" fill="#FFFFFF">
                      VÉRTICE
                    </text>
                  </svg>
                </div>
              </div>

              <span className="specs-footer-note">Cálculo de seguridad modular: 1.5X en los 4 costados</span>
            </div>
          </div>

          {/* Tamaños Mínimos */}
          <div className="col-12 col-lg-6">
            <div className="specs-street-card h-100">
              <div className="specs-card-top">
                <span className="specs-badge">NORMA 02</span>
                <h4 className="specs-heading">Tamaños Mínimos Recomendados</h4>
              </div>
              <p className="specs-explanation">
                Límites de reducción para preservar la legibilidad del corte stencil y la tipografía:
              </p>

              <div className="sizes-grid-list">
                <div className="size-street-item">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="size-context">PANTALLAS &amp; DIGITAL</span>
                    <span className="size-tech">Web, Instagram, apps</span>
                  </div>
                  <div className="d-flex gap-2">
                    <span className="size-chip">Isotipo: <strong>22 × 22 px</strong></span>
                    <span className="size-chip">Logotipo: <strong>105 px ancho</strong></span>
                  </div>
                </div>

                <div className="size-street-item">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="size-context">PEGATINAS &amp; HANGTAGS</span>
                    <span className="size-tech">Stickers troquelados, cartón</span>
                  </div>
                  <div className="d-flex gap-2">
                    <span className="size-chip">Isotipo: <strong>8 mm</strong></span>
                    <span className="size-chip">Logotipo: <strong>26 mm ancho</strong></span>
                  </div>
                </div>

                <div className="size-street-item">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="size-context">SERIGRAFÍA &amp; BORDADO</span>
                    <span className="size-tech">Hoodies, camisetas, gorras</span>
                  </div>
                  <div className="d-flex gap-2">
                    <span className="size-chip">Isotipo: <strong>12 mm</strong></span>
                    <span className="size-chip">Logotipo: <strong>38 mm ancho</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
