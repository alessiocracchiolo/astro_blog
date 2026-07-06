# Rotta ⛵

Blog personale di Alessio Cracchiolo: frammenti di vita, pensieri e idee.

Costruito con [Astro](https://astro.build/) e Tailwind CSS, basato sul tema [AstroPaper](https://github.com/satnaing/astro-paper) (MIT).

## Comandi

Richiede Node.js ≥ 22.12 e [pnpm](https://pnpm.io/).

| Comando        | Azione                                                |
| -------------- | ----------------------------------------------------- |
| `pnpm install` | Installa le dipendenze                                |
| `pnpm dev`     | Avvia il server di sviluppo su `localhost:4321`       |
| `pnpm build`   | Build di produzione in `dist/` (con ricerca Pagefind) |
| `pnpm preview` | Anteprima locale della build                          |
| `pnpm lint`    | Lint del codice                                       |
| `pnpm format`  | Formatta il codice con Prettier                       |

## Scrivere un post

I post vanno in `src/content/posts/` come file `.md` o `.mdx`. Il file `adding-new-post.mdx` è tenuto come riferimento per la sintassi del frontmatter (è in `draft: true`, quindi non viene mai pubblicato).

## Configurazione

Tutto si configura in `astro-paper.config.ts` (titolo, autore, social, funzionalità).

> **Prima del deploy:** sostituire `site.url` (ora un placeholder) con il dominio definitivo.
