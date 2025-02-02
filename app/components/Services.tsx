"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom websites and web applications",
    image: "/placeholder.svg?height=300&width=400",
    link: "/services/web-development",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "iOS and Android applications",
    image: "/placeholder.svg?height=300&width=400",
    link: "/services/mobile-app-development",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Intuitive and attractive user interfaces",
    image: "/placeholder.svg?height=300&width=400",
    link: "/services/ui-ux-design",
  },
  {
    id: 4,
    title: "AI Integration",
    description: "Implement AI solutions in your projects",
    image: "/placeholder.svg?height=300&width=400",
    link: "/services/ai-integration",
  },
]

export default function Services() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Services
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              <Link href={service.link}>
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
      </div>
    </section>
  )
}

