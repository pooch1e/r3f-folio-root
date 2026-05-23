'use client'
import { Three } from '@/helpers/components/Three'
import Experience from './Experience'

export default function Page() {
  return (
    <>
      {/*
        <Three> uses tunnel-rat (r3f.In) to inject Experience's R3F scene
        elements into the persistent <Canvas> in layout.jsx (r3f.Out).
        This means the Canvas survives route changes and DOM UI can safely
        sit on top of it in the #dom layer.
      */}
      <Three>
        <Experience />
      </Three>
    </>
  )
}
