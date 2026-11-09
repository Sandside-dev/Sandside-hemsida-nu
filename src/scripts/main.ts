// Körs på varje sida: sidhuvud, meny, inglidning och "scramble"-text.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Sidhuvud: vit bakgrund när man har scrollat ─────────────── */
const header = document.querySelector<HTMLElement>('[data-header]');
const onScroll = () => header?.toggleAttribute('data-scrolled', window.scrollY > 24);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ── Meny ────────────────────────────────────────────────────── */
const menuBtn = document.querySelector<HTMLButtonElement>('[data-menu-btn]');
const menu = document.querySelector<HTMLElement>('[data-menu]');

function setMenu(open: boolean) {
  if (!menuBtn || !menu) return;
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Stäng meny' : 'Öppna meny');
  menu.toggleAttribute('data-open', open);
  if (open) menu.querySelectorAll<HTMLElement>('[data-scramble-hover]').forEach((el, i) => setTimeout(() => scramble(el, 500), i * 40));
}

menuBtn?.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
menu?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false));
document.addEventListener('click', (e) => {
  const t = e.target as Node;
  if (menu?.hasAttribute('data-open') && !menu.contains(t) && !menuBtn?.contains(t)) setMenu(false);
});

/* ── Scramble: text som "krypteras" fram ─────────────────────── */
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ0123456789%#*';

export function scramble(el: HTMLElement, duration = 900) {
  const final = (el.dataset.text ??= el.textContent ?? '');
  if (reduceMotion) return;
  const start = performance.now();
  const tick = (now: number) => {
    const p = Math.min(1, (now - start) / duration);
    const shown = Math.floor(p * final.length);
    let out = '';
    for (let i = 0; i < final.length; i++) {
      const c = final[i];
      out += i < shown || c === ' ' || c === '/' ? c : GLYPHS[(Math.random() * GLYPHS.length) | 0];
    }
    el.textContent = out;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

document.querySelectorAll<HTMLElement>('[data-scramble-hover]').forEach((el) => {
  el.dataset.text = el.textContent ?? '';
  el.closest('a')?.addEventListener('mouseenter', () => scramble(el, 420));
});

/* ── Inglidning + scramble när element syns ──────────────────── */
const io = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const el = entry.target as HTMLElement;
      if (el.hasAttribute('data-reveal')) el.classList.add('is-in');
      if (el.hasAttribute('data-scramble')) scramble(el);
      io.unobserve(el);
    }
  },
  { rootMargin: '0px 0px -10% 0px' },
);

document.querySelectorAll<HTMLElement>('[data-reveal], [data-scramble]').forEach((el) => {
  if (el.hasAttribute('data-scramble')) el.dataset.text = el.textContent ?? '';
  io.observe(el);
});
