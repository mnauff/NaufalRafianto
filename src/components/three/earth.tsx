import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import CanvasLoader from '@/components/CanvasLoader';
const Model = () => {
  const gltf = useLoader(GLTFLoader, '/earth/scene.gltf');
  return (
    <mesh>
      <primitive
        object={gltf.scene}
        scale={0.35}
        position-y={0}
        rotation-y={0}
        rotation-x={-0.25}
      />
    </mesh>
  );
};

export default function EarthCanvas() {
  return (
    <div className=' z-20 grid h-[40vh] cursor-grabbing'>
      <Canvas
        frameloop='demand'
        gl={{ preserveDrawingBuffer: true }}
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 4], fov: 10 }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Model />
          <Environment preset='city' />
        </Suspense>
      </Canvas>
    </div>
  );
}
