import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { BRAND_PRIMARY } from "../constants/brand.js";
import styles from "./SystemNode3D.module.css";

const target = new THREE.Vector3();

export default function SystemNode3D({ node, orchestrated, dark }) {
  const group = useRef();
  const destination = orchestrated ? node.orchestrated : node.fragmented;
  const nodeColor = orchestrated ? BRAND_PRIMARY : dark ? "#AEB8B2" : "#46504A";

  useFrame((_, delta) => {
    if (!group.current) return;

    target.set(...destination);
    group.current.position.lerp(target, 1 - Math.exp(-delta * 2.8));
  });

  return (
    <group ref={group} position={node.fragmented}>
      <mesh>
        <sphereGeometry args={[0.14, 24, 24]} />
        <meshStandardMaterial
          color={nodeColor}
          roughness={0.38}
          metalness={0.14}
        />
      </mesh>

      <Html center distanceFactor={8} style={{ pointerEvents: "none" }}>
        <div className={`${styles.label} ${dark ? styles.dark : styles.light}`}>
          {node.label}
        </div>
      </Html>
    </group>
  );
}
