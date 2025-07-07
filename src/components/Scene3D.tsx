import { Canvas } from '@react-three/fiber';
import { Float, Sphere, Torus, Box, Environment } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingShape = ({ position, children }: { position: [number, number, number]; children: React.ReactNode }) => {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[-0.1, 0.1]}
    >
      <group ref={ref} position={position}>
        {children}
      </group>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* Purple glowing sphere */}
        <FloatingShape position={[-3, 2, 0]}>
          <Sphere args={[0.5]} scale={1.2}>
            <meshStandardMaterial 
              color="#8B5CF6" 
              emissive="#8B5CF6" 
              emissiveIntensity={0.2}
              roughness={0.3}
              metalness={0.7}
            />
          </Sphere>
        </FloatingShape>

        {/* Green accent torus */}
        <FloatingShape position={[3, -1, -1]}>
          <Torus args={[0.8, 0.3, 16, 100]} rotation={[0.5, 0, 0]}>
            <meshStandardMaterial 
              color="#10B981" 
              emissive="#10B981" 
              emissiveIntensity={0.1}
              roughness={0.2}
              metalness={0.8}
            />
          </Torus>
        </FloatingShape>

        {/* Floating cube */}
        <FloatingShape position={[0, -2, 1]}>
          <Box args={[0.8, 0.8, 0.8]} rotation={[0.5, 0.5, 0]}>
            <meshStandardMaterial 
              color="#6366F1" 
              emissive="#6366F1" 
              emissiveIntensity={0.15}
              roughness={0.4}
              metalness={0.6}
            />
          </Box>
        </FloatingShape>

        {/* Additional smaller elements */}
        <FloatingShape position={[-2, -3, -2]}>
          <Sphere args={[0.3]} scale={0.8}>
            <meshStandardMaterial 
              color="#F59E0B" 
              emissive="#F59E0B" 
              emissiveIntensity={0.3}
              roughness={0.1}
              metalness={0.9}
            />
          </Sphere>
        </FloatingShape>

        <FloatingShape position={[4, 1, -3]}>
          <Torus args={[0.4, 0.15, 8, 50]}>
            <meshStandardMaterial 
              color="#EC4899" 
              emissive="#EC4899" 
              emissiveIntensity={0.2}
              roughness={0.3}
              metalness={0.7}
            />
          </Torus>
        </FloatingShape>
      </Canvas>
    </div>
  );
};

export default Scene3D;