import * as THREE from 'https://cdn.jsdelivr.net/npm/three/build/three.module.js';

// Сцена
const scene = new THREE.Scene();

// Отрисовщик
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Камера
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 150;

// Линии
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
const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
const lines = new THREE.Line(geometry, material);
scene.add(lines);

// Рендер
renderer.render(scene, camera);