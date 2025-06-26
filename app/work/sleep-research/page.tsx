import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function SleepResearchPage() {
  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="px-8 max-w-none">
        {/* Back Navigation */}
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Work
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">Sleep Research</h1>
          <p className="text-xl sm:text-2xl text-gray-400 font-light">Neurology Department @ HUP</p>
        </div>

        {/* Project Description */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-light text-white mb-4">Project Overview</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              As a Clinical Researcher at the Hospital of the University of Pennsylvania, I collaborated with Dr. Colin
              Ellis and a team of researchers to investigate the effects of hospital conditions on patient sleep
              quality. This research recognizes sleep's vital role in patient recovery and aims to identify strategies
              to improve sleep in hospital environments.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-light text-white mb-4">Key Contributions</h2>
            <ul className="space-y-3 text-lg text-gray-300">
              <li className="flex items-start">
                <span className="text-white mr-3">•</span>
                <span>Analysis of hospital environmental factors affecting patient sleep patterns</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3">•</span>
                <span>Data collection and statistical analysis of sleep quality metrics</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3">•</span>
                <span>Identification of correlations between environmental conditions and recovery outcomes</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3">•</span>
                <span>Presentation of preliminary findings to clinical stakeholders</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-light text-white mb-4">Research Impact</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              This research has direct implications for improving patient care in hospital settings. By understanding
              how environmental factors like noise, lighting, and room conditions affect sleep quality, hospitals can
              implement evidence-based changes to promote better patient recovery. The findings contribute to the
              growing body of research on sleep medicine and its role in healthcare outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
