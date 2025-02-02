import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function SmartHomeIoTSystem() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Smart Home IoT System
      </motion.h1>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt="Smart Home IoT System"
          width={600}
          height={400}
          className="rounded-lg mb-6"
        />
        <p className="mb-4">
          Our Smart Home IoT System is a cutting-edge solution that transforms ordinary homes into intelligent,
          efficient, and secure living spaces. It integrates various smart devices and sensors to provide seamless
          automation and control over home functions.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Key Features:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Centralized control of lighting, heating, and security systems</li>
          <li>Voice-activated commands via integration with virtual assistants</li>
          <li>Energy consumption monitoring and optimization</li>
          <li>Automated routines based on user preferences and behaviors</li>
          <li>Remote access and control via mobile app</li>
          <li>AI-powered predictive maintenance for home appliances</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Technologies Used:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Raspberry Pi and Arduino for device control</li>
          <li>MQTT protocol for device communication</li>
          <li>Node.js for the backend server</li>
          <li>React Native for the mobile app</li>
          <li>TensorFlow for AI and machine learning capabilities</li>
          <li>Blockchain for secure data storage and device authentication</li>
        </ul>
        <Link href="/" className="text-blue-400 hover:text-blue-300">
          ← Back to Home
        </Link>
      </motion.div>
    </div>
  )
}

