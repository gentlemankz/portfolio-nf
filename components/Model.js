import React, { useRef } from 'react'
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber'


export default function Model() {
    const { nodes } = useGLTF("/medias/torrus.glb");
    const { viewport } = useThree()
    const torus = useRef(null);
    
    useFrame( () => {
        torus.current.rotation.x += 0.02
    })

    const materialProps = {
        thickness: 0.3,
        roughness: 0.1,
        transmission: 1,
        ior: 1.2,
        chromaticAberration: 0.02,
        backside: true,
    }
    
    return (
        <group scale={viewport.width / 3.75} >
            <Text font={'/fonts/PPNeueMontreal-Bold.otf'} position={[0, 0.3, -1]} fontSize={0.7} color="white" anchorX="center" anchorY="middle" textAlign="center">
                Welcome to
            </Text>
            <Text font={'/fonts/PPNeueMontreal-Bold.otf'} position={[0, -0.3, -1]} fontSize={0.4} color="white" anchorX="center" anchorY="middle" textAlign="center">
                my portfolio
            </Text>
            <mesh ref={torus} {...nodes.Torus002} position={[0.2, 0.2, 0]} scale={0.95}>
                <MeshTransmissionMaterial {...materialProps}/>
            </mesh>
        </group>
    )
}