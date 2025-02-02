import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function MobileAppDevelopment() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Mobile App Development
      </motion.h1>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt="Mobile App Development"
          width={600}
          height={400}
          className="rounded-lg mb-6"
        />
        <p className="mb-4">
          Our Mobile App Development service delivers cutting-edge, user-friendly applications for iOS and Android
          platforms. We combine innovative design with robust functionality to create mobile solutions that engage users
          and drive business growth.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Our Expertise:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Native iOS development (Swift, Objective-C)</li>
          <li>Native Android development (Kotlin, Java)</li>
          <li>Cross-platform development (React Native, Flutter)</li>
          <li>Progressive Web Apps (PWAs)</li>
          <li>AR/VR mobile experiences</li>
          <li>IoT and wearable device integration</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Our Process:</h2>
        <ol className="list-decimal list-inside mb-4">
          <li>Requirements gathering and analysis</li>
          <li>UI/UX design and prototyping</li>
          <li>Agile development and iterative testing</li>
          <li>Quality assurance and performance optimization</li>
          <li>App store submission and launch support</li>
          <li>Ongoing maintenance and updates</li>
        </ol>
        <Link href="/" className="text-blue-400 hover:text-blue-300">
          ← Back to Home
        </Link>
      </motion.div>
    </div>
  )
}

