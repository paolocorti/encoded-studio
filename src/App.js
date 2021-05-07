import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, CameraShake, Html } from "@react-three/drei";
import { Vector3, RepeatWrapping, TextureLoader } from "three";
import { EffectComposer, SSAO, SMAA } from "@react-three/postprocessing";
import txt from "./assets/images/encoded_texture.jpg";
import logo from "./assets/images/encoded.png";
import { isMobileWithTablet } from "./utils";

function Box(props) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <mesh
      castShadow
      receiveShadow
      {...props}
      ref={mesh}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxGeometry args={[4, 4, 4]} />
      <meshStandardMaterial color={hovered ? props.hovercolor : props.color} />
    </mesh>
  );
}

function Sphere(props) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <mesh
      castShadow
      receiveShadow
      {...props}
      ref={mesh}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <sphereGeometry args={[4, 64, 64]} />
      <meshStandardMaterial color={hovered ? props.hovercolor : props.color} />
    </mesh>
  );
}

function Rig() {
  const [vec] = useState(() => new Vector3());
  const { camera, mouse } = useThree();
  useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, 3, 28), 0.05));
  return (
    <CameraShake
      maxYaw={0.01}
      maxPitch={0.01}
      maxRoll={0.01}
      yawFrequency={0.1}
      pitchFrequency={0.1}
      rollFrequency={0.1}
    />
  );
}

function Plane() {
  const [texture] = useLoader(TextureLoader, [txt]);
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.repeat.set(150, 150);

  return (
    <mesh
      scale={1000}
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <planeGeometry />
      <meshPhongMaterial
        color="#c0c0c0"
        map={texture}
        transparent
        opacity={1}
      />
    </mesh>
  );
}

export default function App() {
  return (
    <div className="vizWrapper">
      <div className="vizHeader" style={{ left: isMobileWithTablet ? 10 : 30 }}>
        <div className="vizLogo">
          <img src={logo} height="100" />
        </div>
      </div>
      <div className="vizFooter">
        <div className="vizText">¬</div>
      </div>
      <Canvas
        shadows
        shadowMap
        concurrent
        dpr={[1, 2]}
        camera={{ position: [0, 8, 20], fov: 50 }}
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: true,
          alpha: false,
        }}
      >
        <ambientLight intensity={0.75} />
        <pointLight
          position={[5, 30, 10]}
          castShadow
          intensity={1}
          decay={2}
          color={"#f3e9f7"}
        />
        <pointLight
          position={[-5, 30, 10]}
          castShadow
          intensity={0.2}
          decay={2}
          color={"#e9eef7"}
        />
        <pointLight
          position={[5, 30, -10]}
          castShadow
          intensity={1}
          decay={2}
          color={"#e9eef7"}
        />

        <color attach="background" args={["#d0d0d0"]} />
        <fog attach="fog" args={["#d0d0d0", 50, 600]} />

        <Suspense fallback={null}>
          <Sphere
            position={[-2, 1, 10]}
            scale={[0.25, 0.25, 0.25]}
            color={"#c0c0c0"}
            hovercolor={"green"}
          />
          <Sphere
            position={[6, 5.2, 10]}
            scale={[0.3, 0.3, 0.3]}
            color={"#4d4d4d"}
            hovercolor={"green"}
          />
          <Sphere
            position={[11.5, 2, 11]}
            scale={[0.5, 0.5, 0.5]}
            color={"#c0c0c0"}
            hovercolor={"green"}
          />
          <Box
            position={[0, 5, 0]}
            scale={[1, 2.5, 0.5]}
            color={"#999"}
            hovercolor={"pink"}
          />
          <Box
            position={[4, 3, 5]}
            scale={[2, 1.5, 0.3]}
            color={"#ccc"}
            hovercolor={"pink"}
          />
          <Box
            position={[6, 2, 8.5]}
            scale={[1, 1, 1]}
            color={"#e6e6e6"}
            hovercolor={"pink"}
          />
          <Box
            position={[-12, 1, 10]}
            scale={[0.5, 0.5, 0.25]}
            color={"#e6e6e6"}
            hovercolor={"pink"}
          />
          <Box
            position={[-6, 2, 8]}
            scale={[1, 1, 0.3]}
            color={"#808080"}
            hovercolor={"pink"}
          />
          <Box
            position={[-3.8, 3, 5]}
            scale={[1, 1.7, 0.3]}
            color={"#4d4d4d"}
            hovercolor={"pink"}
          />
          <Box
            position={[-9, 3, 6]}
            scale={[1, 2.6, 0.3]}
            color={"#333"}
            hovercolor={"pink"}
          />
          <Box
            position={[-10, 1.7, 8]}
            scale={[0.6, 0.6, 0.1]}
            rotation={[0, 0, Math.PI / 4]}
            color={"#e6e6e6"}
            hovercolor={"pink"}
          />

          <Plane />
          <EffectComposer multisampling={0}>
            <SSAO
              samples={25}
              intensity={40}
              luminanceInfluence={0.5}
              radius={10}
              scale={0.5}
              bias={0.5}
            />
            {/* <SMAA edgeDetectionMode={EdgeDetectionMode.DEPTH} /> */}
          </EffectComposer>
        </Suspense>
        <Rig />
        <OrbitControls enableZoom={false} />
      </Canvas>

      <div
        style={{
          position: "absolute",
          left: isMobileWithTablet ? 30 : 150,
          bottom: 150,
          fontSize: isMobileWithTablet ? "30px" : "2vw",
        }}
      >
        <div>new site available soon...</div>
      </div>
    </div>
  );
}
