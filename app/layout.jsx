'use client'
import '@/global.css'
import { Canvas } from '@react-three/fiber'
import { r3f } from '@/helpers/global'

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      <head />
      <body>
        {/* Full-screen Canvas sits behind everything */}
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
        >
          {/* r3f.Out renders whatever any <Three> (r3f.In) component sends into the canvas */}
          <r3f.Out />
        </Canvas>

        {/* DOM UI layer — sits on top of the canvas */}
        <div id='dom' style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  )
}
