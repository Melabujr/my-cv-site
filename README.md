# my-cv-site – Oláh Márton András

Egyszerű, egyoldalas CV. Rekeszekre bontva, hogy egy-egy részét külön lehessen szerkeszteni.

```
src/layout.html           közös keret (fej, lábléc)
src/sections/             REKESZEK – itt szerkeszd a tartalmat
  01-hero.html
  02-profil.html
  03-tapasztalat.html
  04-tanulmanyok.html
  05-keszsegek.html
  06-versenyek.html
  07-tevekenysegek.html
public/                   ezt publikálja a Firebase (index.html generált, ne kézzel szerkeszd)
build.mjs                 összefűzi a rekeszeket
```

- Sorrend: a fájlnév eleji szám.
- Kikapcsolás törlés nélkül: `_` a fájlnév elé.
- Új sor egy listában: másold le az egyik `<li>`-t.
- Új rekesz: `<section class="sec"><h2 class="kicker">Cím</h2> … </section>`
- Elemek: `.xp` (tapasztalat-kártya), `.edu` (iskola-sor), `.tag-row` (címkesor), `.ach` (verseny), `.act` (tevékenység-sor), `.lvl` (jelvény), `.live` (jelenleg is)

```bash
npm run build      # public/index.html újragenerálása
npm run preview    # build + helyi előnézet
npm run deploy     # build + Firebase
```

## Easter egg

Gépeld be az oldalon: `melabu` – vagy koppints 3× a nevemre. (Apa régi játékosneve: melabu, mélabú → melancholy. Én vagyok a _jr.)
