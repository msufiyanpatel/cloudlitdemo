import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ─── Floating particle field ─── */
function Particles({ count = 100 }) {
  const mesh = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() =>
    Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 22,
      y: (Math.random() - 0.5) * 10,
      z: (Math.random() - 0.5) * 8,
      speed: 0.08 + Math.random() * 0.14,
      offset: Math.random() * Math.PI * 2,
      size: 0.04 + Math.random() * 0.07,
    })), [count]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime();
    particles.forEach((p, i) => {
      dummy.position.set(
        p.x + Math.cos(t * p.speed * 0.6 + p.offset) * 0.2,
        p.y + Math.sin(t * p.speed + p.offset) * 0.4,
        p.z,
      );
      const s = p.size * (0.85 + 0.3 * Math.sin(t * p.speed * 2 + p.offset));
      dummy.scale.setScalar(s);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[1, 5, 5]} />
      <meshBasicMaterial color="#7c5cf6" transparent opacity={0.5} />
    </instancedMesh>
  );
}

/* ─── Pulsing connection lines via lineSegments ─── */
function Lines({ count = 16 }) {
  const ref = useRef();

  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i < count; i++) {
      const sx = (Math.random() - 0.5) * 20;
      const sy = (Math.random() - 0.5) * 8;
      const sz = (Math.random() - 0.5) * 4;
      pts.push(new THREE.Vector3(sx, sy, sz));
      pts.push(new THREE.Vector3(
        sx + (Math.random() - 0.5) * 5,
        sy + (Math.random() - 0.5) * 3,
        sz + (Math.random() - 0.5) * 2,
      ));
    }
    return pts;
  }, [count]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    return geo;
  }, [points]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.material.opacity = 0.06 + 0.08 * Math.abs(Math.sin(clock.getElapsedTime() * 0.4));
  });

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#5146CA" transparent opacity={0.1} />
    </lineSegments>
  );
}

/* ─── Slow-rotating rings ─── */
function Rings() {
  const group = useRef();
  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.rotation.x = t * 0.05;
    group.current.rotation.y = t * 0.08;
  });
  return (
    <group ref={group}>
      {[5, 8, 11].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2 + i * 0.4, i * 0.6, 0]}>
          <torusGeometry args={[r, 0.014, 8, 80]} />
          <meshBasicMaterial color="#3A92EE" transparent opacity={Math.max(0.01, 0.07 - i * 0.02)} />
        </mesh>
      ))}
    </group>
  );
}

export default function ResultsParticles() {
  return (
    <Canvas
      camera={{ position: [0, 0, 14], fov: 55 }}
      gl={{ antialias: false, alpha: true }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      <Particles />
      <Lines />
      <Rings />
    </Canvas>
  );
}
