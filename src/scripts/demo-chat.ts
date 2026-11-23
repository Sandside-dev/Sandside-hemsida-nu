// Spelar upp exempelsamtalen i chattfönstren ([data-demo-chat]) när de syns.
// Används av Cases.astro.
type Msg = { from: 'user' | 'bot'; text: string };
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

const bubble = (m: Msg) => {
  const p = document.createElement('p');
  p.className =
    'msg-in max-w-[85%] rounded-[14px] px-3.5 py-2.5 text-[14px] leading-[1.45] ' +
    (m.from === 'user' ? 'self-end rounded-br-[4px] bg-ink text-white' : 'self-start rounded-bl-[4px] bg-surface');
  p.textContent = m.text;
  return p;
};
const typing = () => {
  const p = document.createElement('p');
  p.className = 'typing msg-in flex items-center gap-1 self-start rounded-[14px] rounded-bl-[4px] bg-surface px-3.5 py-3.5 text-ink';
  p.innerHTML = '<span></span><span></span><span></span>';
  return p;
};

document.querySelectorAll<HTMLElement>('[data-demo-chat]').forEach((chat) => {
  if (reduce) return; // Visa hela samtalet direkt
  const log = chat.querySelector<HTMLElement>('[data-log]')!;
  const script: Msg[] = JSON.parse(chat.dataset.script || '[]');
  let running = false;
  let visible = false;

  const play = async () => {
    if (running) return;
    running = true;
    while (visible) {
      log.replaceChildren();
      for (const m of script) {
        if (!visible) break;
        if (m.from === 'bot') {
          const t = typing();
          log.append(t);
          await wait(1100);
          t.remove();
        } else {
          await wait(700);
        }
        log.append(bubble(m));
        await wait(m.from === 'bot' ? 1400 : 500);
      }
      await wait(3500);
    }
    running = false;
  };

  new IntersectionObserver(
    ([e]) => {
      visible = e.isIntersecting;
      if (visible) play();
    },
    { threshold: 0.35 },
  ).observe(chat);
});
