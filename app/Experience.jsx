import { useGLTF } from '@react-three/drei'
import { Environment } from '@react-three/drei'
import { PresentationControls, ContactShadows, Html } from '@react-three/drei'

export default function Experience() {
  const { scene, nodes } = useGLTF('/models/computer/zombie_computer.glb')

  return (
    <>
      <color args={['#241a1a']} attach='background' />
      <Environment preset='city' />

      <PresentationControls global rotation={[0.2, 0.1, 0]} polar={[-0.4, 0.2]} azimuth={[-0.8, 0.3]}>
        <primitive object={scene} scale={0.5} position={[1.0, -1.5, -2.5]} rotation-y={1}></primitive>
        <Html transform wrapperClass='htmlScreen' distanceFactor={1.17}>
          <iframe src='https://joelkram.dev' />
        </Html>
      </PresentationControls>

      <ContactShadows position-y={-1.3} opacity={0.4} scale={5} blur={2.4} />
    </>
  )
}

useGLTF.preload('/models/computer/zombie_computer.glb')
