---
title: Come scrivere un articolo su questo blog
description: Guida pratica alla scrittura di un nuovo post — frontmatter, formattazione, callout e blocchi di codice — spiegata dentro un articolo di esempio.
pubDatetime: 2026-07-06T10:00:00+02:00
featured: false
draft: false
heroImage: ../../assets/images/esempio.svg
heroImageAlt: Una barca a vela stilizzata sul mare al tramonto
tags:
  - guida
  - blog
---

Questo articolo è al tempo stesso una guida e un esempio: leggendolo capisci cosa scrivere, guardando il suo file sorgente vedi _come_ è scritto. Lo trovi in `src/content/posts/come-scrivere-un-articolo.md`.

## Table of contents

## Dove vanno i file

Ogni articolo è un file `.md` (o `.mdx`, se serve importare componenti) dentro la cartella:

```
src/content/posts/
```

Il nome del file diventa l'URL del post: `come-scrivere-un-articolo.md` → `/posts/come-scrivere-un-articolo/`. Usa nomi in minuscolo, con i trattini al posto degli spazi e senza accenti.

I file che iniziano con `_` (underscore) vengono ignorati: utile per appunti o bozze che non vuoi ancora nel sistema.

## Il frontmatter

Il frontmatter è il blocco tra i due `---` in cima al file. Questi sono i campi disponibili:

| Campo         | Obbligatorio | Descrizione                                                     |
| ------------- | ------------ | --------------------------------------------------------------- |
| `title`       | ✅           | Il titolo dell'articolo.                                        |
| `description` | ✅           | Breve riassunto: appare nell'elenco dei post e nei meta tag SEO. |
| `pubDatetime` | ✅           | Data di pubblicazione in formato ISO 8601.                      |
| `modDatetime` | ❌           | Da aggiungere solo quando modifichi un post già pubblicato.     |
| `author`      | ❌           | Se omesso, usa l'autore del sito (Alessio Cracchiolo).          |
| `tags`        | ❌           | Elenco di tag; se omesso, il post finisce in `others`.          |
| `featured`    | ❌           | Con `true` il post appare nella sezione in evidenza della home. |
| `draft`       | ❌           | Con `true` il post è una bozza: visibile in dev, escluso dal sito pubblicato. |
| `ogImage`     | ❌           | Immagine di anteprima per i social (min. 1200×630). Se omessa viene generata automaticamente. |
| `heroImage`   | ❌           | Immagine di intestazione mostrata in cima all'articolo, sotto il titolo (quella che vedi qui sopra). |
| `heroImageAlt`| ❌           | Testo alternativo per la `heroImage`.                          |

Un esempio minimo funzionante:

```yaml
---
title: Il mio nuovo articolo
description: Due righe che riassumono di cosa parla il post.
pubDatetime: 2026-07-06T10:00:00+02:00
tags:
  - pensieri
---
```

> [!tip]
> Finché stai scrivendo, tieni `draft: true`. Quando pubblichi, rimuovilo (o mettilo a `false`) e verifica che `pubDatetime` sia la data giusta.

## L'indice automatico

L'indice che vedi in cima a questo articolo si genera da solo: basta inserire questa riga esatta (in inglese, è la convenzione che il sistema riconosce) nel punto in cui vuoi che appaia:

```md
## Table of contents
```

Tutti i titoli `##` e `###` successivi verranno raccolti automaticamente in un elenco richiudibile.

## Formattazione del testo

Vale il Markdown standard: **grassetto**, _corsivo_, `codice inline`, [link](https://www.markdownguide.org/), elenchi puntati e numerati, citazioni:

> Le citazioni si scrivono così, con `>` a inizio riga.

## Callout

Per i riquadri di avviso c'è una sintassi dedicata:

```md
> [!note]
> Una nota a margine.

> [!warning]
> Qualcosa a cui fare attenzione.
```

Che diventa:

> [!note]
> Una nota a margine.

> [!warning]
> Qualcosa a cui fare attenzione.

Altri tipi disponibili: `tip`, `important`, `caution`.

## Blocchi di codice

I blocchi di codice hanno l'evidenziazione della sintassi (indicando il linguaggio dopo i tre backtick) e alcune annotazioni speciali nei commenti:

- `[!code highlight]` evidenzia una riga
- `[!code ++]` e `[!code --]` mostrano una riga aggiunta o rimossa, come in un diff
- `file="..."` dopo il linguaggio mostra il nome del file

````md
```js file="esempio.js"
const saluto = "ciao"; // [!code --]
const saluto = "buongiorno"; // [!code ++]
console.log(saluto); // [!code highlight]
```
````

Risultato:

```js file="esempio.js"
const saluto = "ciao"; // [!code --]
const saluto = "buongiorno"; // [!code ++]
console.log(saluto); // [!code highlight]
```

## Immagini

Il modo consigliato: metti l'immagine in `src/assets/images/` e richiamala con un percorso relativo rispetto al file del post — verrà ottimizzata automaticamente in fase di build:

```md
![Descrizione dell'immagine](../../assets/images/foto.jpg)
```

In alternativa puoi mettere i file in `public/images/` e usare `/images/foto.jpg`: più semplice, ma senza ottimizzazione.

Ecco un esempio dal vivo — questa immagine si trova in `src/assets/images/esempio.svg` ed è inserita con:

```md
![Una barca a vela stilizzata sul mare al tramonto](../../assets/images/esempio.svg)
```

![Una barca a vela stilizzata sul mare al tramonto](../../assets/images/esempio.svg)

> [!important]
> Scrivi sempre il testo alternativo tra le parentesi quadre: serve a chi usa uno screen reader e ai motori di ricerca.

## Checklist prima di pubblicare

1. Il frontmatter ha `title`, `description` e `pubDatetime` corretti.
2. `draft: true` è stato rimosso.
3. I tag sono coerenti con quelli già usati negli altri post.
4. Le immagini hanno il testo alternativo.
5. Hai riletto il post con `npm run dev` aprendo l'anteprima nel browser.

Buona scrittura! ✍️
