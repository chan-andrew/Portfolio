import type React from "react"
import { Inter } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
  generator: "v0.dev",
}
