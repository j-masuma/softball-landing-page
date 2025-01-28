import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';

const Model = () => {
  const { scene } = useGLTF('/assets/models/test.glb'); 
  return <primitive object={scene} scale={0.03} />;
};

function ShowModel() {
  return (
    <div className='h-screen'>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl text-center mt-12 font-semibold'>Displaying <span className='text-yellow-500'>3D Model</span></h1>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <Suspense
          fallback={
            <Html center>
              <div style={{ color: 'white', textAlign: 'center' }}>Loading 3D Model...</div>
            </Html>
          }
        >
          <Model />
        </Suspense>
        
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default ShowModel;
