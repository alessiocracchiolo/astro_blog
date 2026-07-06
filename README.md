# Rotta ⛵

Blog personale di Alessio Cracchiolo: frammenti di vita, pensieri e idee.

**Online su → https://rott4.com**

Costruito con [Astro](https://astro.build/) e Tailwind CSS, basato sul tema [AstroPaper](https://github.com/satnaing/astro-paper) (MIT).

## Comandi

Richiede Node.js ≥ 22.12 e [pnpm](https://pnpm.io/).

| Comando              | Azione                                                 |
| -------------------- | ------------------------------------------------------ |
| `pnpm install`       | Installa le dipendenze                                 |
| `pnpm dev`           | Server di sviluppo su `localhost:4321`                 |
| `pnpm new "Titolo"`  | Crea un nuovo articolo dal template (in bozza)         |
| `pnpm build`         | Build di produzione in `dist/` (con ricerca Pagefind)  |
| `pnpm preview`       | Anteprima locale della build                           |
| `pnpm lint`          | Lint del codice                                        |
| `pnpm format`        | Formatta il codice con Prettier                        |

## Scrivere e pubblicare un articolo

1. **Crea l'articolo**: `pnpm new "Titolo dell'articolo"` — genera un file in `src/content/posts/` a partire da `_template.md`, con data corrente e `draft: true`.
2. **Scrivilo** e controllalo in anteprima con `pnpm dev` (le bozze sono visibili solo in sviluppo).
3. **Pubblica**: togli `draft: true` dal frontmatter, poi committa e pusha su `main`. Il deploy è automatico (vedi sotto), il sito si aggiorna in ~2 minuti.

Il file `adding-new-post.mdx` è tenuto come riferimento per tutta la sintassi del frontmatter (è in `draft: true`, non viene mai pubblicato).

### Immagini

- **Immagini degli articoli** (hero e in-page): mettile in `src/assets/images/` e referenziale con percorso relativo (es. `heroImage: ../../assets/images/foto.jpg`). Astro le ottimizza automaticamente in build.
- **File statici** (favicon, OG image di default): vanno in `public/` e sono copiati così come sono, senza ottimizzazione.
- Buona pratica: ridimensiona le foto a max ~1600px di larghezza prima di caricarle. Il sito pubblicato su GitHub Pages ha un limite (soft) di 1 GB — con immagini ottimizzate non è mai un problema.

## Deploy (GitHub Pages)

Il sito è pubblicato **gratuitamente** su GitHub Pages. Ogni push su `main` fa partire il workflow `.github/workflows/deploy.yml`, che:

1. installa le dipendenze con pnpm;
2. esegue `pnpm build` (include `astro check` e l'indice di ricerca Pagefind);
3. pubblica `dist/` su https://rott4.com

Lo stato dei deploy è visibile nella tab [Actions](https://github.com/alessiocracchiolo/astro_blog/actions) del repo; il workflow si può anche rilanciare a mano da lì (*Run workflow*).

Limiti del piano gratuito (abbondanti per un blog personale): sito pubblicato max 1 GB, banda ~100 GB/mese, ~10 deploy l'ora.

### Dominio custom

Il dominio `rott4.com` è registrato su Cloudflare e punta a GitHub Pages:

- **DNS (Cloudflare)**: record `A` sull'apex verso gli IP di GitHub Pages (185.199.108–111.153) e `CNAME www → alessiocracchiolo.github.io`, entrambi in modalità *DNS only*.
- **GitHub**: *Settings → Pages → Custom domain* = `rott4.com`, con *Enforce HTTPS* attivo.

Il vecchio indirizzo `alessiocracchiolo.github.io/astro_blog` reindirizza automaticamente al dominio custom.

## Configurazione

Tutto si configura in `astro-paper.config.ts`: titolo, descrizione, autore, URL del sito, social, link di condivisione e funzionalità del tema (ricerca, OG image dinamiche, archivi, ecc.).
