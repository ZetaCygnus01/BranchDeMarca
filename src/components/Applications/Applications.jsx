import React, { useState } from 'react';
import './Applications.css';

const CATEGORIES = [
  { id: 'all', label: 'Todas las Aplicaciones' },
  { id: 'apparel', label: 'Prendas (Hoodies & Tees)' },
  { id: 'street', label: 'Street Art & Aerosol' },
  { id: 'packaging', label: 'Packaging & Accesorios' },
  { id: 'digital', label: 'Lookbook & Redes' },
];

export default function Applications() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <section id="aplicaciones" className="applications-street-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">06 // INDUMENTARIA &amp; SOPORTES REALES</span>
          <h2 className="section-title">Prendas Underground &amp; Logotipos Disruptivos</h2>
          <p className="section-description">
            Prendas de estilo underground con logotipos e intervenciones gráficas fuera de lo normal,
            diseñadas para capturar la atención en el entorno urbano mediante serigrafías de alto impacto,
            latas de spray customizadas, etiquetas de taller y estética streetwear de culto.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
          <div className="d-flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`app-filter-pill ${activeCategory === cat.id ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <span className="app-count-tag">7 SOPORTES CALLEJEROS // PALETA GECKO</span>
        </div>

        {/* Maqueta de Cuadricula de productos utilizando Bootstrap Grid */}
        <div className="row g-4">
          {/* 1. Camiseta Boxy Acid Wash */}
          {(activeCategory === 'all' || activeCategory === 'apparel') && (
            <div className="col-12 col-md-6">
              <div className="mockup-street-card h-100">
                <div className="mockup-canvas-stage stage-tee">
                  <svg viewBox="0 0 320 280" className="mockup-vector">
                    <ellipse cx="160" cy="255" rx="100" ry="12" fill="rgba(0,0,0,0.15)" />
                    {/* T-Shirt in Ice Concrete #B3CDD7 */}
                    <path
                      d="M 95,45 C 115,62 140,68 160,68 C 180,68 205,62 225,45 L 290,95 L 255,145 L 225,125 L 225,245 L 95,245 L 95,125 L 65,145 L 30,95 Z"
                      fill="#B3CDD7"
                      stroke="#8AA8B4"
                      strokeWidth="1.8"
                    />
                    {/* Collar */}
                    <path d="M 115,45 C 130,72 190,72 205,45" fill="none" stroke="#8AA8B4" strokeWidth="2.5" />
                    {/* Graffiti Print on Chest */}
                    <g transform="translate(136, 115)">
                      <polygon points="24,38 6,10 14,10 24,24 34,10 42,10" fill="#052A3D" />
                      <circle cx="24" cy="10" r="2.2" fill="#19D1E6" />
                      {/* Gotas */}
                      <path d="M 23,38 Q 24,44 23,48 Q 22,44 23,38" fill="#052A3D" />
                      <text x="24" y="52" fontFamily="Permanent Marker, cursive" fontSize="11" textAnchor="middle" fill="#052A3D">
                        VÉRTICE
                      </text>
                      <text x="24" y="62" fontFamily="Space Mono, monospace" fontSize="4" letterSpacing="1" textAnchor="middle" fill="#117192">
                        ACID WASH // 340 GSM
                      </text>
                    </g>
                  </svg>
                  <span className="stage-zoom-badge">VER PRENDA</span>
                </div>
                <div className="mockup-content-body">
                  <span className="m-category">APPAREL // 01</span>
                  <h3 className="m-title">Camiseta Boxy Acid Wash</h3>
                  <p className="m-desc">
                    Algodón 340 GSM tratado en tono <strong>Ice Concrete (#B3CDD7)</strong> con serigrafía
                    al agua en <strong>Abyssal Petrol (#052A3D)</strong> y tag Posca en <strong>Electric Cyan (#19D1E6)</strong>.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 2. Sudadera Hoodie Noir con Spray Neón */}
          {(activeCategory === 'all' || activeCategory === 'apparel') && (
            <div className="col-12 col-md-6">
              <div className="mockup-street-card h-100">
                <div className="mockup-canvas-stage stage-hoodie">
                  <svg viewBox="0 0 320 280" className="mockup-vector">
                    <ellipse cx="160" cy="255" rx="105" ry="12" fill="rgba(0,0,0,0.2)" />
                    {/* Hoodie in #052A3D */}
                    <path
                      d="M 105,65 C 130,55 190,55 215,65 L 295,115 L 265,165 L 230,140 L 230,245 L 90,245 L 90,140 L 55,165 L 25,115 Z"
                      fill="#052A3D"
                      stroke="#117192"
                      strokeWidth="1.8"
                    />
                    {/* Hood */}
                    <path d="M 115,70 C 120,25 200,25 205,70 C 190,82 130,82 115,70 Z" fill="#031C29" stroke="#117192" strokeWidth="1.5" />
                    {/* Pocket */}
                    <path d="M 115,185 L 205,185 L 218,235 L 102,235 Z" fill="#042333" stroke="#117192" strokeWidth="1.2" />
                    {/* Neon Cyan Spray Graphic */}
                    <g transform="translate(138, 115)">
                      <polygon points="22,34 6,10 13,10 22,23 31,10 38,10" fill="#19D1E6" />
                      <circle cx="22" cy="10" r="2.2" fill="#B3CDD7" />
                      <path d="M 21,34 Q 22,42 21,46 Q 20,42 21,34" fill="#19D1E6" />
                      <text x="22" y="48" fontFamily="Syne, sans-serif" fontSize="10" fontWeight="800" letterSpacing="3" textAnchor="middle" fill="#FFFFFF">
                        VÉRTICE
                      </text>
                    </g>
                    {/* Sleeve text */}
                    <text x="50" y="130" fontFamily="Space Mono, monospace" fontSize="4.5" fill="#19D1E6" transform="rotate(-40, 50, 130)">
                      #19D1E6 // HEAVY 460G
                    </text>
                  </svg>
                  <span className="stage-zoom-badge">VER PRENDA</span>
                </div>
                <div className="mockup-content-body">
                  <span className="m-category">APPAREL // 02</span>
                  <h3 className="m-title">Sudadera Hoodie Abyssal Neón</h3>
                  <p className="m-desc">
                    Felpa francesa de 460 GSM en <strong>Abyssal Petrol (#052A3D)</strong> con serigrafía
                    de alta densidad en <strong>Electric Cyan (#19D1E6)</strong> y detalles de manga en tinta reflectante.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 3. Spray Can Custom VÉRTICE */}
          {(activeCategory === 'all' || activeCategory === 'street') && (
            <div className="col-12 col-md-6">
              <div className="mockup-street-card h-100">
                <div className="mockup-canvas-stage stage-spray">
                  <svg viewBox="0 0 320 280" className="mockup-vector">
                    <ellipse cx="160" cy="245" rx="55" ry="8" fill="rgba(0,0,0,0.2)" />
                    {/* Can body */}
                    <rect x="120" y="75" width="80" height="160" rx="6" fill="#052A3D" stroke="#117192" strokeWidth="2" />
                    {/* Spray Cap */}
                    <rect x="150" y="38" width="20" height="24" rx="2" fill="#B3CDD7" stroke="#8AA8B4" strokeWidth="1" />
                    <rect x="145" y="62" width="30" height="13" rx="2" fill="#614943" />
                    {/* Nozzle hole */}
                    <circle cx="160" cy="48" r="2" fill="#052A3D" />
                    {/* Can Label in Neon Cyan */}
                    <rect x="122" y="105" width="76" height="95" fill="#117192" />
                    <polygon points="160,145 140,118 148,118 160,132 172,118 180,118" fill="#19D1E6" />
                    <circle cx="160" cy="118" r="2" fill="#FFFFFF" />
                    <text x="160" y="162" fontFamily="Syne, sans-serif" fontSize="9" fontWeight="800" letterSpacing="2" textAnchor="middle" fill="#FFFFFF">
                      VÉRTICE
                    </text>
                    <text x="160" y="174" fontFamily="Permanent Marker, cursive" fontSize="6.5" textAnchor="middle" fill="#19D1E6">
                      400ML FAT CAP
                    </text>
                    <text x="160" y="190" fontFamily="Space Mono, monospace" fontSize="4" textAnchor="middle" fill="#B3CDD7">
                      COLOR: #19D1E6 GECKO
                    </text>
                  </svg>
                  <span className="stage-zoom-badge">VER LATA</span>
                </div>
                <div className="mockup-content-body">
                  <span className="m-category">STREET CULTURE // 03</span>
                  <h3 className="m-title">Lata de Aerosol VÉRTICE 400ml</h3>
                  <p className="m-desc">
                    Aerosol de alta presión con boquilla Fat Cap intercambiable para trazos de 12cm.
                    Pintura acrílica mate formulada exactamente en el tono <strong>Electric Cyan (#19D1E6)</strong>.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 4. Hangtag & Slap Sticker Pack */}
          {(activeCategory === 'all' || activeCategory === 'street') && (
            <div className="col-12 col-md-6">
              <div className="mockup-street-card h-100">
                <div className="mockup-canvas-stage stage-hangtag">
                  <svg viewBox="0 0 320 280" className="mockup-vector">
                    {/* String */}
                    <path d="M 160,15 Q 150,55 156,75" stroke="#19D1E6" strokeWidth="1.8" fill="none" />
                    {/* Hangtag Body in #614943 Rusty Earth */}
                    <g transform="translate(100, 70)">
                      <rect x="0" y="0" width="120" height="175" rx="4" fill="#614943" stroke="#876860" strokeWidth="1" />
                      {/* Eyelet */}
                      <circle cx="60" cy="15" r="4" fill="#19D1E6" />
                      <circle cx="60" cy="15" r="2" fill="#052A3D" />
                      {/* Logo on Tag */}
                      <g transform="translate(42, 35)">
                        <polygon points="18,30 4,8 10,8 18,19 26,8 32,8" fill="#19D1E6" />
                        <circle cx="18" cy="8" r="1.8" fill="#FFFFFF" />
                      </g>
                      <text x="60" y="80" fontFamily="Syne, sans-serif" fontSize="13" fontWeight="800" letterSpacing="3" textAnchor="middle" fill="#FFFFFF">
                        VÉRTICE
                      </text>
                      <text x="60" y="94" fontFamily="Permanent Marker, cursive" fontSize="7" textAnchor="middle" fill="#19D1E6">
                        STREETWEAR ARCHIVE
                      </text>
                      <line x1="20" y1="104" x2="100" y2="104" stroke="#876860" strokeWidth="1" />
                      <text x="20" y="120" fontFamily="Space Mono, monospace" fontSize="5" fill="#B3CDD7">
                        COLOR: #052A3D / #19D1E6
                      </text>
                      <text x="20" y="132" fontFamily="Space Mono, monospace" fontSize="5" fill="#B3CDD7">
                        GSM: 460 FRENCH TERRY
                      </text>
                      {/* Barcode */}
                      <g transform="translate(25, 146)">
                        <line x1="0" y1="0" x2="0" y2="12" stroke="#FFFFFF" strokeWidth="1.5" />
                        <line x1="8" y1="0" x2="8" y2="12" stroke="#FFFFFF" strokeWidth="2.5" />
                        <line x1="18" y1="0" x2="18" y2="12" stroke="#FFFFFF" strokeWidth="1" />
                        <line x1="28" y1="0" x2="28" y2="12" stroke="#FFFFFF" strokeWidth="3" />
                        <line x1="42" y1="0" x2="42" y2="12" stroke="#FFFFFF" strokeWidth="1.5" />
                        <line x1="56" y1="0" x2="56" y2="12" stroke="#FFFFFF" strokeWidth="2" />
                        <line x1="70" y1="0" x2="70" y2="12" stroke="#FFFFFF" strokeWidth="3" />
                      </g>
                    </g>
                  </svg>
                  <span className="stage-zoom-badge">VER TAG</span>
                </div>
                <div className="mockup-content-body">
                  <span className="m-category">BRANDING // 04</span>
                  <h3 className="m-title">Hangtag Ladrillo Óxido 600 GSM</h3>
                  <p className="m-desc">
                    Cartón prensado en <strong>Rusty Earth (#614943)</strong> con impresión serigráfica
                    en <strong>Electric Cyan (#19D1E6)</strong> y cordel encerado fluorescente.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 5. Urban Street Tote Bag */}
          {(activeCategory === 'all' || activeCategory === 'packaging') && (
            <div className="col-12 col-md-6">
              <div className="mockup-street-card h-100">
                <div className="mockup-canvas-stage stage-tote">
                  <svg viewBox="0 0 320 280" className="mockup-vector">
                    <ellipse cx="160" cy="256" rx="90" ry="10" fill="rgba(0,0,0,0.15)" />
                    {/* Handles in #052A3D */}
                    <path d="M 120,110 C 120,20 200,20 200,110" fill="none" stroke="#052A3D" strokeWidth="7" strokeLinecap="round" />
                    {/* Body in Ice Concrete #B3CDD7 */}
                    <path d="M 85,100 L 235,100 L 225,245 L 95,245 Z" fill="#B3CDD7" stroke="#8AA8B4" strokeWidth="1.5" />
                    {/* Stitched line */}
                    <line x1="86" y1="114" x2="234" y2="114" stroke="#614943" strokeWidth="1.2" strokeDasharray="3 2" />
                    {/* Big Print */}
                    <g transform="translate(136, 140)">
                      <polygon points="24,40 4,8 14,8 24,24 34,8 44,8" fill="#052A3D" />
                      <circle cx="24" cy="8" r="2.5" fill="#19D1E6" />
                      <text x="24" y="58" fontFamily="Syne, sans-serif" fontSize="13" fontWeight="800" letterSpacing="4" textAnchor="middle" fill="#052A3D">
                        VÉRTICE
                      </text>
                      <text x="24" y="70" fontFamily="Permanent Marker, cursive" fontSize="6.5" textAnchor="middle" fill="#614943">
                        STREETWEAR BAG // BCNA
                      </text>
                    </g>
                  </svg>
                  <span className="stage-zoom-badge">VER TOTE</span>
                </div>
                <div className="mockup-content-body">
                  <span className="m-category">ACCESSORIES // 05</span>
                  <h3 className="m-title">Tote Bag de Lona Pesada 420 GSM</h3>
                  <p className="m-desc">
                    Lona gruesa en <strong>Ice Concrete (#B3CDD7)</strong> con asas en <strong>Abyssal Petrol (#052A3D)</strong> y
                    pespuntes de carga en <strong>Rusty Earth (#614943)</strong>.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 6. Sneaker Box & Street Packaging */}
          {(activeCategory === 'all' || activeCategory === 'packaging') && (
            <div className="col-12 col-md-6">
              <div className="mockup-street-card h-100">
                <div className="mockup-canvas-stage stage-box">
                  <svg viewBox="0 0 320 280" className="mockup-vector">
                    <g transform="translate(45, 55)">
                      <polygon points="115,200 230,135 115,85 0,135" fill="rgba(0,0,0,0.2)" />
                      <polygon points="115,10 220,65 115,120 10,65" fill="#08344C" stroke="#117192" strokeWidth="1.2" />
                      <polygon points="10,65 115,120 115,185 10,130" fill="#052A3D" stroke="#117192" strokeWidth="1.2" />
                      <polygon points="115,120 220,65 220,130 115,185" fill="#031C29" stroke="#117192" strokeWidth="1.2" />
                      {/* Neon tape */}
                      <polygon points="90,22 140,48 140,172 90,146" fill="#19D1E6" />
                      <text x="115" y="90" fontFamily="Space Mono, monospace" fontSize="5" fontWeight="700" fill="#052A3D" transform="rotate(26, 115, 90)">
                        VÉRTICE STREET // SEALED
                      </text>
                    </g>
                  </svg>
                  <span className="stage-zoom-badge">VER CAJA</span>
                </div>
                <div className="mockup-content-body">
                  <span className="m-category">PACKAGING // 06</span>
                  <h3 className="m-title">Caja Postal con Precinto Neón</h3>
                  <p className="m-desc">
                    Caja rígida en <strong>Abyssal Petrol (#052A3D)</strong> con precinto engomado de alta visibilidad
                    en <strong>Electric Cyan (#19D1E6)</strong> inviolable.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 7. Lookbook Social Media Post */}
          {(activeCategory === 'all' || activeCategory === 'digital') && (
            <div className="col-12 col-md-6">
              <div className="mockup-street-card h-100">
                <div className="mockup-canvas-stage stage-social">
                  <div className="street-insta-box">
                    <div className="insta-top">
                      <div className="d-flex align-items-center gap-2">
                        <div className="insta-avatar-icon">V</div>
                        <span className="insta-user">vertice.street</span>
                      </div>
                      <span className="insta-dots">•••</span>
                    </div>
                    <div className="insta-visual-content">
                      <span className="insta-street-tag">CÁPSULA GECKO // DROP 01</span>
                      <h4 className="insta-street-headline">DEL MURO AL TEXTIL</h4>
                      <span className="insta-spec-pill">460 GSM // #19D1E6</span>
                    </div>
                    <div className="insta-bottom">
                      <span className="insta-icons">♡ 💬 ↗</span>
                      <p className="insta-caption-small">
                        <strong>vertice.street</strong> Graffiti real. Siluetas brutales. Confección en taller independiente.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mockup-content-body">
                  <span className="m-category">DIGITAL // 07</span>
                  <h3 className="m-title">Campaña Lookbook Instagram 4:5</h3>
                  <p className="m-desc">
                    Maqueta de publicación digital con encuadre editorial urbano, alto contraste cromático y tono de voz callejero independiente.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
