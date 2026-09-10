import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import BrandConcept from './components/BrandConcept/BrandConcept';
import LogoSection from './components/LogoSection/LogoSection';
import ColorPalette from './components/ColorPalette/ColorPalette';
import Typography from './components/Typography/Typography';
import GraphicElements from './components/GraphicElements/GraphicElements';
import Applications from './components/Applications/Applications';
import UsageGuide from './components/UsageGuide/UsageGuide';
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
  return (
    <div className="brand-book-app">
      {/* 1. Barra de Navegación Fija Y Responsive */}
      <Navbar />

      <main className="brand-book-main">
        {/* 2. Portada Hero Editorial */}
        <Hero />

        {/* 3. Concepto Y Fundamentos de Marca */}
        <BrandConcept />

        {/* 4. Sistema de Logotipo Y Área de Protección */}
        <LogoSection />

        {/* 5. Paleta Cromática Y Copiado de Códigos */}
        <ColorPalette />

        {/* 6. Sistema Tipográfico Y Jerarquías */}
        <Typography />

        {/* 7. Elementos Gráficos Complementarios */}
        <GraphicElements />

        {/* 8. Aplicaciones en Soportes Reales (Mockups) */}
        <Applications />

        {/* 9. Guía de Uso Y Reglas Do / Don't */}
        <UsageGuide />
      </main>

      {/* 10. Footer Minimalista */}
      <Footer />
    </div>
  );
}
