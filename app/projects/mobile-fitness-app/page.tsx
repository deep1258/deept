import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function MobileFitnessApp() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Mobile Fitness App
      </motion.h1>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt="Mobile Fitness App"
          width={600}
          height={400}
          className="rounded-lg mb-6"
        />
        <p className="mb-4">
          Our Mobile Fitness App is a comprehensive solution for health and wellness enthusiasts. It provides
          personalized workout plans, nutrition tracking, and progress monitoring to help users achieve their fitness
          goals.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Key Features:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Customized workout plans based on user goals and fitness level</li>
          <li>Real-time exercise tracking with motion sensors</li>
          <li>Nutrition logger and meal planner</li>
          <li>Progress tracking with detailed analytics and charts</li>
          <li>Social features for connecting with friends and joining challenges</li>
          <li>Integration with wearable devices for comprehensive health monitoring</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Technologies Used:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>React Native for cross-platform mobile development</li>
          <li>Redux for state management</li>
          <li>Node.js and Express for backend services</li>
          <li>MongoDB for data storage</li>
          <li>Machine Learning algorithms for personalized recommendations</li>
          <li>Firebase for real-time features and push notifications</li>
        </ul>
        <Link href="/" className="text-blue-400 hover:text-blue-300">
          ← Back to Home
        </Link>
      </motion.div>
    </div>
  )
}

