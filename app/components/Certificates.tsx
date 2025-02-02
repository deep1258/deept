"use client"

import { motion } from "framer-motion"

const certificates = [
  { id: 1, title: "Web Development Certification", issuer: "Udacity" },
  { id: 2, title: "Machine Learning Specialization", issuer: "Coursera" },
  { id: 3, title: "React Native Nanodegree", issuer: "Udacity" },
  // Add more certificates as needed
]

export default function Certificates() {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Certificates & Awards</h2>
      <div className="overflow-hidden">
        <motion.div
          className="flex space-x-8"
          animate={{ x: [0, -1920, 0] }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              className="bg-white p-6 rounded-lg shadow-lg w-80 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-600">{cert.issuer}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

