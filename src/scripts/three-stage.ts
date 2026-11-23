// Gemensam 3D-scen: kamera, ljus, blanka reflektioner och en renderloop
// som pausar när canvasen inte syns (sparar batteri på mobilen).
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

export const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

type FrameFn = (t: number, dt: number) => void;

export function createStage(canvas: HTMLCanvasElement, { fov = 30, z = 10 } = {}) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 0.95;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.035).texture;
  pmrem.dispose();

  const camera = new THREE.PerspectiveCamera(fov, 1, 0.1, 100);
  camera.position.set(0, 0, z);

  const key = new THREE.DirectionalLight(0xfff0e0, 1.4);
  key.position.set(-4, 6, 6);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xffffff, 0.6);
  rim.position.set(5, -1, -4);
  scene.add(rim);

  const frames: FrameFn[] = [];
  let raf = 0;
  let last = 0;
  let elapsed = 0;

  const render = () => renderer.render(scene, camera);

  const resize = () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    if (!raf) render();
  };
  new ResizeObserver(resize).observe(canvas);

  const loop = (now: number) => {
    raf = requestAnimationFrame(loop);
    const real = (now - last) / 1000;
    const dt = Math.min(real, 0.05);
    last = now;
    elapsed += Math.min(real, 1); // verklig tid, så intro-animationen landar även på långsamma datorer
    for (const f of frames) f(elapsed, dt);
    render();
  };

  const start = () => {
    if (raf || reduceMotion) return;
    last = performance.now();
    raf = requestAnimationFrame(loop);
  };
  const stop = () => {
    cancelAnimationFrame(raf);
    raf = 0;
  };

  new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop())).observe(canvas);

  return {
    scene,
    camera,
    renderer,
    onFrame: (f: FrameFn) => frames.push(f),
    // Visa en stillbild direkt (och för den som valt bort animationer)
    ready: () => {
      resize();
      for (const f of frames) f(reduceMotion ? 3 : 0, 0);
      render();
      canvas.classList.add('is-ready');
    },
  };
}

// Blanka material i sidans färger
export const materials = {
  sun: () =>
    new THREE.MeshPhysicalMaterial({
      color: 0xff6400,
      roughness: 0.35,
      clearcoat: 1,
      clearcoatRoughness: 0.06,
      envMapIntensity: 0.55,
    }),
  white: () =>
    new THREE.MeshPhysicalMaterial({ color: 0xf6f3ee, roughness: 0.16, clearcoat: 1, clearcoatRoughness: 0.05 }),
  black: () =>
    new THREE.MeshPhysicalMaterial({ color: 0x141414, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.05 }),
};

// Följ muspekaren mjukt. Returnerar ett objekt med x/y i intervallet -1..1.
export function pointerFollower(target: HTMLElement | Window = window) {
  const p = { x: 0, y: 0, tx: 0, ty: 0 };
  target.addEventListener('pointermove', (e) => {
    const ev = e as PointerEvent;
    const rect = target instanceof Window ? { left: 0, top: 0, width: innerWidth, height: innerHeight } : target.getBoundingClientRect();
    p.tx = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
    p.ty = ((ev.clientY - rect.top) / rect.height) * 2 - 1;
  });
  if (!(target instanceof Window)) target.addEventListener('pointerleave', () => ((p.tx = 0), (p.ty = 0)));
  return {
    update(dt: number) {
      const k = 1 - Math.exp(-dt * 4);
      p.x += (p.tx - p.x) * k;
      p.y += (p.ty - p.y) * k;
      return p;
    },
  };
}
