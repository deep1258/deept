import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function WebDevelopment() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 p-8">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Web Development Services
      </motion.h1>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt="Web Development"
          width={600}
          height={400}
          className="rounded-lg mb-6"
        />
        <p className="mb-4">
          Our Web Development services offer cutting-edge solutions for businesses of all sizes. We create responsive,
          scalable, and high-performance websites and web applications tailored to your specific needs.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Our Expertise:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Front-end development (React, Vue, Angular)</li>
          <li>Back-end development (Node.js, Python, Ruby on Rails)</li>
          <li>Full-stack development</li>
          <li>E-commerce solutions</li>
          <li>Progressive Web Apps (PWAs)</li>
          <li>API development and integration</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Our Process:</h2>
        <ol className="list-decimal list-inside mb-4">
          <li>Requirements gathering and analysis</li>
          <li>Architecture planning and design</li>
          <li>Agile development with regular client updates</li>
          <li>Rigorous testing and quality assurance</li>
          <li>Deployment and performance optimization</li>
          <li>Ongoing support and maintenance</li>
        </ol>
        <Link href="/" className="text-blue-400 hover:text-blue-300 dark:text-blue-600 dark:hover:text-blue-700">
          ← Back to Home
        </Link>
      </motion.div>
    </div>
  )
}

