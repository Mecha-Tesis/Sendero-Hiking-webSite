# SENDERO — Guía de campo de trekking

Sitio bilingüe (ES/EN) de rutas, equipo y seguridad para trekking en Patagonia,
los Andes, Tierra del Fuego y el Norte Argentino. Incluye 10 rutas documentadas
con perfil de elevación, mapa y notas de sendero.

## Stack

- **React 18** + **react-router** (`createBrowserRouter`)
- **Vite 6** como bundler
- **Tailwind CSS 4** con tokens de color en `src/styles/theme.css`
- Componentes de [shadcn/ui](https://ui.shadcn.com/) en `src/app/components/ui/`

## Desarrollo

```bash
npm install
npm run dev     # servidor de desarrollo en http://localhost:5173
npm run build   # build de producción en dist/
```

## Estructura

```
src/
  app/
    pages/        Una página por ruta (Home, Gear, Routes, RouteDetail, Safety…)
    components/   Navigation, Footer, Layout + primitivas de UI
    context/      LanguageContext: traducciones ES/EN y persistencia del idioma
    routes.tsx    Definición del router
  styles/         theme.css (tokens), fonts.css, tailwind.css
```

### Idiomas

Todos los textos viven en `src/app/context/LanguageContext.tsx` o junto al
contenido de cada página, como pares `{ en, es }`. El idioma inicial sigue al
navegador y después se guarda en `localStorage`.

## Deploy

Configurado para **Vercel** mediante `vercel.json`. Al ser una SPA con rutas del
lado del cliente, el rewrite a `/index.html` es necesario para que URLs como
`/routes/1` funcionen al entrar directo o al recargar.

| Opción | Valor |
| --- | --- |
| Build command | `npm run build` |
| Output directory | `dist` |
| Install command | `npm install` |

## Pendientes conocidos

- El alta al newsletter (footer) **no está conectada** a ningún proveedor: valida
  el email y lo informa en pantalla, pero no guarda nada.
- No hay páginas de Privacidad ni Términos, por eso esos enlaces no existen en el
  footer.
- Falta una imagen propia para `og:image` en `index.html`.
- Los enlaces a redes sociales se quitaron hasta que existan las cuentas reales.

## Créditos

Fotografías vía [Unsplash](https://unsplash.com). Mapas © colaboradores de
[OpenStreetMap](https://www.openstreetmap.org/copyright). Ver `ATTRIBUTIONS.md`.
Diseño original partido desde un archivo de Figma Make.
