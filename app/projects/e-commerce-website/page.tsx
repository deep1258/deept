import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function ECommerceWebsite() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        E-commerce Website
      </motion.h1>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt="E-commerce Website"
          width={600}
          height={400}
          className="rounded-lg mb-6"
        />
        <p className="mb-4">
          This e-commerce website project showcases a fully functional online store with features such as product
          listings, shopping cart, secure checkout, and user accounts.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Key Features:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Responsive design for mobile and desktop</li>
          <li>Product search and filtering</li>
          <li>User authentication and profiles</li>
          <li>Secure payment integration</li>
          <li>Order tracking and history</li>
        </ul>
        <Link href="/" className="text-blue-400 hover:text-blue-300">
          ← Back to Home
        </Link>
      </motion.div>
    </div>
  )
}

