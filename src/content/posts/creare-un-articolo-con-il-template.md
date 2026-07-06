---
title: Creare un nuovo articolo con il template
description: Come usare il comando `npm run new` per generare un articolo già pronto da compilare, e come personalizzare il template di partenza.
pubDatetime: 2026-07-06T18:00:00+02:00
featured: false
draft: false
tags:
  - guida
  - blog
---

Scrivere un nuovo articolo non richiede di ricordare a memoria il frontmatter o la struttura dei file: c'è un comando che prepara tutto, e a te resta solo la parte divertente — scrivere.

## Table of contents

## Il comando

Dalla cartella del progetto, lancia:

```bash
npm run new -- "Il titolo del mio articolo"
```

Attenzione al `--` doppio trattino prima del titolo: serve a npm per passare il titolo allo script. Il titolo va tra virgolette se contiene spazi (cioè quasi sempre).

Il comando crea il file e ti risponde così:

```
Articolo creato: src/content/posts/il-titolo-del-mio-articolo.md
URL: /posts/il-titolo-del-mio-articolo/
Ricorda: è una bozza (draft: true), visibile solo con npm run dev.
```

Il nome del file (e quindi l'URL) viene ricavato automaticamente dal titolo: minuscole, trattini al posto degli spazi, accenti e apostrofi rimossi. `"Perché è così"` diventa `perche-e-cosi.md`.

Se esiste già un articolo con lo stesso nome, il comando si ferma senza sovrascrivere nulla.

## Cosa trovi nel file generato

Il file arriva con il frontmatter già compilato:

- `title` — il titolo che hai passato al comando
- `pubDatetime` — la data e ora di adesso, nel formato giusto
- `draft: true` — l'articolo è una bozza: lo vedi in anteprima con `npm run dev`, ma non finisce sul sito pubblicato
- `tags` — un tag generico `others`, da sostituire con i tuoi

E alcune opzioni pronte ma disattivate (commentate con `#`), da attivare togliendo il cancelletto:

```yaml
# heroImage: ../../assets/images/nome-immagine.jpg
# heroImageAlt: Descrizione dell'immagine di intestazione
# featured: true
```

Sotto il frontmatter c'è una struttura di partenza: un paragrafo di introduzione, l'indice automatico e un paio di sezioni segnaposto da riempire o eliminare.

## Il flusso di lavoro

1. `npm run new -- "Titolo"` per creare l'articolo.
2. Apri il file e scrivi, tenendo `npm run dev` aperto per vedere l'anteprima nel browser.
3. Sistema `description` e `tags` nel frontmatter.
4. Quando è pronto, togli `draft: true` (o mettilo a `false`).
5. Commit e push: l'articolo va online.

> [!tip]
> Per tutto quello che puoi scrivere _dentro_ l'articolo — formattazione, callout, blocchi di codice, immagini — c'è la guida dedicata: [Come scrivere un articolo su questo blog](/posts/come-scrivere-un-articolo/).

## Personalizzare il template

Il file generato è una copia di `src/content/posts/_template.md`. Siccome inizia con underscore, il sistema lo ignora: non apparirà mai sul blog.

Se vuoi che i futuri articoli partano con una struttura diversa — altre sezioni, tag predefiniti diversi, una frase di chiusura fissa — modifica direttamente quel file. Le uniche parti da non toccare sono i segnaposto `{{TITLE}}` e `{{DATE}}`, che il comando sostituisce con il titolo e la data.

Buona scrittura! ✍️
