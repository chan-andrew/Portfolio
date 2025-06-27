import type React from "react"
import { Inter } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Suspense } from "react"

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Improve font loading performance
  preload: true,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/images/andrew-chan-photo.jpg" as="image" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex-1">{children}</main>
          <Footer />
        </Suspense>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}

export const metadata = {
  title: "Andrew Chan - Portfolio",
  description: "Student at University of Pittsburgh building at the intersection of engineering and medicine",
  generator: "v0.dev",
  // Performance hints
  viewport: "width=device-width, initial-scale=1",
}
