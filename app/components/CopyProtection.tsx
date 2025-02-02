"use client"

import { useState, useEffect } from "react"

export default function CopyProtection() {
  const [showWarning, setShowWarning] = useState(false)

  useEffect(() => {
    const preventCopy = (e: ClipboardEvent) => {
      e.preventDefault()
      setShowWarning(true)
      setTimeout(() => setShowWarning(false), 3000)
    }

    document.addEventListener("copy", preventCopy)
    document.addEventListener("cut", preventCopy)

    return () => {
      document.removeEventListener("copy", preventCopy)
      document.removeEventListener("cut", preventCopy)
    }
  }, [])

  return (
    <>
      {showWarning && (
        <div className="fixed top-0 left-0 w-full bg-red-600 text-white p-4 text-center z-50">
          Your device is hacked! Copying is not allowed.
        </div>
      )}
    </>
  )
}

