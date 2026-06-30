import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://rotta.com/",
    title: "Rotta",
    description: "Rotta è un blog personale che condivide frammenti di vita, pensieri e idee. Un viaggio attraverso le esperienze quotidiane, le riflessioni e le passioni dell'autore.",
    author: "Alessio Cracchiolo",
    profile: "https://www.instagram.com/alessio44/",
    ogImage: "default-og.jpg",
    lang: "it",
    timezone: "Europe/Rome",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/alessiocracchiolo/astro-blog/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    // { name: "github",   url: "https://github.com/alessiocracchiolo" },  
    // { name: "linkedin", url: "https://www.linkedin.com/in/username/" },
    { name: "mail",     url: "mailto:alessiocracchiolo@hotmail.com" },
    { name: "instagram", url: "https://www.instagram.com/alessio44/" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});