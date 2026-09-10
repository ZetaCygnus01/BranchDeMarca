# VÉRTICE // Brand Book & Manual de Identidad Visual

Plataforma web interactiva, moderna y minimalista que presenta los lineamientos oficiales de identidad visual de **VÉRTICE**, una marca ficticia e independiente de indumentaria urbana contemporánea con enfoque arquitectónico.

---

## 🚀 Puesta en Marcha

### 1. Instalar dependencias
```bash
npm install
```

### 2. Iniciar el entorno de desarrollo
```bash
npm run dev
```
Abre en tu navegador la URL local indicada (por defecto `http://localhost:5173/`).

### 3. Compilar para producción
```bash
npm run build
```

---

## 🏗️ Estructura del Proyecto

El código respeta estrictamente la separación modular exigida, donde cada componente cuenta con su archivo `.jsx` y su hoja de estilos `.css` dedicada, sin dependencias de Tailwind CSS ni frameworks de diseño preconstruidos:

```
src/
│
├── components/
│   ├── Navbar/              # Navegación fija con anclas y menú hamburguesa móvil
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   │
│   ├── Hero/                # Portada editorial de alto impacto con isotipo animado
│   │   ├── Hero.jsx
│   │   └── Hero.css
│   │
│   ├── BrandConcept/        # Historia, misión, personalidad, valores y palabras clave
│   │   ├── BrandConcept.jsx
│   │   └── BrandConcept.css
│   │
│   ├── LogoSection/         # Sistema de logotipo, variantes claro/oscuro y cotas
│   │   ├── LogoSection.jsx
│   │   └── LogoSection.css
│   │
│   ├── ColorPalette/        # Tarjetas de color interactivas con copiado HEX
│   │   ├── ColorPalette.jsx
│   │   └── ColorPalette.css
│   │
│   ├── Typography/          # Espécimen de Syne, Plus Jakarta Sans y probador en vivo
│   │   ├── Typography.jsx
│   │   └── Typography.css
│   │
│   ├── GraphicElements/     # Retícula de encuadre, patrón textil e iconografía técnica
│   │   ├── GraphicElements.jsx
│   │   └── GraphicElements.css
│   │
│   ├── Applications/        # Mockups vectoriales de camisetas, sudaderas, hangtags, etc.
│   │   ├── Applications.jsx
│   │   └── Applications.css
│   │
│   ├── UsageGuide/          # Guía visual comparativa de buenas prácticas (Do & Don't)
│   │   ├── UsageGuide.jsx
│   │   └── UsageGuide.css
│   │
│   └── Footer/              # Cierre sobrio con metadatos técnicos y navegación rápida
│       ├── Footer.jsx
│       └── Footer.css
│
├── App.jsx                  # Orquestador estructural de componentes
├── App.css                  # Ajustes de flujo y scroll-margin
├── main.jsx                 # Punto de entrada de React 18
└── index.css                # Variables CSS (:root), reset y tipografías globales
```

---

## 🎨 Identidad de Marca: VÉRTICE

- **Concepto:** Confección urbana inspirada en la disciplina arquitectónica y el peso textil honesto.
- **Tagline:** *“Estructura Cruda, Silueta Urbana”*
- **Paleta Cromática:**
  - `Noir Brut` (`#111111`) — Primario oscuro
  - `Crudo Alabastro` (`#F6F5F1`) — Fondo canónico
  - `Terracota Mineral` (`#C85A32`) — Acento táctil
  - `Gris Cemento` (`#8E8D8A`) — Neutro técnico
  - `Verde Sombra` (`#2B352E`) — Utilitario
  - `Arena Cálida` (`#E5E0D8`) — Superficies secundarias
- **Tipografías:** `Syne` (Titulares de moda) + `Plus Jakarta Sans` (Cuerpo de texto) + `Space Mono` (Anotaciones técnicas).

