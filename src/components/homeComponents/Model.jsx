
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import Section from "./Section";
import { MeshStandardMaterial } from "three";
import { motion } from "framer-motion";

const FBXModel = ({ url }) => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loader = new FBXLoader();
    loader.load(
      url,
      (fbx) => {
        fbx.scale.set(0.04, 0.04, 0.04);
        fbx.traverse((child) => {
          if (child.isMesh) {
            child.material = new MeshStandardMaterial({ color: "gray" });
          }
        });
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
    <div className="min-h-fit h-screen  py-4 border-2 border-gray-200 m-3 rounded-3xl">
      <div className="px-2">
        <Section no={"06"} section="Models" />
      </div>
      <div className=" h-full flex flex-col sm:flex-row items-center justify-center text-center sm:text-left">
        <div className="sm:w-1/2 lg:px-8 px-8 sm:pr-2 my-8">
          <motion.h1
            className="text-2xl sm:text-3xl lg:text-4xl mt-8 font-semibold lg:w-[80%] mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            Displaying <span className="text-yellow-500">3D Model</span>
          </motion.h1>
          <motion.p
            className="lg:w-[80%] text-lg xs:text-xl md:text-2xl text-gray-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            A 3D model is a digital representation of an object or surface
            created using specialized software. It consists of vertices, edges,
            and polygons that define its shape and structure.
          </motion.p>
        </div>
        <div className="sm:w-1/2 min-h-fit items-center flex justify-center sm:h-96">
          <Canvas camera={{ position: [0, 2, 5] }} className="h-full">
            <ambientLight intensity={0.7} />
            <directionalLight position={[10, 10, 10]} intensity={1.5} />

            <Suspense fallback={null}>
              <FBXModel url="/assets/models/test.fbx" />
            </Suspense>

            <Text 
              position={[0, 2.5, 0]}
              fontSize={0.2} 
              color="orange"
              anchorX="center"
              anchorY="middle"
            >
              3D Model Display
            </Text>

            <Text 
              position={[0, -2.5, 0]} 
              fontSize={0.2} 
              color="orange"
              anchorX="center"
              anchorY="middle"
            >
              Model Representation
            </Text>

            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default ShowModel;
