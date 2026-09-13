import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Particle({ node, index, orchestrated, dark }) {
  const ref = useRef();
  const start = useMemo(() => new THREE.Vector3(0, 0, 0), []);
  const end = useMemo(() => new THREE.Vector3(), []);
  const progress = useRef((index * 0.137) % 1);

  useFrame((_, delta) => {
    if (!ref.current) return;
    progress.current =
      (progress.current + delta * (orchestrated ? 0.16 : 0.07)) % 1;
    end.set(...(orchestrated ? node.orchestrated : node.fragmented));
    ref.current.position.lerpVectors(start, end, progress.current);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.026, 10, 10]} />
      <meshBasicMaterial
        color={orchestrated ? "#70C49A" : dark ? "#CBD2CE" : "#455048"}
        transparent
        opacity={orchestrated ? 0.9 : 0.42}
      />
    </mesh>
  );
}

export default function DataParticles({ nodes, orchestrated, dark }) {
  return (
    <>
      {nodes.map((node, index) => (
        <Particle
          key={node.id}
          node={node}
          index={index}
          orchestrated={orchestrated}
          dark={dark}
        />
      ))}
    </>
  );
}
