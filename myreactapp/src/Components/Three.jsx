import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Stars() {
  const points = useRef();
  const starCount = 1000;
  const positions = new Float32Array(starCount * 3);

  for (let i = 0; i < starCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }

  useFrame(() => {
    points.current.rotation.y += 0.0005; // slow rotation
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#00ffff"
        transparent
        opacity={0.8}
      />
    </points>
  );
}

const ThreeBackground = () => {
  return (
    <div className="global-three-container">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <Stars />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
