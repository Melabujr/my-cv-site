// Összefűzi a rekeszeket (src/sections/*.html) egyetlen public/index.html-lé.
// Futtatás:  node build.mjs   (vagy: npm run build)
//
// - A rekeszek a fájlnév sorrendjében kerülnek egymás alá (01-, 02-, ...).
// - Az "_" kezdetű fájlok kimaradnak: így egy rekeszt törlés nélkül ki tudsz kapcsolni.
// - Ha egy <section> kap data-nav="Felirat" attribútumot, automatikusan bekerül a menübe.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const dir = join(root, 'src', 'sections');

const files = readdirSync(dir).filter((f) => f.endsWith('.html') && !f.startsWith('_')).sort();
const parts = files.map((f) => {
  const html = readFileSync(join(dir, f), 'utf8').trim();
  return `\n<!-- ===== rekesz: src/sections/${f} ===== -->\n${html}\n`;
});
const sections = parts.join('');

const nav = [...sections.matchAll(/<section[^>]*\bid="([^"]+)"[^>]*\bdata-nav="([^"]+)"/g)]
  .map(([, id, label]) => `        <a href="#${id}">${label}</a>`)
  .join('\n');

const months = ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december'];
const now = new Date();
const updated = `${now.getFullYear()}. ${months[now.getMonth()]}`;

const out = readFileSync(join(root, 'src', 'layout.html'), 'utf8')
  .replace('<!-- @nav -->', nav)
  .replace('<!-- @sections -->', sections)
  .replace('<!-- @updated -->', updated)
  .replace('<!doctype html>', '<!doctype html>\n<!-- GENERÁLT FÁJL – ne ezt szerkeszd! A forrás: src/layout.html és src/sections/*.html, utána: npm run build -->');

writeFileSync(join(root, 'public', 'index.html'), out);
console.log(`✔ public/index.html kész (${files.length} rekesz: ${files.join(', ')})`);
