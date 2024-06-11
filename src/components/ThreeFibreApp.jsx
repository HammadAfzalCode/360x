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
  if (controls.current) {
    controls.current.enableZoom = false; // Enable zoom
    controls.current.enableRotate = true; // Enable rotation
    controls.current.enablePan = true; // Enable panning
  }

  return <orbitControls ref={controls} args={[camera, gl.domElement]} />;
};
const MyModel = () => {
  const modelRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("./assets/Xpert solutions.gltf", (gltf) => {
      const customModel = gltf.scene;
      modelRef.current.add(customModel);

      // Set red color for the model
      const material = new THREE.MeshPhongMaterial({
        color: 0xd0140f,
        shininess: 100,
      });
      customModel.traverse((node) => {
        if (node.isMesh) {
          node.material = material;
        }
      });
    });
  }, []);

  useFrame(() => {
    if (modelRef.current) {
      // Automatic rotation
      modelRef.current.rotation.y += 0.003;
    }
  });

  return <group ref={modelRef} />;
};

const ThreeFiberApp = () => {
  const isNestHubScreen = useMediaQuery("(max-width:1200px)");
  const isSmallScreen = useMediaQuery("(min-width:900px)");
  const isXSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Canvas
      camera={{ position: [30, 10, 40], fov: 40 }}
      style={{
        background: "#181815",
        height: isNestHubScreen ? "55vh" : "80vh",
      }}
    >
      <MyModel />
      <directionalLight
        color={0xffffff}
        intensity={1}
        position={[411.47, 564.68, 740.56]}
      />
      <ambientLight intensity={0.5} />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeFiberApp;

// import React, { useRef, useEffect } from "react";
// import { useFrame } from "react-three-fiber";
// import { Canvas } from "react-three-fiber";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import * as THREE from "three";

// const MyModel = () => {
//   const modelRef = useRef();

//   useEffect(() => {
//     const loader = new GLTFLoader();
//     loader.load("./assets/Xpert solutions.gltf", (gltf) => {
//       const customModel = gltf.scene;
//       modelRef.current.add(customModel);

//       // Set red color for the model
//       const material = new THREE.MeshPhongMaterial({
//         color: 0xd0140f,
//         shininess: 100,
//       });
//       customModel.traverse((node) => {
//         if (node.isMesh) {
//           node.material = material;
//         }
//       });

//       // Set initial rotation of the model to make it fully visible
//     });
//   }, []);

//   useFrame(() => {
//     if (modelRef.current) {
//       // Rotate the model more quickly
//       modelRef.current.rotation.y += -0.004; // Adjust the value for the desired rotation speed
//     }
//   });

//   return <group ref={modelRef} />;
// };

// const ThreeFiberApp = () => {
//   const isNestHubScreen = useMediaQuery("(max-width:1200px)");
//   const isSmallScreen = useMediaQuery("(min-width:900px)");
//   const isXSmallScreen = useMediaQuery("(max-width:600px)");

//   return (
//     <Canvas
//       camera={{ position: [15, 3, 25], fov: 70 }}
//       style={{
//         background: "#181815",
//         height: isNestHubScreen ? "55vh" : "80vh",
//       }}
//     >
//       <MyModel />
//       <directionalLight
//         color={0xffffff}
//         intensity={1}
//         position={[411.47, 564.68, 740.56]}
//       />
//       <ambientLight intensity={0.5} />
//     </Canvas>
//   );
// };

// export default ThreeFiberApp;