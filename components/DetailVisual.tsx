'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Image from 'next/image';

type Props = { category: string; title: string; image: string; color?: string };

export default function DetailVisual({ category, title, image, color = '#e4b866' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); } catch { return; }
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, .1, 100);
    camera.position.z = 5;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    const group = new THREE.Group();
    scene.add(group);
    const material = new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: .78 });
    const shape = title.includes('Kim tự tháp') || title.includes('Pyramid') || title.includes('Taj Mahal') ? new THREE.ConeGeometry(1.25, 2.2, 4) : title.includes('Mặt Trăng') || title.includes('Moon') ? new THREE.SphereGeometry(1.25, 24, 16) : category.includes('Kiến') || category.includes('Architecture') ? new THREE.BoxGeometry(1.8, 1.8, 1.8) : category.includes('Công') || category.includes('Technology') ? new THREE.TorusKnotGeometry(1, .28, 90, 12) : new THREE.IcosahedronGeometry(1.35, 1);
    const mesh = new THREE.Mesh(shape, material);
    group.add(mesh);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.75, .012, 8, 96), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: .3 }));
    ring.rotation.x = Math.PI / 2.7;
    group.add(ring);
    let frame = 0;
    const resize = () => { const width = container.clientWidth; const height = Math.max(container.clientHeight, 1); camera.aspect = width / height; camera.updateProjectionMatrix(); renderer.setSize(width, height); };
    const animate = () => { const time = performance.now() / 1000; mesh.rotation.x = time * .18; mesh.rotation.y = time * .28; ring.rotation.z = -time * .12; renderer.render(scene, camera); frame = requestAnimationFrame(animate); };
    resize(); window.addEventListener('resize', resize); animate();
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize); group.traverse(object => { if (object instanceof THREE.Mesh) { object.geometry.dispose(); (object.material as THREE.Material).dispose(); } }); renderer.dispose(); if (renderer.domElement.parentNode === container) container.removeChild(renderer.domElement); };
  }, [category, color, title]);
  return <div className="detail-visual"><div className="detail-visual-image"><Image src={image} alt={title} fill priority sizes="(max-width: 760px) 100vw, 60vw" /><span>ARCHIVE IMAGE / TƯ LIỆU</span></div><div className="detail-visual-3d"><div ref={ref} aria-label={`Mô hình 3D minh họa ${title}`} /><small>THREE.JS / 3D STUDY</small></div></div>;
}
