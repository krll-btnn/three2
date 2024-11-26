import * as THREE from 'https://cdn.jsdelivr.net/npm/three/build/three.module.js';

// Сцена
const scene = new THREE.Scene();

// Камера
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 0, 150);
camera.lookAt(0, 0, 0);

// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Линии
const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
const points = [
  new THREE.Vector3(0, -30, 0),
  new THREE.Vector3(-10, -20, 0),
  new THREE.Vector3(-30, -20, 0),
  new THREE.Vector3(-20, -30, 0),
  new THREE.Vector3(0, -30, 0),
  new THREE.Vector3(20, -30, 0),
  new THREE.Vector3(30, -20, 0),
  new THREE.Vector3(10, -20, 0),
  new THREE.Vector3(0, -30, 0),
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(10, 0, 0),
  new THREE.Vector3(20, 10, 0),
  new THREE.Vector3(20, 30, 0),
  new THREE.Vector3(10, 20, 0),
  new THREE.Vector3(0, 30, 0),
  new THREE.Vector3(-10, 20, 0),
  new THREE.Vector3(-20, 30, 0),
  new THREE.Vector3(-20, 10, 0),
  new THREE.Vector3(-10, 0, 0),
  new THREE.Vector3(0, 0, 0)
];

const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, material);
scene.add(line);

// Поехали
renderer.render(scene, camera);