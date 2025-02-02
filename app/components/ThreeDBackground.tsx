"use client"

import { useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial } from "@react-three/drei"
import type * as THREE from "three"
import { useTheme } from "../contexts/ThemeContext"

const AnimatedSphere = () => {
  const mesh = useRef<THREE.Mesh>(null)
  const { viewport } = useThree()
  const { theme } = useTheme()

  useFrame((state) => {
    if (mesh.current) {
      const time = state.clock.getElapsedTime()
      mesh.current.position.y = Math.sin(time) * 0.1
      mesh.current.rotation.x = Math.sin(time / 4)
      mesh.current.rotation.y = Math.sin(time / 2)
    }
  })

  return (
    <Sphere args={[1, 100, 200]} scale={viewport.width / 4} ref={mesh}>
      <MeshDistortMaterial
        color={theme === "dark" ? "#3a86ff" : "#2563eb"}
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0}
      />
    </Sphere>
  )
}

const ThreeDBackground = () => {
  const { theme } = useTheme()

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-0 transition-colors duration-300 ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}
    >
      <Canvas>
        <ambientLight intensity={0.5} />
        <AnimatedSphere />
      </Canvas>
    </div>
  )
}

export default ThreeDBackground

