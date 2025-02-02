"use client"

import { useEffect, useState } from "react"

export default function SecurityFeature() {
  const [isHacked, setIsHacked] = useState(false)

  useEffect(() => {
    const handleDevTools = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
        (e.metaKey && e.altKey && e.key === "I")
      ) {
        e.preventDefault()
        setIsHacked(true)
      }
    }

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      setIsHacked(true)
    }

    window.addEventListener("keydown", handleDevTools)
    window.addEventListener("contextmenu", handleContextMenu)

    return () => {
      window.removeEventListener("keydown", handleDevTools)
      window.removeEventListener("contextmenu", handleContextMenu)
    }
  }, [])

  if (isHacked) {
    return (
      <div className="fixed inset-0 bg-red-600 text-white flex items-center justify-center text-4xl font-bold z-50">
        Your device is hacked!
      </div>
    )
  }

  return null
}

