
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

const FBXModel = ({ url }) => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loader = new FBXLoader();
    loader.load(
      url,
      (fbx) => {
        fbx.scale.set(0.03, 0.03, 0.03);
        setModel(fbx);
      },
      undefined,
      (error) => console.error("Error loading FBX model:", error)
    );
  }, [url]);

  return model ? <primitive object={model} /> : null;
};

function ShowModel() {
  return (
    <div className="h-screen py-4">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center mt-12 font-semibold">
        Displaying <span className="text-yellow-500">3D Model</span>
      </h1>
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 10]} 
          intensity={1} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024}
        />
        
        <Suspense fallback={null}>
          <FBXModel url="/assets/models/test.fbx" />
        </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default ShowModel;
