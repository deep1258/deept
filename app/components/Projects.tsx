"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    category: "Web Development",
    image: "/placeholder.svg?height=300&width=400",
    link: "/projects/e-commerce-website",
  },
  {
    id: 2,
    title: "AI Chatbot",
    category: "AI Projects",
    image: "/placeholder.svg?height=300&width=400",
    link: "/projects/ai-chatbot",
  },
  {
    id: 3,
    title: "Mobile Fitness App",
    category: "App Development",
    image: "/placeholder.svg?height=300&width=400",
    link: "/projects/mobile-fitness-app",
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    category: "Web Development",
    image: "/placeholder.svg?height=300&width=400",
    link: "/projects/data-visualization-dashboard",
  },
  {
    id: 5,
    title: "Smart Home IoT System",
    category: "IoT",
    image: "/placeholder.svg?height=300&width=400",
    link: "/projects/smart-home-iot-system",
  },
  {
    id: 6,
    title: "Augmented Reality Game",
    category: "App Development",
    image: "/placeholder.svg?height=300&width=400",
    link: "/projects/augmented-reality-game",
  },
]

const categories = ["All", "Web Development", "App Development", "AI Projects", "IoT", "Other"]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <motion.h2
        className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            } transition-colors duration-300`}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-300"
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{project.category}</p>
                <Link href={project.link}>
                  <motion.button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full transition-colors duration-300 hover:bg-blue-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

