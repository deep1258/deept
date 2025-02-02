"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"

export default function Header() {
  const [youtubeSubscribers, setYoutubeSubscribers] = useState(23000)
  const [instagramFollowers, setInstagramFollowers] = useState(55000)
  const controls = useAnimation()

  useEffect(() => {
    const interval = setInterval(() => {
      setYoutubeSubscribers((prev) => prev + Math.floor(Math.random() * 10))
      setInstagramFollowers((prev) => prev + Math.floor(Math.random() * 10))
    }, 5000)

    controls.start({
      y: [0, -10, 0],
      transition: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
    })

    return () => clearInterval(interval)
  }, [controls])

  return (
    <header className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          animate={controls}
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Deep Biswas"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-8 border-4 border-blue-500 dark:border-blue-400"
          />
        </motion.div>
        <motion.h1
          className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500"
          animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          Deep Biswas
        </motion.h1>
        <div className="flex justify-center space-x-8">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">YouTube Subscribers</p>
            <motion.p
              className="text-3xl font-bold text-blue-600 dark:text-blue-400"
              key={youtubeSubscribers}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {youtubeSubscribers.toLocaleString()}+
            </motion.p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">Instagram Followers</p>
            <motion.p
              className="text-3xl font-bold text-purple-600 dark:text-purple-400"
              key={instagramFollowers}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {instagramFollowers.toLocaleString()}+
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </header>
  )
}

