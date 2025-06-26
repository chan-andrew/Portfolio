import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export const metadata = {
  generator: "v0.dev",
}
