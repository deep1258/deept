import "./globals.css"
import { Inter } from "next/font/google"
import ThreeDBackground from "./components/ThreeDBackground"
import CopyProtection from "./components/CopyProtection"
import SecurityFeature from "./components/SecurityFeature"
import ThemeToggle from "./components/ThemeToggle"
import { ThemeProvider } from "./contexts/ThemeContext"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Deep Biswas Portfolio",
  description: "A showcase of Deep Biswas's work and skills",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white dark:bg-[#0d0d2b] text-gray-900 dark:text-white relative min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <CopyProtection />
          <SecurityFeature />
          <ThreeDBackground />
          <ThemeToggle />
          <div className="relative z-10 flex-grow">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}

