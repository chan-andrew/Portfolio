import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function VoyaPage() {
  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Back Navigation */}
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Work
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">Voya</h1>
          <h2 className="text-xl sm:text-2xl font-light text-gray-400">AI Travel Itinerary Generator</h2>
        </div>

        {/* Project Description */}
        <div className="max-w-4xl">
          <div className="prose prose-lg prose-invert">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Currently building an AI itinerary generator helping people plan their trips.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-light text-white mb-4">Features</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• TikTok integration</li>
                <li>• Tinder style decision making</li>
                <li>• Flight and hotel searching and booking</li>
                <li>• Interactive map</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
