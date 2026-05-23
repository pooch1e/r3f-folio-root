import { OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three-stdlib'
import { Environment } from '@react-three/drei'
import { PresentationControls, ContactShadows, Html } from '@react-three/drei'

export default function Experience() {
  const computerModel = useLoader(GLTFLoader, '/models/computer/zombie_computer.glb')
  return (
    <>
      <color args={['#241a1a']} attach='background' />
      <Environment preset='city' />
      // Computer model
      <PresentationControls global rotation={[0.13, 0.1, 0]} polar={[-0.4, 0.2]} azimuth={[-0.8, 0.3]}>
        <primitive
          object={computerModel.scene}
          scale={0.5}
          position-y={-1.5}
          position-z={-1.5}
          position-x={1.5}
          rotation-y={1}
        />
        <Html transform wrapperClass='htmlScreen' distanceFactor={1.17}>
          This will be my site iframe
          <iframe src='https://google.com/html' />
        </Html>
      </PresentationControls>
      <ContactShadows position-y={-1.3} opacity={0.4} scale={5} blur={2.4} />
    </>
  )
}
