/* ===== Easter egg: melabu_jr =====
   Apa régi online játékosneve: melabu (mélabú → melancholy). Én vagyok a _jr.
   Indítás: gépeld be bárhol, hogy "melabu", vagy koppints 3× gyorsan a nevemre.
*/
(() => {
  let opened = false;
  const show = () => {
    if (opened) return;
    opened = true;
    const o = document.createElement('div');
    o.className = 'arcade';
    o.setAttribute('role', 'dialog');
    o.setAttribute('aria-modal', 'true');
    o.setAttribute('aria-label', 'melabu_jr');
    o.innerHTML = `
      <div class="arcade__screen">
        <p class="arcade__blink">PLAYER 2 HAS JOINED</p>
        <h2 class="arcade__name">melabu<span>_jr</span></h2>
        <p class="arcade__hint">mélabú · /ˈmeːlɒbuː/ · <em>melancholy</em></p>
        <p class="arcade__story">Apukám régi online játékosneve <b>melabu</b> volt. Én vagyok a folytatás: <b>_jr</b>.</p>
        <dl class="arcade__stats">
          <div><dt>LEVEL</dt><dd>1. év</dd></div>
          <div><dt>HI-SCORE</dt><dd>2. hely</dd></div>
          <div><dt>TEAM</dt><dd>arany</dd></div>
        </dl>
        <button type="button" class="arcade__btn">PRESS START ▸</button>
      </div>`;
    const close = () => { o.classList.add('is-out'); setTimeout(() => { o.remove(); opened = false; }, 250); document.removeEventListener('keydown', onEsc); };
    const onEsc = (e) => { if (e.key === 'Escape') close(); };
    o.addEventListener('click', (e) => { if (e.target === o || e.target.closest('.arcade__btn')) close(); });
    document.addEventListener('keydown', onEsc);
    document.body.appendChild(o);
    o.querySelector('.arcade__btn').focus();
  };

  // Gépelés: "melabu"
  const code = 'melabu';
  let buf = '';
  document.addEventListener('keydown', (e) => {
    if ((e.target instanceof Element && e.target.closest('input, textarea, [contenteditable]')) || e.key.length !== 1 || e.metaKey || e.ctrlKey) return;
    buf = (buf + e.key.toLowerCase()).slice(-code.length);
    if (buf === code) { buf = ''; show(); }
  });

  // Mobilon: 3 gyors koppintás a névre
  let taps = [];
  document.querySelector('h1')?.addEventListener('click', (e) => {
    const now = Date.now();
    taps = taps.filter((t) => now - t < 800).concat(now);
    if (taps.length >= 3) { e.preventDefault(); taps = []; show(); }
  });

  // Kíváncsi fejlesztőknek
  console.log('%c▶ psst… gépeld be az oldalon: melabu', 'font: 600 13px monospace; color: #c9a227');
})();

/* Világos / sötét mód */
document.getElementById('themeToggle')?.addEventListener('click', () => {
  const root = document.documentElement;
  const cur = root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const next = cur === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});
