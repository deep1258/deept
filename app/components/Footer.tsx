"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <motion.h3
              className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Web Sync Zone Pvt Ltd
            </motion.h3>
            <motion.p
              className="text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Empowering businesses with cutting-edge web solutions.
            </motion.p>
          </div>
          <div className="col-span-1">
            <motion.div
              className="flex justify-start md:justify-end items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                © {currentYear} Web Sync Zone Pvt Ltd. All rights reserved.
              </p>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 flex justify-center items-center text-gray-400 dark:text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm">
            Made with <Heart className="inline-block w-4 h-4 text-red-500 mx-1" /> by Web Sync Zone
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

