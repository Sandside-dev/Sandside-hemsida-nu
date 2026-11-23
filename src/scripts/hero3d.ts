// Hero-objektet: en blank sol som går upp bakom tre vågor.
// Byggs i realtid med three.js, så det följer musen och scrollen.
import * as THREE from 'three';
import { createStage, materials, pointerFollower } from './three-stage';

const ease = (t: number) => 1 - Math.pow(1 - Math.min(1, Math.max(0, t)), 3);

function waveCurve(width: number, amp: number, waves: number, phase: number) {
  const pts: THREE.Vector3[] = [];
  const n = 60;
  for (let i = 0; i <= n; i++) {
    const x = -width / 2 + (width * i) / n;
    pts.push(new THREE.Vector3(x, Math.sin((x / width) * Math.PI * 2 * waves + phase) * amp, 0));
  }
  return new THREE.CatmullRomCurve3(pts);
}

function makeWave(material: THREE.Material, width: number, radius: number, amp: number, waves: number, phase: number) {
  const group = new THREE.Group();
  const curve = waveCurve(width, amp, waves, phase);
  group.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 220, radius, 40, false), material));
  // Runda ändar
  const cap = new THREE.SphereGeometry(radius, 40, 24);
  for (const t of [0, 1]) {
    const end = new THREE.Mesh(cap, material);
    end.position.copy(curve.getPoint(t));
    group.add(end);
  }
  return group;
}

export function initHero(canvas: HTMLCanvasElement) {
  const stage = createStage(canvas, { fov: 26, z: 13 });
  const { scene, onFrame } = stage;

  const root = new THREE.Group();
  root.rotation.set(0.22, -0.42, 0);
  root.position.y = -0.05;
  scene.add(root);

  // Solen
  // Solen ligger längre bak än vågorna så att den inte skär igenom den vita linjen.
  // Förra läget: radie 1.35, position (0.25, 0.85, -0.9). Radien är lite större och x justerat för att se lika stor ut och sitta på samma ställe.
  const sun = new THREE.Mesh(new THREE.SphereGeometry(1.45, 96, 64), materials.sun());
  sun.position.set(-0.2, 0.85, -2.0);
  root.add(sun);

  // Vågorna (bak → fram)
  const white = materials.white();
  const black = materials.black();
  const waves = [
    { mesh: makeWave(white, 4.6, 0.24, 0.16, 1.5, 0.0), y: 0.05, z: -0.15, delay: 0.15 },
    { mesh: makeWave(black, 4.2, 0.24, 0.16, 1.5, 1.4), y: -0.62, z: 0.35, delay: 0.3 },
    { mesh: makeWave(white, 3.8, 0.24, 0.16, 1.5, 2.8), y: -1.29, z: 0.85, delay: 0.45 },
  ];
  waves.forEach((w) => root.add(w.mesh));

  // Små detaljer som svävar runt
  const dot1 = new THREE.Mesh(new THREE.SphereGeometry(0.16, 32, 24), black);
  const dot2 = new THREE.Mesh(new THREE.SphereGeometry(0.1, 32, 24), materials.sun());
  root.add(dot1, dot2);

  const pointer = pointerFollower(window);

  onFrame((t, dt) => {
    const p = pointer.update(dt);
    const scroll = Math.min(window.scrollY / 900, 1);

    // Solen går upp
    const rise = ease(t / 1.8);
    sun.position.y = THREE.MathUtils.lerp(-0.7, 0.85, rise) + Math.sin(t * 0.8) * 0.05;
    sun.scale.setScalar(THREE.MathUtils.lerp(0.82, 1, rise));

    // Vågorna glider in och gungar
    waves.forEach((w, i) => {
      const inT = ease((t - w.delay) / 1.4);
      w.mesh.position.x = (1 - inT) * (i % 2 ? 2.4 : -2.4) + Math.sin(t * 0.7 + i * 1.3) * 0.14;
      w.mesh.position.y = w.y + Math.sin(t * 1.1 + i * 0.9) * 0.05;
      w.mesh.position.z = w.z;
      w.mesh.rotation.z = Math.sin(t * 0.6 + i) * 0.025;
    });

    dot1.position.set(-1.95 + Math.sin(t * 0.9) * 0.08, 1.35 + Math.sin(t * 1.3) * 0.12, 0.4);
    dot2.position.set(2.05 + Math.cos(t * 0.8) * 0.1, 1.85 + Math.sin(t * 1.1 + 1) * 0.1, -0.2);
    dot1.scale.setScalar(ease((t - 0.9) / 0.8));
    dot2.scale.setScalar(ease((t - 1.1) / 0.8));

    // Följer musen lite, vrids när man scrollar
    root.rotation.y = -0.42 + p.x * 0.22 + Math.sin(t * 0.25) * 0.06 + scroll * 0.5;
    root.rotation.x = 0.22 + p.y * 0.1 + scroll * 0.15;
  });

  stage.ready();
}
