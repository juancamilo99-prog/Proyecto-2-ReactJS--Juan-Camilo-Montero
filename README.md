# AnimeUniVerse

Aplicación React (SPA) que consume la [Jikan API](https://docs.api.jikan.moe/) (API pública y gratuita, wrapper no oficial de MyAnimeList) para buscar, explorar, rankear y guardar como favoritos animes y series.

Proyecto final del máster de React — construido aplicando arquitectura por capas, hooks personalizados, Context API y buenas prácticas de optimización de renders.

## Stack técnico

- **React 18** + **Vite** (bundler y dev server)
- **react-router-dom** — enrutamiento SPA
- **react-hook-form** — manejo del formulario de búsqueda
- **Tailwind CSS v4** — estilos, con design tokens propios vía `@theme`
- **lucide-react** — iconografía
- **Jikan API v4** — fuente de datos de anime (pública, sin API key)

## Cómo correr el proyecto localmente

```bash
npm install
npm run dev

El proyecto esta colgado en vercel en el siguiente link: https://apiuniverse-anime.vercel.app/
```

## Arquitectura del proyecto

El código está organizado por responsabilidad, no por tipo de archivo suelto:

```
src/
├── api/            # Funciones puras de fetch a la Jikan API (sin JSX, sin estado)
│   └── anime.js     # showAllAnimes, searchAnime, topRanking
├── hooks/          # Custom hooks: conectan api/ con estado de React (loading, error, data)
│   ├── useAnime.js
│   └── useAnimeRanking.js
├── context/        # Estado global compartido entre páginas
│   └── FavoritosContext.jsx
├── components/     # Piezas de UI reutilizables, reciben datos por props
│   ├── layout/       # NavBar, Footer (el "marco" de cada página)
│   ├── AnimeCard.jsx
│   ├── RankingRow.jsx
│   ├── SearchBar.jsx
│   └── Hero.jsx
└── pages/          # Una página por ruta, componen hooks + components
    ├── Home.jsx
    ├── Explore.jsx
    ├── TopRated.jsx
    └── Favorites.jsx
```

**Principio de separación aplicado:** `api/` no sabe que React existe; `hooks/` no sabe cómo se ve la UI; `components/` no sabe de dónde vienen sus datos (solo recibe props). Esto permite, por ejemplo, cambiar la fuente de datos de la Jikan API a un backend propio sin tocar ni un componente visual.

## Páginas y rutas

| Ruta | Página | Contenido |
|---|---|---|
| `/` | Home | Hero con título, tagline y stats generales |
| `/explore` | Explore | Buscador (react-hook-form) + grilla de anime, consumo en vivo de la API |
| `/top-rated` | TopRated | Top 3 destacado ("Hall of Fame") + tabla completa de ranking |
| `/favorites` | Favorites | Lista de animes guardados, con stat de score promedio |

## Requisitos del proyecto — checklist

- ✅ **Web full responsive** — grids con breakpoints (`sm`/`md`/`lg`), NavBar con menú hamburguesa en mobile
- ✅ **Arquitectura clara** — separación en `api/` `hooks/` `context/` `components/` `pages/`
- ✅ **4 páginas con react-router-dom** (mínimo pedido: 3)
- ✅ **Estados con sentido** — texto de búsqueda, resultados de la API, favoritos, loading/error, reintentos
- ✅ **useEffect para peticiones** — en `useAnime` y `useAnimeRanking`
- ✅ **API pública** — Jikan API v4
- ✅ **Formulario** — `SearchBar` con `react-hook-form`
- ✅ **Componentes reutilizables** — `AnimeCard`, `RankingRow`, `NavBar`, `Footer`, `SearchBar`
- ✅ **Evitar re-renders innecesarios** — `React.memo` en `AnimeCard`/`RankingRow`; `useCallback` en `toggleFavorite`/`isFavorite`; `useMemo` en el `value` del Context y en cálculos derivados (top 3 del ranking, promedio de score)
- ✅ **Custom hook** — `useAnime`, `useAnimeRanking`, `useFavoritos`
- ✅ **useContext** — `FavoritosContext`, con persistencia en `localStorage`

## Decisiones de diseño destacadas

- **Favoritos persistentes**: se guardan en `localStorage` (inicialización perezosa en el `useState`, sincronizados vía `useEffect`), sobreviven a recargar la página.
- **Manejo de errores de red**: la Jikan API es gratuita y sin garantías de uptime — el error se muestra de forma controlada (mensaje + botón "Reintentar") sin romper el resto de la interfaz ni ocultar los resultados ya cargados.
- **Capa `api/` centralizada**: todas las llamadas a Jikan viven en un único archivo por recurso, facilitando cambiar la URL base o migrar a un backend propio en el futuro.