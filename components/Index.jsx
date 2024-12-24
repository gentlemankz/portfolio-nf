'use client';
import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react';
import Model from './Model';

export default function Index() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  /*сомнительно, но вроде нужно для aspect нужно юзать. Без него тоже работает
  возможно для Arc браузера будет плюсом  */
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas 
        style={{ background: '#000000' }}
        camera={{
          position: [0, 0, 5],
          fov: 75,
          aspect: windowSize.width / windowSize.height
        }}
      >
        <Model />
        <directionalLight intensity={2} position={[0, 2, 3]}/>
      </Canvas>
    </div>
  )
}