import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  CanvasTexture,
  Color,
  EquirectangularReflectionMapping,
  Group,
  SRGBColorSpace,
} from "three";

export type SculptureControls = {
  targetX: number;
  targetY: number;
  dragging: boolean;
};

type HeroSculptureProps = {
  controls: React.RefObject<SculptureControls>;
  reducedMotion: boolean;
  onReady: () => void;
};

function ReflectionStudio() {
  const { scene } = useThree();
  const reflections = useMemo(() => {
    const image = document.createElement("canvas");
    image.width = 1024;
    image.height = 512;
    const context = image.getContext("2d");
    if (!context) return null;

    const base = context.createLinearGradient(0, 0, 1024, 512);
    base.addColorStop(0, "#f2f4f4");
    base.addColorStop(0.32, "#79818c");
    base.addColorStop(0.53, "#171b22");
    base.addColorStop(0.72, "#c5c9ce");
    base.addColorStop(1, "#303946");
    context.fillStyle = base;
    context.fillRect(0, 0, 1024, 512);

    const strips = [
      { x: 105, y: 45, w: 110, h: 410, color: "rgba(255,255,255,.96)" },
      { x: 365, y: 0, w: 38, h: 512, color: "rgba(0,87,255,.78)" },
      { x: 570, y: 80, w: 158, h: 355, color: "rgba(10,12,16,.9)" },
      { x: 842, y: 0, w: 42, h: 512, color: "rgba(182,255,0,.55)" },
    ];
    for (const strip of strips) {
      const light = context.createLinearGradient(strip.x, 0, strip.x + strip.w, 0);
      light.addColorStop(0, "rgba(255,255,255,0)");
      light.addColorStop(0.5, strip.color);
      light.addColorStop(1, "rgba(255,255,255,0)");
      context.fillStyle = light;
      context.fillRect(strip.x, strip.y, strip.w, strip.h);
    }

    const texture = new CanvasTexture(image);
    texture.mapping = EquirectangularReflectionMapping;
    texture.colorSpace = SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
  }, []);

  useEffect(() => {
    if (!reflections) return;
    scene.environment = reflections;
    scene.environmentIntensity = 0.9;
    return () => {
      scene.environment = null;
      reflections.dispose();
    };
  }, [reflections, scene]);

  return null;
}

function ChromeKnot({
  controls,
  reducedMotion,
}: Pick<HeroSculptureProps, "controls" | "reducedMotion">) {
  const object = useRef<Group>(null);
  const elapsed = useRef(0);

  useFrame((_, delta) => {
    if (!object.current) return;
    elapsed.current += delta;
    const control = controls.current;
    const idle = reducedMotion ? 0 : Math.sin(elapsed.current * 0.42) * 0.035;
    const nextX = -0.3 + (control?.targetX ?? 0) + idle;
    const nextY = 0.38 + (control?.targetY ?? 0) + idle * 1.4;
    const smoothing = 1 - Math.exp(-delta * 3.8);
    object.current.rotation.x += (nextX - object.current.rotation.x) * smoothing;
    object.current.rotation.y += (nextY - object.current.rotation.y) * smoothing;
    object.current.position.y = reducedMotion
      ? 0
      : Math.sin(elapsed.current * 0.65) * 0.045;
  });

  return (
    <group ref={object} rotation={[-0.3, 0.38, -0.12]}>
      <mesh castShadow receiveShadow>
        <torusKnotGeometry args={[0.92, 0.25, 192, 24, 2, 3]} />
        <meshPhysicalMaterial
          color={new Color("#24282d")}
          metalness={0.97}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.12}
          envMapIntensity={1.5}
        />
      </mesh>
    </group>
  );
}

export default function HeroSculpture3D({
  controls,
  reducedMotion,
  onReady,
}: HeroSculptureProps) {
  return (
    <Canvas
      className="sculpture-canvas"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4.1], fov: 39 }}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
        onReady();
      }}
      aria-hidden="true"
    >
      <ReflectionStudio />
      <ambientLight intensity={0.36} />
      <directionalLight position={[3, 4, 5]} intensity={2.1} color="#ffffff" />
      <pointLight position={[-3, 1, 2]} intensity={21} color="#0057ff" />
      <pointLight position={[2, -2, -2]} intensity={9} color="#d9e5ff" />
      <ChromeKnot controls={controls} reducedMotion={reducedMotion} />
    </Canvas>
  );
}