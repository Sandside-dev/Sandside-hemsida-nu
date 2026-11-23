// 3D-ikonerna på korten under "Vår chattbot": vita former med svarta konturer.
// Pratbubblan (svarar dygnet runt) och pappersplanet (skickar vidare till er).
import * as THREE from 'three';
import { createStage, pointerFollower } from './three-stage';

const EDGE = new THREE.LineBasicMaterial({ color: 0x1f1f1f });

const faceMaterial = (color = 0xffffff) =>
  new THREE.MeshStandardMaterial({ color, roughness: 0.85, metalness: 0, envMapIntensity: 0.45 });

// Extra ljus framifrån-ovan, så att framsidan blir vit och sidorna gråa
function addLight(scene: THREE.Scene) {
  const front = new THREE.DirectionalLight(0xffffff, 1.6);
  front.position.set(1.5, 3, 8);
  scene.add(front);
  scene.add(new THREE.AmbientLight(0xffffff, 0.25));
}

// En form med svart kontur runt kanterna, som en ritning i 3D
function outlined(geo: THREE.BufferGeometry, material: THREE.Material = faceMaterial()) {
  const g = new THREE.Group();
  g.add(new THREE.Mesh(geo, material));
  g.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo, 28), EDGE));
  return g;
}

function bubbleShape(w: number, h: number, r: number) {
  const s = new THREE.Shape();
  const x0 = -w / 2;
  const x1 = w / 2;
  const y0 = -h / 2;
  const y1 = h / 2;
  s.moveTo(x0 + r, y1);
  s.lineTo(x1 - r, y1);
  s.quadraticCurveTo(x1, y1, x1, y1 - r);
  s.lineTo(x1, y0 + r);
  s.quadraticCurveTo(x1, y0, x1 - r, y0);
  // Svansen nere till vänster
  s.lineTo(x0 + r + 0.95, y0);
  s.lineTo(x0 + 0.3, y0 - 0.62);
  s.lineTo(x0 + r + 0.2, y0);
  s.quadraticCurveTo(x0, y0, x0, y0 + r);
  s.lineTo(x0, y1 - r);
  s.quadraticCurveTo(x0, y1, x0 + r, y1);
  return s;
}

export function initBubbleIcon(canvas: HTMLCanvasElement, hoverTarget: HTMLElement) {
  const stage = createStage(canvas, { fov: 28, z: 7.6 });
  addLight(stage.scene);
  const root = new THREE.Group();
  root.rotation.set(0.42, -0.62, 0.05);
  stage.scene.add(root);

  const depth = 0.8;
  const geo = new THREE.ExtrudeGeometry(bubbleShape(3.3, 2.1, 0.62), {
    depth,
    bevelEnabled: false,
    curveSegments: 20,
  });
  geo.translate(0, 0, -depth / 2);
  const bubble = outlined(geo);
  root.add(bubble);

  // Tre prickar som "skriver", den första orange
  const dotGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.24, 40);
  dotGeo.rotateX(Math.PI / 2);
  const dots = [0xff6a13, 0xffffff, 0xffffff].map((c, i) => {
    const d = outlined(dotGeo, faceMaterial(c));
    d.position.set((i - 1) * 0.72, 0, depth / 2 + 0.12);
    bubble.add(d);
    return d;
  });

  const pointer = pointerFollower(hoverTarget);
  stage.onFrame((t, dt) => {
    const p = pointer.update(dt);
    dots.forEach((d, i) => (d.position.z = depth / 2 + 0.12 + Math.max(0, Math.sin(t * 4.2 - i * 0.75)) * 0.32));
    bubble.position.y = Math.sin(t * 1.1) * 0.08;
    root.rotation.y = -0.62 + p.x * 0.35 + Math.sin(t * 0.45) * 0.07;
    root.rotation.x = 0.42 + p.y * 0.18;
  });
  stage.ready();
}

export function initPlaneIcon(canvas: HTMLCanvasElement, hoverTarget: HTMLElement) {
  const stage = createStage(canvas, { fov: 28, z: 7.6 });
  addLight(stage.scene);
  const root = new THREE.Group();
  root.rotation.set(0.5, -0.55, 0.1);
  root.position.x = 0.4;
  stage.scene.add(root);

  // Pappersplan: en pilspets med ett hack bak
  const shape = new THREE.Shape();
  shape.moveTo(-1.55, 1.15);
  shape.lineTo(1.75, 0);
  shape.lineTo(-1.55, -1.15);
  shape.lineTo(-0.95, 0);
  shape.closePath();
  const depth = 0.6;
  const geo = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false });
  geo.translate(0, 0, -depth / 2);

  const plane = new THREE.Group();
  plane.add(outlined(geo));
  // Vecket i mitten
  const crease = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-0.95, 0, depth / 2 + 0.002),
    new THREE.Vector3(1.75, 0, depth / 2 + 0.002),
  ]);
  plane.add(new THREE.Line(crease, EDGE));
  root.add(plane);

  // Fartstreck bakom planet
  const trailMat = faceMaterial();
  const trails = [
    { y: 0.55, w: 0.9 },
    { y: -0.05, w: 1.3 },
    { y: -0.62, w: 0.7 },
  ].map(({ y, w }, i) => {
    const g = new THREE.BoxGeometry(w, 0.16, 0.16);
    const m = outlined(g, trailMat);
    m.position.set(-2.35 - w / 2, y, 0);
    m.userData = { baseX: -2.35 - w / 2, i };
    root.add(m);
    return m;
  });

  const pointer = pointerFollower(hoverTarget);
  stage.onFrame((t, dt) => {
    const p = pointer.update(dt);
    plane.position.x = Math.sin(t * 1.2) * 0.14;
    plane.position.y = Math.sin(t * 1.6) * 0.1;
    plane.rotation.z = Math.sin(t * 1.2 + 0.6) * 0.05;
    trails.forEach((m) => {
      const k = (t * 0.9 + m.userData.i * 0.33) % 1;
      m.position.x = m.userData.baseX - k * 0.5 + plane.position.x;
      m.scale.x = 1 - k * 0.5;
    });
    root.rotation.y = -0.55 + p.x * 0.35 + Math.sin(t * 0.45) * 0.07;
    root.rotation.x = 0.5 + p.y * 0.18;
  });
  stage.ready();
}
