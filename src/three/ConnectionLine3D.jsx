import { Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { BRAND_PRIMARY } from "../constants/brand.js";

export default function ConnectionLine3D({ node, orchestrated, dark }) {
  const lineRef = useRef();
  const from = useMemo(() => new THREE.Vector3(0, 0, 0), []);
  const point = useMemo(
    () => new THREE.Vector3(...node.fragmented),
    [node.fragmented],
  );
  const destination = useMemo(
    () =>
      new THREE.Vector3(
        ...(orchestrated ? node.orchestrated : node.fragmented),
      ),
    [node.fragmented, node.orchestrated, orchestrated],
  );

  useFrame((_, delta) => {
    point.lerp(destination, 1 - Math.exp(-delta * 2.8));

    if (lineRef.current?.geometry?.setPositions) {
      lineRef.current.geometry.setPositions([
        from.x,
        from.y,
        from.z,
        point.x,
        point.y,
        point.z,
      ]);
    }
  });

  const color = orchestrated ? BRAND_PRIMARY : dark ? "#59615D" : "#A2AAA5";

  return (
    <Line
      ref={lineRef}
      points={[from, point]}
      color={color}
      transparent
      opacity={orchestrated ? 0.62 : 0.28}
      lineWidth={1}
    />
  );
}
