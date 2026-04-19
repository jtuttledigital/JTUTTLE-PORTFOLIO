"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import * as THREE from "three";

type LogoCubeProps = {
  size?: number;
  fitPadding?: number;
  cameraFovDeg?: number;
  cameraOffsetX?: number;
  cameraOffsetY?: number;
  interactive?: boolean;
  className?: string;
};

const LOGO_PATH =
  "M 82.48 0 L 0 0 L 0 20.62 L 54.33 20.62 L 20.62 61.86 L 10.06 61.86 L 0 61.86 L 0 82.48 L 20.62 82.48 L 30.93 82.48 L 82.48 20.62 Z";

const FACE_ROTATIONS = [90, -90, 0, 180, 0, 0];

function makeLogoTexture(size: number, rotationDeg: number): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;

  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("Could not create 2D canvas context for logo texture");
  }

  context.fillStyle = "#000000";
  context.fillRect(0, 0, size, size);

  context.save();
  context.translate(size / 2, size / 2);
  context.rotate((rotationDeg * Math.PI) / 180);
  context.scale(size / 82.48, size / 82.48);
  context.translate(-41.24, -41.24);
  context.fillStyle = "#ffffff";
  context.fill(new Path2D(LOGO_PATH));
  context.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export function LogoCube({
  size = 40,
  fitPadding = 1.3,
  cameraFovDeg = 38,
  cameraOffsetX = 0,
  cameraOffsetY = 0,
  interactive = true,
  className,
}: LogoCubeProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(size, size);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const cameraAspect = 1;
    const camera = new THREE.PerspectiveCamera(cameraFovDeg, cameraAspect, 0.1, 100);

    // Fit the cube's full rotation envelope (bounding sphere) inside the viewport.
    const cubeHalfExtent = 1; // BoxGeometry(2, 2, 2)
    const cubeBoundingRadius = Math.sqrt(3 * cubeHalfExtent * cubeHalfExtent);
    const verticalHalfFovRad = THREE.MathUtils.degToRad(cameraFovDeg / 2);
    const horizontalHalfFovRad = Math.atan(Math.tan(verticalHalfFovRad) * cameraAspect);
    const fitDistanceY = (cubeBoundingRadius * fitPadding) / Math.sin(verticalHalfFovRad);
    const fitDistanceX = (cubeBoundingRadius * fitPadding) / Math.sin(horizontalHalfFovRad);
    const fitDistance = Math.max(fitDistanceX, fitDistanceY);

    camera.position.set(cameraOffsetX, cameraOffsetY, fitDistance);
    camera.lookAt(0, 0, 0);

    const key = new THREE.DirectionalLight(0xffffff, 1.6);
    key.position.set(3, 4, 3);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0x8899bb, 0.4);
    fill.position.set(-3, 1, 2);
    scene.add(fill);

    const rim = new THREE.DirectionalLight(0xaaaaaa, 0.3);
    rim.position.set(-2, -2, -4);
    scene.add(rim);

    scene.add(new THREE.AmbientLight(0xffffff, 0.08));

    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const materials = FACE_ROTATIONS.map((rotation) => {
      const texture = makeLogoTexture(256, rotation);
      return new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.55,
        metalness: 0.15,
      });
    });

    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    const edges = new THREE.EdgesGeometry(geometry);
    const edgeLines = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({ color: 0x444444, transparent: true, opacity: 0.5 })
    );
    cube.add(edgeLines);

    const axis = new THREE.Vector3(0.11, 0.32, 0.04).normalize();
    const speed = 0.32;

    let rafId = 0;
    let disposed = false;
    let lastTime = performance.now();

    const animate = (time: number) => {
      if (disposed) return;

      rafId = window.requestAnimationFrame(animate);

      const dt = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      if (!pausedRef.current) {
        const deltaRotation = new THREE.Quaternion();
        deltaRotation.setFromAxisAngle(axis, speed * dt);
        cube.quaternion.multiplyQuaternions(deltaRotation, cube.quaternion);
        renderer.render(scene, camera);
      }
    };

    renderer.render(scene, camera);
    rafId = window.requestAnimationFrame(animate);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(rafId);

      edgeLines.geometry.dispose();
      (edgeLines.material as THREE.Material).dispose();

      geometry.dispose();
      edges.dispose();
      materials.forEach((material) => {
        material.map?.dispose();
        material.dispose();
      });

      renderer.dispose();

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [size, fitPadding, cameraFovDeg]);

  function handleClick(event: MouseEvent<HTMLDivElement>) {
    if (!interactive) return;
    event.stopPropagation();
    pausedRef.current = !pausedRef.current;
    setPaused(pausedRef.current);
  }

  return (
    <div
      ref={mountRef}
      onClick={interactive ? handleClick : undefined}
      title={interactive ? (paused ? "Click to resume" : "Click to pause") : undefined}
      className={className}
      style={{ width: size, height: size, cursor: interactive ? "pointer" : "inherit", flexShrink: 0 }}
    />
  );
}

export default LogoCube;
