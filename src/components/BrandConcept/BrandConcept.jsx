import React, { useState } from 'react';
import './BrandConcept.css';

const STREET_VALUES = [
  {
    number: '01',
    title: 'Autenticidad Callejera',
    description: 'Nacida en muros de ladrillo y asfalto. Sin poses corporativas: estética pura de guerrilla urbana y graffiti independiente.',
    metric: 'RAW STREET DNA',
  },
  {
    number: '02',
    title: 'Textil Heavyweight',
    description: 'Patronaje oversized y boxy fit con algodones peinados de 340 a 460 GSM, preparados para resistir la fricción de la ciudad.',
    metric: 'HEAVYWEIGHT 460G',
  },
  {
    number: '03',
    title: 'Aerosol & Serigrafía',
    description: 'Tintas inflables, serigrafías al agua y goteos de aerosol real aplicados con precisión industrial en taller.',
    metric: 'SCREENPRINT // NEON',
  },
  {
    number: '04',
    title: 'Tiradas Limitadas',
    description: 'Cápsulas seriadas que rechazan el hiperconsumo. Cada lote lleva sello numerado individual como obra de arte callejera.',
    metric: 'LIMITED DROP // 100',
  },
];

const PERSONALITY_TRAITS = [
  { trait: 'Rebelde & Subversiva', level: '96%', desc: 'Ruptura con las reglas tradicionales de la moda comercial.' },
  { trait: 'Gráfica & Expresiva', level: '92%', desc: 'Uso protagónico del tag, el aerosol y la caligrafía urbana.' },
  { trait: 'Técnica & Funcional', level: '88%', desc: 'Prendas con bolsillos tácticos, costuras reforzadas y durabilidad extrema.' },
  { trait: 'Underground & Auténtica', level: '94%', desc: 'Sintonía directa con la cultura skate, la música urbana y el street art.' },
];

const KEYWORDS = [
  { tag: 'AEROSOL', note: 'Pigmentos y acabados de pintura spray' },
  { tag: 'STENCIL', note: 'Plantillas troqueladas de corte limpio' },
  { tag: 'NEÓN CIAN', note: 'Tono eléctrico #19D1E6 de alta visibilidad' },
  { tag: 'ACID-WASH', note: 'Tratamiento desgastado en algodón pesado' },
  { tag: 'OVERSIZED', note: 'Silueta amplia y hombros caídos' },
  { tag: 'SLAP STICKER', note: 'Pegatinas urbanas troqueladas' },
  { tag: 'LADRILLO ÓXIDO', note: 'Muros urbanos y textura ferruginosa #614943' },
  { tag: 'SERIADO', note: 'Numeración limitada e irrepetible' },
];

