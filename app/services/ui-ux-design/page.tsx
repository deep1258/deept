import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function UIUXDesign() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        UI/UX Design
      </motion.h1>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt="UI/UX Design"
          width={600}
          height={400}
          className="rounded-lg mb-6"
        />
        <p className="mb-4">
          Our UI/UX Design service focuses on creating intuitive, visually appealing, and user-centered designs for web
          and mobile applications. We blend aesthetics with functionality to deliver exceptional user experiences that
          drive engagement and satisfaction.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Our Approach:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>User research and persona development</li>
          <li>Information architecture and wireframing</li>
          <li>Interactive prototyping</li>
          <li>Visual design and branding integration</li>
          <li>Usability testing and iteration</li>
          <li>Accessibility compliance</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Tools We Use:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Figma for collaborative design</li>
          <li>Adobe Creative Suite for visual assets</li>
          <li>InVision for interactive prototypes</li>
          <li>Sketch for UI design</li>
          <li>Zeplin for design handoff</li>
          <li>UserTesting for remote usability studies</li>
        </ul>
        <Link href="/" className="text-blue-400 hover:text-blue-300">
          ← Back to Home
        </Link>
      </motion.div>
    </div>
  )
}

