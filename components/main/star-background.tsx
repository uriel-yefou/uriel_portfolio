"use client";

import { Points, PointMaterial, type PointsInstancesProps } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useRef, Suspense, useMemo } from "react";
import type { Group } from "three";

const STAR_COUNT = 5000;

function generateStarPositions(count: number) {
  const positions = new Float32Array(count - (count % 3));
  random.inSphere(positions, { radius: 1.2 });

  for (let i = 0; i < positions.length; i++) {
    if (!Number.isFinite(positions[i])) {
      positions[i] = (Math.random() - 0.5) * 0.01;
    }
  }

  return positions;
}

export const StarBackground = (props: PointsInstancesProps) => {
  const groupRef = useRef<Group | null>(null);
  const sphere = useMemo(() => generateStarPositions(STAR_COUNT), []);

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x -= delta / 8;
      groupRef.current.rotation.y -= delta / 12;
    }
  });

  return (
    <group ref={groupRef} rotation={[0, 0, Math.PI / 4]}>
      <Points
        stride={3}
        positions={sphere}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.0035}
          sizeAttenuation
          depthWrite={false}
          opacity={0.9}
        />
      </Points>
    </group>
  );
};

type StarsCanvasProps = {
  onReady?: () => void;
};

export const StarsCanvas = ({ onReady }: StarsCanvasProps) => (
  <Canvas
    camera={{ position: [0, 0, 1] }}
    className="!h-full !w-full"
    dpr={[1, 2]}
    frameloop="always"
    gl={{
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    }}
    style={{ width: "100%", height: "100%" }}
    onCreated={() => onReady?.()}
  >
    <Suspense fallback={null}>
      <StarBackground />
    </Suspense>
  </Canvas>
);
