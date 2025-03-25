import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sparkles } from '@react-three/drei';
import { useRef } from 'react';

const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} /> {/* Now actually rendering a cube */}
      <meshStandardMaterial color="#468585" emissive="#464585" />

      <Sparkles count={100} scale={1.5} size={6} speed={0.02} noise={0.2} color="yellow" />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      {/* Improved OrbitControls */}
      <OrbitControls enableZoom enablePan enableRotate />

      {/* Lights with proper intensity */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 5, 2]} intensity={1} color={'#9CDBA6'} />

      {/* Background color */}
      <color attach="background" args={['#F0F0F0']} />

      {/* Rotating Cube */}
      <RotatingCube />
    </Canvas>
  );
};

export default App;