export default function BrandConcept() {
  const [activeKeyword, setActiveKeyword] = useState(null);

  return (
    <section id="concepto" className="concept-street-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">01 // MANIFIESTO &amp; CULTURA</span>
          <h2 className="section-title">El Concepto VÉRTICE Streetwear</h2>
          <p className="section-description">
            Una declaración de principios que traslada la energía del graffiti callejero
            y las paredes intervenidas al guardarropa urbano de culto.
          </p>
        </div>

        {/* Historia y propósito utilizando Bootstrap Grid */}
        <div className="row g-4 mb-5">
          <div className="col-12 col-lg-6">
            <article className="street-card h-100 street-card-accent">
              <div className="card-top-meta">
                <span className="meta-index">[CAPÍTULO 01]</span>
                <span className="meta-badge-street">HISTORIA &amp; ORIGEN</span>
              </div>
              <h3 className="card-street-title">
                Del muro de hormigón al taller de confección independiente.
              </h3>
              <p className="card-street-body">
                VÉRTICE nació en 2026 entre botes de aerosol vacíos, bocetos con rotulador Posca y
                paredes rayadas con el arte urbano de la ciudad de Bogotá. Frustrados por
                la ropa de skate genérica y frágil, sus fundadores decidieron construir prendas pesadas
                que funcionan como lienzos urbanos vivientes.
              </p>
              <div className="street-quote-box">
                <span className="quote-spray-mark">“</span>
                <p className="quote-street-text">
                  El asfalto y el graffiti no mienten: creamos indumentaria que lleva el pulso de la calle en cada fibra.
                </p>
              </div>
            </article>
          </div>

          <div className="col-12 col-lg-6">
            <article className="street-card h-100">
              <div className="card-top-meta">
                <span className="meta-index">[CAPÍTULO 02]</span>
                <span className="meta-badge-street">PROPÓSITO &amp; TARGET</span>
              </div>
              <h3 className="card-street-title">
                Prendas underground con logotipos fuera de lo normal.
              </h3>
              <p className="card-street-body">
                Nuestro propósito es romper la monotonía visual del asfalto mediante prendas de
                culto con intervenciones gráficas experimentales y logotipos fuera de lo convencional.
                Buscamos capturar la atención urbana a través de contrastes de color vibrantes,
                proporciones audaces y una confección heavyweight (Ropa ancha)que desafía la moda masiva.
              </p>
              <div className="street-target-box">
                <span className="target-pill-label">PÚBLICO OBJETIVO (STREET COMMUNITY):</span>
                <p className="target-text">
                  Artistas urbanos, skaters, creadores visuales, productores musicales y amantes del
                  streetwear underground que buscan piezas con presencia gráfica rotunda y actitud callejera.
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* Banner de objetivos estratégicos de marca mejorados  */}
        <div className="street-objective-banner mb-5">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-8">
              <span className="objective-tag">OBJETIVO DE LA MARCA // STREETWEAR UNDERGROUND</span>
              <h3 className="objective-headline">
                Capturar la atención urbana con indumentaria rebelde y gráfica disruptiva.
              </h3>
              <p className="objective-paragraph">
                VÉRTICE no busca encajar en el mercado generalista: nuestro objetivo es posicionarnos como
                el referente underground para quienes entienden la ropa como arte de calle. Cada colección
                presenta <strong>logotipos fuera de lo normal</strong>, serigrafías desalineadas con intención,
                detalles en aerosol neón y tipografías chizel que convierten cada prenda en un imán visual en la ciudad.
              </p>
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-lg-end">
              <div className="objective-stat-box">
                <span className="stat-big">100%</span>
                <span className="stat-label">DISEÑO FUERA DE LO CONVENCIONAL</span>
                <span className="stat-sub">Underground Urban Wear</span>
              </div>
            </div>
          </div>
        </div>

        {/* Control deslizante de personalidad utilizando Bootstrap */}
        <div className="personality-panel mb-5">
          <div className="panel-header mb-4">
            <span className="panel-tag">PERFIL DE PERSONALIDAD</span>
            <h4 className="panel-title">Los Rasgos del ADN VÉRTICE</h4>
          </div>

          <div className="row g-4">
            {PERSONALITY_TRAITS.map((item, index) => (
              <div key={index} className="col-12 col-md-6">
                <div className="personality-trait-item">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="trait-name">{item.trait}</span>
                    <span className="trait-level">{item.level}</span>
                  </div>
                  <div className="trait-bar-track">
                    <div className="trait-bar-fill" style={{ width: item.level }} />
                  </div>
                  <p className="trait-desc mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Valores fundamentales de la marca con Bootstrap */}
        <div className="values-block mb-5">
          <div className="panel-header mb-4">
            <span className="panel-tag">PILARES DE MARCA</span>
            <h4 className="panel-title">4 Principios Inmutables</h4>
          </div>

          <div className="row g-4">
            {STREET_VALUES.map((val) => (
              <div key={val.number} className="col-12 col-md-6 col-xl-3">
                <div className="value-street-card h-100">
                  <div className="value-card-top">
                    <span className="value-card-num">{val.number}</span>
                    <span className="value-card-metric">{val.metric}</span>
                  </div>
                  <h5 className="value-card-title">{val.title}</h5>
                  <p className="value-card-desc">{val.description}</p>
                  <div className="value-bottom-glow" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Palabras clave y pegatinas */}
        <div className="keywords-block">
          <div className="panel-header mb-3">
            <span className="panel-tag">GLOSARIO &amp; ETIQUETAS</span>
            <h4 className="panel-title">Vocabulario Streetwear</h4>
          </div>

          <div className="d-flex flex-wrap gap-2">
            {KEYWORDS.map((k, idx) => (
              <button
                key={idx}
                className={`street-keyword-sticker ${activeKeyword === idx ? 'is-active' : ''}`}
                onClick={() => setActiveKeyword(activeKeyword === idx ? null : idx)}
                title={k.note}
              >
                <span className="sticker-bracket">#</span>
                <span className="sticker-text">{k.tag}</span>
                <span className="sticker-tooltip">{k.note}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
