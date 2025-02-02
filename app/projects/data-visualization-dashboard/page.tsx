import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function DataVisualizationDashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Data Visualization Dashboard
      </motion.h1>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt="Data Visualization Dashboard"
          width={600}
          height={400}
          className="rounded-lg mb-6"
        />
        <p className="mb-4">
          Our Data Visualization Dashboard is a powerful tool for transforming complex data sets into intuitive,
          interactive visual representations. It enables businesses to gain valuable insights and make data-driven
          decisions with ease.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Key Features:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Real-time data processing and visualization</li>
          <li>Customizable charts, graphs, and maps</li>
          <li>Interactive filters and drill-down capabilities</li>
          <li>Automated report generation</li>
          <li>Data import from various sources (databases, APIs, CSV files)</li>
          <li>Collaborative features for team analysis</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Technologies Used:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>React.js for the frontend interface</li>
          <li>D3.js and Chart.js for data visualization</li>
          <li>Node.js and Express for the backend</li>
          <li>PostgreSQL for data storage</li>
          <li>WebSocket for real-time updates</li>
          <li>AWS for cloud hosting and scalability</li>
        </ul>
        <Link href="/" className="text-blue-400 hover:text-blue-300">
          ← Back to Home
        </Link>
      </motion.div>
    </div>
  )
}

