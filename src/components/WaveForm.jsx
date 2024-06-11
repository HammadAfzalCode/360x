import React, { useRef, useEffect } from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls as ThreeOrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import useMediaQuery from "@mui/material/useMediaQuery";

extend({ OrbitControls: ThreeOrbitControls });

const OrbitControls = () => {
  const { camera, gl } = useThree();
  const controls = useRef();

  useFrame(() => controls.current && controls.current.update());

  useEffect(() => {
    if (controls.current) {
      controls.current.enableZoom = false; // Enable zoom
      controls.current.enableRotate = true; // Enable rotation
      controls.current.enablePan = true; // Enable panning
    }
  }, []);

  return <orbitControls ref={controls} args={[camera, gl.domElement]} />;
};

const WaveFormModel = () => {
  const modelRef = useRef();
  const movingParts = useRef(new Set());

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("./assets/Xpert wave.gltf", (gltf) => {
      const customModel = gltf.scene;
      modelRef.current.add(customModel);

      const material = new THREE.MeshPhongMaterial({
        color: 0x808080,
        shininess: 100,
      });
    });
  }, []);

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.position.x = Math.sin(state.clock.elapsedTime) * 0.9;
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime) * -0.3;
      modelRef.current.position.z = Math.cos(state.clock.elapsedTime) * 1;
      // modelRef.current.position.x = Math.sin(state.clock.elapsedTime) * 0.9;
    }
  });

  return <group ref={modelRef} />;
};

const WaveForm = () => {
  const isNestHubScreen = useMediaQuery("(max-width:1200px)");
  const isSmallScreen = useMediaQuery("(min-width:900px)");
  const isXSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <div style={{ position: "relative", height: "100%" }}>
      <Canvas
        camera={{ position: [30, 10, 90], fov: 22 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 50,
          height: isNestHubScreen ? "20vh" : "40vh",
          width: "95vw",
          margin: "auto",
          zIndex: 999,
        }}
      >
        <WaveFormModel />
        <directionalLight
          color={0xffffff}
          intensity={1}
          position={[450.47, 470.68, 740.56]}
        />
        <ambientLight intensity={0.7} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default WaveForm;
