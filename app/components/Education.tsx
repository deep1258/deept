"use client"

import { motion } from "framer-motion"

const educationPath = [
  { id: 1, year: "2015-2019", degree: "Bachelor of Science in Computer Science", school: "University A" },
  { id: 2, year: "2019-2021", degree: "Master of Science in Artificial Intelligence", school: "University B" },
  // Add more education steps as needed
]

export default function Education() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Education Journey</h2>
      <div className="max-w-3xl mx-auto">
        {educationPath.map((step, index) => (
          <motion.div
            key={step.id}
            className="flex items-center mb-8"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="w-1/2 text-right pr-8">
              <h3 className="text-xl font-semibold">{step.year}</h3>
            </div>
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="w-1/2 pl-8">
              <h3 className="text-xl font-semibold">{step.degree}</h3>
              <p className="text-gray-600">{step.school}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

