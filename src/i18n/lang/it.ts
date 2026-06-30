import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Home",
    posts: "Articoli",
    tags: "Tag",
    about: "Chi sono",
    archives: "Archivio",
    search: "Cerca",
  },
  post: {
    publishedAt: "Pubblicato il",
    updatedAt: "Aggiornato il",
    sharePostIntro: "Condividi questo articolo:",
    sharePostOn: "Condividi questo articolo su {{platform}}",
    sharePostViaEmail: "Condividi questo articolo via email",
    tagLabel: "Tag",
    backToTop: "Torna in cima",
    goBack: "Indietro",
    editPage: "Modifica pagina",
    previousPost: "Articolo precedente",
    nextPost: "Articolo successivo",
  },
  pagination: {
    prev: "Precedente",
    next: "Successivo",
    page: "Pagina",
  },
  home: {
    socialLinks: "Link social",
    featured: "In evidenza",
    recentPosts: "Articoli recenti",
    allPosts: "Tutti gli articoli",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "Tutti i diritti riservati.",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "Tutti gli articoli con il tag",

    tagsTitle: "Tag",
    tagsDesc: "Tutti i tag utilizzati negli articoli.",

    postsTitle: "Articoli",
    postsDesc: "Tutti gli articoli che ho pubblicato.",

    archivesTitle: "Archivio",
    archivesDesc: "Tutti gli articoli archiviati.",

    searchTitle: "Cerca",
    searchDesc: "Cerca un articolo...",
  },
  a11y: {
    skipToContent: "Vai al contenuto",
    openMenu: "Apri menu",
    closeMenu: "Chiudi menu",
    toggleTheme: "Cambia tema",
    searchPlaceholder: "Cerca articoli...",
    noResults: "Nessun risultato trovato",
    goToPreviousPage: "Vai alla pagina precedente",
    goToNextPage: "Vai alla pagina successiva",
  },
  notFound: {
    title: "404 - Pagina non trovata",
    message: "Pagina non trovata",
    goHome: "Torna alla home",
  },
} satisfies UIStrings;