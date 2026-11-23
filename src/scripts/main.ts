// Gemensamt för alla sidor: inglidning och texten som "scramblar" fram.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ── Scramble ──────────────────────────────────────────────
const CHARS = 'abcdefghijklmnopqrstuvwxyz0123456789/';
const running = new WeakMap<HTMLElement, number>();

function scramble(el: HTMLElement, trim = true) {
  if (reduce) return;
  const final = el.dataset.text ?? el.textContent ?? '';
  el.dataset.text = final;
  cancelAnimationFrame(running.get(el) ?? 0);
  const start = performance.now();
  const duration = Math.min(900, 280 + final.length * 32);

  const frame = (now: number) => {
    const p = Math.min(1, (now - start) / duration);
    const done = Math.floor(final.length * p);
    let out = final.slice(0, done);
    for (let i = done; i < final.length; i++) {
      const c = final[i];
      out += c === ' ' || c === '/' || c === '·' ? c : CHARS[(Math.random() * CHARS.length) | 0];
    }
    el.textContent = p < 1 ? (trim ? out.slice(0, Math.max(done + 6, 1)) + '|' : out) : final;
    if (p < 1) running.set(el, requestAnimationFrame(frame));
  };
  running.set(el, requestAnimationFrame(frame));
}

// ── Inglidning ────────────────────────────────────────────
const revealEls = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];

if (reduce || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('is-in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        el.classList.add('is-in');
        el.querySelectorAll<HTMLElement>('[data-scramble]').forEach(scramble);
        if (el.hasAttribute('data-scramble')) scramble(el);
        io.unobserve(el);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  revealEls.forEach((el) => io.observe(el));

  // Scramble-text som inte ligger i ett data-reveal-element (t.ex. i sidfoten)
  const loose = [...document.querySelectorAll<HTMLElement>('[data-scramble]')].filter((el) => !el.closest('[data-reveal]'));
  const io2 = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        scramble(e.target as HTMLElement);
        io2.unobserve(e.target);
      }
    },
    { threshold: 0.5 },
  );
  loose.forEach((el) => io2.observe(el));
}

// Menylänkarna scramblar när man håller musen över dem
document.querySelectorAll<HTMLElement>('[data-scramble-hover]').forEach((el) => {
  el.addEventListener('mouseenter', () => scramble(el, false));
});
