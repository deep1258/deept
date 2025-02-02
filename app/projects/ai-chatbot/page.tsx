import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function AIChatbot() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        AI Chatbot
      </motion.h1>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt="AI Chatbot"
          width={600}
          height={400}
          className="rounded-lg mb-6"
        />
        <p className="mb-4">
          Our AI Chatbot project showcases an advanced conversational AI system capable of understanding and responding
          to user queries in natural language. This chatbot can be integrated into various platforms to provide
          automated customer support, information retrieval, and interactive experiences.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Key Features:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Natural Language Processing (NLP) for understanding user intent</li>
          <li>Machine Learning algorithms for continuous improvement</li>
          <li>Multi-language support</li>
          <li>Integration with external APIs for real-time data retrieval</li>
          <li>Customizable responses and personality</li>
          <li>Analytics dashboard for monitoring chatbot performance</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Technologies Used:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Python with TensorFlow and PyTorch for AI model development</li>
          <li>Node.js for backend services</li>
          <li>React for the web-based chat interface</li>
          <li>MongoDB for storing conversation history and user data</li>
          <li>Docker for containerization and easy deployment</li>
        </ul>
        <Link href="/" className="text-blue-400 hover:text-blue-300">
          ← Back to Home
        </Link>
      </motion.div>
    </div>
  )
}

