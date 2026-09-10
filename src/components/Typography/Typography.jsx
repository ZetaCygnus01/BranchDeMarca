import React, { useState } from 'react';
import './Typography.css';

const STREET_TYPEFACES = [
  {
    id: 'permanent',
    name: 'Permanent Marker',
    role: 'Tipografía de Tag // Graffiti & Street Art',
    designer: 'Font Diner',
    weights: ['Regular 400 (Chisel Tip Look)'],
    usage: 'Tags de aerosol, sellos de taller, caligrafía libre sobre muros y estampados rebeldes.',
    fontFamily: 'Permanent Marker, cursive',
    sampleAlphabet: 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
    sampleNumbers: '0123456789 /* # ! ?',
  },
  {
    id: 'syne',
    name: 'Syne',
    role: 'Display Heavy // Titulares Streetwear',
    designer: 'Lucas Le Bihan (Bonjour Monde)',
    weights: ['Bold 700', 'Extra Bold 800'],
    usage: 'Titulares de alto impacto, logotipo principal, portadas de lookbook y serigrafías monumentales.',
    fontFamily: 'Syne, sans-serif',
    sampleAlphabet: 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
    sampleNumbers: '0123456789 & @ # %',
  },
  {
    id: 'jakarta',
    name: 'Plus Jakarta Sans',
    role: 'Tipografía Secundaria // Lectura & UI',
    designer: 'Gumpita Rahayu (Tokotype)',
    weights: ['Regular 400', 'Medium 500', 'SemiBold 600'],
    usage: 'Cuerpo de texto, manifiestos de marca, fichas de producto, subtítulos e interfaz web.',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    sampleAlphabet: 'abcdefghijklmnñopqrstuvwxyz',
    sampleNumbers: '0123456789 (.,;:!?/\\)',
  },
  {
    id: 'spacemono',
    name: 'Space Mono',
    role: 'Tipografía Técnica // Fichas & Metadatos',
    designer: 'Colophon Foundry',
    weights: ['Regular 400', 'Bold 700'],
    usage: 'Códigos de lote, gramajes textiles, coordenadas de corte y etiquetas de composición.',
    fontFamily: 'Space Mono, monospace',
    sampleAlphabet: 'A B C D E F G H I J K L M N 0 1 2 3',
    sampleNumbers: '[SPEC-01] // 460-GSM // #19D1E6',
  },
];

const HIERARCHY_EXAMPLES = [
  {
    tag: 'TAG GRAFFITI // FIRMA CALLEJERA',
    family: 'Permanent Marker',
    weight: 'Regular 400',
    size: '42px / 1.1',
    text: 'Del Muro al Textil // Vértice Street Lab',
    className: 'hierarchy-tag-style',
  },
  {
    tag: 'H1 // DISPLAY HERO STREETWEAR',
    family: 'Syne',
    weight: '800 ExtraBold',
    size: '52px / 1.05',
    text: 'Estructuras habitables nacidas en el asfalto contemporáneo.',
    className: 'hierarchy-h1-street',
  },
  {
    tag: 'H2 // SUBTÍTULO EDITORIAL',
    family: 'Plus Jakarta Sans',
    weight: '600 SemiBold',
    size: '22px / 1.4',
    text: 'Prendas con peso estructurado confeccionadas en algodón crudo y acid wash.',
    className: 'hierarchy-h2-street',
  },
  {
    tag: 'BODY // TEXTO CORRIDO',
    family: 'Plus Jakarta Sans',
    weight: '400 Regular',
    size: '15px / 1.65',
    text: 'El sistema tipográfico de VÉRTICE celebra la tensión entre la contundencia de la letra de aerosol y la disciplina suiza. Cada titular irradia actitud urbana sin comprometer la pureza del diseño moderno.',
    className: 'hierarchy-body-street',
  },
  {
    tag: 'CAPTION // MICROCOPY TÉCNICO',
    family: 'Space Mono',
    weight: '700 Bold',
    size: '11px / 1.5',
    text: 'LOTE: VT-2026-STREET // COLOR: #19D1E6 NEÓN // HEAVYWEIGHT 460 GSM // CÓDIGO GECKO',
    className: 'hierarchy-caption-street',
  },
];

