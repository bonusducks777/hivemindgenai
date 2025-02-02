import "./globals.css"
import type { Metadata } from "next"

import { Source_Sans_3 } from "next/font/google"
import type React from "react" // Import React

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Including a range of weights
  display: "swap",
})

export const metadata: Metadata = {
  title: "GenAI Interface",
  description: "A generative AI interface built with Next.js and shadcn/ui",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sourceSans3.className}>{children}</body>
    </html>
  )
}

