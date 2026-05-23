import { OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three-stdlib'

export default function Experience() {
  const computerModel = useLoader(GLTFLoader, '/models/computer/zombie_computer.glb')
  return (
    <>
      <OrbitControls makeDefault />
      <color args={['#241a1a']} attach='background' />

      <primitive object={computerModel.scene} scale={0.5} />

      {/* <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh> */}
    </>
  )
}