export default function Typography() {
  const [testText, setTestText] = useState('VÉRTICE STREETWEAR // GRAFFITI LAB');
  const [fontSize, setFontSize] = useState(44);

  return (
    <section id="tipografia" className="typography-street-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">04 // SISTEMA TIPOGRÁFICO URBANO</span>
          <h2 className="section-title">Tipografía &amp; Caligrafía de Calle</h2>
          <p className="section-description">
            Fusión tipográfica que une la espontaneidad del trazo de rotulador Posca con la
            monumentalidad pesada de Syne y el rigor métrico de Space Mono.
          </p>
        </div>

        {/* Tajertas tipograficas con Bootstrap Grid */}
        <div className="row g-4 mb-5">
          {STREET_TYPEFACES.map((tf) => (
            <div key={tf.id} className="col-12 col-md-6 col-lg-3">
              <div className="typeface-street-card h-100">
                <div className="typeface-top-meta">
                  <span className="tf-role">{tf.role}</span>
                  <h3 className="tf-name" style={{ fontFamily: tf.fontFamily }}>
                    {tf.name}
                  </h3>
                  <span className="tf-designer">Diseño por {tf.designer}</span>
                </div>

                <div className="tf-weights-box mb-3">
                  <span className="tf-w-label">PESOS REGLAMENTARIOS:</span>
                  <div className="d-flex flex-wrap gap-1">
                    {tf.weights.map((w, idx) => (
                      <span key={idx} className="tf-weight-badge">{w}</span>
                    ))}
                  </div>
                </div>

                <p className="tf-usage-text mb-4">{tf.usage}</p>

                <div className="tf-specimen-display mt-auto" style={{ fontFamily: tf.fontFamily }}>
                  <div className="specimen-top">{tf.sampleAlphabet}</div>
                  <div className="specimen-bottom">{tf.sampleNumbers}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Probador interactivo de estilos de letra */}
        <div className="type-tester-street-box mb-5">
          <div className="row g-3 align-items-center mb-4 pb-3 tester-controls-row">
            <div className="col-12 col-md-8">
              <label htmlFor="street-tester-input" className="tester-field-label">
                PROBADOR INTERACTIVO EN VIVO:
              </label>
              <input
                id="street-tester-input"
                type="text"
                className="street-tester-input"
                value={testText}
                onChange={(e) => setTestText(e.target.value)}
                placeholder="Escribe para probar..."
              />
            </div>
            <div className="col-12 col-md-4">
              <div className="d-flex justify-content-between mb-1">
                <span className="tester-field-label">TAMAÑO:</span>
                <span className="tester-size-val">{fontSize}px</span>
              </div>
              <input
                type="range"
                min="20"
                max="76"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="street-range-slider"
              />
            </div>
          </div>

          <div
            className="tester-live-render"
            style={{ fontSize: `${fontSize}px` }}
          >
            {testText || 'VÉRTICE STREETWEAR'}
          </div>
        </div>

        <div className="hierarchy-street-panel">
          <div className="panel-header mb-4">
            <span className="panel-tag">JERARQUÍA CANÓNICA</span>
            <h3 className="panel-title">Escala y Aplicación de Fuentes</h3>
          </div>

          <div className="hierarchy-list-stack">
            {HIERARCHY_EXAMPLES.map((item, idx) => (
              <div key={idx} className="hierarchy-item-row">
                <div className="hierarchy-meta-col">
                  <span className="item-tag">{item.tag}</span>
                  <div className="item-specs-strip">
                    <span>{item.family}</span>
                    <span className="spec-dot">·</span>
                    <span>{item.weight}</span>
                    <span className="spec-dot">·</span>
                    <span className="spec-size">{item.size}</span>
                  </div>
                </div>

                <div className={`hierarchy-text-col ${item.className}`}>
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
