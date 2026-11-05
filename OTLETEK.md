# Ötletbörze – Oláh Márton András CV-oldala

## 1. Mit csinálnak jól a legjobb oldalak?

| Oldal | Ami működik | Mit veszünk át |
|---|---|---|
| **brittanychiang.com** (frontend fejlesztő) | Egy hosszú oldal, bal oldalt rögzített név + menü, a menü kiemeli, hol tartasz. Tapasztalat idővonalon, minden tételnél címkék. Projektek mérhető eredménnyel („100k+ telepítés”). Skip-link, akadálymentes. Egy játékos easter egg (TARDIS). Lábléc: mivel készült. | Aktív menüpont görgetéskor, címkék a tapasztalatoknál, számok mint bizonyíték, egy személyes „easter egg”, lábléc-kredit, skip-link. |
| **leerob.com** (fejlesztő, író) | Szinte csak szöveg, rövid, közvetlen, első személyű mondatok. Tények dicsekvés nélkül. | Rövid, emberi bemutatkozás; „jelenleg” sor. |
| **Cristina Clerici** (közgazdász, SSE PhD) | Fotó + 3 mondatos bemutatkozás: szerep, terület, végzettség. A CV egy kattintásra. Linkek az intézményekre, így ellenőrizhető. | Linkek a valódi intézményekre (Corvinus, SPM, Makronóm). |
| **Philip Hoxie** (közgazdász, UCSD) | A főoldal tetején a jelenlegi státusz. | „Jelenleg” státuszsor a hero alatt. |
| Útmutatók (Hostinger, VisualCV) | Hallgatónál a teljesítmény és a projektek számítanak, nem a munkaévek. Egy idegen egy perc alatt átlássa. | „Számokban” sáv a hero alatt. |

### Kiemelten: Takáts Bálint CV-je (alfagpt.hu/cv)

**HTML-felépítés.** Angular-alkalmazás, az oldal egymás alatti `<section class="sec">` rekeszekből áll. Mindegyik ugyanazzal kezdődik: egy kicsi, nagybetűs címkével (`<h2 class="kicker">`). Egyetlen keskeny, kb. 860 px-es oszlop.

| Rekesz | Felépítés | Átvesszük? |
|---|---|---|
| Hero | `h1.name` + `p.role` + `nav.contact-row` (pirula alakú linkek: email, GitHub, LinkedIn, Blog) | Igen: kapcsolati sor a hero-ban |
| Profil | Egy bekezdés | Már van (Rólam) |
| Tapasztalat | `article.xp` → `header.xp-head` (logó, szerep + **szintjelvény**, cég, dátum + **„élő” pötty**, helyszín) + `ul.xp-bullets` | Igen: szintjelvény, élő pötty, helyszín |
| Tanulmányok | `div.edu` sorok: logó, iskola, végzettség, évek, **felpörgő átlag** | Igen: soros elrendezés |
| Készségek | `div.tag-row`: kategória + címkék, „Okleveles vibe coder” érem | Az érmet igen; a bizonyítékos csoportjaink maradnak |
| **Szeretek versenyezni** | `div.ach-card.gold / .silver`: helyezés, év, verseny | Igen: Eredmények rekesz arany/ezüst kártyákkal |
| Projektek és tevékenységek | `article.proj-card` + `div.act-row` (év · cím · leírás) lista | Igen: Tevékenységek lista (SPM, Vibe Coding, Moravcsik) |
| Lábléc | Linkek + „Frissítve: 2026. június” | Igen: frissítési dátum |

**A legfontosabb tanulság a te kérésedhez:** minden rekesz önálló egység. Nálad ezért minden rekesz külön fájl lesz (`src/sections/`), és egy kis build script fűzi őket össze `public/index.html`-lé. Egy részt így úgy írsz át, áthelyezel vagy törölsz, hogy a többihez nem nyúlsz.

## 2. Ötletek (mind)

1. **„Számokban” sáv** – 2. hely, csapatarany, 3 emelt érettségi, C1 angol, 1 társszerzős tanulmány. Közgazdásznak a számok a nyelv. Felpörgő számláló.
2. **„Jelenleg” státuszsor** – Corvinus AK · SPM aktív tag · Vibe Coding Class.
3. **SPM** a tapasztalatok közé, linkkel az spmcorvinus.hu-ra.
4. **Szűrhető idővonal** – Közgazdaság / Vendéglátás / Közösség gombok, mert a tapasztalat két nagyon eltérő világból jön.
5. **Címkék minden tapasztalatnál** (Brittany-minta).
6. **Projektek esettanulmányként** – kérdés → amit csináltam → eredmény.
7. **Aktív menüpont görgetéskor** + skip-link.
8. **Koktél easter egg** – a bartender múlt személyes kézjegye: egy gomb random koktélt „kever”.
9. **E-mail másolás gomb** visszajelzéssel.
10. **Világos/sötét mód kapcsoló** (alapból a rendszerét követi).
11. **Finom előtűnés görgetéskor**, `prefers-reduced-motion` tiszteletben tartva.
12. **Nyomtatható nézet** – Ctrl+P-re rendes CV-ként jön ki.
13. **Lábléc-kredit** – „Kódoló ágenssel építve, Firebase-en publikálva.”
14. Angol nyelvű változat (EN/HU kapcsoló).
15. Letölthető PDF CV.
16. GitHub / LinkedIn profilgombok.

## 3. Mit valósítok meg most és miért

- **Most:** 1–13. Ezek a te profilodhoz illenek (számok, két világ, személyes vonás), és egy statikus oldalon jól működnek.
- **Később, tőled kell hozzá valami:**
  - 14: angol szövegek jóváhagyása;
  - 15: a mostani PDF-ben benne van a telefonszámod, a lakcímed és a születési dátumod, ezért nyilvános oldalra előbb egy „tisztított” PDF kell;
  - 16: a GitHub-felhasználóneved és a LinkedIn-linked.
