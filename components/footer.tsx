import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-6">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-white font-light">Andrew Chan</span>
          </div>
          <div className="flex flex-col items-end space-y-1">
            <Link
              href="https://github.com/chan-andrew"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors underline"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/andrewchan2305"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors underline"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
