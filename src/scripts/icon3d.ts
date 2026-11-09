// 3D-ikonerna på lösningskorten: pratbubblor och en ljudvåg.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { createStage, materials, pointerFollower } from './three-stage';

function bubble(material: THREE.Material, w: number, h: number, tailLeft: boolean) {
  const g = new THREE.Group();
  g.add(new THREE.Mesh(new RoundedBoxGeometry(w, h, 0.5, 8, 0.24), material));
  const tail = new THREE.Mesh(new RoundedBoxGeometry(0.5, 0.5, 0.46, 6, 0.12), material);
  tail.rotation.z = Math.PI / 4;
  tail.scale.set(1, 0.7, 1);
  tail.position.set((tailLeft ? -1 : 1) * (w / 2 - 0.42), -h / 2 + 0.02, 0);
  g.add(tail);
  return g;
}

export function initChatIcon(canvas: HTMLCanvasElement, hoverTarget: HTMLElement) {
  const stage = createStage(canvas, { fov: 28, z: 7.4 });
  const root = new THREE.Group();
  root.rotation.set(0.15, -0.35, 0);
  stage.scene.add(root);

  const softBlack = materials.black();
  softBlack.roughness = 0.4;
  softBlack.clearcoatRoughness = 0.25;
  const back = bubble(softBlack, 2.3, 1.3, false);
  back.position.set(0.75, 0.75, -0.6);
  const front = bubble(materials.white(), 2.6, 1.5, true);
  front.position.set(-0.45, -0.45, 0.3);
  root.add(back, front);

  // Tre prickar som "skriver"
  const dotGeo = new THREE.SphereGeometry(0.15, 32, 24);
  const dots = [materials.sun(), materials.black(), materials.black()].map((m, i) => {
    const d = new THREE.Mesh(dotGeo, m);
    d.position.set(-0.45 + (i - 1) * 0.48, -0.45, 0.62);
    root.add(d);
    return d;
  });

  const pointer = pointerFollower(hoverTarget);
  stage.onFrame((t, dt) => {
    const p = pointer.update(dt);
    dots.forEach((d, i) => (d.position.y = -0.45 + Math.max(0, Math.sin(t * 5 - i * 0.7)) * 0.16));
    front.position.y = -0.45 + Math.sin(t * 1.1) * 0.05;
    back.position.y = 0.75 + Math.sin(t * 1.1 + 1.4) * 0.06;
    root.rotation.y = -0.35 + p.x * 0.35 + Math.sin(t * 0.4) * 0.05;
    root.rotation.x = 0.15 + p.y * 0.2;
  });
  stage.ready();
}

export function initVoiceIcon(canvas: HTMLCanvasElement, hoverTarget: HTMLElement) {
  const stage = createStage(canvas, { fov: 28, z: 7.4 });
  const root = new THREE.Group();
  root.rotation.set(0.12, -0.4, 0);
  stage.scene.add(root);

  const white = materials.white();
  const black = materials.black();
  const sun = materials.sun();
  const base = [0.9, 1.6, 2.3, 2.9, 2.3, 1.6, 0.9];

  const bars = base.map((h, i) => {
    const mat = i === 3 ? sun : i % 2 ? black : white;
    const bar = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 1, 12, 32), mat);
    bar.position.x = (i - 3) * 0.56;
    bar.userData.h = h;
    root.add(bar);
    return bar;
  });

  const pointer = pointerFollower(hoverTarget);
  stage.onFrame((t, dt) => {
    const p = pointer.update(dt);
    bars.forEach((b, i) => {
      const wave = 0.55 + 0.45 * Math.sin(t * 3.2 - i * 0.8) * Math.sin(t * 1.3 + i * 0.4);
      const h = b.userData.h * (0.55 + wave * 0.6);
      b.scale.y = Math.max(0.35, h / 1.4);
    });
    root.rotation.y = -0.4 + p.x * 0.35 + Math.sin(t * 0.4) * 0.05;
    root.rotation.x = 0.12 + p.y * 0.2;
  });
  stage.ready();
}
