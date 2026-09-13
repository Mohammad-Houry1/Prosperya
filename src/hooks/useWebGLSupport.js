import { useMemo } from "react";

export function useWebGLSupport() {
  return useMemo(() => {
    if (typeof document === "undefined") return false;
    try {
      const canvas = document.createElement("canvas");
      return Boolean(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl2") || canvas.getContext("webgl")),
      );
    } catch {
      return false;
    }
  }, []);
}
