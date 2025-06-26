"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="w-full py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Link href="/" className="font-light text-white hover:text-gray-300 transition-colors text-xl">
            Andrew Chan
          </Link>

          <nav className="flex flex-wrap gap-6 sm:gap-8">
            <Link
              href="/"
              className={`text-base sm:text-lg font-light transition-colors hover:text-gray-300 ${
                pathname === "/" ? "text-white" : "text-gray-400"
              }`}
            >
              Work
            </Link>
            <Link
              href="/fun"
              className={`text-base sm:text-lg font-light transition-colors hover:text-gray-300 ${
                pathname === "/fun" ? "text-white" : "text-gray-400"
              }`}
            >
              Fun
            </Link>
            <Link
              href="/me"
              className={`text-base sm:text-lg font-light transition-colors hover:text-gray-300 ${
                pathname === "/me" ? "text-white" : "text-gray-400"
              }`}
            >
              Me
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base sm:text-lg font-light transition-colors hover:text-gray-300 text-gray-400"
            >
              Resume
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
