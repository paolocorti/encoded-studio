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
import surface from "./assets/images/SurfaceImperfections003_1K_var1.jpg";
import surfaceNormal from "./assets/images/SurfaceImperfections003_1K_Normal.jpg";

function Ground() {
  const [floor, normal] = useTexture([surface, surfaceNormal]);
  return (
    <Reflector
      resolution={512}
      args={[15, 15]}
      mirror={0.5}
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
  //const ref = useWobble(Math.random() * 0.1, "cos")
  const ref = useRef();
  const [texture1] = useLoader(THREE.TextureLoader, [url]);
  //exture1.wrapS = texture1.wrapT = THREE.RepeatWrapping
  useFrame((state, delta) => {
    ref.current.material.time += delta;
    //ref.current.rotation.y += delta / 50
  });
  return (
    <group>
      <mesh ref={ref} position={position} rotation={rotation}>
        <planeBufferGeometry args={[2, 4]} />
        <meshBasicMaterial txt={texture1} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function Intro({ start, set }) {
  const [vec] = useState(() => new THREE.Vector3());
  useEffect(() => setTimeout(() => set(true), 500), []);
  return useFrame((state) => {
    if (start) {
      state.camera.position.lerp(
        vec.set(state.mouse.x * 5, state.mouse.y * 2, 6),
        0.05
      );
      state.camera.lookAt(0, 0, 0);
    }
  });
}

// function Overlay({ ready, clicked, setClicked }) {
//   return (
//     <>
//       <div
//         className={`fullscreen bg ${ready ? "ready" : "notready"} ${
//           clicked && "clicked"
//         }`}
//       >
//         <div onClick={() => ready && setClicked(true)}>
//           {!ready ? "loading" : "Explore"}
//         </div>
//       </div>
//     </>
//   );
// }

export default function Hero() {
  const [clicked, setClicked] = useState(false);
  const [ready, setReady] = useState(false);
  const store = { clicked, setClicked, ready, setReady };

  return (
    <Canvas
      gl={{ alpha: false }}
      pixelRatio={[1, 1.5]}
      camera={{ position: [0, 2, 12], fov: 60 }}
      onCreated={({ gl, camera }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.outputEncoding = THREE.sRGBEncoding;
      }}
    >
      <color attach="background" args={["#000"]} />
      <fog attach="fog" args={["#111", 15, 20]} />
      <Suspense fallback={null}>
        <group position={[0, -2, 0]}>
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
