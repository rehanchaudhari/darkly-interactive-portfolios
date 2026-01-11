import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Icosahedron } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#22d3ee"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function FloatingTorus({ position, color, scale }: { position: [number, number, number]; color: string; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
      <Torus ref={meshRef} args={[0.3, 0.1, 16, 32]} position={position} scale={scale}>
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
      </Torus>
    </Float>
  );
}

function FloatingIcosahedron({ position, color, scale }: { position: [number, number, number]; color: string; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.8} floatIntensity={0.8}>
      <Icosahedron ref={meshRef} args={[0.4]} position={position} scale={scale}>
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} wireframe />
      </Icosahedron>
    </Float>
  );
}

function ParticleField() {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#22d3ee" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#22d3ee" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#a855f7" />
        <pointLight position={[0, 0, 3]} intensity={0.5} color="#22d3ee" />
        
        <AnimatedSphere />
        <FloatingTorus position={[-2.5, 1.5, -1]} color="#a855f7" scale={1.5} />
        <FloatingTorus position={[2.5, -1, -2]} color="#22d3ee" scale={1} />
        <FloatingIcosahedron position={[3, 2, -1]} color="#22d3ee" scale={0.8} />
        <FloatingIcosahedron position={[-3, -1.5, -1.5]} color="#a855f7" scale={1} />
        <ParticleField />
      </Canvas>
    </div>
  );
}
