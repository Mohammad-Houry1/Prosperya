import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
export default function CameraRig({ orchestrated }) {
  const t = useRef(0);
  useFrame(({ camera, pointer }, delta) => {
    t.current += delta;
    const targetZ = orchestrated ? 7.4 : 8.2;
    camera.position.z += (targetZ - camera.position.z) * Math.min(1, delta * 2);
    camera.position.x +=
      (pointer.x * 0.18 - camera.position.x) * Math.min(1, delta * 1.5);
    camera.position.y +=
      (pointer.y * 0.12 - camera.position.y) * Math.min(1, delta * 1.5);
    camera.lookAt(0, 0, 0);
  });
  return null;
}
