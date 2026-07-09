"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { Suspense, useRef, useState } from "react";
import type { Points as PointsType } from "three";

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

const StarBackground = (props: object) => {
  const ref = useRef<PointsType | null>(null);
  const [sphere] = useState(() => generateStarPositions(STAR_COUNT));

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => (
  <div className="fixed inset-0 z-[20] h-auto w-full">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);
