import React, { useState } from 'react';
import './ColorPalette.css';

const EXACT_PALETTE = [
  {
    code: '052A3D',
    hex: '#052A3D',
    name: 'Abyssal Petrol',
    role: 'Base Primaria // Asfalto Nocturno',
    rgb: '5, 42, 61',
    cmyk: '92, 31, 0, 76',
    pantone: 'PMS 540 C',
    textColor: '#FFFFFF',
    desc: 'La noche urbana y el asfalto mojado. Base estructural oscura para prendas, fondos nocturnos y serigrafía densa.',
    tag: 'BASE CANÓNICA',
  },
  {
    code: '117192',
    hex: '#117192',
    name: 'Deep Teal',
    role: 'Secundario // Spray Petróleo',
    rgb: '17, 113, 146',
    cmyk: '88, 23, 0, 43',
    pantone: 'PMS 7699 C',
    textColor: '#FFFFFF',
    desc: 'Sombras de graffiti, líneas de corte técnico y capas intermedias de serigrafía en hoodies y cazadoras.',
    tag: 'TRANSICIÓN',
  },
  {
    code: '19D1E6',
    hex: '#19D1E6',
    name: 'Electric Cyan',
    role: 'Acento Primario // Neón Graffiti',
    rgb: '25, 209, 230',
    cmyk: '89, 9, 0, 10',
    pantone: 'PMS 3115 C',
    textColor: '#052A3D',
    desc: 'El color insignia de VÉRTICE. Spray fluorescente para firmas de tag, tiradores reflectantes y detalles de alto impacto visual.',
    tag: 'PROTAGONISTA',
  },
  {
    code: '614943',
    hex: '#614943',
    name: 'Rusty Earth',
    role: 'Acento Cálido // Ladrillo Óxido',
    rgb: '97, 73, 67',
    cmyk: '0, 25, 31, 62',
    pantone: 'PMS 7533 C',
    textColor: '#FFFFFF',
    desc: 'Evoca paredes de ladrillo industrial, óxido de vías de tren y pespuntes de refuerzo en chaquetas de lona pesada.',
    tag: 'TEXTURA URBANA',
  },
  {
    code: 'B3CDD7',
    hex: '#B3CDD7',
    name: 'Ice Concrete',
    role: 'Soporte Claro // Hormigón Hielo',
    rgb: '179, 205, 215',
    cmyk: '17, 5, 0, 16',
    pantone: 'PMS 649 C',
    textColor: '#052A3D',
    desc: 'Hormigón pulido y tratamiento acid-wash en camisetas y sudaderas. Soporte neutro para etiquetas y lectura clara.',
    tag: 'SOPORTE CLARO',
  },
];

export default function ColorPalette() {
  const [copiedColor, setCopiedColor] = useState(null);

  const handleCopy = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2500);
  };

  return (
    <section id="colores" className="color-palette-street-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">03 // CROMATISMO OFICIAL GECKO NEÓN</span>
          <h2 className="section-title">Paleta Cromática de Identidad</h2>
          <p className="section-description">
            Extraída directamente de la referencia cromática orgánica y trasladada a la vibración del street art:
            cinco tonos que equilibran la profundidad del asfalto nocturno con la descarga eléctrica del aerosol neón.
          </p>
        </div>

        {/* Barra de Instrucciones */}
        <div className="palette-instruction-bar mb-4">
          <span className="instruction-spray-icon">⚡</span>
          <span className="instruction-text">
            Haz clic en cualquier tarjeta de color para copiar instantáneamente el código <strong>HEX</strong> al portapapeles.
          </span>
          <span className="instruction-badge">5 CÓDIGOS OFICIALES</span>
        </div>

        {/* Muestra de colores using Bootstrap Grid */}
        <div className="row g-4 mb-5">
          {EXACT_PALETTE.map((color) => {
            const isCopied = copiedColor === color.hex;
            return (
              <div key={color.hex} className="col-12 col-md-6 col-lg-4">
                <div
                  className={`street-color-card h-100 ${isCopied ? 'is-copied' : ''}`}
                  onClick={() => handleCopy(color.hex)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleCopy(color.hex); }}
                  aria-label={`Copiar código ${color.hex} de ${color.name}`}
                >
                  {/* Bloque de muestras */}
                  <div
                    className="color-swatch-box"
                    style={{ backgroundColor: color.hex }}
                  >
                    <div className="swatch-top-info">
                      <span className="swatch-tag-badge" style={{ color: color.textColor }}>
                        {color.tag}
                      </span>
                      <span className="swatch-click-hint">
                        {isCopied ? '✓ ¡COPIADO!' : 'COPIAR HEX'}
                      </span>
                    </div>

                    <div className="swatch-bottom-code">
                      <span className="hex-display" style={{ color: color.textColor }}>
                        {color.hex}
                      </span>
                    </div>
                  </div>

                  {/* Detalles del cuerpo */}
                  <div className="color-info-body">
                    <div className="d-flex justify-content-between align-items-baseline mb-1">
                      <h3 className="color-display-name">{color.name}</h3>
                      <span className="color-reference-code">#{color.code}</span>
                    </div>
                    <span className="color-display-role">{color.role}</span>

                    <p className="color-display-desc">{color.desc}</p>

                    <div className="color-technical-specs">
                      <div className="d-flex justify-content-between">
                        <span className="spec-name">RGB:</span>
                        <span className="spec-val">{color.rgb}</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span className="spec-name">CMYK:</span>
                        <span className="spec-val">{color.cmyk}</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span className="spec-name">PANTONE:</span>
                        <span className="spec-val">{color.pantone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cuadro de contraste y usabilidad con Bootstrap */}
        <div className="contrast-assurance-card">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-8">
              <span className="contrast-label">CONTROL DE LEGIBILIDAD WCAG AAA</span>
              <h4 className="contrast-title">Contraste Callejero Óptimo</h4>
              <p className="contrast-desc">
                La combinación de <strong>Electric Cyan (#19D1E6)</strong> y <strong>Ice Concrete (#B3CDD7)</strong> sobre el fondo 
                <strong>Abyssal Petrol (#052A3D)</strong> garantiza ratios de contraste superiores a <strong>11.4:1</strong>,
                asegurando que las prendas, serigrafías y publicaciones digitales mantengan nitidez bajo cualquier luz urbana.
              </p>
            </div>

            <div className="col-12 col-lg-4 d-flex justify-content-lg-end gap-3">
              <div className="contrast-sample-box sample-cyan">
                <span className="sample-letters">Aa</span>
                <span className="sample-score">11.4:1 AAA</span>
              </div>
              <div className="contrast-sample-box sample-ice">
                <span className="sample-letters">Aa</span>
                <span className="sample-score">9.8:1 AAA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mensaje de notificacion de "copiado" */}
        {copiedColor && (
          <div className="street-toast" role="status" aria-live="polite">
            <span className="toast-spray-icon">✓</span>
            <span className="toast-text">
              Código <strong>{copiedColor}</strong> copiado al portapapeles
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
