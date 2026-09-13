import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { BRAND_PRIMARY } from "../constants/brand.js";
import { useAppTheme } from "../theme/ThemeContext.jsx";
import CameraRig from "./CameraRig.jsx";
import ConnectionLine3D from "./ConnectionLine3D.jsx";
import DataParticles from "./DataParticles.jsx";
import SystemNode3D from "./SystemNode3D.jsx";
import { SYSTEM_NODES } from "./systemScene.data.js";

function Scene({ orchestrated, dark }) {
  return (
    <>
      <ambientLight intensity={dark ? 0.7 : 1.2} />
      <pointLight
        position={[2, 3, 5]}
        intensity={dark ? 15 : 9}
        color={BRAND_PRIMARY}
        distance={12}
      />

      <mesh>
        <sphereGeometry args={[0.32, 32, 32]} />
        <meshStandardMaterial
          color={BRAND_PRIMARY}
          roughness={0.28}
          metalness={0.18}
        />
      </mesh>

      {SYSTEM_NODES.map((node) => (
        <ConnectionLine3D
          key={`line-${node.id}`}
          node={node}
          orchestrated={orchestrated}
          dark={dark}
        />
      ))}

      {SYSTEM_NODES.map((node) => (
        <SystemNode3D
          key={node.id}
          node={node}
          orchestrated={orchestrated}
          dark={dark}
        />
      ))}

      <DataParticles
        nodes={SYSTEM_NODES}
        orchestrated={orchestrated}
        dark={dark}
      />
      <CameraRig orchestrated={orchestrated} />
    </>
  );
}

export default function OrchestrationCanvas({ orchestrated, active = true }) {
  const { theme } = useAppTheme();
  const dark = theme === "dark";

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 8.2], fov: 46 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      frameloop={active ? "always" : "never"}
    >
      <Suspense fallback={null}>
        <Scene orchestrated={orchestrated} dark={dark} />
      </Suspense>
    </Canvas>
  );
}
