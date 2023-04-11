import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import CanvasLoader from '@/components/CanvasLoader';

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/astronaut/scene.gltf');
  const ref = useRef<any>();

  // Use the useFrame hook to update the position of the model over time
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    ref.current.position.y = Math.sin(elapsedTime) * 0.075;
  });

  return (
    <mesh ref={ref}>
      <primitive
        object={gltf.scene}
        scale={0.075}
        position-y={-0.1}
        rotation-y={0}
        rotation-x={-0.25}
      />
    </mesh>
  );
};

export default function AstronautCanvas() {
  return (
    <div className='z-[50] grid h-[90vh] w-full cursor-grabbing'>
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
            rotateSpeed={0.5}
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
