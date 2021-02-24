import * as THREE from "three";
import React, { Suspense, useRef, useState, useEffect } from "react";
import {
  Canvas,
  extend,
  useFrame,
  useThree,
  useLoader,
} from "react-three-fiber";
import {
  OrbitControls,
  shaderMaterial,
  useTexture,
  Reflector,
} from "@react-three/drei";
import texture from "./assets/images/encoded.png";
import surface from "./assets/images/SurfaceImperfections003_1K_var1.jpg";
import surfaceNormal from "./assets/images/SurfaceImperfections003_1K_Normal.jpg";

function Ground() {
  const [floor, normal] = useTexture([surface, surfaceNormal]);
  return (
    <Reflector
      resolution={512}
      args={[30, 15]}
      mirror={0.6}
      mixBlur={10}
      mixStrength={0.8}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      blur={[400, 100]}
    >
      {(Material, props) => (
        <Material
          color="#a0a0a0"
          metalness={0.5}
          roughnessMap={floor}
          normalMap={normal}
          normalScale={[1, 1]}
          {...props}
        />
      )}
    </Reflector>
  );
}

function Box({ position, rotation, url }) {
  const ref = useRef();
  const texture1 = useLoader(THREE.TextureLoader, url);

  texture1.wrapS = texture1.wrapT = THREE.ClampToEdgeWrapping;

  useFrame(() => {
    ref.current.rotation.y += 0.001;
    ref.current.rotation.z += 0.001;
    ref.current.rotation.x += 0.001;
  });

  return (
    <group>
      <mesh ref={ref} position={position} rotation={rotation}>
        <planeBufferGeometry args={[10, 10]} />
        <meshStandardMaterial
          map={texture1}
          side={THREE.DoubleSide}
          depthWrite={true}
          depthTest={true}
          transparent
        />
      </mesh>
    </group>
  );
}

export default function Hero() {
  const [clicked, setClicked] = useState(false);
  const [ready, setReady] = useState(false);
  const store = { clicked, setClicked, ready, setReady };

  return (
    <Canvas
      gl={{ alpha: false }}
      pixelRatio={[1, 1.5]}
      camera={{ position: [0, 0, 15], fov: 60 }}
      onCreated={({ gl, camera }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.outputEncoding = THREE.sRGBEncoding;
      }}
    >
      <color attach="background" args={["#000"]} />
      <fog attach="fog" args={["#111", 15, 20]} />
      <Suspense fallback={"Loading..."}>
        <group position={[0, -2, 0]}>
          <Box url={texture} position={[0, 5, 0]} />
          <Ground />
        </group>
        <ambientLight intensity={0.5} />
        <spotLight position={[0, 10, 0]} intensity={0.3} />
        <directionalLight position={[0, 5, 0]} intensity={0.4} />
      </Suspense>
      {/* <Intro start={ready && clicked} set={setReady} /> */}
      {/* <OrbitControls maxPolarAngle={Math.PI / 2} maxDistance={20} /> */}
    </Canvas>
  );
}
