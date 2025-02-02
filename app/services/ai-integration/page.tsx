import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function AIIntegration() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        AI Integration Services
      </motion.h1>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt="AI Integration"
          width={600}
          height={400}
          className="rounded-lg mb-6"
        />
        <p className="mb-4">
          Our AI Integration services help businesses leverage the power of artificial intelligence to enhance their
          products, services, and operations.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Services Offered:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Natural Language Processing (NLP) integration</li>
          <li>Machine Learning model development and deployment</li>
          <li>Computer Vision solutions</li>
          <li>Predictive analytics implementation</li>
          <li>AI-powered chatbots and virtual assistants</li>
        </ul>
        <Link href="/" className="text-blue-400 hover:text-blue-300">
          ← Back to Home
        </Link>
      </motion.div>
    </div>
  )
}

