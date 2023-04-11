import { PointMaterial, Points, Preload } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import * as random from 'maath/random/dist/maath-random.cjs';
import * as React from 'react';

function Stars(props: any) {
  const ref = React.useRef<any>();
  const [sphere] = React.useState(() =>
    Float32Array.from(random.inSphere(new Float32Array(5000), { radius: 1.2 }))
  );
  useFrame((state, delta) => {
    ref.current.rotation.y -= delta / 10;
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.z -= delta / 5;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#fff'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function StarsCanvas() {
  return (
    <div className='absolute inset-0 z-[-1] max-h-[200vh] w-full'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <React.Suspense fallback={null}>
          <Stars />
        </React.Suspense>
        <Preload all />
      </Canvas>
      {}
    </div>
  );
}
