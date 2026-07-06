#!/usr/bin/env node
/**
 * Crea un nuovo articolo a partire dal template.
 * Uso: npm run new -- "Titolo dell'articolo"
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import slugify from "slugify";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const postsDir = resolve(root, "src/content/posts");
const templatePath = resolve(postsDir, "_template.md");

const title = process.argv.slice(2).join(" ").trim();

if (!title) {
  console.error('Uso: npm run new -- "Titolo dell\'articolo"');
  process.exit(1);
}

const slug = slugify(title, { lower: true, strict: true, locale: "it" });
const filePath = resolve(postsDir, `${slug}.md`);

if (existsSync(filePath)) {
  console.error(`Esiste già un articolo con questo nome: ${filePath}`);
  process.exit(1);
}

// Data ISO 8601 con il fuso orario locale (es. 2026-07-06T18:30:00+02:00)
const now = new Date();
const pad = n => String(Math.abs(n)).padStart(2, "0");
const offsetMin = -now.getTimezoneOffset();
const offset = `${offsetMin >= 0 ? "+" : "-"}${pad(offsetMin / 60 | 0)}:${pad(offsetMin % 60)}`;
const date = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}:00${offset}`;

const content = readFileSync(templatePath, "utf8")
  .replace("{{TITLE}}", title)
  .replace("{{DATE}}", date);

writeFileSync(filePath, content);

console.log(`Articolo creato: src/content/posts/${slug}.md`);
console.log(`URL: /posts/${slug}/`);
console.log("Ricorda: è una bozza (draft: true), visibile solo con npm run dev.");
