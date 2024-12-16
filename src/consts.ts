// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "Team Scrum Ninja";
export const SITE_TITLE = "Gestión de Biblioteca";
export const SITE_DESCRIPTION = "Proyecto para el curso de Ingeniería de Software";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "Team Scrum Ninja - Todas las etiquetas";
export const Tags_DESCRIPTION = "Team Scrum Ninja - todas las etiquetas y el recuento de artículos relacionados con cada etiqueta";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `Todos los artículos sobre la etiqueta '${tag}' en Team Scrum Ninja`,
    description: `Explore artículos sobre ${tag} para conocer diferentes perspectivas y análisis en profundidad.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `Todos los artículos de '${category}' categoría en TeamScrumNinja`,
    description: `Explore todos los artículos de la categoría ${category} en TeamScrumNinja`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  /*{ href: "/category/inicio/1/", title: "Inicio del proyecto" },*/
  { href: "/category/sprint1/1/", title: "Sprint 1" },
  { href: "/category/sprint2/1/", title: "Sprint 2" },
  { href: "/category/xp/1/", title: "XP" },
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  /*{ href: "/posts/why-astro/", title: "Astro" },*/
  /*{ href: "/posts/tailwind-typography/", title: "Tailwind" },*/
  { href: "/tags/", title: "Tags" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
  {
    href: "https://twitter.com/astrodotbuild",
    icon: "tabler:brand-twitter",
    label: "Twitter",
  },
  {
    href: "https://github.com/Santrax211/BLOG-VIERNES.git",
    icon: "tabler:brand-github",
    label: "GitHub",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Site Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;
