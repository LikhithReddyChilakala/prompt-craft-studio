import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const NetworkSphere = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();
  
  // Create optimized sphere geometry with nodes and connections
  const { nodes, lines } = useMemo(() => {
    const nodePositions: THREE.Vector3[] = [];
    const lineGeometries: THREE.BufferGeometry[] = [];
    
    // Create icosahedron-based distribution for even node placement
    const radius = 2;
    const subdivisions = 2; // Keep low for performance
    
    // Generate nodes using fibonacci sphere for even distribution
    const numNodes = 80;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    
    for (let i = 0; i < numNodes; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / numNodes);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      nodePositions.push(new THREE.Vector3(x, y, z));
    }
    
    // Create connections between nearby nodes
    const connectionThreshold = 1.2;
    const linePoints: number[] = [];
    
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        const distance = nodePositions[i].distanceTo(nodePositions[j]);
        if (distance < connectionThreshold) {
          linePoints.push(
            nodePositions[i].x, nodePositions[i].y, nodePositions[i].z,
            nodePositions[j].x, nodePositions[j].y, nodePositions[j].z
          );
        }
      }
    }
    
    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePoints, 3));
    
    return { nodes: nodePositions, lines: linesGeometry };
  }, []);

  // Animation with mouse parallax
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Base rotation
      groupRef.current.rotation.x += delta * 0.1;
      groupRef.current.rotation.y += delta * 0.15;
      
      // Mouse parallax effect
      const targetRotationX = mouse.y * 0.3;
      const targetRotationY = mouse.x * 0.3;
      
      groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x * 0.1) * delta;
      groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y * 0.1) * delta;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Connection lines */}
      <lineSegments geometry={lines}>
        <lineBasicMaterial 
          color="#39FF14" 
          transparent 
          opacity={0.15}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
      
      {/* Node points */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={nodes.length}
            array={new Float32Array(nodes.flatMap(v => [v.x, v.y, v.z]))}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          color="#39FF14" 
          size={0.08}
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>
      
      {/* Inner glow sphere */}
      <mesh>
        <sphereGeometry args={[1.8, 16, 16]} />
        <meshBasicMaterial 
          color="#39FF14" 
          transparent 
          opacity={0.02}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

const WireframeSphere = () => {
  return (
    <div className="w-full h-full relative">
      {/* Outer glow effect */}
      <div 
        className="absolute inset-0 rounded-full opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(57, 255, 20, 0.3) 0%, transparent 70%)',
        }}
      />
      
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 2]}
      >
        <NetworkSphere />
        
        <EffectComposer>
          <Bloom
            intensity={0.8}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.9}
            radius={0.8}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default WireframeSphere;
