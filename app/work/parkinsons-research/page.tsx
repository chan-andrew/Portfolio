import Link from "next/link"

export default function ParkinsonsResearchPage() {
  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Back Navigation */}
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          ← Back to Work
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">Parkinson's Disease Research</h1>
          <h2 className="text-xl sm:text-2xl font-light text-gray-400">Hammer Neuromodulation Lab @ UPenn</h2>
        </div>

        {/* Project Description */}
        <div className="max-w-4xl">
          <div className="prose prose-lg prose-invert">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              As a Research Intern at the University of Pennsylvania's Hammer Neuromodulation Laboratory, I analyzed
              local field potential (LFP) recordings from DBS-implanted Parkinson's patients to identify
              stimulation-entrained gamma oscillations as candidate biomarkers for adaptive deep brain stimulation.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              This research focuses on developing more precise and personalized treatment approaches for Parkinson's
              disease through advanced neuromodulation techniques and biomarker identification.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-light text-white mb-4">Key Contributions</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Analyzed complex neural signal data from DBS-implanted patients</li>
                <li>• Identified gamma oscillation patterns as potential biomarkers</li>
                <li>• Contributed to adaptive deep brain stimulation research</li>
                <li>• Collaborated with interdisciplinary research team</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-light text-white mb-4">Research Impact</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                This research contributes to the advancement of personalized medicine in Parkinson's disease treatment.
                By identifying gamma oscillations as potential biomarkers, this work could enable more precise and
                adaptive deep brain stimulation protocols, potentially improving patient outcomes while reducing side
                effects.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                The findings have implications for developing closed-loop DBS systems that can automatically adjust
                stimulation parameters based on real-time neural feedback, representing a significant step toward truly
                personalized neuromodulation therapy for movement disorders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
